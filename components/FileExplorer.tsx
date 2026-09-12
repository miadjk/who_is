"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, GraduationCap, MapPin, Mail, FolderOpen, Facebook, Briefcase } from "lucide-react";
import { contact } from "@/data/portfolio";
import { LocationMap } from "./LocationMap";

type FileId = "bio" | "education" | "location" | "contact";

const files: { id: FileId; name: string; icon: React.ReactNode; color: string }[] = [
  { id: "bio", name: "bio.md", icon: <FileText size={16} />, color: "text-deeppurple dark:text-lavender" },
  { id: "education", name: "education.md", icon: <GraduationCap size={16} />, color: "text-pinkpurple" },
  { id: "location", name: "location.md", icon: <MapPin size={16} />, color: "text-[#5b8def] dark:text-powder" },
  { id: "contact", name: "contact.md", icon: <Mail size={16} />, color: "text-[#b07fe8]" },
];

function Content({ id }: { id: FileId }) {
  if (id === "bio")
    return (
      <div>
        <h3 className="font-heading text-2xl mb-3"># Hello!</h3>
        <p className="leading-relaxed text-[16px] text-[#4a4160] dark:text-[#d9cdf2]">
          I&apos;m <strong>Camille B. Atibagos</strong>, a Full-Stack Developer and UI/UX Designer.
        </p>
        <p className="mt-3 leading-relaxed text-[16px] text-[#4a4160] dark:text-[#d9cdf2]">
          I enjoy transforming ideas into functional, beautiful, and user-friendly digital
          experiences — balancing clean engineering with editorial, human-centered design.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Problem solver", "Detail obsessed", "User-first"].map((t) => (
            <span
              key={t}
              className="text-[13px] px-3 py-1 rounded-full bg-powder/50 dark:bg-white/10 border border-deeppurple/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  if (id === "education")
    return (
      <div>
        <h3 className="font-heading text-2xl mb-3"># Education</h3>
        <ul className="space-y-4 text-[15.5px] leading-relaxed">
          <li className="rounded-2xl border border-deeppurple/15 bg-white dark:bg-white/5 p-4">
            <p className="font-semibold">Bachelor of Science in Information Technology</p>
            <p className="text-[#6d6484] dark:text-[#b9abd8] text-[14px] mt-1">
              Davao Oriental State University
            </p>
            <p className="text-[#6d6484] dark:text-[#b9abd8] text-[14px] mt-1">
              Focus on web development, databases, and human-computer interaction. Built school
              and research systems as academic projects.
            </p>
          </li>
          <li className="rounded-2xl border border-deeppurple/15 bg-white dark:bg-white/5 p-4">
            <p className="font-semibold">Self-directed learning</p>
            <p className="text-[#6d6484] dark:text-[#b9abd8] text-[14px] mt-1">
              Next.js, TypeScript, Supabase, Figma, and design systems — via docs, courses, and
              shipping real projects.
            </p>
          </li>
        </ul>
      </div>
    );
  if (id === "location")
    return (
      <div>
        <h3 className="font-heading text-2xl mb-3"># Location</h3>
        <p className="text-[17px] leading-relaxed text-[#4a4160] dark:text-[#d9cdf2]">
          Mati City,
          <br />
          Davao Oriental,
          <br />
          Philippines
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-[14.5px]">
          <div className="rounded-2xl p-4 bg-lavender/30 dark:bg-deeppurple/20 border border-deeppurple/15">
            <p className="font-semibold">Availability</p>
            <p className="mt-1">Open for freelance & collaborations</p>
          </div>
          <div className="rounded-2xl p-4 bg-powder/40 dark:bg-white/5 border border-deeppurple/15">
            <p className="font-semibold">Timezone</p>
            <p className="mt-1">PHT (UTC+8) · flexible overlap</p>
          </div>
        </div>
        <LocationMap />
      </div>
    );
  return (
    <div>
      <h3 className="font-heading text-2xl mb-3"># Contact</h3>
      <p className="text-[16px] text-[#4a4160] dark:text-[#d9cdf2]">
        The fastest way to reach me is by email — I usually reply within a day.
      </p>
      <div className="mt-4 space-y-2.5 text-[15px]">
        <a
          href={contact.emailHref}
          className="block rounded-xl border border-deeppurple/15 px-4 py-3 hover:bg-lavender/30 dark:hover:bg-white/10 transition-colors break-all"
        >
          ✉️ {contact.email}
        </a>
        <a
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-deeppurple/25 text-deeppurple dark:text-lavender text-[13.5px] font-semibold hover:bg-deeppurple hover:text-white hover:border-deeppurple transition-colors"
        >
          <Facebook size={15} />
          {contact.facebookLabel}
        </a>
        <a
          href={contact.indeed}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-deeppurple/25 text-deeppurple dark:text-lavender text-[13.5px] font-semibold hover:bg-deeppurple hover:text-white hover:border-deeppurple transition-colors"
        >
          <Briefcase size={15} />
          {contact.indeedLabel}
        </a>
      </div>
    </div>
  );
}

export function FileExplorer() {
  const [active, setActive] = useState<FileId>("bio");

  return (
    <div className="rounded-3xl border border-deeppurple/15 bg-white/80 dark:bg-[#1e1633]/80 backdrop-blur overflow-hidden shadow-card">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-deeppurple/10 bg-gradient-to-r from-lavender/30 to-transparent dark:from-deeppurple/20">
        <FolderOpen size={16} className="text-deeppurple dark:text-lavender" />
        <span className="text-[13.5px] font-semibold tracking-wide">CAMILLE/</span>
      </div>

      <div className="grid md:grid-cols-[220px_1fr]">
        <div className="border-b md:border-b-0 md:border-r border-deeppurple/10 p-3 bg-[#FAF8FF]/60 dark:bg-black/20">
          <div className="flex md:flex-col gap-1.5 overflow-x-auto" role="tablist" aria-label="About files">
            {files.map((f) => {
              const selected = f.id === active;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(f.id)}
                  className={`flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-[14px] transition-all duration-200 border ${
                    selected
                      ? "bg-lavender/50 dark:bg-deeppurple/30 border-deeppurple/25 font-semibold text-[#2a1e4d] dark:text-white shadow-sm"
                      : "border-transparent hover:bg-lavender/25 dark:hover:bg-white/5 text-[#4a4160] dark:text-[#c9bede]"
                  }`}
                >
                  <span className={f.color}>{f.icon}</span>
                  {f.name}
                  {selected && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-pinkpurple" />}
                </button>
              );
            })}
          </div>
          <p className="hidden md:block mt-4 px-2 text-[12px] text-[#8a7fa3] dark:text-[#8f83ad]">
            4 files · click to preview
          </p>
        </div>

        <div className="p-6 sm:p-8 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Content id={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
