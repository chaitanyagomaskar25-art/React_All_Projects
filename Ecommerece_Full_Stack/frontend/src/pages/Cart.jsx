import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useTheme } from "../context/ThemeContext";

const Cart = () => {
  const cart = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // State for Checkout Confirmation Modal
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Dynamic Theme Setup
  const theme = useMemo(() => {
    return {
      bg: isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900",
      cardBg: isDark ? "bg-slate-900/80" : "bg-white/80",
      cardBorder: isDark ? "border-slate-800" : "border-slate-200/80",
      textSecondary: isDark ? "text-slate-400" : "text-slate-500",
      inputBg: isDark ? "bg-slate-950/60" : "bg-slate-100/80",
      inputBorder: isDark ? "border-slate-800" : "border-slate-200",
    };
  }, [isDark]);

  // Order Totals Calculation
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1), 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  }, [cart]);

  const shippingFee = subtotal > 0 ? (subtotal > 150 ? 0 : 15) : 0;
  const grandTotal = subtotal + shippingFee;

  // Final Order Handler
  const handleConfirmOrder = () => {
    dispatch(clearCart());
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className={`min-h-screen pb-24 font-sans relative overflow-hidden transition-colors duration-300 ${theme.bg}`}>
      
      {/* Background Ambient Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 space-y-8 relative z-10">
        
        {/* Header Section */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b ${theme.cardBorder}`}>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-extrabold tracking-widest uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Checkout Prep
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            <p className={`text-xs sm:text-sm font-medium ${theme.textSecondary}`}>
              Manage your selected items and review your order before checkout.
            </p>
          </div>

          {cart.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 rounded-xl text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all active:scale-95 self-start sm:self-auto"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          /* Empty State */
          <div className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-12 text-center max-w-md mx-auto space-y-5 shadow-2xl my-16 backdrop-blur-xl`}>
            <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-3xl mx-auto border border-indigo-500/20 shadow-inner">
              🛒
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg">Your cart is empty</h3>
              <p className={`text-xs font-medium leading-relaxed ${theme.textSecondary}`}>
                Looks like you haven't added anything to your cart yet.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              Explore Products →
            </Link>
          </div>
        ) : (
          /* Cart Grid: Items + Order Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((p) => {
                const primaryImage = p.images?.[0] || "https://via.placeholder.com/200?text=No+Image";

                return (
                  <div
                    key={p._id}
                    className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-4 sm:p-5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5 transition-all hover:border-indigo-500/30 shadow-lg`}
                  >
                    {/* Image & Details */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <Link 
                        to={`/product/${p._id}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0 block hover:opacity-90 transition-opacity"
                      >
                        <img
                          src={primaryImage}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      <div className="space-y-1 flex-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                          {p.category || "Item"}
                        </span>
                        <Link to={`/product/${p._id}`} className="block hover:text-indigo-400 transition-colors">
                          <h3 className="font-extrabold text-base line-clamp-1">{p.name}</h3>
                        </Link>
                        <p className={`text-xs font-medium line-clamp-1 ${theme.textSecondary}`}>
                          {p.description}
                        </p>
                        <span className="text-sm font-black text-indigo-400 block pt-1">
                          ${Number(p.price).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls & Actions */}
                    <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                      
                      {/* Stepper */}
                      <div className={`flex items-center gap-1 border px-2 py-1.5 rounded-2xl shadow-inner ${theme.inputBg} ${theme.inputBorder}`}>
                        <button
                          onClick={() => {
                            if (p.quantity > 1) {
                              dispatch(decreaseQuantity(p._id));
                            } else {
                              dispatch(removeFromCart(p._id));
                            }
                          }}
                          className="w-7 h-7 rounded-xl bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                        >
                          −
                        </button>
                        <span className="font-extrabold text-xs px-3">{p.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(p._id))}
                          className="w-7 h-7 rounded-xl bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Item Total & Action Buttons */}
                      <div className="flex items-center gap-3">
                        <span className="text-base font-black text-slate-200 min-w-[70px] text-right">
                          ${((Number(p.price) || 0) * p.quantity).toFixed(2)}
                        </span>

                        {/* View Details Button */}
                        <Link
                          to={`/product/${p._id}`}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${theme.cardBorder} hover:bg-slate-800/50 text-slate-300 hover:text-white flex items-center gap-1`}
                        >
                          Details →
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => dispatch(removeFromCart(p._id))}
                          className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary Side Deck */}
            <div className="lg:col-span-4 sticky top-6">
              <div className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-6 backdrop-blur-xl space-y-6 shadow-2xl`}>
                <h2 className="text-lg font-black border-b pb-4 border-slate-800">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs font-semibold">
                  <div className="flex justify-between items-center">
                    <span className={theme.textSecondary}>Total Items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={theme.textSecondary}>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={theme.textSecondary}>Shipping</span>
                    <span>{shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className={`pt-4 border-t flex justify-between items-center ${theme.cardBorder}`}>
                  <div>
                    <span className={`text-[10px] uppercase tracking-widest block font-extrabold ${theme.textSecondary}`}>
                      Grand Total
                    </span>
                    <span className="text-2xl font-black text-indigo-400">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full py-3.5 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all active:scale-95 uppercase tracking-wider"
                >
                  Proceed to Checkout →
                </button>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Checkout Confirmation Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div
            className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative z-10`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-2xl mx-auto shadow-inner">
              🚀
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-black tracking-tight">Confirm Your Purchase</h3>
              <p className={`text-xs font-medium leading-relaxed ${theme.textSecondary}`}>
                You are about to place an order for <span className="font-bold text-indigo-400">{totalItems} items</span> totaling <span className="font-bold text-indigo-400">${grandTotal.toFixed(2)}</span>.
              </p>
            </div>

            {/* Modal Summary Card */}
            <div className={`p-4 rounded-2xl border ${theme.inputBg} ${theme.inputBorder} space-y-2 text-xs font-semibold`}>
              <div className="flex justify-between text-slate-400">
                <span>Items Subtotal:</span>
                <span className="text-slate-200">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping:</span>
                <span className="text-slate-200">{shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-slate-200 pt-2 border-t border-slate-800 font-extrabold text-sm">
                <span>Total Amount:</span>
                <span className="text-indigo-400">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCheckoutModalOpen(false)}
                className={`w-1/2 py-3 rounded-2xl text-xs font-bold border transition-colors ${theme.cardBorder} hover:bg-slate-800/50`}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOrder}
                className="w-1/2 py-3 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;