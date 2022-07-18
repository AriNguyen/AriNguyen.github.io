import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'

import Navbar from './sections/navbar/navbar';
import Hero from './sections/hero/hero';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import Projects from './sections/projects/projects';
import Blogs from './sections/blogs/blogs';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';

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

ReactDOM.render(
  <React.StrictMode>
    {/* <HashRouter> */}
      {/* <App /> */}
      <HomePage />
    {/* </HashRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

