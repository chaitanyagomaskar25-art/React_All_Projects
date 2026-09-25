import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import { getSearchBooks } from "../../api/bookApi";
import { useDebounce } from "../../hooks/useDebounce";
import { useRecentSearches } from "../../hooks/useRecentSearches";
import SearchResultDropdown from "./SearchResultDropdown";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const debouncedSearch = useDebounce(search, 400);

  const { recent, saveToRecent, removeRecent, clearAllRecent } = useRecentSearches();

  const { data, isPending, isError } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => getSearchBooks(debouncedSearch, 1),
    enabled: debouncedSearch.trim() !== "",
  });

  const books = data?.docs || [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setSearch("");
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSearchSubmit = (searchTerm = search) => {
    const query = searchTerm.trim();
    if (!query) return;

    saveToRecent(query);
    setIsSearchOpen(false);
    navigate("/search", {
      state: {
        books: data?.docs || [],
        query: query,
      },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      {/* Search Input Bar */}
      <div
        className={`flex items-center bg-white border border-gray-300 rounded-full transition-all duration-300 shadow-sm ${
          isSearchOpen
            ? "w-full px-3.5 py-2 ring-2 ring-sky-500/20 border-sky-500"
            : "w-10 h-10 justify-center hover:border-sky-400"
        }`}
      >
        <button
          onClick={() => {
            setIsSearchOpen(true);
            setTimeout(() => inputRef.current?.focus(), 50);
          }}
          className="text-gray-500 hover:text-sky-600 transition-colors shrink-0"
          title="Search Books"
          aria-label="Toggle Search"
        >
          <Search size={18} />
        </button>

        {isSearchOpen && (
          <div className="flex items-center flex-1 ml-2">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search title, author, or ISBN..."
              className="w-full text-sm text-gray-800 bg-transparent outline-none placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 p-1 shrink-0 ml-1 rounded-full hover:bg-gray-100"
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Dropdown */}
      {isSearchOpen && (
        <SearchResultDropdown
          search={search}
          recent={recent}
          isPending={isPending}
          isError={isError}
          books={books}
          onSelectRecent={(term) => {
            setSearch(term);
            handleSearchSubmit(term);
          }}
          onRemoveRecent={removeRecent}
          onClearRecent={clearAllRecent}
          onSelectBook={() => {
            saveToRecent(search);
            setIsSearchOpen(false);
          }}
          onViewAllResults={() => handleSearchSubmit()}
        />
      )}
    </div>
  );
};

export default SearchBar;