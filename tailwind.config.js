/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#E0AFFF",
        powder: "#C4D6FF",
        pinkpurple: "#DD68E3",
        deeppurple: "#8866DE",
        ink: "#1a1426",
        darkbg: "#140f22",
        darkcard: "#1e1633",
        cream: "#FFFCFE",
        offwhite: "#FAF8FF"
      },
      fontFamily: {
        heading: ["var(--font-zalando)", "sans-serif"],
        body: ["var(--font-jetbrains)", "monospace"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(136, 102, 222, 0.25)",
        card: "0 8px 30px -8px rgba(136, 102, 222, 0.18)",
        glow: "0 0 0 1px rgba(136,102,222,0.15), 0 12px 40px -10px rgba(221,104,227,0.35)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};
