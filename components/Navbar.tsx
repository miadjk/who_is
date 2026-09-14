"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            const match = links.find((l) => l.href === `#${id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFCFE]/85 dark:bg-[#140f22]/80 backdrop-blur-xl border-b border-deeppurple/10 shadow-[0_8px_30px_-18px_rgba(136,102,222,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-5 sm:px-8 h-[68px] flex items-center justify-between gap-4"
      >
        <a href="#home" className="font-heading text-xl tracking-tight">
          CAMILLE<span className="text-deeppurple dark:text-lavender">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[15px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setActive(l.label)}
              className={`link-underline transition-colors hover:text-deeppurple dark:hover:text-lavender ${
                active === l.label
                  ? "active text-deeppurple dark:text-lavender font-semibold"
                  : "text-[#3d3454] dark:text-[#d9cdf2]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-deeppurple/25"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#FFFCFE]/95 dark:bg-[#1a1330]/95 backdrop-blur-xl border-b border-deeppurple/10"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setActive(l.label);
                    setOpen(false);
                  }}
                  className={`py-3 px-3 rounded-xl text-[16px] transition-colors ${
                    active === l.label
                      ? "bg-lavender/40 dark:bg-deeppurple/30 text-deeppurple dark:text-lavender font-semibold"
                      : "hover:bg-lavender/25 dark:hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
