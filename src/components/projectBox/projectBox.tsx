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
    <div className="project-box border25" onClick={onClick}>
      <div className="flex-center project-img border-top25">
        <img className="border-top25" src={project.preview} alt="project" />
      </div>
      <div className="blog-info black-color-background border-bottom25">
        <h4 className="font15 weight800">{project.title}</h4>
        <p className="font13 weight500 padding10">
          {project.description}
        </p>
      </div>
    </div>
  )
}