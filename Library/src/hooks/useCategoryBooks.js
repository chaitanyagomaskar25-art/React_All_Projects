import { useQuery } from "@tanstack/react-query";
import { getCategoryBooks } from "../api/bookApi";

export const useCategoryBooks = (category, page) => {
  return useQuery({
    queryKey: ["books", category, page],
    queryFn: ({ queryKey }) => getCategoryBooks(queryKey[1], queryKey[2]),
    placeholderData: (previous) => previous,
  });
};