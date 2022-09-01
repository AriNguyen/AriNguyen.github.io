import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-flexbox-grid";
import * as emailjs from "emailjs-com";

import "./contact.scss"
import Modal from "../../components/contactModal/modal";
import Title from "../../components/title/title";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  let inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.name = event.target.value;
  };

  let textInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.name = event.target.value;
  };

  let handleSubmit = (event: React.FormEvent) => {
    setSending(true);
    event.preventDefault();

    var template_params = {
      name: name,
      email: email,
      message: message,
    };

    let API_KEY = "";
    let TEMPLATE_ID = "";

    emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          showSuccessModal();
        } else {
          showErrorModal();
        }
      },
      function (error) {
        showErrorModal();
      }
    );
  }

  let closeModal = () => {
    setSuccessModal(false);
    setErrorModal(false);
  };

  let showSuccessModal = () => {
    setSuccessModal(true);
    setSending(false);
    resetForm();
  };

  let showErrorModal = () => {
    setErrorModal(true);
    setSending(false);
    resetForm();
  };

  let resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div id="contact" className='section-wrapper'>
      {successModal &&
        <Modal status="success" closeModal={closeModal} onKeyDown={closeModal} />
      }
      {errorModal &&
        <Modal status="error" closeModal={closeModal} onKeyDown={closeModal} />
      }
      <div className="wrapper">
        <Title title="CONTACT ME." />
        <p className="font12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
        </p>
        <Row className="padding40">
          <Col md={12} lg={6}>
            <form id="contact-form" onSubmit={handleSubmit}>
              <h4 className="font30 weight800 padding30">Send Me Message.</h4>
              <input type="text" placeholder="Name" required name="name" value={name} onChange={inputHandler} />
              <input type="email" placeholder="Email" required name="email" value={email} onChange={inputHandler} />
              <textarea
                rows={6}
                cols={50}
                placeholder="Message..."
                required
                name="message"
                value={message}
                onChange={textInputHandler}
              ></textarea>
              {!sending &&
                <div className="small__button">
                  <button aria-label="send message" type="submit" value="Send Message">
                    Send Message
                  </button>
                </div>
              }
              {sending &&
                <div className="small__button sending-btn">
                  <div className="flex-center">
                    <div className="sbl-circ"></div>
                  </div>
                </div>
              }
            </form>
          </Col>
        </Row>
      </div>
    </div>
  )
}
