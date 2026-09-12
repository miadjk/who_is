"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FloatingLetters } from "./FloatingLetters";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section aria-label="Skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="Toolbox" title="TOOLS I WORK WITH" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {skills.map((s, si) => (
            <motion.span
              key={s}
              whileHover={{ y: -5, scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="cursor-default rounded-full border border-deeppurple/20 bg-white dark:bg-white/5 px-5 py-2.5 text-[15px] font-semibold hover:bg-lavender hover:border-lavender hover:text-[#2a1e4d] hover:shadow-card dark:hover:bg-deeppurple/40 dark:hover:text-white transition-colors duration-200"
            >
              <FloatingLetters text={s} duration={2.3 + (si % 3) * 0.3} amplitude={4 + (si % 2)} />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
