"use client";

import { MapPin } from "lucide-react";

/**
 * General-area map for Mati City, Davao Oriental (no precise home address).
 * Swap MAP_EMBED_SRC with any provider later — the component stays the same.
 */
const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=126.1500%2C6.8500%2C126.3500%2C7.0500&layer=mapnik&marker=6.9540%2C126.2410";

export function LocationMap() {
  return (
    <figure className="mt-4 overflow-hidden rounded-2xl border border-deeppurple/20 shadow-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-lavender/40 to-transparent dark:from-deeppurple/20 text-[13px] font-semibold">
        <MapPin size={14} className="text-pinkpurple" />
        Mati City, Davao Oriental — general area
      </div>
      <iframe
        title="Map showing the general area of Mati City, Davao Oriental"
        src={MAP_EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-56 w-full border-0 bg-powder/30 dark:[filter:invert(0.88)_hue-rotate(185deg)_saturate(0.65)_brightness(0.95)]"
      />
      <figcaption className="px-4 py-2 text-[12px] text-[#6d6484] dark:text-[#a99acb]">
        City-level view only — no residential address shared.
      </figcaption>
    </figure>
  );
}
