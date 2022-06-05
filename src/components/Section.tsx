import React from "react";

export default function Section(arg: { title: string, subtitle: string, dark: boolean, id: string }) {
  return (
    <div className={"section" + (arg.dark ? " section-dark" : "")}>
      <div className="section-content" id={arg.id}>
        <h1>{arg.title}</h1>
        <p>{arg.subtitle}</p>
      </div>
    </div>
  );
}
