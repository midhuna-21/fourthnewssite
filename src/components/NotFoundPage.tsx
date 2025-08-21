"use client";

import { Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col md:mt-24 mt-5 md:mb-5 md-0">
      {/* Heading */}
      <h1 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px]  font-[oswald] mb-4" style={{fontWeight:700}}>Nothing found!</h1>

      {/* Subtext */}
      <p className="text-gray-600 mb-6" style={{fontFamily:'Roboto, sans-serif'}}>
        It looks like nothing was found here. Maybe try a search?
      </p>

      {/* Search Bar */}
      <div className="flex w-full border border-gray-300 rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white w-14 flex items-center justify-center">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}
