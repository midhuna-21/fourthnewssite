import { Menu, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-black dark:bg-black h-24 px-12 flex items-center justify-between transition-colors duration-300">
    
      <button 
        type="button"
        className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200 ml-4 cursor-pointer"
      >
        <Menu size={32} strokeWidth={2} />
      </button>

      <span className="text-[#00ffc8] italic text-2xl sm:text-3xl text-center" style={{fontWeight:900}}>
        VIBENEWS
      </span>

      <div className="flex items-center gap-6 mr-4">
        <ThemeToggle />
        <button 
          type="button"
          className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
        >
          <Search size={30} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}