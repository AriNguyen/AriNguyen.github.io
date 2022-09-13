import React from "react";

import './projectBox.scss';

type projectBoxProps = {
  project: {
    id: string,
    preview: string;
    title: string;
    description: string,
    skills: Array<string>,
    tag: Array<string>;
    path: string,
    imgs: Array<string>,
  }
  onClick: React.MouseEventHandler<HTMLDivElement>
}
export default function projectBox({ project, onClick }: projectBoxProps) {
  return (
    <div className="project-box border5" onClick={onClick}>
      <div className="flex-center project-img border-top5">
        <img className="border-top5" src={project.preview} alt="project" />
      </div>
      <div className="blog-info black-color-background border-bottom5">
        <h4 className="font15 weight800">{project.title}</h4>
        <p className="font13 weight500 padding10">
          {project.description}
        </p>
        {/* <p className="font13 weight500 padding10">
          <b>Skills:</b> {project.skills.join(", ")}
        </p> */}
      </div>
    </div>
  )
}