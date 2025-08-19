"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import businessData from '../../public/data/business.json';
import technologyData from '../../public/data/technology.json';
import sportsData from '../../public/data/sports.json';
import healthData from '../../public/data/health.json';
import politicsData from '../../public/data/politics.json';
import scienceData from '../../public/data/science.json';
import entertainmentData from '../../public/data/entertainment.json';
import educationData from '../../public/data/education.json';

const news = [businessData[0], sportsData[0], politicsData[0], healthData[0], technologyData[0], scienceData[0], educationData[0], entertainmentData[0]];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {/* Top Header */}
      <header className="w-full bg-black h-24 transition-colors duration-300">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">

          {/* --- Left Side --- */}
          {/* Mobile/Tablet: Logo | Desktop: Menu */}
          <div className="flex items-center">
            {/* Mobile/Tablet Logo */}
            <span className="md:hidden text-[#00ffc8] italic text-2xl sm:text-3xl font-black">
              VIBENEWS
            </span>

            {/* Desktop Menu */}
            <button
              type="button"
              className="hidden md:block text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={36} strokeWidth={2} strokeLinecap="square" />
            </button>
          </div>

          {/* --- Center --- */}
          {/* Desktop: Logo only */}
          <span className="hidden md:block text-[#00ffc8] italic text-2xl sm:text-3xl font-black text-center">
            VIBENEWS
          </span>

          {/* --- Right Side --- */}
          <div className="flex items-center gap-3">
            {/* Desktop: ThemeToggle + Search */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={26} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile/Tablet: ThemeToggle + Search + Menu */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={26} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="text-[#5a5a5a] hover:text-[#00ffc8] cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu size={32} strokeWidth={2} strokeLinecap="square" />
              </button>
            </div>
          </div>

        </div>
      </header>



      {/* Left Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-black text-white z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <span className="text-[#00ffc8] italic text-2xl font-black">VIBENEWS</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            CLOSE <X className="inline ml-2" size={22} />
          </button>
        </div>

        {/* News List */}
        <div className="overflow-y-auto h-full p-4 space-y-6">
          {news.map((item) => (
            <div key={item.slug} className="flex gap-4 border-b border-gray-700 pb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  {item.category}{" "}
                  <span className="text-xs font-normal ml-2">{item.date}</span>
                </p>
                <h3 className="text-md font-bold hover:text-[#00ffc8] cursor-pointer">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Light transparent background when drawer is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl px-6">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center border-b-2 border-[#00ffc8]"
            >
              <input
                type="text"
                placeholder="Type Keywords Here..."
                className="flex-1 bg-transparent text-white text-4xl font-light py-3 px-2 outline-none placeholder-gray-500"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="text-gray-400 hover:text-[#00ffc8] transition-colors duration-300 px-2"
              >
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
