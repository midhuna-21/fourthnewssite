"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    setIsSearchOpen(false);
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchQuery("");
  };

  return (
    <>
      <header className="w-full bg-black h-24 px-12 flex items-center justify-between transition-colors duration-300">
        <button type="button" className="text-gray-400 hover:text-gray-200 ml-4 cursor-pointer">
          <Menu size={32} strokeWidth={2} />
        </button>

        <span className="text-[#00ffc8] italic text-2xl sm:text-3xl font-black text-center">
          VIBENEWS
        </span>

        <div className="flex items-center gap-6 mr-4">
          <ThemeToggle />
          <button
            type="button"
            className="text-gray-400 hover:text-gray-200 cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={30} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl px-6">
            <form onSubmit={handleSearch} className="relative flex items-center border-b-2 border-[#00ffc8]">
              <input
                type="text"
                placeholder="Type Keywords Here..."
                className="flex-1 bg-transparent text-white text-4xl font-light py-3 px-2 outline-none placeholder-gray-500"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-gray-400 hover:text-[#00ffc8] transition-colors duration-300 px-2">
                <Search size={28} strokeWidth={2} />
              </button>
            </form>
          </div>

          {/* Close button */}
          <button
            type="button"
            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors duration-300"
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={36} strokeWidth={2} />
          </button>
        </div>
      )}
    </>
  );
}
