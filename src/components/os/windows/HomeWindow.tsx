import { Github, Linkedin, FileDown } from "lucide-react";

const HomeWindow = ({ onOpen }: { onOpen: (id: string) => void }) => {
  return (
    <div className="text-sm">
      <div className="mb-1 text-xs uppercase tracking-wider text-primary">Welcome to MA/OS</div>
      <h2 className="mb-3 text-2xl font-bold tracking-tight">Hi, I'm Mustafa Ahmad.</h2>
      <p className="mb-5 leading-relaxed text-muted-foreground">
        Software engineer based in Helsinki, Finland. This site is set up like a little desktop —
        open the apps in the dock below, or the icons here, to look around.
      </p>

      <div className="mb-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {[
          { id: "about", label: "About me" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onOpen(item.id)}
            className="glass-panel-solid rounded-lg p-3 text-left text-xs transition-colors hover:border-primary/40"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 text-xs">
        <a
          href="https://github.com/mustah21/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-ahmad-002063332/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Linkedin className="h-3.5 w-3.5" /> LinkedIn
        </a>
        <a
          href="/Mustafa_Ahmad-Resume.pdf"
          download
          className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <FileDown className="h-3.5 w-3.5" /> Download CV
        </a>
      </div>
    </div>
  );
};

export default HomeWindow;
