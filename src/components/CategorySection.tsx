"use client";
import React, { useEffect, useState } from "react";
import CategoryLeftSection from "@/components/CategoryLeftSection";
import HorizontalNewsCard from "@/components/HorizontalNewsCard";

interface NewsData {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
}

interface Props {
  data: NewsData[];
}

// Pagination Component
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Dots */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
              currentPage === page ? "bg-black scale-125 shadow-md" : "bg-gray-300 hover:bg-gray-400"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default function CategorySection({ data }: Props) {
  const ITEMS_PER_PAGE = 5;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const showPagination = totalItems > ITEMS_PER_PAGE;

  const [currentPage, setCurrentPage] = useState(1);

  // Reset page if data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get current page data safely
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {currentPageData.length > 0 ? (
            <CategoryLeftSection data={currentPageData} />
          ) : (
            <p className="text-center text-gray-500">No news available.</p>
          )}
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-10">
            <h2 className="text-[24px] font-[oswald] uppercase mb-4" style={{ fontWeight: 700 }}>
              Trending News
            </h2>
            <div className="divide-y divide-gray-[#313030]">
              {data.slice(9, 13).map((item, idx) => (
                <div key={idx} className="py-3">
                  <HorizontalNewsCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPagination && (
        <div className="py-24"> {/* ~48px / ~3cm spacing */}
    <PaginationComponent
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
    </div>
      )}
    </div>
  );
}
