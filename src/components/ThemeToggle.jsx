import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

const ThemeToggle = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-lg border-2 transition-all duration-300",
        "border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-800",
        "hover:border-primary/30 dark:hover:border-primary/30",
        "hover:shadow-lg hover:shadow-primary/10",
        "group overflow-hidden",
        className
      )}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : 180,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : -180,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default ThemeToggle;
