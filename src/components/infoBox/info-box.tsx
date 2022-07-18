import React from "react";

import "./info-box.scss";

type infoBoxProps = {
  title: string;
  info: string;
  boxFooter: string;
}

export default function infoBox({title, info, boxFooter}: infoBoxProps) {
  return (
    <div className="info__box flex-center">
      <div>
        <h4 className="font20 weight800">{title}</h4>
        <p className="font15 weight500">{info}</p>
        <p className="font15 weight500">{boxFooter}</p>
      </div>
    </div>
  ) 
}