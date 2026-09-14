"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FileExplorer } from "./FileExplorer";
import { LifeOutsideCode } from "./LifeOutsideCode";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              A developer with a<br className="hidden sm:block" />
              designer&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-deeppurple to-pinkpurple">eye.</span>
            </>
          }
          description="Part engineer, part editorial romantic — I like systems that work beautifully and interfaces that feel personal."
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <FileExplorer />
        </motion.div>

        <div className="mt-20">
          <LifeOutsideCode />
        </div>
      </div>
    </section>
  );
}
