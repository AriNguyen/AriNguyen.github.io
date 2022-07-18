import React from "react";
import { Link } from "react-scroll";

import "./button.scss";

type buttonProps = {
  target: string;
  label: string;
}

export default function button({target, label}: buttonProps) {
  return (
    <div className="button">
      <Link
        className="button-link"
        to={target}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {label}
      </Link>
    </div>
  )
}