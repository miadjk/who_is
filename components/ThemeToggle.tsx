"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <span className="h-9 w-9 rounded-full border border-deeppurple/20 block" aria-hidden />
    );
  }
  const isDark = (theme ?? resolvedTheme) === "dark";
  return (
    <motion.button
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.94 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-9 w-9 grid place-items-center rounded-full border border-deeppurple/25 bg-white/80 dark:bg-white/10 backdrop-blur hover:border-pinkpurple hover:shadow-soft transition-colors"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        {isDark ? <Sun size={17} /> : <Moon size={17} />}
      </motion.span>
    </motion.button>
  );
}
