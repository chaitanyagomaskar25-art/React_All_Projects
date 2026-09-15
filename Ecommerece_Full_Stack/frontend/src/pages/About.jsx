import React, { useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('vision');

  // Surface Tokens
  const theme = {
    bg: isDark ? '#0b0f17' : '#fafafa',
    card: isDark ? '#161e2e' : '#ffffff',
    border: isDark ? '#233044' : '#e2e8f0',
    text: isDark ? '#f8fafc' : '#0f172a',
    muted: isDark ? '#94a3b8' : '#64748b',
  };

  const storyTabs = {
    vision: {
      title: 'Designing for longevity.',
      content:
        'We believe daily tools should be engineered to endure, not replaced every season. Our curation focuses on architectural precision, clean aesthetics, and sustainable manufacturing practices.',
    },
    craft: {
      title: 'Uncompromising material selection.',
      content:
        'From aerospace-grade aluminum to sustainably harvested leather and recycled polymers, every item in our catalog undergoes rigorous quality testing before entering production.',
    },
    community: {
      title: 'Built alongside modern creators.',
      content:
        'We collaborate directly with independent designers, engineers, and minimalist enthusiasts worldwide to refine everyday carry essentials and workspace acoustics.',
    },
  };

  const stats = [
    { number: '100%', label: 'Authentic Sourcing', icon: '🛡️' },
    { number: '24/7', label: 'Global Concierge', icon: '💬' },
    { number: '45+', label: 'Design Awards', icon: '🏆' },
    { number: '30 Days', label: 'Risk-Free Trial', icon: '🔄' },
  ];

  const values = [
    {
      title: 'Minimalist Engineering',
      desc: 'Form follows function. We strip away unnecessary clutter to focus on pure utility and clean lines.',
      icon: '📐',
    },
    {
      title: 'Ethical Supply Chains',
      desc: 'Every partner facility is vetted for fair labor practices, safe conditions, and low environmental impact.',
      icon: '🌿',
    },
    {
      title: 'Acoustic & Tactile Rigor',
      desc: 'How a key switch feels and how headphones sound matter. Precision tuning is built into every detail.',
      icon: '🎛️',
    },
    {
      title: 'Lifetime Support',
      desc: 'Our relationship doesn’t end at checkout. We back our collections with extended warranties and repair programs.',
      icon: '🤝',
    },
  ];

  const team = [
    {
      name: 'Elena Rostova',
      role: 'Head of Industrial Design',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'Principal Acoustic Engineer',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sora Takahashi',
      role: 'Creative Director',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text }} className="min-h-screen py-6 space-y-16 sm:space-y-20 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border p-8 sm:p-14 lg:p-16 shadow-xl" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
            <span>🏛️</span> Our Philosophy
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
            Curating tools for <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              intent-driven living.
            </span>
          </h1>

          <p style={{ color: theme.muted }} className="text-base sm:text-lg leading-relaxed max-w-2xl">
            Founded in 2026, we bridge the gap between architectural minimalism and modern hardware technology. We curate precision essentials designed to elevate work, focus, and daily life.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/25"
            >
              Explore Products →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Mission Tabs */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b" style={{ borderColor: theme.border }}>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">The Core Mission</h2>
            <p style={{ color: theme.muted }} className="text-sm mt-1">Select an aspect to learn about our approach</p>
          </div>

          {/* Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {Object.keys(storyTabs).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    backgroundColor: isActive ? '#6366f1' : theme.card,
                    color: isActive ? '#ffffff' : theme.text,
                    borderColor: isActive ? '#6366f1' : theme.border,
                  }}
                  className="px-4 py-2.5 rounded-xl border text-xs font-bold capitalize transition-all active:scale-95 shadow-sm whitespace-nowrap"
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <div
          style={{ backgroundColor: theme.card, borderColor: theme.border }}
          className="rounded-3xl border p-8 sm:p-10 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold">{storyTabs[activeTab].title}</h3>
            <p style={{ color: theme.muted }} className="text-base leading-relaxed">
              {storyTabs[activeTab].content}
            </p>
          </div>

          <div className="md:col-span-4 aspect-video sm:aspect-square rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-4xl mb-2">⚡</span>
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Standard of Quality</span>
          </div>
        </div>
      </section>

      {/* 3. Key Metrics */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: theme.card, borderColor: theme.border }}
            className="rounded-2xl border p-6 text-center space-y-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-2xl">{stat.icon}</span>
            <p className="text-3xl font-black text-indigo-500">{stat.number}</p>
            <p style={{ color: theme.muted }} className="text-xs font-bold uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* 4. Values Grid */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Our Guiding Pillars</h2>
          <p style={{ color: theme.muted }} className="text-sm mt-1">What sets our product curation apart</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              style={{ backgroundColor: theme.card, borderColor: theme.border }}
              className="rounded-2xl border p-6 space-y-3 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl font-bold">
                {v.icon}
              </div>
              <h3 className="font-bold text-base">{v.title}</h3>
              <p style={{ color: theme.muted }} className="text-xs leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Team Showcase */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">The Minds Behind the Curation</h2>
          <p style={{ color: theme.muted }} className="text-sm mt-1">Industrial designers, sound engineers, and creative thinkers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((m, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: theme.card, borderColor: theme.border }}
              className="rounded-2xl border p-4 space-y-4 text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-100">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="font-bold text-base">{m.name}</h3>
                <p style={{ color: theme.muted }} className="text-xs mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;