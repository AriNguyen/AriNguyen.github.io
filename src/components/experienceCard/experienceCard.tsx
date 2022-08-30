import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./experienceCard.scss"

type experienceCardProps = {
  date: string
  jobTitle: string,
  companyName: string,
}

export default function experienceCard( experience : experienceCardProps) {
  return (
    <div>
      <hr className='line-break' />
      <Row className='experience-card'>
        <Col className='time weight800'>{experience.date}</Col>
        <Col className='position'>
          <Row className='title weight800 font20'>
            {experience.jobTitle}
          </Row>
          <Row className='company'>
            {experience.companyName}
          </Row>
        </Col>
      </Row>
    </div>

  )
}