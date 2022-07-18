import React from "react";

import "./blogBox.scss"

type blogBoxProps = {
  article: {
    image: string,
    title: string,
    description: string,
    date: string
  };
}

export default function blogBox({article}: blogBoxProps) {
  return (
    <div className="blog__box">
    <div className="blog__image">
      <img src={article.image} alt="blog story" />
      <div className="blog__hover flex-center">
        <h4 className="font30 weight800">READ MORE</h4>
      </div>
    </div>
    <div className="blog__info">
      <h4 className="font15 weight800">{article.title}</h4>
      <p className="font12 weight500 padding10">{article.description}</p>
      <p className="font12 weight500">{article.date}</p>
    </div>
  </div>
  )   
}