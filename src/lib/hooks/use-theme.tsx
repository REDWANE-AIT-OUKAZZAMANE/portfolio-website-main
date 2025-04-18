'use client';
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggle: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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

  const toggle = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
