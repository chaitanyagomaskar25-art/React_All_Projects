import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Surface Tokens
  const theme = {
    bg: isDark ? '#0b0f17' : '#fafafa',
    card: isDark ? '#161e2e' : '#ffffff',
    border: isDark ? '#233044' : '#e2e8f0',
    text: isDark ? '#f8fafc' : '#0f172a',
    muted: isDark ? '#94a3b8' : '#64748b',
    inputBg: isDark ? '#0b0f17' : '#f8fafc',
  };

  const contactChannels = [
    {
      title: 'Concierge Support',
      desc: 'Our dedicated team is ready to assist with orders and inquiries.',
      value: 'support@brand.com',
      icon: '💬',
    },
    {
      title: 'Press & Partnerships',
      desc: 'Collaborate with us or request media press kits.',
      value: 'partnerships@brand.com',
      icon: '📰',
    },
    {
      title: 'Global Headquarters',
      desc: 'Visit our flagship studio & design lab.',
      value: 'Tokyo • Berlin • San Francisco',
      icon: '📍',
    },
  ];

  const faqs = [
    {
      q: 'How fast do you ship international orders?',
      a: 'Orders are dispatched within 24 hours. Express international shipping typically takes 2–5 business days.',
    },
    {
      q: 'What is your warranty policy?',
      a: 'All audio and electronic hardware come with a 2-year full manufacturer replacement warranty.',
    },
    {
      q: 'Can I modify or cancel my order after placing it?',
      a: 'Yes! You can edit or cancel your order within 2 hours directly from your order status confirmation email.',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text }} className="min-h-screen py-6 space-y-16 transition-colors duration-300">
      
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden rounded-3xl border p-8 sm:p-14 lg:p-16 shadow-xl" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
            <span>📫</span> 24/7 Global Desk
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
            Let’s start a <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>

          <p style={{ color: theme.muted }} className="text-base sm:text-lg leading-relaxed max-w-xl">
            Have a question about a product, custom order, or partnership? Reach out to our concierge team—we respond within hours.
          </p>
        </div>
      </section>

      {/* 2. Interactive Contact Form & Channels */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div
          style={{ backgroundColor: theme.card, borderColor: theme.border }}
          className="lg:col-span-7 rounded-3xl border p-6 sm:p-10 shadow-lg space-y-6"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight">Send a Direct Message</h2>
            <p style={{ color: theme.muted }} className="text-xs sm:text-sm">
              Fill out the form below and we’ll respond shortly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 space-y-2 animate-fadeIn text-center">
              <span className="text-3xl">✨</span>
              <p className="font-bold text-base">Message Sent Successfully!</p>
              <p className="text-xs opacity-90">Thank you for reaching out. A specialist will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.muted }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.text }}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.muted }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.text }}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.muted }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{ backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.text }}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Order Support">Order & Shipping Support</option>
                  <option value="Warranty Claim">Warranty Claim</option>
                  <option value="Press & Business">Press & Partnerships</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.muted }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ backgroundColor: theme.inputBg, borderColor: theme.border, color: theme.text }}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/25"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Channels Information */}
        <div className="lg:col-span-5 space-y-6">
          {contactChannels.map((channel, i) => (
            <div
              key={i}
              style={{ backgroundColor: theme.card, borderColor: theme.border }}
              className="rounded-2xl border p-6 space-y-2 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{channel.icon}</span>
                <h3 className="font-bold text-base">{channel.title}</h3>
              </div>
              <p style={{ color: theme.muted }} className="text-xs leading-relaxed">
                {channel.desc}
              </p>
              <p className="text-sm font-bold text-indigo-500 pt-1">{channel.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive FAQ Accordion */}
      <section className="space-y-6 pt-6 border-t" style={{ borderColor: theme.border }}>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Frequently Asked Questions</h2>
          <p style={{ color: theme.muted }} className="text-sm mt-1">Quick answers to common inquiries</p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
                className="rounded-2xl border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-sm"
                >
                  <span>{faq.q}</span>
                  <span className="text-indigo-500 font-extrabold">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 border-t text-xs leading-relaxed" style={{ borderColor: theme.border, color: theme.muted }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Contact;