import React, { useRef } from 'react'
import Music from './component/Music'
import "./App.css"

const App = () => {
  const heading = useRef(null)
  return (
    <div>
      <Music />
    </div>
  )
}

export default App
