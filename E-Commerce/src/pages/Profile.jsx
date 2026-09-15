import React, { useState } from 'react';

const Profile = ({ name, email, password }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white text-slate-900 font-sans">
      {/* Page Title */}
      <header className="mb-12">
        <h1 className="text-3xl font-light tracking-tight italic">My Account</h1>
        <p className="text-slate-500 text-sm mt-2 font-medium">Manage your personal details and security.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Simple Sidebar Navigation - Essential for E-commerce feel */}
        <nav className="space-y-4 text-sm font-medium border-r border-slate-100 hidden md:block">
          <p className="text-black border-b-2 border-black w-fit pb-1 cursor-pointer">Profile Details</p>
          <p className="text-slate-400 hover:text-black transition-colors cursor-pointer">Order History</p>
          <p className="text-slate-400 hover:text-black transition-colors cursor-pointer">Shipping Addresses</p>
          <p className="text-slate-400 hover:text-black transition-colors cursor-pointer">Logout</p>
        </nav>

        {/* Form Section */}
        <div className="md:col-span-2 max-w-lg space-y-8">
          
          {/* Name Field */}
          <div className="group border-b border-slate-200 py-2 focus-within:border-black transition-colors">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Full Name
            </label>
            <input 
              value={name} 
              readOnly 
              className="w-full bg-transparent py-1 outline-none text-slate-800"
            />
          </div>

          {/* Email Field */}
          <div className="group border-b border-slate-200 py-2 focus-within:border-black transition-colors">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Email Address
            </label>
            <input 
              value={email} 
              readOnly 
              className="w-full bg-transparent py-1 outline-none text-slate-800"
            />
          </div>

          {/* Password Field */}
          <div className="group border-b border-slate-200 py-2 focus-within:border-black transition-colors relative">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Password
            </label>
            <div className="flex items-center">
              <input
                type={show ? "text" : "password"}
                value={password}
                readOnly
                className="w-full bg-transparent py-1 outline-none text-slate-800 tracking-tighter"
              />
              <button
                onClick={() => setShow(!show)}
                className="text-[11px] uppercase tracking-tighter font-bold text-slate-900 hover:opacity-60 transition-opacity"
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Minimal Action Button */}
          <button className="mt-4 px-8 py-3 bg-blue-700 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-blue-900 transition-all active:scale-[0.98]">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;