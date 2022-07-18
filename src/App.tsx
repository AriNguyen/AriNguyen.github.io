import React, { Fragment } from 'react';
import './style/App.scss';

import Navbar from './sections/navbar/navbar';
import Hero from './sections/hero/hero';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import Projects from './sections/projects/projects';
import Blogs from './sections/blogs/blogs';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    // <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Fragment>
    // </Router>
  );
}

function HomePage() {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}
