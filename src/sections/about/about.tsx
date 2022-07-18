import React from 'react';
import { Row, Col } from "react-flexbox-grid";

// import ImageBox from "../../components/imageBox/image-box";
import InfoBox from "../../components/infoBox/info-box";
import Title from "../../components/title/title";

import './about.scss';

export default function About() {
  return (
    <div id="about" className='about'>
      <div className="wrapper">
        <Title title="ABOUT ME." />
        <p className="font15">
          Interested in the ideas that fall at the intersection of perception and control.
          Inspired to solve<br></br>meaningful and challenging real-world problems using technology! Eager to work hard and learn continuously.
        </p>
        <Row>
          <Col md={12} lg={4}>
            {/* <ImageBox avatar={Person01} name="Luke Skywalker" job="Web designer" /> */}
            <InfoBox title='Little About Me' info='abcd' boxFooter='Read More' />
          </Col>
          <Col md={12} lg={4}>
            {/* <ImageBox title='tile' subTitle='subTitle' /> */}
            <InfoBox title='Little About Me' info='abcd' boxFooter='Read More' />
          </Col>
          <Col md={12} lg={4}>
            <InfoBox title='Little About Me' info='abcd' boxFooter='Read More' />
          </Col>
        </Row>
      </div>
    </div>
  )
}
