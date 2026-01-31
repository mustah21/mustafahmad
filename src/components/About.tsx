import { motion } from "framer-motion";
import { Code2, Server, GitBranch, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Spring Boot, REST APIs",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description: "Docker, CI/CD, GitHub Actions",
  },
  {
    icon: Globe,
    title: "Databases",
    description: "PostgreSQL, MongoDB, MySQL",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Zealous computer engineering student with hands-on experience in full-stack development, 
            networking, and DevOps fundamentals including CI/CD and containerized deployments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
