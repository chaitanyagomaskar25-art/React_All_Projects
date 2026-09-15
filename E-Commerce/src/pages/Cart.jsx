import React from "react";
import { Trash2,ShoppingBag, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatchState, useCartState } from "../context/CartContext";

const Cart = () => {
  const state = useCartState();

  const dispatch = useDispatchState();

  return (

   <div className="max-w-7xl mx-auto px-4 py-12">
  {state.items.length > 0 ? (
    <>
      {/* 1. Corrected Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {state.items.map((product) => (
          <div key={product.id} className="group relative flex flex-col h-full">
            
            {/* Media Section */}
            <div className="relative aspect-10/13 overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_40px_70px_-15px_rgba(0,0,0,0.12)]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />

              {/* Quick Remove Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <button
                  className="flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-bold text-sm shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-rose-600 hover:text-white active:scale-95"
                  onClick={() => dispatch({ type: "DELETE", payload: product.id })}
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              </div>

              {/* Rating Tag */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-slate-900">{product.rating}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-6 px-2 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight line-clamp-1">
                  {product.title}
                </h3>
                <span className="text-xl font-black text-slate-900">${product.price}</span>
              </div>
              
              <p className="text-sm text-slate-500 line-clamp-2 mb-6 min-h-10">
                {product.description}
              </p>

              {/* Quantity Controls & Actions */}
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between bg-slate-100 rounded-2xl p-1">
                  <button 
                    onClick={() => dispatch({ type: "DECREASE", payload: product.id })}
                    className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white transition-colors text-slate-600 hover:text-rose-600"
                  >
                    -
                  </button>
                  <span className="font-bold text-slate-900">{product.quantity}</span>
                  <button 
                    onClick={() => dispatch({ type: "ADD", payload: product })}
                    className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white transition-colors text-slate-600 hover:text-indigo-600"
                  >
                    +
                  </button>
                </div>

                <Link to={`/product/${product.id}`} className="block">
                  <button className="flex items-center justify-center gap-2 w-full h-12 bg-slate-950 text-white rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-[0.98]">
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Professional Summary Bar */}
      <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-slate-500 font-medium">Subtotal</p>
          <h2 className="text-4xl font-black text-slate-950">
            ${state.totalAmount.toFixed(2)}
          </h2>
        </div>
        <button className="px-12 py-4 bg-indigo-600 text-white rounded-3xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
          Checkout Now
        </button>
      </div>
    </>
  ) : (
    /* 3. Empty State UI */
    <div className="text-center mb-40 py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
        <ShoppingBag className="w-8 h-8 text-slate-400" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
      <p className="text-slate-500 mt-2 mb-8">Looks like you haven't added anything yet.</p>
      <Link to="/product" className="text-indigo-600 font-bold hover:underline">
        Continue Shopping &rarr;
      </Link>
    </div>
  )}
</div>
  );
};

export default Cart;
