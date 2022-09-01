import React, { useState } from 'react';
import { Row, Col } from "react-flexbox-grid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { useSpring, animated, config } from 'react-spring'

import Ava from '../../assets/hero/ava_white.png';
import Button from '../../components/button/button';

import "./hero.scss";
import { COLORS } from "../../style/colors";

export default function Hero() {
  const [flip, set] = useState(false)
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: COLORS.mainColor },
      { opacity: 1, color: COLORS.blackColor },
    ],
    from: { opacity: 0, color: COLORS.blackColor },
    // reset: true,
    // reverse: flip,
    delay: 500,
    // config: config.molasses,
    // onRest: () => set(!flip),
  })

  return (
    <div className="hero section-wrapper" id="hero">
      <div className="wrapper">
        <Row>
          <Col md={12} lg={6}>
            <div className="hero-info">
              
              <h1 className="weight800 font60">
                Hi! I'm {<animated.text className="weight800 font60" style={styles}>Ari.</animated.text>}
              </h1>
              <h1 className="weight800 font40">
                Computer Science Student
              </h1>
              <div className="hero-image-mobile">
                <img className="hero-image-mobile-img" src={Ava} alt="hero" />
              </div>
              <p className="font15">
                Rising Senior at Drexel University.<br />
                Interested in the intersection of artificial intelligence and robotics.<br />
                Enhancing Social Impact through Technology.
              </p>
              <Row className="main-button">
                {/* <Col className='message-button' md={12} lg={4}>
                  <Button target='' label="SEND MESSAGE"></Button>
                </Col> */}
                <Col md={12} lg={4}>
                  <Button label="VIEW RESUME" target="https://drive.google.com/file/d/121u0fYeyyGOzaho2eYPjjhdH8q0WgCQy/view?usp=sharing"></Button>
                </Col>
              </Row>
              <Row className="hero-row social-test">
                  {/* <ul className="social"> */}
                  <li>
                    <a className='social-button' href='http://github.com/AriNguyen'><FaGithub /></a>
                  </li>
                  <li>
                    <a className='social-button' href='http://linkedin.com/in/aringuyen/'><FaLinkedin /></a>
                  </li>
                  <li>
                    <a className='social-button' href='http://devpost.com/AriNguyen'><SiDevpost/></a>
                  </li>
              </Row>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div >
              <img className="hero-image" src={Ava} alt="hero" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}