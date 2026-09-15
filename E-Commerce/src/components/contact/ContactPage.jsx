import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen selection:bg-slate-200 text-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <span className="text-xs lg:text-sm font-bold text-blue-600 uppercase tracking-[0.3em] block mb-4">
            Connect
          </span>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6">
            We’re here to <br className="hidden lg:block" /> 
            <span className="text-slate-400 italic">help.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium">
            Have a question about an order or just want to say hello? Our team usually responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form Section */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none font-medium placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none font-medium placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none font-medium text-slate-600 appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Returns & Exchanges</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can we assist you?"
                  className="w-full bg-slate-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none font-medium placeholder:text-slate-300 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-slate-950 text-white py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-95 flex items-center justify-center gap-3">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Info & Image Section */}
          <div className="space-y-12">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email us</p>
                  <p className="font-bold text-slate-900">support@brand.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Call us</p>
                  <p className="font-bold text-slate-900">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>

            {/* Image - HIDDEN BELOW 1024px (lg) */}
            <div className="hidden lg:block relative group">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80" 
                  alt="Contact Us" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay Box */}
              <div className="absolute -bottom-6 -right-6 bg-slate-950 p-8 rounded-3xl shadow-2xl text-white max-w-60">
                <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-sm font-bold leading-relaxed">
                  "Our customer service isn't just a department, it's our promise."
                </p>
              </div>
            </div>

            {/* Office Info - Professional Layout */}
            <div className="pt-8 border-t border-slate-200 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-blue-600" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Headquarters</p>
              </div>
              <p className="text-xl font-bold text-slate-900">
                123 Design Avenue, Suite 500<br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;