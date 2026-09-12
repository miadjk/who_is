"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MoveHorizontal, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="group relative aspect-square w-[210px] sm:w-[260px] lg:w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl border border-deeppurple/15 bg-gradient-to-br from-lavender/50 via-powder/50 to-pinkpurple/30 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={project.image}
        alt={`${project.name} — ${project.title}`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover aspect-square transition-transform duration-500 group-hover:scale-[1.06]"
        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
      />

      {/* top badges */}
      <span className="absolute top-2.5 left-2.5 rounded-full bg-black/50 px-2.5 py-1 font-heading text-[13px] text-white backdrop-blur">
        {project.number}
      </span>
      <span className="absolute top-2.5 right-2.5 rounded-full bg-white/85 dark:bg-black/55 px-2.5 py-1 text-[10.5px] font-semibold">
        {project.year}
      </span>

      {/* minimal info */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 pt-8 text-white">
        <p className="font-heading text-[16px] sm:text-[18px] leading-tight">{project.name}</p>
        <p className="mt-0.5 text-[10.5px] sm:text-[11px] opacity-85 leading-snug">{project.category}</p>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/30 bg-white/15 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-medium backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} (opens in a new tab)`}
            className="mt-2 inline-flex items-center gap-1 rounded-full bg-deeppurple px-3.5 py-1.5 text-[11.5px] font-semibold text-white hover:bg-pinkpurple transition-colors duration-300"
          >
            View Project
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <p className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.14em] opacity-60">
            <Lock size={10} /> Private
          </p>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Desktop: vertical wheel -> horizontal scroll. Drag-to-scroll + native swipe.
  const onWheel = useCallback((e: React.WheelEvent) => {
    const el = trackRef.current;
    if (!el) return;
    const canScrollX = el.scrollWidth > el.clientWidth + 4;
    if (!canScrollX) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        down = true;
        moved = false;
        startX = e.clientX;
        startLeft = el.scrollLeft;
        el.setPointerCapture?.(e.pointerId);
        el.style.cursor = "grabbing";
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      if (Math.abs(e.clientX - startX) > 6) moved = true;
      el.scrollLeft = startLeft - (e.clientX - startX);
    };
    const onUp = () => {
      down = false;
      if (el) el.style.cursor = "";
      // A real drag must not activate the link under the cursor on release.
      if (moved) {
        moved = false;
        const suppress = (ev: Event) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        el.addEventListener("click", suppress, true);
        setTimeout(() => el.removeEventListener("click", suppress, true), 50);
      }
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected projects"
          title={
            <>
              Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-deeppurple to-pinkpurple">heart.</span>
            </>
          }
          description="A compact showcase — scroll, drag, or swipe sideways."
        />
        <p className="mt-4 inline-flex items-center gap-2 text-[13px] text-[#6d6484] dark:text-[#a99acb]">
          <MoveHorizontal size={14} className="text-pinkpurple" />
          Scroll sideways to explore
        </p>
      </div>

      <div className="mt-8">
        <div
          ref={trackRef}
          onWheel={onWheel}
          tabIndex={0}
          role="region"
          aria-label="Projects — horizontally scrollable showcase"
          className="scroll-mask-x-from-90% no-scrollbar flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] pb-4 pt-1 cursor-grab select-none"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
      </div>
    </section>
  );
}
