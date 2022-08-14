import {
  DropResult,
  DragDropContext,
  Droppable,
  DroppableProvided,
  Draggable,
} from "@hello-pangea/dnd";
import React, { useState } from "react";
import { Card } from "../parts/Card";
import "./css/HabitsSection.css";
import { v4 as uuidv4 } from "uuid";

type habit = {
  id: string;
  title: string;
};

type section = {
  id: string;
  title: string;
  habits: habit[];
};

export const HabitsSection = () => {
  const initialHabits: section[] = [
    {
      id: uuidv4(),
      title: "📝今日やること",
      habits: [
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
      habits: [
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

  const [habits, setHabits] = useState(initialHabits);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    /* not same column */
    if (
      destination?.droppableId !== null ||
      destination?.droppableId !== undefined
    ) {
      if (source.droppableId !== destination?.droppableId) {
        // find droppableId source and dest
        const sourceColIndex: number = habits.findIndex(
          (e) => e.id === source.droppableId
        );
        const destColIndex: number = habits.findIndex(
          (e) => e.id === destination!.droppableId
        );

        // find section
        const sourceCol: section = habits[sourceColIndex];
        const destCol: section = habits[destColIndex];

        // copied habits
        const sourceTasks: habit[] = [...sourceCol.habits];
        const destTasks: habit[] = [...destCol.habits];

        // delete habit
        const [removed]: habit[] = sourceTasks.splice(source.index, 1);

        // add habit
        if (destination?.index !== null || destination?.index !== undefined) {
          destTasks.splice(destination!.index, 0, removed);
        }
        habits[sourceColIndex].habits = sourceTasks;
        habits[destColIndex].habits = destTasks;
        setHabits(habits);

        return;
      }
    }

    /* same column */
    const sourceColIndex: number = habits.findIndex(
      (e) => e.id === source.droppableId
    );
    const sourceCol: section = habits[sourceColIndex];
    // copied habits
    const sourceTasks: habit[] = [...sourceCol.habits];
    // delete habit
    const [removed]: habit[] = sourceTasks.splice(source.index, 1);
    // add habit
    if (destination?.index !== null || destination?.index !== undefined) {
      sourceTasks.splice(destination!.index, 0, removed);
    }
    habits[sourceColIndex].habits = sourceTasks;
    setHabits(habits);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="habits">
        {habits.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided: DroppableProvided) => (
              <div
                className="habits-section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="habits-section-title">{section.title}</div>
                <div className="habits-section-content">
                  {section.habits.map((habit, index) => (
                    <Draggable
                      draggableId={habit.id}
                      index={index}
                      key={habit.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.3" : "1",
                          }}
                        >
                          <Card>{habit.title}</Card>
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

export default HabitsSection;
