import React from "react";
import { SkeletonHeader } from "./SkeletonHeader";
import { SkeletonNavButton } from "./SkeletonNavButton";
import { SkeletonBookshelfAlcove } from "./SkeletonBookshelfAlcove";

export function IsPending() {
  return (
    <section className="mb-8 sm:mb-12 lg:mb-16 font-sans px-1 sm:px-0">
      {/* Dynamic Keyframes for Wooden Shelf Ambient Light */}
      <style>{`
        @keyframes ambientWoodGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shelf-border-skeleton {
          background-size: 200% 200%;
          animation: ambientWoodGlow 8s ease infinite;
        }
      `}</style>

      <SkeletonHeader />

      <div className="relative flex items-center gap-2 sm:gap-3 lg:gap-4">
        <SkeletonNavButton />
        <SkeletonBookshelfAlcove itemCount={4} />
        <SkeletonNavButton />
      </div>
    </section>
  );
}