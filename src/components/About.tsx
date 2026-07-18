import { motion } from "framer-motion";

const stats = [
  { k: "Frontend", v: "React, Next.js, TypeScript" },
  { k: "Backend", v: "Node.js, Java, Spring Boot, REST APIs" },
  { k: "DevOps", v: "Docker, CI/CD, Jenkins, Kubernetes" },
  { k: "Databases", v: "PostgreSQL, MongoDB, MySQL" },
  { k: "Languages", v: "English, Urdu, Hindi, Finnish (basic)" },
];

const About = () => {
  return (
    <section id="about" className="border-t border-dashed border-line py-20">
      <div className="container px-6">
        <div className="seclabel">character sheet</div>
        <h2 className="mb-8 text-2xl font-extrabold text-foreground">About</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          Specializes in the complete software lifecycle — designs full-stack applications,
          architects network solutions, and automates deployments through containerization and
          CI/CD.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.k}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-line bg-card p-4"
            >
              <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.k}
              </div>
              <div className="text-sm text-foreground">{stat.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
