import React from "react";

import "./modal.scss";

type successModalProps = {
  closeModal: React.MouseEventHandler<HTMLDivElement>,
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
}

export default function errorModal({ closeModal, onKeyDown }: successModalProps) {
  return (
    <div className="error__modal">
      <p>Oooops!!!</p>
      <p>
        Something went wrong :{"("}</p>
      <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={closeModal} onKeyDown={onKeyDown}>
        <p>Ok</p>
      </div>
    </div>
  )
}