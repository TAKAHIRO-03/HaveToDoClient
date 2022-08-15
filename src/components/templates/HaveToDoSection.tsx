import {
  DropResult,
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
} from "@hello-pangea/dnd";
import React, { useState } from "react";
import { Card } from "../parts/Card";
import "./css/HaveToDoSection.css";
import { v4 as uuidv4 } from "uuid";

type task = {
  id: string;
  title: string;
};

type section = {
  id: string;
  title: string;
  havetodos: task[];
};

export const HaveToDoSection = () => {
  const initialTasks: section[] = [
    {
      id: uuidv4(),
      title: "📝今日やること",
      havetodos: [
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
      havetodos: [
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

  const [havetodos, setTasks] = useState(initialTasks);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    /* not same column */
    if (
      destination?.droppableId !== null ||
      destination?.droppableId !== undefined
    ) {
      if (source.droppableId !== destination?.droppableId) {
        // find droppableId source and dest
        const sourceColIndex: number = havetodos.findIndex(
          (e) => e.id === source.droppableId
        );
        const destColIndex: number = havetodos.findIndex(
          (e) => e.id === destination!.droppableId
        );

        // find section
        const sourceCol: section = havetodos[sourceColIndex];
        const destCol: section = havetodos[destColIndex];

        // copied havetodos
        const sourceTasks: task[] = [...sourceCol.havetodos];
        const destTasks: task[] = [...destCol.havetodos];

        // delete task
        const [removed]: task[] = sourceTasks.splice(source.index, 1);

        // add task
        if (destination?.index !== null || destination?.index !== undefined) {
          destTasks.splice(destination!.index, 0, removed);
        }
        havetodos[sourceColIndex].havetodos = sourceTasks;
        havetodos[destColIndex].havetodos = destTasks;
        setTasks(havetodos);

        return;
      }
    }

    /* same column */
    const sourceColIndex: number = havetodos.findIndex(
      (e) => e.id === source.droppableId
    );
    const sourceCol: section = havetodos[sourceColIndex];
    // copied havetodos
    const sourceTasks: task[] = [...sourceCol.havetodos];
    // delete task
    const [removed]: task[] = sourceTasks.splice(source.index, 1);
    // add task
    if (destination?.index !== null || destination?.index !== undefined) {
      sourceTasks.splice(destination!.index, 0, removed);
    }
    havetodos[sourceColIndex].havetodos = sourceTasks;
    setTasks(havetodos);
  };

  const handleUpdateTask = () => console.log("yahoo");

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="havetodos">
        {havetodos.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided: DroppableProvided) => (
              <div
                className="havetodos-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="havetodos-section-title">{section.title}</div>
                <div className="havetodos-section-content">
                  {section.havetodos.map((task, index) => (
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
                          <Card>{task.title}</Card>
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

export default HaveToDoSection;
