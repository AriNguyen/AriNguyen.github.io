import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from '@mui/icons-material/Close';

import "./closeButton.scss"

type closeButtonProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>,
}

export default function closeButton({ onClick }: closeButtonProps) {
  return (
    <Avatar className="close-icon" onClick={onClick}>
      <CloseIcon />
    </Avatar>
  )

}