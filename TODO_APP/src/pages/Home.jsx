import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
     <h1>Welcome</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio illum minus ipsam illo nobis inventore sed perspiciatis rem itaque beatae?</p>
     <Link to="todos"><button>See Todos</button></Link>
    </div>
  )
}

export default Home
