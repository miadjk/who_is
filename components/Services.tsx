import { Globe, GraduationCap, Palette } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface Service {
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const services: Service[] = [
  {
    tag: "WEBSITE DEVELOPMENT",
    title: "Website Development",
    description: "Modern, responsive websites and web applications designed around your goals.",
    icon: <Globe size={20} />,
    items: [
      "Portfolio Websites",
      "Business Websites",
      "School Websites",
      "Management Systems",
      "Research Systems",
      "Progressive Web Apps",
    ],
  },
  {
    tag: "ACADEMIC COMMISSIONS",
    title: "Academic Commissions",
    description: "Careful, original academic support — formatted, cited, and on time.",
    icon: <GraduationCap size={20} />,
    items: ["Academic Writing", "Basic Editing"],
  },
  {
    tag: "CREATIVE EDITING",
    title: "Creative Editing",
    description: "Playful visuals for feeds, decks, and everyday storytelling.",
    icon: <Palette size={20} />,
    items: ["Basic Video Editing", "Presentation Design", "Social Media Graphics"],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative rounded-3xl border border-deeppurple/15 bg-white dark:bg-[#1e1633] p-6 sm:p-7 shadow-sm overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        <span className="h-11 w-11 grid place-items-center rounded-2xl bg-gradient-to-br from-lavender/70 to-powder/70 text-[#2a1e4d]">
          {service.icon}
        </span>
        <span className="text-[11px] font-bold tracking-[0.18em] px-3 py-1.5 rounded-full bg-powder/50 dark:bg-white/10 border border-deeppurple/15 text-deeppurple dark:text-lavender">
          {service.tag}
        </span>
      </div>
      <h3 className="font-heading text-xl mt-4">{service.title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-[#5b5170] dark:text-[#c9bede]">
        {service.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.items.map((item) => (
          <li
            key={item}
            className="text-[13px] px-3 py-1.5 rounded-full border border-deeppurple/15 bg-[#FAF8FF] dark:bg-white/5"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 scroll-mt-20 bg-[#FAF8FF]/60 dark:bg-white/[0.02] border-y border-deeppurple/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I can do"
          title="WHAT I CAN DO"
          description="From digital products and websites to academic and creative support, I offer services designed around your needs."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
