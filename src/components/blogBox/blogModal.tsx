import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import ReactMarkdown from 'react-markdown'

import "./blogModal.scss";
import style from "./markdown.module.scss";

type blogModalProps = {
  path: string,
  closeModal: React.MouseEventHandler<HTMLDivElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
}

export default function BlogModal({ path, closeModal, onKeyDown }: blogModalProps) {
  const [md, setMD] = useState("");
  const apiAddress: string | undefined = path;

  if (!apiAddress) throw 'API address not defined';

  fetch(apiAddress)
    .then(response => {
      return response.text()
    })
    .then(text => {
      console.log(text);
      setMD(text);
    })
  return (
    <div className="blogModal">
      <div role="button" aria-label="Close" tabIndex={0} className="backdrop" onClick={closeModal} onKeyDown={onKeyDown}></div>
      <Fade bottom duration={500}>
        <div>
          <div className={style.reactMarkDown}>
            <ReactMarkdown>
              {md}
            </ReactMarkdown>
          </div>
        </div>
      </Fade>
    </div>
  )
}