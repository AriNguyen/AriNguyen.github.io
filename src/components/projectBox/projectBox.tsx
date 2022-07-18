import React from "react";

import './projectBox.scss';

type projectBoxProps = {
  preview: string;
  title: string;
  tag: string[];
}
export default function projectBox({ preview, title, tag }: projectBoxProps) {
  return (
    <div className="project__box">
      <img src={preview} alt="project" />
      <div className="project__hover-info flex-center">
        <div className="text-center">
          <p className="font30 weight800">{title}</p>
          {tag.map(t => <p className="font12 weight500">{t}</p>)}
          {/* <p className="font12 weight500">{tag.forEach((t) => t)}</p> */}
        </div>
      </div>
    </div>
  )
}