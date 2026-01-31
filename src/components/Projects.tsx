import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bookish.fi",
    subtitle: "Book Management App",
    description:
      "Full-stack web application for managing and tracking books. Built with modern technologies and agile methodologies.",
    icon: BookOpen,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "UI/UX designed using Figma",
      "Scrum and agile methodologies",
      "Git-based version control with CI/CD",
    ],
  },
  {
    title: "Cafeteria Simulation",
    subtitle: "Rush Hour Simulator",
    description:
      "Simulator for a school cafeteria during rush hours with event-driven algorithms and time-based logic.",
    icon: Coffee,
    tech: ["Java", "JavaFX", "OOP", "Design Patterns"],
    highlights: [
      "Queue and Linked list data structures",
      "Event-driven algorithms",
      "Comprehensive documentation",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Some of the projects I've worked on that showcase my skills
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card-gradient rounded-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
