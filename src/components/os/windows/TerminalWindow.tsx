import { useState, useRef, useEffect, FormEvent } from "react";

const HELP = `Available commands: help, whoami, about, skills, contact, clear`;

const respond = (cmdRaw: string): string => {
  const cmd = cmdRaw.trim().toLowerCase();
  switch (cmd) {
    case "help":
      return HELP;
    case "whoami":
      return "mustafa-ahmad — software engineer, Helsinki FI";
    case "about":
      return "Full-stack developer. React/TypeScript, Java/Spring Boot, Docker & CI/CD.";
    case "skills":
      return "Java, TypeScript, React, Node.js, Spring Boot, Docker, Kubernetes, Postgres.";
    case "contact":
      return "mustafa.ahmad@metropolia.fi · github.com/mustah21";
    case "":
      return "";
    default:
      return `command not found: ${cmd} (try "help")`;
  }
};

const TerminalWindow = () => {
  const [lines, setLines] = useState<string[]>([
    "MA/OS terminal v1.0",
    'type "help" to get started',
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (cmd === "clear") {
      setLines([]);
    } else {
      const output = respond(cmd);
      setLines((prev) => [...prev, `$ ${input}`, ...(output ? [output] : [])]);
    }
    setInput("");
  };

  return (
    <div className="font-mono text-xs">
      <div className="mb-2 max-h-64 space-y-1 overflow-y-auto text-muted-foreground">
        {lines.map((line, i) => (
          <div key={i} className={line.startsWith("$") ? "text-foreground" : ""}>
            {line}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 pt-2">
        <span className="text-primary">$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className="flex-1 bg-transparent text-foreground outline-none"
          placeholder="type a command..."
        />
      </form>
    </div>
  );
};

export default TerminalWindow;
