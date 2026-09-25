import { useState, useEffect } from "react";

const RECENT_SEARCHES_KEY = "open_library_recent_searches";

export const useRecentSearches = (limit = 5) => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        setRecent(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load recent searches", e);
    }
  }, []);

  const saveToRecent = (term) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    setRecent((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, limit);
      try {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save search history", e);
      }
      return updated;
    });
  };

  const removeRecent = (e, termToRemove) => {
    e.stopPropagation();
    setRecent((prev) => {
      const updated = prev.filter((item) => item !== termToRemove);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearAllRecent = () => {
    setRecent([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  return { recent, saveToRecent, removeRecent, clearAllRecent };
};