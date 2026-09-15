import React from "react";

const Cart = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <img src="" alt="" />
        <div>
          <h3>Image title</h3>
          <p>Price</p>
          <div>
            <input type="number" min="1" />
            <button>Update</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
