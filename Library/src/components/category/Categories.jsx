import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCategoryBooks } from "../../hooks/useCategoryBooks";
import BookGrid from "../books/BookGrid";
import CategoryHeader from "./CategoryHeader";
import CategoryNavButton from "./CategoryNavButton";
import CategoryErrorMessage from "./CategoryErrorMessage";
import { IsPending } from "../skeleton/IsPending";

function Categories({ category }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useCategoryBooks(category, page);
  const books = data?.docs || [];
  const visibleBooks = books.slice(currentIndex, currentIndex + 4);

  const handlePrev = () => {
    if (currentIndex >= 4) {
      setCurrentIndex((prev) => prev - 4);
    } else if (page > 1) {
      setPage((prev) => prev - 1);
      setCurrentIndex(96);
    }
  };

  const handleNext = () => {
    if (currentIndex + 4 < books.length) {
      setCurrentIndex((prev) => prev + 4);
    } else {
      setPage((prev) => prev + 1);
      setCurrentIndex(0);
    }
  };

  if (isPending) return <IsPending />;
  if (isError) return <CategoryErrorMessage />;

  const isPrevDisabled = currentIndex === 0 && page === 1;

  return (
    <section className="mb-8 sm:mb-12 lg:mb-16 font-sans px-1 sm:px-0">
      <CategoryHeader
        category={category}
        page={page}
        currentIndex={currentIndex}
        visibleCount={visibleBooks.length}
      />

      <div className="relative flex items-center gap-2 sm:gap-3 lg:gap-4">
        <CategoryNavButton
          direction={ChevronLeft}
          onClick={handlePrev}
          disabled={isPrevDisabled}
          label="Previous books"
        />

        <BookGrid visibleBooks={visibleBooks} />

        <CategoryNavButton
          direction={ChevronRight}
          onClick={handleNext}
          disabled={false}
          label="Next books"
        />
      </div>
    </section>
  );
}

export default Categories;