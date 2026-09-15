import React from 'react'
import { Link } from "react-router-dom"; // Import Link

const Logo = () => {
  return (
     <div>
            <Link to="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              Chaitanya<span className="text-blue-500">Gomaskar</span>
            </Link>
          </div>
  )
}

export default Logo
