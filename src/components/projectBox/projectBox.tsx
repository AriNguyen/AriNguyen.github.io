import React from "react";

import './projectBox.scss';

type projectBoxProps = {
  project: {
    id: string,
    preview: string;
    title: string;
    description: string,
    tag: Array<string>;
    path: string,
    imgs: Array<string>,
  }
  onClick: React.MouseEventHandler<HTMLDivElement>
}
export default function projectBox({ project, onClick }: projectBoxProps) {
  return (
    <div className="project__box" onClick={onClick}>
      <div className="flex-center project_img">
        <img src={project.preview} alt="project" />
      </div>
      <div className="blog__info">
        <h4 className="font15 weight800">{project.title}</h4>
        <p className="font13 weight500 padding10">
          {project.description}
        </p>
      </div>
    </div>
  )
}