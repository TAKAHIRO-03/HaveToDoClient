import {
  DropResult,
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
} from "@hello-pangea/dnd";
import React, { useState } from "react";
import { Card } from "../parts/Card";
import "./css/PlannedTaskSection.css";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
};

type Section = {
  id: string;
  title: string;
  plannedTasks: Task[];
};

export const PlannedTaskSection = () => {
  const initialTasks: Section[] = [
    {
      id: uuidv4(),
      title: "📝今日やること",
      plannedTasks: [
        {
          id: uuidv4(),
          title: "Reactの勉強",
        },
        {
          id: uuidv4(),
          title: "Youtubeで勉強",
        },
        {
          id: uuidv4(),
          title: "散歩",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "🚀今後やること",
      plannedTasks: [
        {
          id: uuidv4(),
          title: "コーディング",
        },
        {
          id: uuidv4(),
          title: "転職活動",
        },
      ],
    },
  ];

  const [plannedTasks, setTasks] = useState(initialTasks);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    /* not same column */
    if (
      destination?.droppableId !== null ||
      destination?.droppableId !== undefined
    ) {
      if (source.droppableId !== destination?.droppableId) {
        // find droppableId source and dest
        const sourceColIndex: number = plannedTasks.findIndex(
          (e) => e.id === source.droppableId
        );
        const destColIndex: number = plannedTasks.findIndex(
          (e) => e.id === destination!.droppableId
        );

        // find section
        const sourceCol = plannedTasks[sourceColIndex];
        const destCol = plannedTasks[destColIndex];

        // copied plannedTasks
        const sourceTasks = [...sourceCol.plannedTasks];
        const destTasks = [...destCol.plannedTasks];

        // delete task
        const [removed] = sourceTasks.splice(source.index, 1);

        // add task
        if (destination?.index !== null || destination?.index !== undefined) {
          destTasks.splice(destination!.index, 0, removed);
        }
        plannedTasks[sourceColIndex].plannedTasks = sourceTasks;
        plannedTasks[destColIndex].plannedTasks = destTasks;
        setTasks(plannedTasks);

        return;
      }
    }

    /* same column */
    const sourceColIndex: number = plannedTasks.findIndex(
      (e) => e.id === source.droppableId
    );
    const sourceCol = plannedTasks[sourceColIndex];
    // copied plannedTasks
    const sourceTasks = [...sourceCol.plannedTasks];
    // delete task
    const [removed] = sourceTasks.splice(source.index, 1);
    // add task
    if (destination?.index !== null || destination?.index !== undefined) {
      sourceTasks.splice(destination!.index, 0, removed);
    }
    plannedTasks[sourceColIndex].plannedTasks = sourceTasks;
    setTasks(plannedTasks);
  };

  const handleUpdateTask = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(
      (event.target as HTMLDivElement).attributes.getNamedItem("section-id")
        ?.value
    );
    console.log(
      (event.target as HTMLDivElement).attributes.getNamedItem("task-id")?.value
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="planned-task">
        {plannedTasks.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided: DroppableProvided) => (
              <div
                className="planned-task-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="planned-task-section-title">{section.title}</div>
                <div className="planned-task-section-content">
                  {section.plannedTasks.map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      index={index}
                      key={task.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          onClick={handleUpdateTask}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.3" : "1",
                          }}
                        >
                          <Card sectionId={section.id} taskId={task.id}>
                            {task.title}
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </main>
    </DragDropContext>
  );
};

export default PlannedTaskSection;
