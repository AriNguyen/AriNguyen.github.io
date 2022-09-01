import React from "react";

import './projectBox.scss';

type projectBoxProps = {
  preview: string;
  title: string;
  tag: string[];
  onClick: React.MouseEventHandler<HTMLDivElement>
}
export default function projectBox({ preview, title, tag, onClick}: projectBoxProps) {
  return (
    <div className="project__box" onClick={onClick}>
      <div className="flex-center project_img">
        <img src={preview} alt="project" />
      </div>
      <div className="blog__info">
      <h4 className="font15 weight800">{title}</h4>
      <p className="font12 weight500">
        {tag.join(", ")}
      </p>
      {/* <p className="font12 weight500 padding10">{article.description}</p> */}
      {/* <p className="font12 weight500">{article.date}</> */}
    </div>
    </div>
  )
}

{/* <div className="project__hover-info flex-center">
  <div className="text-center">
    <p className="font30 weight800">{title}</p>
    {tag.map(t => <p className="font12 weight500">{t}</p>)}
  </div>
</div> */}