import React from "react";

import "./imageBox.scss";

type imageBoxProps = {
  image: string;
  title: string;
  subTitle: string;
}

export default function imageBox({image, title, subTitle}: imageBoxProps) {
  return (
    <div className="team__box flex-center">
      <img src={image} />
      <div className="team__box-info">
        <p className="font15 weight800">{title}</p>
        <p className="font12 weight500">{subTitle}</p>
      </div>
    </div>
  )
}