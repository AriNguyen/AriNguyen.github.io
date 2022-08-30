import React from "react";
import Button from '@mui/material/Button';

import "./button.scss";

type buttonProps = {
  target: string;
  label: string;
}

export default function button({target, label}: buttonProps) {
  return (
    <div className="button">
      <Button
        className="button-link"
        href={target}
      >
        {label}
      </Button>
    </div>
  )
}