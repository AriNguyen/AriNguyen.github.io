import React from "react";

import "./imageBox.scss";

type imageBoxProps = {
  image: string;
  title: string;
  subTitle: string;
}

export default function imageBox({image, title, subTitle}: imageBoxProps) {
  return (
    <div className="image-box flex-center">
      <img className="" src={image} />
      {/* <div className="image-box-info">
        <p className="font15 weight800">{title}</p>
        <p className="font12 weight500">{subTitle}</p>
      </div> */}
    </div>
  )
}