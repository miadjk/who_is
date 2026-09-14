"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[110px] pb-14 sm:pt-[140px] sm:pb-20">
      {/* decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 dot-grid opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-lavender/40 blur-[90px] dark:bg-deeppurple/25" />
        <div className="absolute top-20 -right-24 h-[420px] w-[420px] rounded-full bg-powder/60 blur-[90px] dark:bg-pinkpurple/15" />
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[6%] hidden sm:block h-10 w-10 rounded-2xl bg-gradient-to-br from-lavender to-powder border border-white/60 shadow-card"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute bottom-[18%] left-[44%] hidden sm:block h-6 w-6 rounded-full bg-gradient-to-br from-pinkpurple to-deeppurple opacity-80"
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-deeppurple/20 bg-white/70 dark:bg-white/5 backdrop-blur px-3.5 py-1.5 text-[13px] text-[#4a4160] dark:text-[#d9cdf2] shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for freelance projects
          </motion.p>

          <p className="mt-6 text-[15px] tracking-[0.18em] uppercase text-[#6d6484] dark:text-[#b9abd8]">
            Hi, I&apos;m Cho — call me Cho.
          </p>
          <h1 className="font-heading leading-[0.95] mt-2 text-[clamp(2.6rem,7vw,5.2rem)] text-[#1d1530] dark:text-white">
            CHO
          </h1>
          <p className="mt-4 font-heading text-[clamp(1.05rem,2.4vw,1.5rem)] text-[#3d3454] dark:text-[#e6dcfb]">
            Full-Stack Developer <span className="text-pinkpurple">&</span> UI/UX Designer
          </p>
          <p className="mt-5 max-w-[46ch] text-[16px] sm:text-[17px] leading-relaxed text-[#5b5170] dark:text-[#c9bede]">
            I build functional, thoughtful, and user-centered digital experiences — from school
            systems and research platforms to modern web applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="group inline-flex items-center gap-2 rounded-full bg-deeppurple px-6 py-3.5 text-white text-[15px] font-semibold shadow-soft hover:bg-pinkpurple hover:shadow-glow transition-colors duration-300"
            >
              Hire Me
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="/Camille-Atibagos-CV.pdf"
              download
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-transparent px-6 py-3.5 text-[15px] font-semibold text-deeppurple dark:text-lavender border border-deeppurple/40 hover:bg-lavender hover:text-[#2a1e4d] hover:border-lavender dark:hover:bg-lavender/20 dark:hover:text-white transition-colors duration-300"
            >
              <Download size={17} />
              Download CV
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#6d6484] dark:text-[#a99acb]">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={14} className="text-pinkpurple" /> Next.js
            </span>
            <span className="h-1 w-1 rounded-full bg-deeppurple/30" />
            <span>TypeScript</span>
            <span className="h-1 w-1 rounded-full bg-deeppurple/30" />
            <span>Figma</span>
            <span className="h-1 w-1 rounded-full bg-deeppurple/30" />
            <span>Supabase</span>
          </div>
        </motion.div>

        {/* RIGHT : code card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl border border-deeppurple/15 bg-white/90 dark:bg-[#1e1633]/90 backdrop-blur shadow-[0_24px_70px_-20px_rgba(136,102,222,0.45)] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-deeppurple/10 bg-gradient-to-r from-lavender/40 via-powder/40 to-transparent dark:from-deeppurple/20 dark:to-transparent">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[13px] font-medium text-[#5b5170] dark:text-[#c9bede]">
                Camille.tsx
              </span>
              <span className="ml-auto text-[11px] px-2 py-0.5 rounded-full bg-deeppurple/10 text-deeppurple dark:text-lavender dark:bg-white/10">
                TypeScript
              </span>
            </div>
            <pre className="no-scrollbar p-5 sm:p-6 text-[13.5px] sm:text-[14px] leading-[1.7] overflow-x-auto font-mono">
              <code>
                <span className="text-pinkpurple">const</span>{" "}
                <span className="text-deeppurple dark:text-lavender font-semibold">developer</span>{" "}
                <span className="opacity-60">= {"{"}</span>
                {"\n"}
                {"  "}name: <span className="text-[#2e7d4f] dark:text-[#9be3b8]">&quot;Camille&quot;</span>,
                {"\n"}
                {"  "}role:{" "}
                <span className="text-[#2e7d4f] dark:text-[#9be3b8]">&quot;Full-Stack Developer&quot;</span>,
                {"\n"}
                {"  "}design:{" "}
                <span className="text-[#2e7d4f] dark:text-[#9be3b8]">&quot;UI/UX Designer&quot;</span>,
                {"\n"}
                {"  "}passion:{" "}
                <span className="text-[#2e7d4f] dark:text-[#9be3b8]">&quot;Building&quot;</span>
                {"\n"}
                <span className="opacity-60">{"};"}</span>
                <span className="caret-blink text-pinkpurple font-bold">▍</span>
              </code>
            </pre>
            <div className="h-1.5 w-full bg-gradient-to-r from-lavender via-powder via-pinkpurple to-deeppurple" />
          </motion.div>

          {/* floating badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute -left-4 sm:-left-8 top-10 rounded-2xl border border-deeppurple/15 bg-white dark:bg-[#241b3f] px-3.5 py-2.5 shadow-card flex items-center gap-2 text-[13px] font-semibold"
          >
            <span className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-br from-lavender to-powder text-[#2a1e4d]">
              ✦
            </span>
            UI / UX Lover
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-3 sm:-right-6 bottom-8 rounded-2xl border border-deeppurple/15 bg-white dark:bg-[#241b3f] px-3.5 py-2.5 shadow-card flex items-center gap-2 text-[13px] font-semibold"
          >
            <span className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-br from-pinkpurple to-deeppurple text-white">
              {"</>"}
            </span>
            Clean Code
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
