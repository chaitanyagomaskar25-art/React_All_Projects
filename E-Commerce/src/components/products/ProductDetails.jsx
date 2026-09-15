import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const showProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    showProducts();
  }, [id]);
  if (!product)
    return (
      <div className="h-175 text-center">
        <p >Loading...</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-slate-900">
      {/* Navigation */}
      <Link to="/product" className="inline-block mb-6">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 transition-colors bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-indigo-600 shadow-sm">
          <ArrowLeft size={18} />
          Go back
        </button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image Section - Modified for <1024px logic */}
        <div className="flex justify-center lg:block">
          <div
            className="bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-slate-100 
                    w-100 h-100 lg:w-full lg:h-auto"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full lg:h-auto object-contain mix-blend-multiply transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* Primary Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {product.title}
          </h1>

          <div className="flex items-baseline gap-4 mb-6">
            <h3 className="text-3xl font-semibold text-indigo-600">
              ₹{product.price}
            </h3>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            {product.description}
          </p>

          <div className="mb-8">
            <p
              className={`text-sm font-medium ${product.stock < 10 ? "text-red-500" : "text-slate-500"}`}
            >
              {product.stock > 0
                ? `Only ${product.stock} items left in stock`
                : "Out of stock"}
            </p>
          </div>

          {/* Extra Details */}
          <div className="border-t border-slate-200 pt-8">
            <h6 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              Extra Details:{" "}
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-sm font-medium">
                <span className="text-slate-400">Warranty:</span>{" "}
                {product.warrantyInformation}
              </p>
              <p className="text-sm font-medium">
                <span className="text-slate-400">Shipping Time:</span>{" "}
                {product.shippingInformation}
              </p>
              <p className="text-sm font-medium">
                <span className="text-slate-400">Availability:</span>{" "}
                {product.availabilityStatus}
              </p>
              <p className="text-sm font-medium">
                <span className="text-slate-400">Return Policy:</span>{" "}
                {product.returnPolicy}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          User Reviews for this product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.reviews.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm"
              >
                <h5 className="font-bold text-slate-800 mb-2">
                  <span className="text-indigo-600">Rating {item.rating}</span>
                </h5>
                <p className="text-slate-600 mb-4 italic">"{item.comment}"</p>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>Date: {item.date}</p>
                  <p>User Name: {item.reviewerName}</p>
                  <p>User Email: {item.reviewerEmail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meta Section */}
      <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-2xl">
        <div className="space-y-2 text-sm text-slate-500">
          <p>Created At: {product.meta.createdAt}</p>
          <p>Updated At: {product.meta.updatedAt}</p>
          <p>Barcode: {product.meta.barcode}</p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <img
            src={product.meta.qrCode}
            alt="QRCODE"
            className="w-24 h-24 border-2 border-white rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
