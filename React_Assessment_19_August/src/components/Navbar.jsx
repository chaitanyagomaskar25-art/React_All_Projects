import React from 'react'
import { Link } from 'react-router'
import {useCartContext} from "../context/CartContext"

const Navbar = () => {
  const cartProduct = useCartContext()
   
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/cart">Cart {cartProduct.length}</Link>
      </nav>
    </div>
  )
}

export default Navbar
