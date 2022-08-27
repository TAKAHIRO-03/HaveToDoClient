import {
  DropResult,
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
} from "@hello-pangea/dnd";
import React, { useState } from "react";
import { Card } from "../parts/Card";
import "./css/TaskSection.css";
import { Section } from "./TaskSectionParent";

type TaskSectionProps = {
  initialSections: Section[];
};

export const TaskSection = (props: TaskSectionProps) => {
  const initialSections = props.initialSections;

  // define useState
  const [sections, setSections] = useState(initialSections);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    /* not same column */
    if (
      destination?.droppableId !== null ||
      destination?.droppableId !== undefined
    ) {
      if (source.droppableId !== destination?.droppableId) {
        // find droppableId source and dest
        const sourceColIndex: number = sections.findIndex(
          (e) => e.id === source.droppableId
        );
        const destColIndex: number = sections.findIndex(
          (e) => e.id === destination!.droppableId
        );

        // find section
        const sourceCol = sections[sourceColIndex];
        const destCol = sections[destColIndex];

        // copied section
        const sourceTasks = [...sourceCol.tasks];
        const destTasks = [...destCol.tasks];

        // delete task
        const [removed] = sourceTasks.splice(source.index, 1);

        // add task
        if (destination?.index !== null || destination?.index !== undefined) {
          destTasks.splice(destination!.index, 0, removed);
        }
        sections[sourceColIndex].tasks = sourceTasks;
        sections[destColIndex].tasks = destTasks;
        setSections(sections);

        return;
      }
    }

    /* same column */
    const sourceColIndex: number = sections.findIndex(
      (e) => e.id === source.droppableId
    );
    const sourceCol = sections[sourceColIndex];
    // copied tasks
    const sourceTasks = [...sourceCol.tasks];
    // delete task
    const [removed] = sourceTasks.splice(source.index, 1);
    // add task
    if (destination?.index !== null || destination?.index !== undefined) {
      sourceTasks.splice(destination!.index, 0, removed);
    }
    sections[sourceColIndex].tasks = sourceTasks;
    setSections(sections);
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
        {sections.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided: DroppableProvided) => (
              <div
                className="planned-task-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="planned-task-section-title">
                  {section.title}
                </div>
                <div className="planned-task-section-content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      draggableId={String(task.id)}
                      index={index}
                      key={String(task.id)}
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

export default TaskSection;
