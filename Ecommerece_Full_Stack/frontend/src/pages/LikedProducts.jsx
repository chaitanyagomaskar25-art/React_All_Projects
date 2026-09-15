import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

import { useTheme } from "../context/ThemeContext";

import { toggleLikeProduct } from "../redux/productSlice";
import { getLikedProducts } from "../redux/likedSlice";

const LikedProducts = () => {
  const { likedProducts, loading, error } = useSelector(
    (state) => state.liked
  );

  // Get cart from Redux
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { isDark } = useTheme();

  // Fetch liked products
  useEffect(() => {
    dispatch(getLikedProducts());
  }, [dispatch]);

  // Dynamic Theme Setup
  const theme = useMemo(() => {
    return {
      bg: isDark
        ? "bg-slate-950 text-slate-100"
        : "bg-slate-50 text-slate-900",

      cardBg: isDark
        ? "bg-slate-900/80"
        : "bg-white/80",

      cardBorder: isDark
        ? "border-slate-800"
        : "border-slate-200/80",

      textSecondary: isDark
        ? "text-slate-400"
        : "text-slate-500",

      inputBg: isDark
        ? "bg-slate-950/60"
        : "bg-slate-100/80",

      inputBorder: isDark
        ? "border-slate-800"
        : "border-slate-200",
    };
  }, [isDark]);

  // Loading
  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme.bg}`}
      >
        <p className="font-bold">Loading liked products...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme.bg}`}
      >
        <p className="text-red-500 font-bold">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen pb-24 font-sans relative overflow-hidden transition-colors duration-300 ${theme.bg}`}
    >
      {/* Background Ambient Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 space-y-8 relative z-10">

        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b ${theme.cardBorder}`}
        >
          <div className="space-y-2">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-extrabold tracking-widest uppercase backdrop-blur-md">

              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />

              Saved Collection
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Liked Products
            </h1>

            <p
              className={`text-xs sm:text-sm font-medium ${theme.textSecondary}`}
            >
              Your personal wishlist of saved items ready to explore or purchase.
            </p>
          </div>
        </div>

        {/* Empty State */}

        {likedProducts.length === 0 ? (

          <div
            className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-12 text-center max-w-md mx-auto space-y-5 shadow-2xl my-16 backdrop-blur-xl`}
          >
            <div className="w-20 h-20 rounded-3xl bg-pink-500/10 text-pink-400 flex items-center justify-center text-3xl mx-auto border border-pink-500/20 shadow-inner">
              ❤️
            </div>

            <div className="space-y-1">

              <h3 className="font-extrabold text-lg">
                No Liked Products Yet
              </h3>

              <p
                className={`text-xs font-medium leading-relaxed ${theme.textSecondary}`}
              >
                Explore our store and save items you love to your wishlist.
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

          /* Products Grid */

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {likedProducts.map((l) => {

              const primaryImage =
                l.images?.[0] ||
                "https://via.placeholder.com/400?text=No+Image";

              // Find this product in cart
              const cartItem = cart.find(
                (item) => item._id === l._id
              );

              // Get quantity
              const quantityInCart = cartItem
                ? cartItem.quantity
                : 0;

              return (

                <div
                  key={l._id}
                  className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-5 backdrop-blur-xl flex flex-col justify-between gap-4 transition-all hover:border-indigo-500/30 shadow-lg group`}
                >

                  {/* Image */}

                  <Link
                    to={`/product/${l._id}`}
                    className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 block"
                  >

                    <img
                      src={primaryImage}
                      alt={l.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Heart */}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();

                        dispatch(
                          toggleLikeProduct(l._id)
                        );
                      }}
                      className="absolute top-3 right-3 p-2.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-pink-500 backdrop-blur-md hover:bg-slate-900 transition-all active:scale-95 z-10"
                      title="Unlike product"
                    >
                      ❤️
                    </button>

                  </Link>

                  {/* Product Details */}

                  <div className="space-y-2 flex-1">

                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 inline-block">
                      {l.category || "Wishlist Item"}
                    </span>

                    <Link
                      to={`/product/${l._id}`}
                      className="block hover:text-indigo-400 transition-colors"
                    >
                      <h3 className="font-extrabold text-base line-clamp-1">
                        {l.name}
                      </h3>
                    </Link>

                    <p
                      className={`text-xs font-medium line-clamp-2 ${theme.textSecondary}`}
                    >
                      {l.description}
                    </p>

                  </div>

                  {/* Price & Cart */}

                  <div className="pt-3 border-t border-slate-800/60 space-y-3">

                    <span className="text-xl font-black text-indigo-400 block">
                      ${Number(l.price).toFixed(2)}
                    </span>

                    <div className="grid grid-cols-2 gap-2">

                      {/* View Details */}

                      <Link
                        to={`/product/${l._id}`}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${theme.cardBorder} hover:bg-slate-800/50 text-center flex items-center justify-center`}
                      >
                        View Details
                      </Link>

                      {/* Cart */}

                      {quantityInCart > 0 ? (

                        <div
                          className={`flex items-center justify-center gap-1 border px-2 py-1.5 rounded-xl shadow-inner ${theme.inputBg} ${theme.inputBorder}`}
                        >

                          {/* Decrease */}

                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                decreaseQuantity(l._id)
                              )
                            }
                            className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                          >
                            −
                          </button>

                          {/* Quantity */}

                          <span className="font-extrabold text-xs px-2">
                            {quantityInCart}
                          </span>

                          {/* Increase */}

                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                increaseQuantity(l._id)
                              )
                            }
                            className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                          >
                            +
                          </button>

                        </div>

                      ) : (

                        /* Add To Cart */

                        <button
                          type="button"
                          onClick={() =>
                            dispatch(addToCart(l))
                          }
                          className="px-4 py-2.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
                        >
                          Add to Cart
                        </button>

                      )}

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        )}
      </div>
    </div>
  );
};

export default LikedProducts;

