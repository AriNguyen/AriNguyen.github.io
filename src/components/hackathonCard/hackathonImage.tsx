import React from "react";

import "./hackathonImage.scss";

type imageBoxProps = {
  image: string;
  title: string;
  subTitle: string;
}

export default function imageBox({image, title, subTitle}: imageBoxProps) {
  return (
    <div className="image-box flex-cente ">
      <img className="border-left25" src={image} />
      {/* <div className="image-box-info">
        <p className="font15 weight800">{title}</p>
        <p className="font12 weight500">{subTitle}</p>
      </div> */}
    </div>
  )
}