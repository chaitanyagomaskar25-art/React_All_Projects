import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
     <NavLink to="/">Home</NavLink>
     <NavLink to="/search">Search</NavLink>
     <NavLink to="/login">Login</NavLink>
     <NavLink to="/singup">SingUp</NavLink>
    </div>
  )
}

export default Navbar
