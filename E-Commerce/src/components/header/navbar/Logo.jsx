import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="text-2xl font-bold tracking-tight">
      <span className="text-gray-900">Shop</span>
      <span className="text-blue-600">Vibe</span>
    </Link>
  )
}

export default Logo