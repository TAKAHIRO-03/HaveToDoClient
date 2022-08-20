import React from "react";

export type CardProps = {
  sectionId: string;
  taskId: string;
  children: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className="card" section-id={props.sectionId} task-id={props.taskId}>
      {props.children}
    </div>
  );
};
