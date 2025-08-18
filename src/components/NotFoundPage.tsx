"use client";

import { Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-4">Nothing found!</h1>

      {/* Subtext */}
      <p className="text-gray-600 mb-6">
        It looks like nothing was found here. Maybe try a search?
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-2xl border rounded overflow-hidden">
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
