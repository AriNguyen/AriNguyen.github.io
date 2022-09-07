
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

export default function Navbar() {
  const [userIsScrolled, setUserIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (window.pageYOffset > 80) {
      setUserIsScrolled(true)
    } else {
      setUserIsScrolled(false)
    }
  }, [userIsScrolled])
  return (
    <nav className={`Navbar ${!userIsScrolled ? "extraLargeNavbar" : ""}`}>
      <div className="wrapper flex-s-between">
        <div>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            {/* <img src={} alt="logo" className="pointer" /> */}
          </Link>
        </div>
        <div className="mobile__menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {/* <img src={MobileMenuIcon} alt="menu" /> */}
        </div>
        <div className="desktop__menu">
          <ul className="flex-s-between">
            <li>
              <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-102} duration={300}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="experience" spy={true} smooth={true} offset={-102} duration={300}>
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="projects" spy={true} smooth={true} offset={-102} duration={300}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="hackathons" spy={true} smooth={true} offset={-102} duration={300}>
                HACKATHONS
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="blogs" spy={true} smooth={true} offset={-102} duration={300}>
                BLOGS
              </Link>
            </li>
            {/* <li>
              <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                CONTACT
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
