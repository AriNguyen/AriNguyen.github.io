import React from "react";

import "./infoBox.scss";

type infoBoxProps = {
  title: string;
  subTitle: string;
  info: string;
  boxFooter: string;
}

export default function InfoBox({title, subTitle, info, boxFooter}: infoBoxProps) {
  return (
    <div className="info__box flex-center">
      <div>
        {title && <h4 className="font24 weight800">{title}</h4>}
        {subTitle && <h3 className="font15 weight500">{subTitle}</h3>}
        {info && <p className="font15 weight500">{info}</p>}
        {boxFooter && <p className="font15 weight500">{boxFooter}</p>}
      </div>
    </div>
  ) 
}