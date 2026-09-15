import React from 'react'

const SearchSection = ({input, setInput, showResults, setShowResults, recipe}) => {
  return (
    <div className="search-wrapper">
        <input
          className="search-input"
          onBlur={() => setTimeout(() => setShowResults(false), 200)} // Small delay to allow clicking a result
          onFocus={() => setShowResults(true)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search recipes..."
        />
        
        {showResults && recipe.length > 0 && (
          <div className="results-container">
            {recipe.map((r) => (
              <span className="result" key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
    </div>
  )
}

export default SearchSection
