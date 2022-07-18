import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./title.scss"

type titleProps = {
  title: string;
}

export default function title({title}: titleProps) {
  return (
    <Row>
      <Col>
        <h2 className="weight800 font60 padding40">{title}</h2>
      </Col>
    </Row>
    )
}