import { useContext, useEffect, useState } from "react";
import "./css/TaskSection.css";
import {
  Task,
  TaskGetRequest,
  TaskGetResponse,
  TaskRepository,
} from "../../api/rest/TaskRepository";
import { DiConteinerContext } from "../../App";
import { resolveDiConteinerContext } from "../../di/DependencyRegistrar";
import { BaseResponse } from "../../api/rest/base/BaseResponse";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TaskSection from "./TaskSection";

export type Section = {
  id: "todayTasks" | "afterTommorowTask";
  title: string;
  tasks: Task[];
};

/**
 * "TaskSectionParent" passes initial data to the child.
 * Child is "TaskSection"
 */
export const TaskSectionParent = () => {
  const [sections, setSections] = useState<Section[]>();

  // fetch initial planned task from server
  const navigate = useNavigate();
  const taskRepo: TaskRepository = resolveDiConteinerContext(
    useContext(DiConteinerContext)
  ).resolve("taskRepo");
  const fetchTasks = async (req: TaskGetRequest) => {
    const res = await taskRepo.get(req);
    if (axios.isAxiosError(res)) {
      if (
        (res as BaseResponse).status !== 200 &&
        (res as BaseResponse).status !== 204
      ) {
        navigate("/error");
        return undefined;
      }
    }
    return res;
  };

  // define useEffect to fetch initial data
  useEffect(() => {
    const today = new Date();

    /* todayTasks  */
    const reqTodayTasks = new TaskGetRequest(
      0,
      10,
      new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate(),
          0,
          0,
          0
        )
      ),
      new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate(),
          23,
          59,
          59
        )
      )
    );
    /* afterTommorowTask */
    const reqAfterTommorowTask = new TaskGetRequest(
      0,
      10,
      undefined,
      new Date(
        Date.UTC(
          today.getUTCFullYear(),
          today.getUTCMonth(),
          today.getUTCDate() + 1,
          0,
          0,
          0
        )
      )
    );

    const copySections: Section[] = [];
    fetchTasks(reqTodayTasks).then((x) => {
      const data: Task[] = (x as TaskGetResponse).data;
      copySections.push({
        id: "todayTasks",
        title: "📝今日やること",
        tasks: data,
      });
      fetchTasks(reqAfterTommorowTask)
        .then((x) => {
          const data: Task[] = (x as TaskGetResponse).data;
          copySections.push({
            id: "afterTommorowTask",
            title: "🚀今後やること",
            tasks: data,
          });
        })
        .finally(() => setSections(copySections));
    });
  }, []);

  return <>{sections && <TaskSection initialSections={sections} />}</>;
};

export default TaskSectionParent;
