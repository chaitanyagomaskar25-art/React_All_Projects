import React, { useEffect, useState } from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";

const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [cache, setCache] = useState({});
  // cache => used to make optimized API calls and works on when you called API and get data and whenever you erase data is again makes API calls but if you are using cache it does not make API calls it returns matched data from cache state.

  const fetchdata = async () => {
    if (cache[input]) {
      setRecipe(cache[input]);
      return;
    }
    try {
      const responce = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`,
    );
    const data = await responce.json();
    setRecipe(data.recipes);
    setCache((prev) => ({ ...prev, [input]: data.recipes }));

    } catch (error) {
      throw new Error("Network Error");
    }
  };
  useEffect(() => {
    const timer = setTimeout(fetchdata, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div>
      <SearchSection input={input}  setInput={setInput} showResults={showResults} setShowResults={setShowResults} recipe={recipe}/>
    </div>
  );
};

export default App;
