import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import ReactMarkdown from 'react-markdown'
import Swiper from "react-id-swiper";
import { Row } from "react-flexbox-grid";


import "./projectModal.scss";
import style from "./markdown.module.scss";

import "swiper/css/swiper.css";
import { FcNext, FcPrevious } from 'react-icons/fc';

type projectModalProps = {
  project: {
    id: string,
    preview: string,
    title: string,
    description: string,
    tag: Array<string>,
    path: string,
    imgs: Array<string>,
  }
  closeModal: React.MouseEventHandler<HTMLDivElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
}

export default function ProjectModal({ project, closeModal, onKeyDown }: projectModalProps) {
  const [md, setMD] = useState("");
  const apiAddress: string | undefined = project.path;

  if (!apiAddress) throw 'API address not defined'

  fetch(apiAddress)
    .then(response => {
      return response.text()
    })
    .then(text => {
      setMD(text);
    })

  const params = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    renderPrevButton: () => <FcPrevious className="swiper-button-prev swiper-button-big"></FcPrevious>,
    renderNextButton: () => <FcNext className="swiper-button-next swiper-button-big"></FcNext>,
  };

  return (
    <div className="blogModal">
      <div role="button" aria-label="Close" tabIndex={0} className="backdrop" onClick={closeModal} onKeyDown={onKeyDown}></div>
      <Fade bottom duration={500}>
        <div>
          <div className={style.reactMarkDown}>
            <h1>
              {project.title}
            </h1>
            <p>
              {project.description}
            </p>

            <Row className="img-showcase" >
              <Swiper {...params}>
                {project.imgs && project.imgs.map(img => (
                    <img src={img}></img>
                ))}
              </Swiper>
            </Row>

            <Row>
              <div>
              <ReactMarkdown>
                {md}
              </ReactMarkdown>
                </div>
              
            </Row>

          </div>
        </div>
      </Fade>
    </div>
  )
}