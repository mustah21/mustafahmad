import { ReactNode } from "react";
import { User, Briefcase, FolderOpen, Mail, TerminalSquare, Home } from "lucide-react";

export interface DockItem {
  id: string;
  label: string;
  icon: ReactNode;
}

export const dockItems: DockItem[] = [
  { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
  { id: "about", label: "About me", icon: <User className="h-5 w-5" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
  { id: "projects", label: "Projects", icon: <FolderOpen className="h-5 w-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  { id: "terminal", label: "Terminal", icon: <TerminalSquare className="h-5 w-5" /> },
];

const Dock = ({
  openIds,
  onLaunch,
}: {
  openIds: string[];
  onLaunch: (id: string) => void;
}) => {
  return (
    <div className="no-select fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
      <div className="glass-panel flex items-end gap-1.5 rounded-2xl px-3 py-2.5 shadow-2xl">
        {dockItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onLaunch(item.id)}
            title={item.label}
            className="group relative flex h-11 w-11 flex-col items-center justify-center rounded-xl text-foreground/80 transition-all hover:-translate-y-1 hover:bg-white/5 hover:text-foreground"
          >
            {item.icon}
            <span
              className={`absolute -bottom-1 h-1 w-1 rounded-full bg-primary transition-opacity ${
                openIds.includes(item.id) ? "opacity-100" : "opacity-0"
              }`}
            />
            <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-[11px] text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dock;
