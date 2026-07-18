import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", lvl: 90 },
      { name: "TypeScript", lvl: 85 },
      { name: "JavaScript", lvl: 80 },
      { name: "Python", lvl: 70 },
    ],
  },
  {
    title: "Frameworks & libraries",
    skills: [
      { name: "React.js / Next.js", lvl: 85 },
      { name: "Node.js / Express", lvl: 75 },
      { name: "Spring Boot", lvl: 70 },
    ],
  },
  {
    title: "DevOps & tools",
    skills: [
      { name: "Docker / Kubernetes", lvl: 75 },
      { name: "Git / CI-CD", lvl: 80 },
      { name: "Linux / Nginx", lvl: 65 },
    ],
  },
];

const SkillRow = ({ name, lvl }: { name: string; lvl: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-3">
      <div className="mb-1 flex justify-between text-[13px]">
        <span>{name}</span>
        <span className="text-primary">Lv.{lvl}</span>
      </div>
      <div className="h-2 overflow-hidden bg-line">
        <div
          className="h-full bg-primary transition-[width] ease-out"
          style={{ width: filled ? `${lvl}%` : "0%", transitionDuration: "1100ms" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="border-t border-dashed border-line py-20">
      <div className="container px-6">
        <div className="seclabel">skill tree</div>
        <h2 className="mb-8 text-2xl font-extrabold text-foreground">Skills</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-3.5 text-xs uppercase tracking-wider text-accent">
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillRow key={skill.name} name={skill.name} lvl={skill.lvl} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
