"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import HorizontalNewsCard from "./HorizontalNewsCard";
import CategoryLeftSection from "./CategoryLeftSection";

// Import all your data
import businessData from "../../public/data/business.json";
import sportsData from "../../public/data/sports.json";
import educationData from "../../public/data/education.json";
import healthData from "../../public/data/health.json";
import politicsData from "../../public/data/politics.json";
import technologyData from "../../public/data/technology.json";
import scienceData from "../../public/data/science.json";
import entertainmentData from "../../public/data/entertainment.json";

// Reusable Pagination Component (same as before)
const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="flex items-center gap-10 max-w-sm mx-auto">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`group flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed bg-gray-50"
            : "text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        }`}
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Dots */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
              currentPage === page
                ? "bg-black scale-125 shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`group flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed bg-gray-50"
            : "text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        }`}
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Combine all your article data arrays
  const allArticles = [
    ...businessData,
    ...sportsData,
    ...educationData,
    ...healthData,
    ...politicsData,
    ...technologyData,
    ...scienceData,
    ...entertainmentData,
  ];

  // Filter articles based on query
  const filteredArticles = allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
  );

  // Pagination logic
  const ITEMS_PER_PAGE = 5;
  const totalItems = filteredArticles.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const showPagination = totalItems > ITEMS_PER_PAGE;

  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // optional smooth scroll to top
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = filteredArticles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-[#00ffc8]">{query}</span>
      </h1>

      {filteredArticles.length === 0 && (
        <p className="text-gray-400 text-xl">No results found.</p>
      )}

      {filteredArticles.length > 0 && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Left Section */}
            <div className="lg:col-span-2 space-y-6">
              <CategoryLeftSection data={currentPageData} />
            </div>

            {/* Right Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                         <h2 className="text-[24px] font-[oswald] mb-4" style={{fontWeight:700}}>POPULAR NEWS</h2>
                <div className="divide-y divide-gray-300">
                  {filteredArticles.slice(9, 13).map((item, idx) => (
                    <div key={idx} className="py-3">
                      <HorizontalNewsCard data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {showPagination && (
            <div className="py-24">
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
