import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Metropolia University of Applied Sciences",
    location: "Helsinki, Finland",
    period: "Aug 2024 – Present",
    major: "Software Engineering - Mobile Development",
    icon: GraduationCap,
  },
  {
    degree: "GCE Advanced Level",
    institution: "Cambridge International Examinations",
    period: "2021 – 2023",
    icon: Award,
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "Finnish", level: "Basic" },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center mb-4">
            Education & <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Academic background and language proficiency
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Education cards */}
            <div className="lg:col-span-2 space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">{edu.period}</p>
                      <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      )}
                      {edu.major && (
                        <p className="text-sm text-primary mt-2">Major: {edu.major}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-gradient p-6 rounded-xl border border-border"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
