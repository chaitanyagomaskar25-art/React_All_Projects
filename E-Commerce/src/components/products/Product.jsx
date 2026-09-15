import React, { useState } from "react";
import { Heart, Search, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatchState } from "../../context/CartContext";

const Product = ({ searchQuary, products, setSearchQuary }) => {
  const dispatch = useDispatchState();
  const [category, setCategory] = useState("All");
  const filterCard = products
    .filter((product) =>
      category === "All" ? product : product.category === category,
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuary.toLowerCase().trim()),
    );

  const categories = [
    { id: "All", label: "All Products" },
    { id: "beauty", label: "Beauty" },
    { id: "fragrances", label: "Fragrances" },
    { id: "furniture", label: "Furniture" },
    { id: "groceries", label: "Groceries" },
    { id: "home-decoration", label: "Home Decoration" },
    { id: "kitchen-accessories", label: "Kitchen Accessories" },
    { id: "laptops", label: "Laptops" },
    { id: "mens-shirts", label: "Mans Shirt" },
    { id: "mens-shoes", label: "Mens Shoes" },
    { id: "mens-watches", label: "Mens Watches" },
    { id: "mobile-accessories", label: "Electronics" },
    { id: "skin-care", label: "Skin Care" },
    { id: "smartphones", label: "Smartphones" },
    { id: "sports-accessories", label: "Sports" },
    { id: "sunglasses", label: "Sunglasses" },
    { id: "tablets", label: "Tablets" },
    { id: "tops", label: "Tops" },
    { id: "vehicle", label: "Vehicle" },
    { id: "womens-bags", label: "Womens Bags" },
    { id: "womens-dresses", label: "Womens Dresses" },
    { id: "womens-jewellery", label: "Jewellery" },
    { id: "womens-shoes", label: "Womens Shoes" },
    { id: "womens-watches", label: "Womens Watches" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto py-15 px-4 mb-12">
        <div className="p-5 flex items-center gap-3 lg:gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full pb-6">
          {categories.map((cat) => {
            const isActive = category === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`
            px-6 py-2.5 md:px-10 md:py-3.5 
            rounded-full text-[12px] md:text-sm font-bold uppercase tracking-widest
            whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
            border snap-center
            
            ${
              isActive
                ? "bg-slate-950 text-white border-slate-950 scale-105 z-10"
                : "bg-white text-slate-500 border-slate-100 hover:border-slate-950 hover:text-slate-950"
            }
            
            /* Feel */
            active:scale-95 focus:outline-none
          `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filterCard.length > 0 ? (
          /* Grid Container: Directly mapping children here ensures the CSS Grid works perfectly */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filterCard.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col h-full"
              >
                {/* Media Section */}
                <div className="relative aspect-10/13 overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_40px_70px_-15px_rgba(0,0,0,0.12)]">
                  {/* Product Image */}
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                  />

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
                    <button
                      title="Add to Cart"
                      className="flex items-center gap-3 bg-white text-slate-950 px-6 py-3.5 rounded-full font-extrabold text-sm shadow-2xl translate-y-6 group-hover:translate-y-0 transition-all duration-500 hover:bg-rose-50 hover:text-rose-600 active:scale-95"
                      onClick={() =>
                        dispatch({ type: "ADD", payload: product })
                      }
                    >
                      <Heart
                        className='w-4 h-4 transition-colors'
                      />
                      Add to Cart
                    </button>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-black/40 backdrop-blur-lg px-3 py-1.5 rounded-full text-white">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black">{product.rating}</span>
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="mt-8 px-2 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-extrabold text-slate-950 tracking-tighter leading-tight group-hover:text-slate-800 transition-colors line-clamp-2 grow">
                      {product.title}
                    </h3>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Price
                      </span>
                      <span className="text-2xl font-black text-slate-950 tabular-nums">
                        ${product.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2 font-medium mb-6">
                    {product.description}
                  </p>

                  {/* Main CTA - Pushed to bottom */}
                  <div className="mt-auto">
                    <Link to={`/product/${product.id}`}>
                      <button className="flex items-center justify-center gap-2.5 h-14 w-full bg-slate-950 text-white rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-sm">
                        <span className="tracking-tight">View Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Professional No Results State */
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-950">
              No results found
            </h2>
            <p className="text-slate-500 mt-2">
              We couldn't find any matches for{" "}
              <span className="font-bold text-slate-900">"{searchQuary}"</span>
            </p>
            <button
              onClick={() => setSearchQuary("")}
              className="mt-8 text-sm font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
