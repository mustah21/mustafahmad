import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    num: "LEVEL 01",
    title: "Bookish.fi",
    sub: "Book management app",
    desc: "Full-stack web app for managing and tracking books. Built with agile methodology, UI/UX designed in Figma, Git-based CI/CD.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mustah21/bookish-checking",
  },
  {
    num: "LEVEL 02",
    title: "Cafeteria rush-hour sim",
    sub: "Event-driven simulator",
    desc: "Simulates a school cafeteria during rush hours using queue and linked-list data structures with event-driven algorithms.",
    tech: ["Java", "JavaFX", "OOP", "Design patterns"],
    github: "https://github.com/mustah21/Java-simulator-project",
  },
  {
    num: "LEVEL 03",
    title: "Study planner",
    sub: "AI-assisted student planning app",
    desc: "Lets students plan, organize, and track study activities, with Gemini API integration for task recommendations.",
    tech: ["TypeScript", "React", "Spring Boot", "Postgres"],
    github: "https://github.com/mustah21/personalized-study-planner",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => setOpen((o) => !o)}
      className="cursor-pointer border border-line bg-card p-5 transition-colors hover:border-[hsl(var(--green-dim))]"
    >
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[11px] tracking-wider text-primary">{project.num}</span>
      </div>
      <h4 className="mb-1 text-base text-foreground">{project.title}</h4>
      <div className="mb-2.5 text-xs text-muted-foreground">{project.sub}</div>

      {open && (
        <div className="mb-3 text-[13px] text-muted-foreground">{project.desc}</div>
      )}

      <div className="mb-2.5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="border border-line px-1.5 py-0.5 text-[11px] text-primary">
            {t}
          </span>
        ))}
      </div>

      <div className="text-[11px] text-muted-foreground">
        {open ? <span className="text-primary">loaded ✓</span> : <span>click to load ▸</span>}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-2.5 inline-block border-b border-dashed border-primary text-xs text-primary"
      >
        View code →
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="border-t border-dashed border-line py-20">
      <div className="container px-6">
        <div className="seclabel">select a level</div>
        <h2 className="mb-8 text-2xl font-extrabold text-foreground">Projects</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
