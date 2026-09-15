import React, { useState } from "react";
import Product from './Product'
import TopPart from "./TopPart";
import SearchSection from "./SearchSection";
import DATA from "../DATA";

const ProductMain = () => {
  const [products, setProducts] = useState(DATA);
    const [searchQuary, setSearchQuary] = useState("");

  return (
     <div className="min-h-screen bg-[#ffff] px-6 py-20 selection:bg-slate-100">
      <TopPart value={searchQuary} onChange={setSearchQuary}/>      
      <div className="max-w-360 mx-auto">
        <Product searchQuary={searchQuary} products={products} setSearchQuary={setSearchQuary}/>
      </div>
    </div>
  )
}

export default ProductMain
