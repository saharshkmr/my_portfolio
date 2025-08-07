import React from 'react';

// Components
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Experience from '../components/Sections/Experience';
import Contact from '../components/Sections/Contact';

/**
 * Home page component that serves as the main landing page of the portfolio.
 * It includes all the main sections: Hero, About, Projects, Experience, and Contact.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
