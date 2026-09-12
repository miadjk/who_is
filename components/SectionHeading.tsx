"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <p className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-deeppurple dark:text-lavender">
        <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-deeppurple to-pinkpurple inline-block" />
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.1] mt-3 text-[#221a35] dark:text-[#fbf7ff]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[16px] leading-relaxed text-[#5b5170] dark:text-[#c9bede]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
