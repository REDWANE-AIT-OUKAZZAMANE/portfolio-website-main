'use client';
import { useTheme } from '@/lib/hooks/use-theme';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ id }: { id: string }) => {
  const { isDarkMode, toggle } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined' || typeof document === 'undefined') return;

    const nav = document.getElementById(id);
    if (!nav) return;

    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const curScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > curScrollPos || curScrollPos < 10);
      prevScrollPos = curScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id, isMounted]);

  if (!isMounted) return null;

  return (
    <motion.nav
      id={id}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300 bg-bg/80 backdrop-blur-md md:px-6 lg:px-8 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold">
          <span className="text-accent">{'<'}</span>
          <span>Aman</span>
          <span className="text-accent">{'/>'}</span>
        </Link>
        <ul className="items-center hidden space-x-6 md:flex">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="duration-200 hover:text-accent">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={toggle}
        className="p-2 duration-200 rounded-lg hover:bg-bg-secondary"
      >
        <Icon
          icon={isDarkMode ? 'ph:sun-bold' : 'ph:moon-bold'}
          width={24}
          height={24}
        />
      </button>
    </motion.nav>
  );
};

export default Navbar;
