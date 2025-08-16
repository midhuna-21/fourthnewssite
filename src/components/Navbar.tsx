import { User } from "lucide-react";
import Link from "next/link";

const categories = [
  { label: 'Home  ', category: '' },
  { label: 'Business', category: 'business' },
  { label: 'Sports', category: 'sports' },
  { label: 'Politics', category: 'politics' },
  { label: 'Technology', category: 'technology' },
  { label: 'Health', category: 'health' },
  { label: 'Science', category: 'science' },
  { label: 'Entertainment', category: 'entertainment' },
  { label: 'Education', category: 'education' },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <ul className="flex items-center space-x-2">
          {categories.map((item) => (
            <li key={item.category} className="relative group">
              <Link
                href={`/${item.category}`}
                className="relative font-[Oswald] text-[16px] uppercase px-[13px] py-[14px]"
                style={{ fontWeight: 600 }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#00ffc8] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <button className="text-gray-400 hover:text-gray-200 p-2">
          <User size={28} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
