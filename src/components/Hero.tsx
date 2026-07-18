import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotPortrait from "@/components/DotPortrait";

const BOOT_LINES = [
  "> booting portfolio.exe",
  "> loading modules: react, typescript, tailwind",
  "> connecting to github.com/mustah21 ... ok",
  "> mounting sections: about, skills, quests, levels",
  "> ready.",
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines((v) => Math.max(v, i + 1)), i * 220)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <header className="relative flex min-h-screen flex-col justify-center">
      <div className="container px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* left: dot-matrix portrait, right side stays clear */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <DotPortrait />
          </motion.div>

          {/* right: terminal boot + intro */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              {BOOT_LINES.map((line, i) => (
                <div
                  key={line}
                  className="text-[13px] whitespace-pre transition-opacity duration-300"
                  style={{
                    color: "hsl(var(--green-dim))",
                    opacity: i < visibleLines ? 1 : 0,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: BOOT_LINES.length * 0.22, duration: 0.5 }}
            >
              <div className="mb-1.5 text-[13px] text-muted-foreground">$ whoami</div>
              <h1 className="my-1.5 text-[clamp(32px,6vw,58px)] font-extrabold text-foreground">
                Mustafa Ahmad
                <span className="caret">&nbsp;</span>
              </h1>
              <div className="mb-3.5 text-lg text-primary">&gt; Software Engineer</div>
              <p className="mb-6 max-w-[520px] text-sm text-muted-foreground">
                Full-stack developer building scalable applications end to end — from network
                infrastructure up through APIs to the UI. Currently levelling up in Helsinki,
                Finland.
              </p>

              <div className="mb-6 flex flex-wrap gap-3.5">
                <a
                  href="#contact"
                  className="border px-[18px] py-2.5 text-[13px] text-primary transition-colors hover:bg-primary hover:text-background"
                  style={{ borderColor: "hsl(var(--green-dim))" }}
                >
                  Get in touch
                </a>
                <a
                  href="/Mustafa_Ahmad-Resume.pdf"
                  download
                  className="border border-line px-[18px] py-2.5 text-[13px] text-muted-foreground transition-colors hover:border-muted-foreground hover:text-foreground"
                >
                  Download CV
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-[13px]">
                {[
                  { label: "GitHub", href: "https://github.com/mustah21/" },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/mustafa-ahmad-002063332/",
                  },
                  { label: "Email", href: "mailto:mustafa.ahmad@metropolia.fi" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="border-b border-dashed border-line text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
