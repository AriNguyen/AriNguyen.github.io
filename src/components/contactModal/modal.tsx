import React from "react";
import { Backdrop } from "@material-ui/core";
import Fade from "react-reveal/Fade";

import "./modal.scss";
import SuccessModal from "./successModal"
import ErrorModal from "./errorModal"

type contactModalprops = {
  status: string,
  closeModal: React.MouseEventHandler<HTMLDivElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
}

export default function modal({status, closeModal, onKeyDown}: contactModalprops) {
  return (
    <div className="modal">
      <div role="button" aria-label="Close" tabIndex={0} className="backdrop" onClick={closeModal} onKeyDown={onKeyDown}></div>

      {/* <Backdrop className="backdrop" role="button" aria-label="Close" tabIndex={0} open={true} onClick={closeModal} onKeyDown={onKeyDown}/> */}
      {status === "success" && 
        <Fade bottom duration={500}>
          <SuccessModal closeModal={closeModal} onKeyDown={onKeyDown}/>
        </Fade>
      }
      {status === "error" && 
        <Fade bottom duration={500}>
          <ErrorModal closeModal={closeModal} onKeyDown={onKeyDown}/>
        </Fade>
      }
    </div>
  )
}