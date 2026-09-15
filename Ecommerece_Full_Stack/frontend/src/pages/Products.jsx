import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  toggleLikeProduct,
} from "../redux/productSlice";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cartSlice";

import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { useDebounced } from "../hooks/useDebounced";

function Products() {
  const dispatch = useDispatch();
  const loggedIn = useAuthContext();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // =========================
  // SEARCH / FILTER / SORT
  // =========================

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(5000);

  const debouncedSearch = useDebounced(searchQuery);

  // =========================
  // QUICK VIEW
  // =========================

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // =========================
  // TOAST
  // =========================

  const [toast, setToast] = useState(null);

  // =========================
  // REDUX STATE
  // =========================

  const {
    products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const cart = useSelector((state) => state.cart);

  // =========================
  // DYNAMIC MAX PRICE
  // =========================

  useEffect(() => {
    if (products && products.length > 0) {
      const highestPrice = Math.max(
        ...products.map((p) => Number(p.price) || 0)
      );

      setMaxPrice(Math.ceil(highestPrice));
    }
  }, [products]);

  // =========================
  // THEME
  // =========================

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

  // =========================
  // TOAST
  // =========================

  const triggerToast = (
    title,
    message,
    actionLabel = null,
    actionPath = null
  ) => {
    setToast({
      title,
      message,
      actionLabel,
      actionPath,
    });

    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // =========================
  // LOGIN GUARD
  // =========================

  const handleProtectedAction = (actionCallback) => {
    if (!loggedIn) {
      navigate("/login");
      return;
    }

    actionCallback();
  };

  // =========================
  // CATEGORIES
  // =========================

  // const categories = [
  //   "All",
  //   "Electronics",
  //   "Books",
  //   "Clothing",
  //   "Shoes",
  //   "Home",
  //   "Beauty",
  //   "Sports",
  //   "Toys",
  //   "Grocery",
  //   "Accessories",
  // ];
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
}, [dispatch]);


  // =========================
  // FETCH PRODUCTS
  // =========================

  useEffect(() => {
    dispatch(
      fetchProducts({
        name: debouncedSearch,
        category:
          selectedCategory === "All"
            ? ""
            : selectedCategory,
      })
    );
  }, [
    debouncedSearch,
    selectedCategory,
    dispatch,
  ]);

  // =========================
  // FRONTEND PRICE + SORT
  // =========================

  const filteredAndSortedProducts = useMemo(() => {
    return (products || [])
      .filter((product) => {
        return Number(product.price) <= maxPrice;
      })
      .sort((a, b) => {
        if (sortBy === "low-high") {
          return (
            Number(a.price) -
            Number(b.price)
          );
        }

        if (sortBy === "high-low") {
          return (
            Number(b.price) -
            Number(a.price)
          );
        }

        if (sortBy === "rating") {
          return (
            (b.ratingsAverage || 0) -
            (a.ratingsAverage || 0)
          );
        }

        return 0;
      });
  }, [
    products,
    maxPrice,
    sortBy,
  ]);

  // =========================
  // RENDER
  // =========================

  return (
    <div
      className={`min-h-screen pb-24 font-sans relative overflow-hidden transition-colors duration-300 ${theme.bg}`}
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* ================= TOAST ================= */}

      {toast && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <div
            className={`${theme.cardBg} ${theme.cardBorder} border rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-start gap-3 border-l-4 border-l-indigo-500`}
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-base shrink-0 border border-indigo-500/30">
              ✨
            </div>

            <div className="flex-1">
              <h4 className="font-extrabold text-xs tracking-wider uppercase text-indigo-400">
                {toast.title}
              </h4>

              <p
                className={`text-xs mt-0.5 font-medium leading-relaxed ${theme.textSecondary}`}
              >
                {toast.message}
              </p>

              {toast.actionLabel &&
                toast.actionPath && (
                  <Link
                    to={toast.actionPath}
                    className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-indigo-400 hover:underline"
                  >
                    {toast.actionLabel} →
                  </Link>
                )}
            </div>

            <button
              onClick={() =>
                setToast(null)
              }
              className="text-xs text-slate-400 hover:text-white p-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ================= MAIN ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 space-y-8 relative z-10">

        {/* ================= HEADER ================= */}

        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b ${theme.cardBorder}`}
        >
          <div className="space-y-2">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-extrabold tracking-widest uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Live Inventory
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explore Products
            </h1>

            <p
              className={`text-sm sm:text-base max-w-xl font-medium leading-relaxed ${theme.textSecondary}`}
            >
              Premium Hardware, High-Performance Accessories & Next-Gen Components.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-extrabold tracking-wide flex items-center gap-2 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              {filteredAndSortedProducts.length} Items Available
            </div>
          </div>
        </div>

        {/* ================= CONTROLS ================= */}

        <div
          className={`${theme.cardBg} ${theme.cardBorder} p-5 sm:p-6 rounded-3xl border shadow-2xl backdrop-blur-2xl space-y-5`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            {/* SEARCH */}

            <div className="md:col-span-5 relative">

              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 text-sm">
                🔍
              </div>

              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className={`w-full pl-11 pr-10 py-3.5 rounded-2xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${theme.inputBg} ${theme.inputBorder} placeholder:text-slate-500 shadow-inner`}
              />

              {searchQuery && (
                <button
                  onClick={() =>
                    setSearchQuery("")
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* PRICE */}

            <div className="md:col-span-4 px-2 space-y-1.5">

              <div className="flex justify-between items-center text-xs font-bold">
                <span className={theme.textSecondary}>
                  Max Budget Limit
                </span>

                <span className="text-indigo-400 font-extrabold bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20">
                  ${maxPrice}
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    Number(e.target.value)
                  )
                }
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* SORT */}

            <div className="md:col-span-3">

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className={`w-full px-4 py-3.5 rounded-2xl border text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer shadow-sm ${theme.inputBg} ${theme.inputBorder}`}
              >
                <option value="default">
                  Sort: Recommended
                </option>

                <option value="low-high">
                  Price: Low to High
                </option>

                <option value="high-low">
                  Price: High to Low
                </option>

                <option value="rating">
                  Top Rated
                </option>
              </select>

            </div>
          </div>

          {/* CATEGORIES */}

          <div
            className={`flex items-center gap-2 overflow-x-auto pt-3 border-t ${theme.cardBorder} scrollbar-none`}
          >
            {categories.map((cat) => {

              const isActive =
                selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(cat)
                  }
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                      : `${theme.inputBg} ${theme.textSecondary} border ${theme.inputBorder} hover:bg-white/10`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(
              (n) => (
                <div
                  key={n}
                  className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-4 space-y-4 animate-pulse backdrop-blur-xl`}
                >
                  <div className="aspect-square bg-slate-800/60 rounded-2xl" />

                  <div className="h-4 bg-slate-800/60 rounded-lg w-2/3" />

                  <div className="h-3 bg-slate-800/60 rounded-lg w-full" />

                  <div className="h-10 bg-slate-800/60 rounded-xl" />
                </div>
              )
            )}
          </div>
        )}

        {/* ================= ERROR ================= */}

        {error && (
          <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-400 text-center max-w-md mx-auto my-12 backdrop-blur-xl">
            <span className="text-3xl block mb-2">
              ⚠️
            </span>

            <p className="font-bold text-sm">
              Catalog Connection Lost
            </p>

            <p className="text-xs opacity-80 mt-1 font-medium">
              {error}
            </p>
          </div>
        )}

        {/* ================= PRODUCTS ================= */}

        {!loading && !error && (
          <main>

            {filteredAndSortedProducts.length ===
            0 ? (
              <div
                className={`${theme.cardBg} ${theme.cardBorder} rounded-3xl border p-12 text-center max-w-md mx-auto space-y-4 shadow-2xl my-12 backdrop-blur-xl`}
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl mx-auto border border-indigo-500/20">
                  🔎
                </div>

                <h3 className="font-bold text-base">
                  No Matching Products
                </h3>

                <p
                  className={`text-xs font-medium leading-relaxed ${theme.textSecondary}`}
                >
                  Try adjusting your keywords or clearing the filter settings.
                </p>

                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSortBy("default");
                    setMaxPrice(5000);
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-md active:scale-95"
                >
                  Reset Filters
                </button>
              </div>
            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {filteredAndSortedProducts.map(
                  (product) => {

                    // ================= CART =================

                    const cartItem =
                      cart.find(
                        (item) =>
                          item._id ===
                          product._id
                      );

                    const quantityInCart =
                      cartItem
                        ? cartItem.quantity
                        : 0;

                    // ================= LIKE =================

                    const isLiked =
                      product.isLiked === true;

                    // ================= IMAGE =================

                    const primaryImage =
                      product.images?.[0] ||
                      "https://via.placeholder.com/400?text=No+Image";

                    return (

                      <div
                        key={product._id}
                        className={`${theme.cardBg} ${theme.cardBorder} group relative rounded-3xl border p-4 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/40`}
                      >

                        {/* IMAGE */}

                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-slate-800/50">

                          <img
                            src={primaryImage}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />

                          {/* DETAILS */}

                          <Link
                            to={`/product/${product._id}`}
                            className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-indigo-600 text-white text-xs font-bold backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-lg flex items-center gap-1 z-10"
                          >
                            Details →
                          </Link>

                          {/* LIKE */}

                          <button
                            onClick={() =>
                              handleProtectedAction(
                                () => {
                                  dispatch(
                                    toggleLikeProduct(
                                      product._id
                                    )
                                  );

                                  triggerToast(
                                    isLiked
                                      ? "Wishlist Updated"
                                      : "Added to Wishlist",
                                    `"${product.name}" ${
                                      isLiked
                                        ? "removed from"
                                        : "saved to"
                                    } wishlist.`,
                                    "Wishlist",
                                    "/liked-products"
                                  );
                                }
                              )
                            }
                            className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md transition-all hover:scale-110 active:scale-95 border border-white/10 text-white shadow-lg z-10"
                          >
                            <span className="text-xs leading-none">
                              {isLiked
                                ? "❤️"
                                : "🤍"}
                            </span>
                          </button>

                          {/* QUICK VIEW */}

                          <button
                            onClick={() => {
                              setQuickViewProduct(
                                product
                              );
                              setSelectedImageIndex(
                                0
                              );
                            }}
                            className="absolute inset-x-3 bottom-3 py-2.5 rounded-xl bg-slate-950/90 hover:bg-indigo-600 text-white text-xs font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 text-center border border-white/10 shadow-2xl z-10 active:scale-95"
                          >
                            Quick Specs
                          </button>

                        </div>

                        {/* PRODUCT INFO */}

                        <div className="space-y-3 flex-grow flex flex-col justify-between">

                          <div className="space-y-1.5">

                            <div className="flex items-center justify-between text-xs">

                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                                {product.category ||
                                  "General"}
                              </span>

                              {product.ratingsAverage && (
                                <span className="text-amber-400 font-extrabold text-xs flex items-center gap-1">
                                  ★{" "}
                                  {product.ratingsAverage}
                                </span>
                              )}

                            </div>

                            <Link
                              to={`/product/${product._id}`}
                              className="font-extrabold text-base line-clamp-1 group-hover:text-indigo-400 transition-colors block"
                            >
                              {product.name}
                            </Link>

                            {product.description && (
                              <p
                                className={`text-xs font-medium line-clamp-2 leading-relaxed ${theme.textSecondary}`}
                              >
                                {product.description}
                              </p>
                            )}

                          </div>

                          {/* PRICE / CART */}

                          <div
                            className={`pt-3 border-t flex items-center justify-between gap-2 ${theme.cardBorder}`}
                          >

                            <div>

                              <span
                                className={`text-[10px] uppercase tracking-widest block font-extrabold ${theme.textSecondary}`}
                              >
                                Price
                              </span>

                              <span className="text-lg font-black text-indigo-400">
                                $
                                {Number(
                                  product.price
                                ).toFixed(2)}
                              </span>

                            </div>

                            {/* QUANTITY */}

                            {quantityInCart > 0 ? (

                              <div
                                className={`flex items-center gap-1 border px-2 py-1.5 rounded-xl shadow-inner ${theme.inputBg} ${theme.inputBorder}`}
                              >

                                <button
                                  onClick={() =>
                                    dispatch(
                                      decreaseQuantity(
                                        product._id
                                      )
                                    )
                                  }
                                  className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                                >
                                  −
                                </button>

                                <span className="font-extrabold text-xs px-2">
                                  {quantityInCart}
                                </span>

                                <button
                                  onClick={() =>
                                    dispatch(
                                      increaseQuantity(
                                        product._id
                                      )
                                    )
                                  }
                                  className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                                >
                                  +
                                </button>

                              </div>

                            ) : (

                              <button
                                onClick={() =>
                                  handleProtectedAction(
                                    () => {
                                      dispatch(
                                        addToCart(
                                          product
                                        )
                                      );

                                      triggerToast(
                                        "Cart Updated",
                                        `"${product.name}" added.`
                                      );
                                    }
                                  )
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
                  }
                )}

              </div>
            )}

          </main>
        )}


        {quickViewProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() =>
              setQuickViewProduct(null)
            }
          >

            <div
              onClick={(e) =>
                e.stopPropagation()
              }
              className={`relative max-w-lg w-full h-full border-l p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col justify-between ${theme.cardBg} ${theme.cardBorder}`}
            >

              <div className="space-y-5">

                {/* HEADER */}

                <div
                  className={`flex items-center justify-between border-b pb-4 ${theme.cardBorder}`}
                >

                  <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest">
                    Quick Product Preview
                  </span>

                  <button
                    onClick={() =>
                      setQuickViewProduct(null)
                    }
                    className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold text-xs transition-colors"
                  >
                    ✕
                  </button>

                </div>

                {/* IMAGE */}

                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">

                  <img
                    src={
                      quickViewProduct.images?.[
                        selectedImageIndex
                      ] ||
                      quickViewProduct.images?.[0] ||
                      "https://via.placeholder.com/400?text=No+Image"
                    }
                    alt={
                      quickViewProduct.name
                    }
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* IMAGE THUMBNAILS */}

                {quickViewProduct.images &&
                  quickViewProduct.images.length >
                    1 && (

                    <div className="flex items-center gap-2 overflow-x-auto pb-2">

                      {quickViewProduct.images.map(
                        (img, idx) => (

                          <button
                            key={idx}
                            onClick={() =>
                              setSelectedImageIndex(
                                idx
                              )
                            }
                            className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                              selectedImageIndex ===
                              idx
                                ? "border-indigo-500 scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >

                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover"
                            />

                          </button>
                        )
                      )}

                    </div>
                  )}

                {/* DETAILS */}

                <div className="space-y-2">

                  <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    {quickViewProduct.category ||
                      "General"}
                  </span>

                  <h3 className="text-2xl font-black">
                    {quickViewProduct.name}
                  </h3>

                  <p
                    className={`text-xs font-medium leading-relaxed ${theme.textSecondary}`}
                  >
                    {
                      quickViewProduct.description
                    }
                  </p>

                </div>

              </div>

              {/* QUICK VIEW ACTIONS */}

              <div
                className={`pt-6 border-t space-y-4 ${theme.cardBorder}`}
              >

                <div className="flex items-center justify-between">

                  <span
                    className={`text-xs font-extrabold uppercase tracking-widest ${theme.textSecondary}`}
                  >
                    Total Price
                  </span>

                  <span className="text-3xl font-black text-indigo-400">
                    $
                    {Number(
                      quickViewProduct.price
                    ).toFixed(2)}
                  </span>

                </div>

                <div className="flex gap-3">

                  <Link
                    to={`/product/${quickViewProduct._id}`}
                    className={`flex-1 py-3 rounded-2xl text-xs font-bold text-center border hover:bg-white/5 transition-colors ${theme.cardBorder}`}
                  >
                    Full Details
                  </Link>

                  <button
                    onClick={() =>
                      handleProtectedAction(
                        () => {
                          dispatch(
                            addToCart(
                              quickViewProduct
                            )
                          );

                          triggerToast(
                            "Cart Updated",
                            `"${quickViewProduct.name}" added to cart.`
                          );

                          setQuickViewProduct(
                            null
                          );
                        }
                      )
                    }
                    className="flex-1 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Products;
