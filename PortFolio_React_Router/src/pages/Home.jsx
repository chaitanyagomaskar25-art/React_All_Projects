import React from 'react';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';

const Home = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* SECTION 1: Full-Width Hero Headline */}
      <Hero />

      {/* SECTION 2: Intro & Photo (Split Section) */}
      
      <Intro />
    </div>
  );
};

export default Home;