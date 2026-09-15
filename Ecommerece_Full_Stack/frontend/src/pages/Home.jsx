import React, { useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';

const Home = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [likedIds, setLikedIds] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

const getFeaturedProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/featured-products`,
      );

      const data = await response.json();

      if (!response.ok) {

console.log("Please try again")      }

      return data.data;
    } catch (error) {
      console.log(error.message)
    }
  }

  // Toast Notification Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  // Toggle Liked State
  const toggleLike = (id, name) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter((item) => item !== id));
      showToast(`Removed "${name}" from Wishlist`);
    } else {
      setLikedIds([...likedIds, id]);
      showToast(`Added "${name}" to Wishlist ❤️`);
    }
  };

  // Toggle Cart State
  const handleAddToCart = (id, name) => {
    if (!addedIds.includes(id)) {
      setAddedIds([...addedIds, id]);
      showToast(`Added "${name}" to Cart 🛒`);
    } else {
      showToast(`"${name}" is already in your cart`);
    }
  };

  // Theme Surface Tokens
  const surfaceStyle = {
    backgroundColor: isDark ? '#080c14' : '#f8fafc',
    color: isDark ? '#f8fafc' : '#0f172a',
  };

  const cardStyle = {
    backgroundColor: isDark ? '#111827' : '#ffffff',
    borderColor: isDark ? '#1f293d' : '#e2e8f0',
  };

  const textMuted = {
    color: isDark ? '#94a3b8' : '#64748b',
  };

const [categories, setCategories] = useState(["All"]);

useEffect(() => {
  const getCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/products/categories"
      );
      const data = await response.json();
      setCategories(["All", ...data.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  getCategories();
}, []);

  const products = [
    {
      id: 1,
      name: 'Studio Pro Wireless Headphones',
      category: 'Audio',
      price: 299.00,
      oldPrice: 349.00,
      rating: 4.9,
      reviews: 128,
      badge: 'Bestseller',
      imgBg: 'from-blue-600/20 to-indigo-600/20',
    },
    {
      id: 2,
      name: 'Precision Chronograph Watch',
      category: 'Wearables',
      price: 450.00,
      oldPrice: 499.00,
      rating: 4.8,
      reviews: 94,
      badge: 'New',
      imgBg: 'from-amber-600/20 to-orange-600/20',
    },
    {
      id: 3,
      name: 'Ergonomic Desk Workspace Lamp',
      category: 'Lifestyle',
      price: 120.00,
      oldPrice: 150.00,
      rating: 4.7,
      reviews: 62,
      imgBg: 'from-emerald-600/20 to-teal-600/20',
    },
    {
      id: 4,
      name: 'Leather Minimalist Cardholder',
      category: 'Accessories',
      price: 65.00,
      oldPrice: 80.00,
      rating: 4.9,
      reviews: 210,
      badge: 'Popular',
      imgBg: 'from-purple-600/20 to-pink-600/20',
    },
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div style={surfaceStyle} className="relative space-y-12 sm:space-y-16 md:space-y-20 py-4 sm:py-6 transition-colors duration-300 min-h-screen">
      
      {/* Dynamic Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-indigo-600 text-white font-medium text-sm shadow-2xl animate-bounce flex items-center gap-2">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Interactive Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-indigo-900/20 via-slate-900/10 to-purple-900/20 p-6 sm:p-12 md:p-16 lg:p-20 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              Limited Collection 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Architectural Design <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Unmatched Quality.
              </span>
            </h1>

            <p style={textMuted} className="text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              Experience precision engineering. Curated tech accessories, lifestyle tools, and premium wearables created for high performance and daily durability.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-500/30 transition-all text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>Shop New Arrivals</span>
                <span>→</span>
              </Link>
              <Link
                to="/about"
                style={{ borderColor: isDark ? '#334155' : '#cbd5e1' }}
                className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl font-bold border hover:bg-slate-500/10 active:scale-95 transition-all text-sm sm:text-base"
              >
                Our Heritage
              </Link>
            </div>
          </div>

          {/* Interactive Hero Media Frame */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div 
              style={cardStyle}
              className="relative aspect-square w-full rounded-3xl border p-6 flex flex-col justify-between shadow-2xl overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase">
                  Featured Product
                </span>
                <span className="text-xs font-mono" style={textMuted}>
                  In Stock (12 left)
                </span>
              </div>

              {/* Center Interactive Artwork Placeholder */}
              <div className="relative my-auto py-8 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-indigo-500/40">
                  SC
                </div>
                <p className="mt-4 font-bold text-lg">Studio Pro Wireless</p>
                <p style={textMuted} className="text-xs">$299.00 USD</p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-500">✓ Free Express Delivery</span>
                <span style={textMuted}>★ 4.9 Rating</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Trust Metrics */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-200/80 dark:border-slate-800 py-8">
        {[
          { metric: '100%', label: 'Guaranteed Authentic', icon: '🛡️' },
          { metric: '24/7', label: 'Concierge Care', icon: '💬' },
          { metric: 'Global', label: 'Express Shipping', icon: '🚀' },
          { metric: '30 Days', label: 'Hassle-Free Returns', icon: '🔄' },
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="p-4 rounded-2xl transition-all duration-300 hover:bg-slate-500/5 text-center space-y-1.5 cursor-pointer"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">
              {item.metric}
            </p>
            <p style={textMuted} className="text-xs sm:text-sm font-semibold">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* 3. Interactive Catalog */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Curated Products</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold">
                {filteredProducts.length} items
              </span>
            </div>
            <p style={textMuted} className="text-xs sm:text-sm mt-1">
              Select a category below to filter items in real-time.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    backgroundColor: isActive
                      ? '#6366f1'
                      : isDark
                      ? '#111827'
                      : '#f1f5f9',
                    color: isActive
                      ? '#ffffff'
                      : isDark
                      ? '#cbd5e1'
                      : '#475569',
                    borderColor: isActive
                      ? '#6366f1'
                      : isDark
                      ? '#1f293d'
                      : '#e2e8f0',
                  }}
                  className="px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap transition-all duration-200 active:scale-95 shadow-sm"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isLiked = likedIds.includes(product.id);
            const isAdded = addedIds.includes(product.id);

            return (
              <div
                key={product.id}
                style={cardStyle}
                className="group relative rounded-3xl border p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Product Image Stage */}
                <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${product.imgBg} flex items-center justify-center mb-5 overflow-hidden`}>
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(product.id, product.name)}
                    className="absolute top-3 right-3 p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:scale-110 active:scale-95 transition-all shadow-md"
                    aria-label="Wishlist"
                  >
                    <span className="text-sm">{isLiked ? '❤️' : '🤍'}</span>
                  </button>

                  {/* Artwork Placeholder */}
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform duration-300">
                    {product.name.split(' ')[0]}
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1 font-semibold" style={textMuted}>
                      <span>{product.category}</span>
                      <span className="text-amber-500">★ {product.rating} ({product.reviews})</span>
                    </div>
                    <h3 className="font-bold text-base line-clamp-1 group-hover:text-indigo-500 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Pricing & Add to Cart Action */}
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-lg font-black">${product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className="text-xs line-through ml-2" style={textMuted}>
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product.id, product.name)}
                      style={{
                        backgroundColor: isAdded ? '#10b981' : '#6366f1',
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-white hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>{isAdded ? '✓ Added' : '+ Add'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Interactive Newsletter Banner */}
      <section
        style={cardStyle}
        className="rounded-3xl border p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6 shadow-xl relative overflow-hidden"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 text-xl font-bold">
          ✉️
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Subscribe to Private Drops</h3>
          <p style={textMuted} className="text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Join 15,000+ subscribers for early release codes, seasonal discounts, and members-only previews.
          </p>
        </div>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            showToast('Subscribed to VIP Newsletter 🎉');
          }} 
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your work email"
            style={{
              backgroundColor: isDark ? '#080c14' : '#f8fafc',
              borderColor: isDark ? '#334155' : '#cbd5e1',
              color: isDark ? '#ffffff' : '#000000',
            }}
            className="flex-grow px-5 py-3.5 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/25"
          >
            Join VIP
          </button>
        </form>
      </section>

    </div>
  );
};

export default Home;