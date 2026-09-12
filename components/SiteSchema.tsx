import { contact, skills } from "@/data/portfolio";

/**
 * Schema.org Person structured data (JSON-LD) for SEO.
 * Rendered once in the root layout inside <body>.
 */
export function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Camille B. Atibagos",
    jobTitle: "Full-Stack Developer & UI/UX Designer",
    description:
      "Full-Stack Developer and UI/UX Designer building functional, thoughtful, and user-centered digital experiences — from school systems and research platforms to modern web applications.",
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mati City",
      addressRegion: "Davao Oriental",
      addressCountry: "PH",
    },
    sameAs: [contact.facebook, contact.indeed],
    knowsAbout: skills,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
