import React from "react";

import "./modal.scss";


type successModalProps = {
  closeModal: React.MouseEventHandler<HTMLDivElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
}

export default function successModal({ closeModal, onKeyDown }: successModalProps) {
  return (
    <div className="sucess__modal">
      <p>Success!</p>
      <p>
        Thank you for your email.<br></br>We will respond as soon as possible.
      </p>
      <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={closeModal} onKeyDown={onKeyDown}>
        <p>Ok</p>
      </div>
    </div>
  )
}