import React from 'react'
import "./App.css"
import { fetchPhotos } from './api/mediaApi'
const App = () => {
  
  return (
    <div className='h-screen w-full text-white bg-gray-950'>
      <button onClick={()=> fetchPhotos('cat')}>Get Photos</button>
    </div>
  )
}

export default App
