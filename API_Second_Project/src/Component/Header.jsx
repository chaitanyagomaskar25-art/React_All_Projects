import React from 'react'

const Header = () => {
  return (
    <header >
    <nav >
      <div className="logo">
        <h1 >ShopSphere</h1>
      </div>
      <ul >
        <li>Home</li>
        <li>Categories</li>
        <li>Deals</li>
        <li>Contact</li>
      </ul>
      <div className="cart-status">
        <span>🛒 Cart (0)</span>
      </div>
    </nav>
  </header>
  )
}

export default Header
