import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Network Intern",
    company: "Himont Int",
    period: "June 2024 – Aug 2024",
    responsibilities: [
      "Oversaw daily network operations, ensuring uptime across enterprise infrastructure",
      "Performed hardware maintenance, gained expertise in networking technologies",
      "Documented procedures creating knowledge base that improved team efficiency",
    ],
  },
  {
    title: "Tech Intern - Quality Assurance",
    company: "Tech Company",
    period: "June 2022 – Aug 2022",
    responsibilities: [
      "Developed full stack components using HTML, CSS, JavaScript for web applications",
      "Designed UI/UX assets with Adobe suite and Figma",
      "Conducted quality testing identifying bugs before deployment",
      "Gained practical experience in full development lifecycle from design to deployment",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Professional experiences that shaped my development journey
          </p>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-10 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary glow-effect md:-translate-x-1/2" />

                <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
