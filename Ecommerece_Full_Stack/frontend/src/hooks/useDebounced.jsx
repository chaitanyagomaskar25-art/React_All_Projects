import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const useDebounced = (value, delay=500) => {
  const timer = useRef(null);
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {clearTimeout((timer.current))};
  }, [value, delay]);
  return debounced;
};
