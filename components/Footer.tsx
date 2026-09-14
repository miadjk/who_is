"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Briefcase, Facebook, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { contact } from "@/data/portfolio";

function MessengerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13" />
    </svg>
  );
}

const socials: { label: string; href: string; icon: ReactNode; external?: boolean; ariaLabel?: string }[] = [
  { label: "Email", href: contact.emailHref, icon: <Mail size={16} /> },
  { label: "Facebook", href: contact.facebook, icon: <Facebook size={16} />, external: true },
  {
    label: "Messenger",
    href: contact.facebook,
    icon: <MessengerIcon />,
    external: true,
    ariaLabel: "Message me on Facebook",
  },
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
                aria-label={s.ariaLabel ?? s.label}
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
