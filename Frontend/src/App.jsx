
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Newsletter from './components/Newsletter';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <Projects />
      <Clients />
      <Newsletter />
    </>
  );
}

export default App;
