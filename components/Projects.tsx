"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-deeppurple/15 bg-gradient-to-br from-lavender/50 via-powder/50 to-pinkpurple/30 shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
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
  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected projects"
          title={
            <>
              Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-deeppurple to-pinkpurple">heart.</span>
            </>
          }
          description="A compact 2×2 showcase."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
