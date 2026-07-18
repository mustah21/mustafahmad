import { motion } from "framer-motion";

interface Quest {
  tag: string;
  title: string;
  sub?: string;
  items?: string[];
  reward: string;
}

const quests: Quest[] = [
  {
    tag: "June 2024 – Aug 2024",
    title: "Network Intern — Himont Int",
    sub: "Enterprise infrastructure ops",
    items: [
      "Oversaw daily network operations, ensuring uptime across enterprise infrastructure",
      "Performed hardware maintenance, gained expertise in networking technologies",
      "Documented procedures, building a knowledge base that improved team efficiency",
    ],
    reward: "+40 Networking XP",
  },
  {
    tag: "June 2022 – Aug 2022",
    title: "Tech Intern — Quality Assurance",
    sub: "Full-stack + QA",
    items: [
      "Developed full-stack components using HTML, CSS, JavaScript",
      "Designed UI/UX assets with Adobe suite and Figma",
      "Conducted quality testing, catching bugs before deployment",
    ],
    reward: "+30 QA XP",
  },
  {
    tag: "Aug 2024 – Present",
    title: "BEng Information Technology — Metropolia UAS",
    sub: "Helsinki, Finland · Major: Software Engineering, Mobile Development",
    reward: "In progress",
  },
  {
    tag: "2021 – 2023",
    title: "GCE Advanced Level — Cambridge International",
    reward: "+Foundation XP",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="border-t border-dashed border-line py-20">
      <div className="container px-6">
        <div className="seclabel">quest log — completed</div>
        <h2 className="mb-8 text-2xl font-extrabold text-foreground">Experience &amp; education</h2>

        <div className="mx-auto max-w-3xl">
          {quests.map((quest, index) => (
            <motion.div
              key={quest.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative mb-4 border border-line bg-card py-4 pl-[52px] pr-5"
            >
              <div className="absolute left-4 top-[18px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary text-xs font-extrabold text-background">
                ✓
              </div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {quest.tag}
              </div>
              <h4 className="mb-0.5 mt-1 text-[15px] text-foreground">{quest.title}</h4>
              {quest.sub && (
                <div className="mb-2.5 text-[13px] text-muted-foreground">{quest.sub}</div>
              )}
              {quest.items && (
                <ul className="list-disc space-y-1 pl-[18px] text-[13px] text-muted-foreground">
                  {quest.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <span className="mt-2.5 inline-block border border-dashed border-accent px-2 py-0.5 text-[11px] text-accent">
                {quest.reward}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
