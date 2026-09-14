"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Camera, MousePointerClick } from "lucide-react";
import { lifeImages } from "@/data/portfolio";

export function LifeOutsideCode() {
  const [index, setIndex] = useState(0);
  const [flipKey, setFlipKey] = useState(0);
  const total = lifeImages.length;
  const current = lifeImages[index];

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
    setFlipKey((k) => k + 1);
  }, [total]);

  const goTo = (i: number) => {
    if (i === index) return;
    setIndex(i);
    setFlipKey((k) => k + 1);
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center max-w-xl mx-auto"
      >
        <p className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-pinkpurple">
          <Camera size={14} /> Life outside code
        </p>
        <h3 className="font-heading text-2xl sm:text-3xl mt-2">Soft moments, quick snaps.</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#5b5170] dark:text-[#c9bede]">
          I love spending time around the sea, grabbing a good cup of coffee, and going on
          little side quests outside of coding, I like trying different things and adding a
          little fun and variety to life.
        </p>
        <p className="mt-2 text-[13px] text-[#5b5170] dark:text-[#c9bede] inline-flex items-center gap-1.5">
          <MousePointerClick size={14} className="text-deeppurple dark:text-lavender" />
          Tap the photo to see the next one.
        </p>
      </motion.div>

      <div className="relative mt-8 mx-auto max-w-[600px]">
        <div className="absolute -top-6 -left-8 h-20 w-20 rounded-full bg-lavender/50 blur-2xl -z-10" aria-hidden />
        <div className="absolute -bottom-6 -right-8 h-24 w-24 rounded-full bg-powder/70 blur-2xl -z-10" aria-hidden />

        <div className="relative rounded-[1.8rem] border border-deeppurple/15 bg-white dark:bg-[#1e1633] p-3 shadow-card overflow-hidden">
          {/* purely visual photo — no captions, titles, or text overlays on the image */}
          <button
            onClick={advance}
            aria-label={`Photo ${index + 1} of ${total}. Activate to see next photo.`}
            className="group relative block w-full aspect-[4/5] sm:aspect-[4/4] rounded-[1.3rem] overflow-hidden bg-gradient-to-br from-lavender/40 via-powder/40 to-pinkpurple/20 cursor-pointer"
          >
            <img
              key={flipKey}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              draggable={false}
              className="animate-flip-in-x absolute inset-0 h-full w-full object-contain"
            />
          </button>

          <div className="flex items-center justify-center px-2 pt-3.5 pb-1.5" role="tablist" aria-label="Gallery progress">
            {lifeImages.map((img, i) => (
              <button
                key={img.src}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => goTo(i)}
                className={`mx-1 h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-gradient-to-r from-deeppurple to-pinkpurple"
                    : "w-2 bg-deeppurple/20 hover:bg-deeppurple/40"
                }`}
              />
            ))}
          </div>
          <p className="pb-2 text-center text-[12.5px] tabular-nums text-[#6d6484] dark:text-[#a99acb]" aria-live="polite">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}
