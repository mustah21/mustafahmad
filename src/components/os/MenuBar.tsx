import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const menuItems = [];

const MenuBar = ({ onBellClick }: { onBellClick: () => void }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" });

  return (
    <div className="glass-panel-solid no-select fixed left-0 right-0 top-0 z-40 flex h-9 items-center justify-between px-4 text-[13px] text-foreground/90">
      <div className="flex items-center gap-5">
        <span className="font-semibold tracking-tight">MA/OS</span>
        <div className="hidden items-center gap-4 text-muted-foreground sm:flex">
          {menuItems.map((item) => (
            <span key={item} className="cursor-default hover:text-foreground/80">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onBellClick}
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>
        <span className="hidden text-muted-foreground sm:inline">{date}</span>
        <span className="tabular-nums">{time}</span>
      </div>
    </div>
  );
};

export default MenuBar;
