// components/ThemeSwitcher.tsx
"use client"
import { useEffect, useState } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Check system preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(theme!);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme in local storage
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'dark' ? <Sun/> : <Moon/>}
    </button>
  );
};

export default ThemeSwitcher;
