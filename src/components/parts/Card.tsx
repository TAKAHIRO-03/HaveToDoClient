import React from "react";

export type CardProps = {
  children: string;
};

export const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};
