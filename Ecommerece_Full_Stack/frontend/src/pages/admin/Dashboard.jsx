import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { Link } from "react-router";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Derived Admin Metrics & Calculations
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const totalInventoryValue = products.reduce((acc, curr) => acc + (Number(curr.price || 0) * Number(curr.stock || 1)), 0);
    const lowStockCount = products.filter((p) => (p.stock ?? 0) < 5).length;
    const outOfStockCount = products.filter((p) => (p.stock ?? 0) === 0).length;
    const avgPrice = totalProducts > 0 
      ? products.reduce((acc, curr) => acc + Number(curr.price || 0), 0) / totalProducts 
      : 0;

    // Categories breakdown
    const categoriesMap = products.reduce((acc, curr) => {
      const cat = curr.category || "Uncategorized";
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});

    return {
      totalProducts,
      totalInventoryValue,
      lowStockCount,
      outOfStockCount,
      avgPrice,
      categoriesCount: Object.keys(categoriesMap).length,
      categoriesMap
    };
  }, [products]);

  return (
    <div className="min-h-screen pb-16 font-sans relative overflow-x-hidden bg-slate-950 text-slate-100">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[300px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8 relative z-10">
        
        {/* Header Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-md border border-indigo-500/20 inline-block mb-1">
              Admin Portal
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white">
              System Dashboard
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(fetchProducts())}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
            >
              🔄 Refresh Data
            </button>
            <Link
              to="/products"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md shadow-indigo-500/20 transition-all active:scale-95"
            >
              View Shop →
            </Link>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 bg-slate-900/60 border border-slate-800 rounded-2xl" />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold flex items-center gap-3">
            <span>⚠️</span>
            <span>Failed to load product metrics: {typeof error === "string" ? error : error.message || "Error"}</span>
          </div>
        )}

        {/* Key Metrics Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Total Products */}
            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-2xl p-5 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-extrabold uppercase tracking-wider">Total Products</span>
                <span className="text-indigo-400 text-base">📦</span>
              </div>
              <div className="text-3xl font-black text-white">{stats.totalProducts}</div>
              <p className="text-[11px] font-medium text-slate-400">
                Across {stats.categoriesCount} categories
              </p>
            </div>

            {/* Card 2: Inventory Value */}
            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-2xl p-5 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-extrabold uppercase tracking-wider">Est. Inventory Value</span>
                <span className="text-emerald-400 text-base">💰</span>
              </div>
              <div className="text-3xl font-black text-emerald-400">
                ${stats.totalInventoryValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] font-medium text-slate-400">
                Avg price: ${stats.avgPrice.toFixed(2)}
              </p>
            </div>

            {/* Card 3: Low Stock Warning */}
            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-2xl p-5 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-extrabold uppercase tracking-wider">Low Stock Alert</span>
                <span className="text-amber-400 text-base">⚠️</span>
              </div>
              <div className="text-3xl font-black text-amber-400">{stats.lowStockCount}</div>
              <p className="text-[11px] font-medium text-slate-400">
                Items with stock &lt; 5
              </p>
            </div>

            {/* Card 4: Out of Stock */}
            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl rounded-2xl p-5 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-extrabold uppercase tracking-wider">Out of Stock</span>
                <span className="text-red-400 text-base">🚫</span>
              </div>
              <div className="text-3xl font-black text-red-400">{stats.outOfStockCount}</div>
              <p className="text-[11px] font-medium text-slate-400">
                Requires immediate restock
              </p>
            </div>

          </div>
        )}

        {/* Detailed Inventory Table Deck */}
        {!loading && (
          <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <h3 className="text-base font-extrabold text-white">Product Inventory Catalog</h3>
                <p className="text-xs text-slate-400">Overview of all active catalog entries</p>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                {products.length} Items Total
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-950/60 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 rounded-l-xl">Product</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4 rounded-r-xl text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-8 text-center text-slate-500 font-medium">
                        No products available in database.
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => {
                      const stock = product.stock ?? 0;
                      return (
                        <tr key={product._id || product.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-white flex items-center gap-3">
                            {product.images?.[0] ? (
                              <img
                                src={product.images[0]}
                                alt=""
                                className="w-8 h-8 rounded-lg object-cover border border-slate-800 shrink-0"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 shrink-0">
                                📷
                              </div>
                            )}
                            <span className="truncate max-w-xs">{product.name}</span>
                          </td>
                          <td className="py-3 px-4 uppercase text-[10px] font-extrabold text-indigo-400">
                            {product.category || "General"}
                          </td>
                          <td className="py-3 px-4 font-extrabold text-slate-200">
                            ${Number(product.price || 0).toFixed(2)}
                          </td>
                          <td className="py-3 px-4 font-medium">{stock} units</td>
                          <td className="py-3 px-4 text-right">
                            <span
                              className={`inline-block text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                                stock > 5
                                  ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                                  : stock > 0
                                  ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                                  : "text-red-400 bg-red-500/10 border-red-500/20"
                              }`}
                            >
                              {stock > 5 ? "In Stock" : stock > 0 ? "Low Stock" : "Out of Stock"}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;