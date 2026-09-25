import { useMemo, useState } from "react";

export const useSubjectFilter = (data) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("asc");

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    const filtered = data
      .filter((sub) => selectedCategory === "All" || sub.category === selectedCategory)
      .map((sub) => {
        const matchingSubcategories = sub.subcategories.filter((s) =>
          s.toLowerCase().includes(query)
        );
        return {
          ...sub,
          subcategories: matchingSubcategories,
        };
      })
      .filter((sub) => sub.subcategories.length > 0);

    return filtered.sort((a, b) => {
      if (sortBy === "asc") return a.category.localeCompare(b.category);
      if (sortBy === "desc") return b.category.localeCompare(a.category);
      if (sortBy === "count") return b.subcategories.length - a.subcategories.length;
      return 0;
    });
  }, [data, selectedCategory, searchQuery, sortBy]);

  const totalSubtopicsCount = useMemo(() => {
    return filteredData.reduce((acc, curr) => acc + curr.subcategories.length, 0);
  }, [filteredData]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("asc");
  };

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filteredData,
    totalSubtopicsCount,
    resetFilters,
  };
};