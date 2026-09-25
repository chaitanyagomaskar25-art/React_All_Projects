import { useEffect, useRef, useState } from "react";

export const useDebounced = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDebounced(value.trim());
    }, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);
  return debounced;
};
