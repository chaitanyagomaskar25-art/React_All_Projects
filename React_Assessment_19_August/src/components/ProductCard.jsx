import React, { memo, useCallback } from "react";
import { Link } from "react-router";
import { useDispatchContext } from "../context/CartContext";

const ProductCard = memo(({ product }) => {
  const dispatch = useDispatchContext();
  const addToCart = useCallback((product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  },[dispatch]);
  return (
    <div key={product.id}>
      <img width={150} src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <Link to={`product/${product.id}`}>
        <button>View Details</button>
      </Link>
      <br />
      <br />
      <button onClick={() => {
        alert("Product Added to the cart")
        addToCart(product)}}>Add to cart</button>
      <button
        onClick={() =>{
            alert("Product Removed from cart")
          dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
        }}
      >
        Remove from cart
      </button>
    </div>
  );
});

export default ProductCard;
