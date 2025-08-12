import { User } from "lucide-react";


const categories = [
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
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <ul className="flex items-center space-x-2">
            {categories.map((item) => (
            <li
              key={item.category}
              className="font-[Oswald] text-[16px] uppercase text-black px-[13px] py-[10px] hover:bg-gray-100 cursor-pointer"
              style={{fontWeight:500}}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <button className="text-gray-500 hover:text-gray-700 p-2">
          <User size={28} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
