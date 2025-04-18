'use client';
import { useEffect, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      try {
        const storedDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'true');
        setIsDarkMode(storedDarkMode);
      } catch {
        setIsDarkMode(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      } catch {
        // Handle localStorage error silently
      }
    }

    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, isMounted]);

  return {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(!isDarkMode),
  };
};

export default useTheme;
