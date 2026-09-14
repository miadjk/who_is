"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/portfolio";

function useIsDark() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && resolvedTheme === "dark";
}

/**
 * Tools roll-in animation — exact motion-* spec reproduced with Framer Motion:
 * light: scale 0.5 + x -120% + y -60% + opacity 33% + rotate -1080deg + blur 10px
 *        → 1 / 0 / 0 / 1 / 0deg / 0px
 *        (scale delay 0.38s · opacity 0.38s · rotate 1.20s · blur 0.15s + 0.60s delay · spring-bouncier)
 * dark:  clean slide-in, x -120% + opacity 0 + scale 0.95 → 0 / 1 / 1 (no rotation).
 */
function ToolPill({ label, index, dark }: { label: string; index: number; dark: boolean }) {
  const stagger = index * 0.07;

  const lightInitial = {
    scale: 0.5,
    x: "-120%",
    y: "-60%",
    opacity: 0.33,
    rotate: -1080,
    filter: "blur(10px)",
  };
  const lightAnimate = {
    scale: 1,
    x: "0%",
    y: "0%",
    opacity: 1,
    rotate: 0,
    filter: "blur(0px)",
  };
  const lightTransition = {
    default: { type: "spring" as const, bounce: 0.6 },
    scale: { delay: 0.38 + stagger, type: "spring" as const, bounce: 0.6 },
    opacity: { duration: 0.38, delay: stagger },
    rotate: { duration: 1.2, delay: stagger, type: "spring" as const, bounce: 0.6 },
    filter: { duration: 0.15, delay: 0.6 + stagger },
    x: { delay: stagger, type: "spring" as const, bounce: 0.6 },
    y: { delay: stagger, type: "spring" as const, bounce: 0.6 },
  };

  return (
    <motion.span
      initial={dark ? { x: "-120%", opacity: 0, scale: 0.95 } : lightInitial}
      whileInView={dark ? { x: "0%", opacity: 1, scale: 1 } : lightAnimate}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        dark
          ? { type: "tween", ease: "easeOut", duration: 0.5, delay: stagger }
          : lightTransition
      }
      className="motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier cursor-default text-[12.5px] font-medium px-3 py-1.5 rounded-full border border-deeppurple/20 bg-lavender/40 dark:bg-deeppurple/30 dark:text-lavender dark:border-deeppurple/40 hover:bg-powder hover:text-[#2a1e4d] dark:hover:bg-lavender/30 transition-colors duration-200"
    >
      {label}
    </motion.span>
  );
}

export function Experience() {
  const dark = useIsDark();

  return (
    <section id="experience" className="py-20 sm:py-28 scroll-mt-20 bg-[#FAF8FF]/60 dark:bg-white/[0.02] border-y border-deeppurple/10">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Growing,
              <br className="hidden sm:block" />
              project by project.
            </>
          }
          description="Websites and systems built for school, academic, research, and client work — each one sharper than the last."
        />

        <div className="relative mt-12 pl-8">
          {/* timeline line */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[11px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-lavender via-pinkpurple to-deeppurple"
            aria-hidden
          />

          <div className="space-y-8">
            {experience.map((item) => (
              <motion.article
                key={item.year + item.role}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className="relative rounded-3xl border border-deeppurple/15 bg-white dark:bg-[#1e1633] p-6 sm:p-7 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
                  className="absolute -left-8 top-7 h-[22px] w-[22px] -translate-x-[1px] rounded-full border-[3px] border-white dark:border-[#140f22] bg-gradient-to-br from-pinkpurple to-deeppurple shadow"
                  aria-hidden
                />

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4 }}
                  className="font-heading text-lg text-deeppurple dark:text-lavender"
                >
                  {item.year}
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="font-heading text-[19px] mt-1 tracking-wide"
                >
                  {item.role}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.16 }}
                  className="mt-2 text-[14.5px] leading-relaxed text-[#5b5170] dark:text-[#c9bede]"
                >
                  {item.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.24 }}
                  className="mt-4 text-[11px] font-bold tracking-[0.2em] uppercase text-deeppurple/70 dark:text-lavender/70"
                >
                  Tools used
                </motion.p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tools.map((t, ti) => (
                    <ToolPill key={t} label={t} index={ti} dark={dark} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
