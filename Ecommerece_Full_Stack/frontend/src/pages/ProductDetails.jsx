import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router";

import {
  getProductDetail,
  toggleLikeProduct,
} from "../redux/productSlice";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

import { getLikedProducts } from "../redux/likedSlice";

import { useAuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedIn = useAuthContext();
  const { isDark } = useTheme();

  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  // -----------------------------
  // REDUX STATE
  // -----------------------------

  const {
    productDetails,
    loading,
    error,
  } = useSelector((state) => state.products);

  const cart = useSelector(
    (state) => state.cart || []
  );

  const likedProducts = useSelector(
    (state) => state.liked?.likedProducts || []
  );

  // -----------------------------
  // FETCH PRODUCT DETAILS
  // -----------------------------

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  // -----------------------------
  // FETCH LIKED PRODUCTS
  // -----------------------------

  useEffect(() => {
    dispatch(getLikedProducts());
  }, [dispatch]);

  // Reset image when product changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [productDetails]);

  // -----------------------------
  // THEME
  // -----------------------------

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

  // -----------------------------
  // PROTECTED ACTION
  // -----------------------------

  const handleProtectedAction = (callback) => {
    if (!loggedIn) {
      navigate("/login");
      return;
    }

    callback();
  };

  // -----------------------------
  // CART DATA
  // -----------------------------

  const cartItem = cart.find(
    (item) => item._id === productDetails?._id
  );

  const quantityInCart = cartItem
    ? cartItem.quantity
    : 0;

  // -----------------------------
  // LIKE DATA
  // -----------------------------

  const isLiked = likedProducts.some(
    (item) => item._id === productDetails?._id
  );

  // -----------------------------
  // IMAGES
  // -----------------------------

  const images = productDetails?.images?.length
    ? productDetails.images
    : ["https://via.placeholder.com/400?text=No+Image"];

  // -----------------------------
  // DATE
  // -----------------------------

  const formattedDate = useMemo(() => {
    if (!productDetails?.createdAt) {
      return null;
    }

    return new Date(
      productDetails.createdAt
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, [productDetails?.createdAt]);

  // -----------------------------
  // LOADING
  // -----------------------------

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme.bg}`}
      >
        <p className="font-bold">
          Loading product...
        </p>
      </div>
    );
  }

  // -----------------------------
  // ERROR
  // -----------------------------

  if (error) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme.bg}`}
      >
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold">
            Product Not Found
          </h2>

          <p
            className={`text-sm ${theme.textSecondary}`}
          >
            {typeof error === "string"
              ? error
              : error?.message ||
                "Failed to load product details."}
          </p>

          <Link
            to="/products"
            className="inline-block px-4 py-2 rounded-xl bg-indigo-500 text-white font-bold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // -----------------------------
  // NO PRODUCT
  // -----------------------------

  if (!productDetails) {
    return null;
  }

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div
      className={`min-h-screen pb-12 font-sans relative overflow-x-hidden transition-colors duration-300 ${theme.bg}`}
    >

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[250px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 space-y-4 relative z-10">

        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">

          <Link
            to="/products"
            className="hover:text-indigo-400 transition-colors"
          >
            Products
          </Link>

          <span>/</span>

          <span className="text-indigo-400 truncate max-w-[200px]">
            {productDetails.name}
          </span>

        </div>

        {/* Main Product */}

        <div
          className={`${theme.cardBg} ${theme.cardBorder} rounded-2xl border p-4 sm:p-6 backdrop-blur-xl shadow-xl grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start`}
        >

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="md:col-span-5 space-y-3 w-full">

            {/* Main Image */}

            <div className="relative w-full aspect-square max-h-[200px] sm:max-h-[260px] md:max-h-[320px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md mx-auto flex items-center justify-center">

              <img
                src={images[selectedImageIndex]}
                alt={productDetails.name}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Featured */}

              {productDetails.isFeatured && (
                <span className="absolute top-2.5 left-2.5 text-[9px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded-full backdrop-blur-md">
                  ★ Featured
                </span>
              )}

              {/* Like Button */}

              <button
                type="button"
                onClick={() =>
                  handleProtectedAction(() =>
                    dispatch(
                      toggleLikeProduct(
                        productDetails._id
                      )
                    )
                  )
                }
                className="absolute top-2.5 right-2.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800 text-pink-500 backdrop-blur-md hover:bg-slate-900 transition-all active:scale-95 shadow-md z-10"
                title={
                  isLiked
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
              >
                <span className="text-xs leading-none">
                  {isLiked ? "❤️" : "🤍"}
                </span>
              </button>

            </div>

            {/* Thumbnails */}

            <div className="flex items-center justify-start gap-2.5 overflow-x-auto pt-1 pb-1">

              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex(index)
                  }
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-950 ${
                    selectedImageIndex === index
                      ? "border-indigo-500 scale-105 shadow-md"
                      : "border-slate-800 opacity-60 hover:opacity-100"
                  }`}
                >

                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                </button>
              ))}

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="md:col-span-7 space-y-4 w-full">

            {/* Category + Stock */}

            <div className="flex flex-wrap items-center justify-between gap-2">

              <span className="text-[9px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20">
                {productDetails.category || "General"}
              </span>

              {productDetails.stock !== undefined && (
                <span
                  className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                    productDetails.stock > 0
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : "text-red-400 bg-red-500/10 border-red-500/20"
                  }`}
                >
                  {productDetails.stock > 0
                    ? `In Stock (${productDetails.stock})`
                    : "Out of Stock"}
                </span>
              )}

            </div>

            {/* Title + Price */}

            <div className="flex flex-wrap items-baseline justify-between gap-2">

              <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                {productDetails.name}
              </h1>

              <span className="text-2xl font-black text-indigo-400">
                $
                {Number(
                  productDetails.price || 0
                ).toFixed(2)}
              </span>

            </div>

            {/* Rating */}

            <div className="flex items-center gap-2 text-xs">

              <span className="text-amber-400 font-extrabold text-[11px] flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                ★ {productDetails.ratingsAverage ?? 0}
              </span>

              <span
                className={`text-[11px] font-medium ${theme.textSecondary}`}
              >
                (
                {productDetails.ratingsQuantity ?? 0}
                reviews)
              </span>

            </div>

            {/* Description */}

            <div
              className={`pt-2.5 border-t ${theme.cardBorder}`}
            >
              <p
                className={`text-xs font-medium leading-relaxed ${theme.textSecondary}`}
              >
                {productDetails.description}
              </p>
            </div>

            {/* Product ID + Date */}

            <div
              className={`pt-2.5 border-t ${theme.cardBorder} flex items-center justify-between text-[11px] ${theme.textSecondary}`}
            >
              <span>
                ID:
                <code className="font-mono text-slate-300 ml-1">
                  {productDetails._id?.slice(-8)}
                </code>
              </span>

              {formattedDate && (
                <span>
                  Listed: {formattedDate}
                </span>
              )}
            </div>

            {/* =========================
                CART ACTIONS
            ========================= */}

            <div
              className={`pt-3 border-t ${theme.cardBorder} space-y-2`}
            >

              {quantityInCart > 0 ? (

                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/20">

                  <span
                    className={`text-xs font-extrabold uppercase tracking-wider ${theme.textSecondary}`}
                  >
                    In Cart
                  </span>

                  <div
                    className={`flex items-center gap-1.5 border px-2 py-1 rounded-lg shadow-inner ${theme.inputBg} ${theme.inputBorder}`}
                  >

                    {/* Decrease */}

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(
                            productDetails._id
                          )
                        )
                      }
                      className="w-7 h-7 rounded-md bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                    >
                      −
                    </button>

                    {/* Quantity */}

                    <span className="font-extrabold text-xs px-2.5">
                      {quantityInCart}
                    </span>

                    {/* Increase */}

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          increaseQuantity(
                            productDetails._id
                          )
                        )
                      }
                      className="w-7 h-7 rounded-md bg-indigo-500/20 text-indigo-400 font-black hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center text-xs active:scale-95"
                    >
                      +
                    </button>

                  </div>

                </div>

              ) : (

                <button
                  type="button"
                  disabled={productDetails.stock === 0}
                  onClick={() =>
                    handleProtectedAction(() =>
                      dispatch(
                        addToCart(productDetails)
                      )
                    )
                  }
                  className={`w-full py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-md transition-all active:scale-95 ${
                    productDetails.stock === 0
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                      : "text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  }`}
                >
                  {productDetails.stock === 0
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>

              )}

              {/* Back */}

              <Link
                to="/products"
                className={`w-full block py-2 rounded-xl text-xs font-bold text-center border transition-all ${theme.cardBorder} hover:bg-slate-800/50`}
              >
                ← Back to Catalog
              </Link>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
