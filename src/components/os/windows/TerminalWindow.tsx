import { useState, useRef, useEffect, FormEvent } from "react";

interface Command {
  description: string;
  run: (args: string[]) => string;
}

// Single source of truth: add a command here and it automatically
// shows up in "help" too.
const COMMANDS: Record<string, Command> = {
  help: {
    description: "list available commands",
    run: () =>
      "Available commands:\n" +
      Object.entries(COMMANDS)
        .map(([name, c]) => `  ${name.padEnd(10)} ${c.description}`)
        .join("\n"),
  },
  whoami: {
    description: "who am i",
    run: () => "mustafa-ahmad — software engineer, Helsinki FI",
  },
  about: {
    description: "short bio",
    run: () => "Full-stack developer. React/TypeScript, Java/Spring Boot, Docker & CI/CD.",
  },
  skills: {
    description: "tech stack",
    run: () => "Java, TypeScript, Kotlin, React, Node.js, Spring Boot, Docker, Kubernetes, Postgres.",
  },
  contact: {
    description: "how to reach me",
    run: () => "mustafa.ahmad@metropolia.fi · github.com/mustah21",
  },
  education: {
    description: "education background",
    run: () => "Metropolia University of Applied Sciences — B.Eng, Information Technology.",
  },
  socials: {
    description: "social links",
    run: () => "github.com/mustah21 · linkedin.com/in/mustafa-ahmad",
  },
  date: {
    description: "current date/time",
    run: () => new Date().toLocaleString(),
  },
  echo: {
    description: "echo back text",
    run: (args) => args.join(" "),
  },
  clear: {
    description: "clear the terminal",
    run: () => "__CLEAR__",
  },
  sudo: {
    description: "Superuser do",
    run: () => "nice try",
  },
};

const respond = (raw: string): string => {
  const trimmed = raw.trim();
  if (!trimmed) return "";

  const [cmdRaw, ...args] = trimmed.split(/\s+/);
  const cmd = cmdRaw.toLowerCase();

  const command = COMMANDS[cmd];
  if (!command) return `command not found: ${cmd} (try "help")`;

  return command.run(args);
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
    const output = respond(input);

    if (output === "__CLEAR__") {
      setLines([]);
    } else {
      setLines((prev) => [...prev, `$ ${input}`, ...(output ? [output] : [])]);
    }
    setInput("");
  };

  return (
    <div className="font-mono text-xs">
      <div className="mb-2 max-h-64 space-y-1 overflow-y-auto text-muted-foreground">
        {lines.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap ${line.startsWith("$") ? "text-foreground" : ""}`}>
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