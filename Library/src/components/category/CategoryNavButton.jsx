import React from "react";

const CategoryNavButton = ({ direction, onClick, disabled, label }) => {
  const Icon = direction;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      className={`p-2 sm:p-2.5 lg:p-3 transition-all duration-200 rounded-full shrink-0 border z-30 ${
        disabled
          ? "border-amber-200/50 bg-amber-50/50 text-amber-300 cursor-not-allowed opacity-50"
          : "border-amber-300/80 bg-white text-slate-700 hover:text-amber-900 hover:border-amber-400 hover:bg-amber-50 shadow-md active:scale-95 cursor-pointer"
      }`}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
    </button>
  );
};

export default CategoryNavButton;