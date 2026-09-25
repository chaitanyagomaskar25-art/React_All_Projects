import React from "react";
import { useCartContext, useDispatchContext } from "../context/CartContext";

const Cart = () => {
  const products = useCartContext();
  const dispatch = useDispatchContext()
  return (
    <div>
      {products.length > 0 ? (
        products.map((p) => (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <img src={p.image} alt={p.title} />
            <button onClick={()=>{
                console.log("clicked")
                dispatch({type: "INCREASE", payload: p.id})}}>Increase</button>
            <p>{p.quantity}</p>
            <button onClick={()=>dispatch({type:"DECREASE", payload: p.id})}>Decrease</button>
          </div>
        ))
      ) : (
        <p>No Product are in cart</p>
      )}
    </div>
  );
};

export default Cart;
