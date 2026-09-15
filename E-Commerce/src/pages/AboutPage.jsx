import React from 'react';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import AboutHero from '../components/about/AboutHero';
import StatsPage from '../components/about/StatsPage';
import Vale from '../components/about/Vale';
import Call from '../components/about/Call';

const AboutPage = () => {
  const stats = [
    { label: 'Founded', value: '2022' },
    { label: 'Partners', value: '40+' },
    { label: 'Countries', value: '12' },
    { label: 'Customers', value: '150k+' },
  ];

  const values = [
    { 
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, 
      title: "Quality First", 
      desc: "Every item in our collection undergoes a rigorous 12-point quality inspection." 
    },
    { 
      icon: <Zap className="w-6 h-6 text-amber-500" />, 
      title: "Fast Delivery", 
      desc: "Our global logistics network ensures your product arrives within 3-5 business days." 
    },
    { 
      icon: <Users className="w-6 h-6 text-emerald-500" />, 
      title: "Community Driven", 
      desc: "We prioritize local artisans and sustainable manufacturing processes." 
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen selection:bg-slate-200 text-slate-950">
      {/* Hero Section */}
      <AboutHero />

      {/* Stats Section */}
     <StatsPage stats={stats}/>

      {/* Core Values Section */}
      <Vale values={values}/>

      {/* Call to Action */}
     <Call />
    </div>
  );
};

export default AboutPage;