import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setPending(true)
      try {
        const res = await axios.get(url);
        setData(res.data)
        setPending(false)
      } catch (err) {
        setError(true)
        setPending(false)
      }
    };
    fetchProducts()
  }, []);


  if(pending){
    return <h2>Loading.........</h2>
  }
  if(error){
    return <h2>Please try again!</h2>
  }

  return data
};
