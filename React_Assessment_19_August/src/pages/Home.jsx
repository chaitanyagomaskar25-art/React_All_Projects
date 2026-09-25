import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router";
import { useDebounced } from "../hooks/useDebounced";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounced(search);

  const data = useFetch("https://fakestoreapi.com/products");
  if (data.props) {
    return data.props.children;
  }
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <div>
      <Hero />
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search......."
        />
      </div>
      <h2>Products</h2>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h3>No products available</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
