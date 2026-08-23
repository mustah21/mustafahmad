import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Notification = ({
  title,
  body,
  onDismiss,
}: {
  title: string;
  body: string;
  onDismiss: () => void;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="glass-panel fixed right-4 top-12 z-50 w-72 rounded-xl p-4 shadow-2xl transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-10px)",
      }}
    >
      <div className="mb-1 flex items-start justify-between gap-2">
        <span className="text-sm font-semibold">{title}</span>
        <button
          onClick={onDismiss}
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
};

export default Notification;
