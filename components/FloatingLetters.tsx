"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FloatingLettersProps {
  text: string;
  className?: string;
  /** base loop duration in seconds */
  duration?: number;
  /** vertical travel in px */
  amplitude?: number;
}

/**
 * Reusable letter-by-letter floating text.
 * Each character loops its own gentle y/rotate motion with a staggered
 * delay so letters drift organically instead of moving as one block.
 */
export function FloatingLetters({
  text,
  className = "",
  duration = 2.4,
  amplitude = 5,
}: FloatingLettersProps) {
  const reduceMotion = useReducedMotion();
  const chars = Array.from(text);

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-flex ${className}`} aria-label={text}>
      {chars.map((ch, i) => {
        const peer = (i * 7) % 5; // deterministic organic variation
        return (
          <motion.span
            key={i}
            aria-hidden
            className="inline-block will-change-transform"
            animate={{
              y: [0, -amplitude - (peer % 3), 0],
              rotate: [0, peer % 2 === 0 ? 4 : -4, 0],
            }}
            transition={{
              duration: duration + peer * 0.22,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: i * 0.13,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        );
      })}
    </span>
  );
}
