// components/ThemeToggle.tsx
'use client'
import { Sun, Moon } from "lucide-react";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[26px] h-[26px]" />; // Placeholder to prevent layout shift
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      type="button"
      onClick={toggleTheme}
      className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={26} strokeWidth={2} />
      ) : (
        <Moon size={26} strokeWidth={2} />
      )}
    </button>
  );
}