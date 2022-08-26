import { useContext, useEffect, useState } from "react";
import "./css/PlannedTaskSection.css";
import {
  PlannedTask,
  PlannedTaskGetRequest,
  PlannedTaskGetResponse,
  PlannedTaskRepository,
} from "../../api/rest/PlannedTaskRepository";
import { DiConteinerContext } from "../../App";
import { resolveDiConteinerContext } from "../../di/DependencyRegistrar";
import { BaseResponse } from "../../api/rest/base/BaseResponse";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlannedTaskSection from "./PlannedTaskSection";

export type Section = {
  id: "todayTasks" | "afterTommorowTask";
  title: string;
  plannedTasks: PlannedTask[];
};

/**
 * "PlannedTaskSectionParent" passes initial data to the child.
 * Child is "PlannedTaskSection"
 */
export const PlannedTaskSectionParent = () => {
  const [sections, setSections] = useState<Section[]>();

  // fetch initial planned task from server
  const navigate = useNavigate();
  const plannedTaskRepo: PlannedTaskRepository = resolveDiConteinerContext(
    useContext(DiConteinerContext)
  ).resolve("plannedTaskRepo");
  const fetchPlannedTasks = async (req: PlannedTaskGetRequest) => {
    const res = await plannedTaskRepo.get(req);
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
    const reqTodayTasks = new PlannedTaskGetRequest(
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
    const reqAfterTommorowTask = new PlannedTaskGetRequest(
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
    fetchPlannedTasks(reqTodayTasks).then((x) => {
      const data: PlannedTask[] = (x as PlannedTaskGetResponse).data;
      copySections.push({
        id: "todayTasks",
        title: "📝今日やること",
        plannedTasks: data,
      });
      fetchPlannedTasks(reqAfterTommorowTask)
        .then((x) => {
          const data: PlannedTask[] = (x as PlannedTaskGetResponse).data;
          copySections.push({
            id: "afterTommorowTask",
            title: "🚀今後やること",
            plannedTasks: data,
          });
        })
        .finally(() => setSections(copySections));
    });
  }, []);

  return <>{sections && <PlannedTaskSection initialSections={sections} />}</>;
};

export default PlannedTaskSectionParent;
