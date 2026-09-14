"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Briefcase, Facebook, Mail } from "lucide-react";
import { contact } from "@/data/portfolio";

const socials = [
  { label: "Email", href: contact.emailHref, icon: <Mail size={16} /> },
  { label: "Facebook", href: contact.facebook, icon: <Facebook size={16} />, external: true },
  { label: "Indeed", href: contact.indeed, icon: <Briefcase size={16} />, external: true },
];

export function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="relative overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="relative rounded-[2rem] border border-deeppurple/15 bg-white dark:bg-[#1e1633] px-7 py-12 sm:p-14 text-center overflow-hidden shadow-card"
        >
          <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[560px] rounded-full bg-lavender/40 blur-[80px] dark:bg-deeppurple/25" />
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-powder/60 blur-[70px] dark:bg-pinkpurple/15" />
          </div>
          <p className="relative text-[12px] font-bold tracking-[0.24em] uppercase text-deeppurple dark:text-lavender">
            Got a project in mind?
          </p>
          <h2 className="relative font-heading text-[clamp(2.2rem,6vw,4rem)] leading-[1.02] mt-3">
            LET&apos;S BUILD
            <br />
            <span className="bg-gradient-to-r from-deeppurple via-pinkpurple to-deeppurple bg-clip-text text-transparent">
              TOGETHER.
            </span>
          </h2>
          <p className="relative mt-4 text-[16px] text-[#5b5170] dark:text-[#c9bede]">
            Have an idea? Let&apos;s turn it into something real.
          </p>
          <motion.a
            href={contact.emailHref}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="relative group mt-7 inline-flex items-center gap-2 rounded-full bg-deeppurple px-7 py-3.5 text-white font-semibold hover:bg-pinkpurple transition-colors duration-300 shadow-soft"
          >
            Hire Me
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <div className="relative mt-9 flex flex-wrap justify-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={"external" in s && s.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-deeppurple/20 px-4 py-2 text-[13.5px] font-medium hover:bg-lavender/60 hover:border-lavender dark:hover:bg-white/10 transition-colors break-all"
              >
                {s.icon}
                {s.label === "Email" ? contact.email : s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13.5px] text-[#6d6484] dark:text-[#a99acb]">
          <p>© 2026 Camille B. Atibagos</p>
          <p className="font-heading text-[13px] tracking-wide">
            CAMILLE<span className="text-pinkpurple">.</span> — designed & built with care
          </p>
          <button
            onClick={toTop}
            className="group inline-flex items-center gap-2 rounded-full border border-deeppurple/25 px-4 py-2 hover:bg-deeppurple hover:text-white hover:border-deeppurple transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
