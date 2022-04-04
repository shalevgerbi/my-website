import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './index.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Game from './components/Game';
import React from 'react';


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font scroll-smooth">
    
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Game />
      
      <Contact />
      
    </main>
    
  );
}