import { Menu, Search, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-black h-24 px-12 flex items-center justify-between">
      {/* Left: Menu Icon */}
      <button className="text-gray-400 hover:text-gray-200 ml-4">
        <Menu size={32} strokeWidth={2} />
      </button>

      {/* Center: Logo */}
      <span className="text-[#00ffc8] italic text-2xl sm:text-3xl text-center" style={{fontWeight:900}}>
        VIBENEWS
      </span>

      {/* Right: Icons */}
      <div className="flex items-center gap-6 mr-4">
        <button className="text-gray-400 hover:text-gray-200">
          <Sun size={26} strokeWidth={2} />
        </button>
        <button className="text-gray-400 hover:text-gray-200">
          <Search size={30} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
