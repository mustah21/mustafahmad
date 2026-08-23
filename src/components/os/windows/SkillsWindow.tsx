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

const SkillsWindow = () => {
  return (
    <div className="space-y-5 text-sm">
      {skillCategories.map((category) => (
        <div key={category.title}>
          <h3 className="mb-2.5 text-[11px] uppercase tracking-wider text-muted-foreground">
            {category.title}
          </h3>
          <div className="space-y-2.5">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex justify-between text-xs">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.lvl}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${skill.lvl}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsWindow;
