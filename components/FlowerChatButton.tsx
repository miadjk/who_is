"use client";

import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import { contact } from "@/data/portfolio";

export function FlowerChatButton() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <motion.a
        href={contact.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Miacho"
        whileHover={{ scale: 1.12, rotate: 10 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.22 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-deeppurple via-pinkpurple to-deeppurple text-white shadow-soft ring-4 ring-lavender/40 hover:ring-lavender/70"
      >
        <Flower2 size={26} />
      </motion.a>
    </motion.div>
  );
}
