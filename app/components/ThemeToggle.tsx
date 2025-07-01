'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useMounted } from '@/hooks/useMounted';

const MotionFaSun = motion.create(FaSun);
const MotionFaMoon = motion.create(FaMoon);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      className="flex items-center justify-center p-3 rounded-full cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <MotionFaSun
            key="sun"
            className="h-6 w-6 text-yellow-400"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <MotionFaMoon
            key="moon"
            className="h-6 w-6 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
