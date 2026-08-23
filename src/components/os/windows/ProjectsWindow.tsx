const projects = [
  {
    title: "Bookish.fi",
    sub: "Book management app",
    desc: "Full-stack web app for managing and tracking books. Built with agile methodology, UI/UX designed in Figma.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mustah21/bookish-checking",
  },
  {
    title: "Cafeteria rush-hour sim",
    sub: "Event-driven simulator",
    desc: "Simulates a school cafeteria during rush hours using queue and linked-list data structures.",
    tech: ["Java", "JavaFX", "OOP", "Design patterns"],
    github: "https://github.com/mustah21/Java-simulator-project",
  },
  {
    title: "Study planner",
    sub: "AI-assisted student planning app",
    desc: "Lets students plan and track study activities, with Gemini API integration for recommendations.",
    tech: ["TypeScript", "React", "Spring Boot", "Postgres"],
    github: "https://github.com/mustah21/personalized-study-planner",
  },
];

const ProjectsWindow = () => {
  return (
    <div className="space-y-3 text-sm">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel-solid block rounded-lg p-3.5 transition-colors hover:border-primary/40"
        >
          <div className="mb-0.5 font-medium">{project.title}</div>
          <div className="mb-2 text-xs text-muted-foreground">{project.sub}</div>
          <p className="mb-2.5 text-xs leading-relaxed text-muted-foreground">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsWindow;
