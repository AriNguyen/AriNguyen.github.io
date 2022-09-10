import React from "react";
import { Link } from 'react-scroll';

import CloseIcons from '/assets/navbar/mobile-close.svg';
// import Logo from "../../assets/navbar/logo-yellow.svg";

type mobileNavProps = {
  isOpen: boolean
  closeMobileMenu: React.MouseEventHandler<HTMLDivElement>,
}

export default function mobileNav({isOpen, closeMobileMenu}: mobileNavProps) {
    return (
        <div className={`mobile-navbar ${isOpen ? "mobile-open" : ""}`}>
    <div className="mobile-navbar-close" onClick={closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
    <div className="mobile-navbar-logo flex-center">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => closeMobileMenu}
      >
        {/* <img src={Logo} alt="logo" /> */}
      </Link>
    </div>
    <div className="mobile-navbar-menu">
      <ul>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => closeMobileMenu}
          >
            WORK
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => closeMobileMenu}

          >
            ABOUT
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => closeMobileMenu}
          >
            BLOG
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </div>
    )
}