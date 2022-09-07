import React from "react";

import "./info-box.scss";

type infoBoxProps = {
  title: string;
  subTitle: string;
  title2: string;
  subTitle2: string;
  info: string;
  boxFooter: string;
}

export default function infoBox({title, subTitle, title2, subTitle2, info, boxFooter}: infoBoxProps) {
  return (
    <div className="info__box flex-center">
      <div>
        {title && <h4 className="font24 weight800">{title}</h4>}
        {subTitle && <h3 className="font15 weight500">{subTitle}</h3>}
        {title2 && <h4 className="font24 weight800">{title2}</h4>}
        {subTitle2 && <h3 className="font15 weight500">{subTitle2}</h3>}
        {info && <p className="font15 weight500">{info}</p>}
        {boxFooter && <p className="font15 weight500">{boxFooter}</p>}
      </div>
    </div>
  ) 
}