interface Entry {
  tag: string;
  title: string;
  sub?: string;
  items?: string[];
}

const entries: Entry[] = [
  {
    tag: "June 2024 – Aug 2024",
    title: "Network Intern — Himont Int",
    items: [
      "Oversaw daily network operations, ensuring uptime across enterprise infrastructure",
      "Performed hardware maintenance, gained expertise in networking technologies",
      "Documented procedures, building a knowledge base that improved team efficiency",
    ],
  },
  {
    tag: "June 2022 – Aug 2022",
    title: "Tech Intern — Quality Assurance",
    items: [
      "Developed full-stack components using HTML, CSS, JavaScript",
      "Designed UI/UX assets with Adobe suite and Figma",
      "Conducted quality testing, catching bugs before deployment",
    ],
  },
  {
    tag: "Aug 2024 – Present",
    title: "BEng Information Technology — Metropolia UAS",
    sub: "Helsinki, Finland · Major: Software Engineering, Mobile Development",
  },
  {
    tag: "2021 – 2023",
    title: "GCE Advanced Level — Cambridge International",
  },
];

const ExperienceWindow = () => {
  return (
    <div className="space-y-3 text-sm">
      {entries.map((entry) => (
        <div key={entry.title} className="glass-panel-solid rounded-lg p-3.5">
          <div className="mb-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
            {entry.tag}
          </div>
          <div className="mb-1 font-medium">{entry.title}</div>
          {entry.sub && <div className="mb-2 text-xs text-muted-foreground">{entry.sub}</div>}
          {entry.items && (
            <ul className="list-disc space-y-1 pl-4 text-xs text-muted-foreground">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceWindow;
