"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#00ffc8] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {/* Custom SVG arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-black"
            fill="currentColor"
          >
            <path d="M12 4l-6 6h4v10h4V10h4z" />
          </svg>
        </button>
      )}
    </>
  );
}
