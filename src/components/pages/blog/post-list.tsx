"use client"
import { Section } from "~/components/section";
import { ArticleItem } from "../home/articles.section";
import React, { useState, useRef } from "react";

const ARTICLES_TO_SHOW = 6;

export const PostList = () => {
  // Simulate articles array (replace with real data)
  const articles = Array.from({ length: 20 });

  const [visibleCount, setVisibleCount] = useState(ARTICLES_TO_SHOW);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => {
      const next = prev + ARTICLES_TO_SHOW;
      setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }, 100); // Wait for DOM update
      return next;
    });
  };

  return (
    <Section>
      <div className="mx-auto max-w-7xl w-full flex flex-col items-start gap-8">
        <div className="flex flex-col justify-start items-start gap-2">
          {/* Header */}
          <div className="gap-x-3 gap-y-3 text-foreground tracking-[normal] whitespace-nowrap justify-start items-center text-base font-light leading-normal flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 13 12"
              fill="none"
              className="size-3"
            >
              <circle cx="6.5" cy="6" r="6" fill="currentColor"></circle>
            </svg>
            <div className="text-foreground">Blog and articles</div>
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-[3.5rem]">Latest insights and trends</h2>
          </div>
        </div>
        <div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            ref={gridRef}
          >
            {articles.slice(0, visibleCount).map((_, idx) => (
              <ArticleItem key={idx} />
            ))}
          </div>
          {visibleCount < articles.length && (
            <div className="flex justify-center mt-6">
              <button
                className="px-6 py-2 rounded bg-primary text-white hover:bg-primary/80 transition"
                onClick={handleLoadMore}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
