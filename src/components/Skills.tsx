import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "Ruby", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "REST APIs", "Nginx", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-border"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium border border-border hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
