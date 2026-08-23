import profileImage from "@/assets/profile-mustafa.jpg";

const stats = [
  { k: "Frontend", v: "React, Next.js, TypeScript" },
  { k: "Backend", v: "Node.js, Java, Kotlin, Swift,  Spring Boot, REST APIs" },
  { k: "DevOps", v: "Docker, Jenkins, Github Actions, Kubernetes" },
  { k: "Databases", v: "PostgreSQL, MongoDB, MySQL" },
  { k: "Languages", v: "English, Urdu, Hindi, Finnish (basic)" },
];

const AboutWindow = () => {
  return (
    <div className="text-sm">
      <div className="mb-5 flex items-center gap-4">
        <img
          src={profileImage}
          alt="Mustafa Ahmad"
          className="h-16 w-16 rounded-full border border-white/10 object-cover"
        />
        <div>
          <div className="text-base font-semibold">Mustafa Ahmad</div>
          <div className="text-xs text-muted-foreground">Software Engineer · Helsinki, Finland</div>
        </div>
      </div>

      <p className="mb-5 leading-relaxed text-muted-foreground">
        Full-stack developer building scalable applications end to end. From network
        infrastructure up through APIs to the UI. Specializes in the complete software
        lifecycle: designing applications, architecting network solutions, and
        automating deployments through containerization and CI/CD.
      </p>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.k} className="glass-panel-solid rounded-lg p-3">
            <div className="mb-1 text-[11px] uppercase tracking-wider text-muted-foreground">
              {stat.k}
            </div>
            <div className="text-[13px]">{stat.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutWindow;
