import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import ReactMarkdown from 'react-markdown'

import "./blogModal.scss";


type blogModalProps = {
    path: string,
    closeModal: React.MouseEventHandler<HTMLDivElement>,
    onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
}

export default function BlogModal({ path, closeModal, onKeyDown }: blogModalProps) {
    const [md, setMD] = useState("");
    const readmePath = 'https://raw.githubusercontent.com/AriNguyen/aringuyen.github.io/master/src/assets/blogs/blog1/blog1.md';
    fetch(readmePath)
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
                    <div className="blog_show_modal">
                        <ReactMarkdown>{md}</ReactMarkdown>

                        <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={closeModal} onKeyDown={onKeyDown}>
                            <p>Back</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}