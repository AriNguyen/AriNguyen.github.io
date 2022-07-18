import React, {useState} from 'react';
import { Row, Col } from "react-flexbox-grid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSpring, animated, config } from 'react-spring'

import Ava from '../../assets/hero/ava_white.png';
import Button from '../../components/button/button';

import "./hero.scss";
import {COLORS} from "../../style/colors";

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
    <div className="hero" id="hero">
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
              <p className="font15">
                Pre-junior Computer Science Major at Drexel.
                Interested in the field of AI/ML and Robotics.
              </p>
              <Row className="hero-row">
                <Button target='' label="SEND MESSAGE"></Button>
                <Button target='' label="DOWNLOAD CV"></Button>
              </Row>
              <Row className="hero-row">
                <div id="social-test">
                  <h2>Free Clean Social Buttons</h2>
                  <ul className="social">
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                  </ul>
                </div>
              </Row>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="hero-image">
              <img src={Ava} alt="hero" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}