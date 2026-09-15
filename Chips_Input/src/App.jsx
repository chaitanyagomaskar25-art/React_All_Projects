
import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [input, setInput] = useState("")
const [chips, setChips] = useState([])
  const handleKeyDown = (e)=>{
    if(e.key === "Enter" && input.trim() !== ""){
      setChips(prev=>[...prev, input])
      setInput("")
    }
  }
  const handleDelete = (i)=>{
    let newChips = [...chips]
    newChips.splice(i, 1)
    setChips(newChips)
  }

  return (
    <div className="chips-wrapper">
  <h2>Add Interests</h2>
  <div className="input-container">
    {/* Chips are rendered inside the container before the input */}
    {chips.map((c, idx) => (
      <div key={idx} className="chip">
        {c}
        <button className="delete-btn" onClick={() => handleDelete(idx)}>
          &times;
        </button>
      </div>
    ))}
    
    <input 
      className="main-input"
      value={input} 
      onKeyDown={handleKeyDown} 
      onChange={(e) => setInput(e.target.value)} 
      type="text" 
      placeholder={chips.length === 0 ? "Type and press Enter..." : ""} 
    />
  </div>
</div>
  )
}

export default App
