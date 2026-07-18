import { useEffect, useRef, useState } from "react";

interface Toast {
  id: number;
  title: string;
  name: string;
}

const ACHIEVEMENT_NAMES: Record<string, string> = {
  about: "Read the character sheet",
  skills: "Studied the skill tree",
  experience: "Cleared two quests",
  projects: "Reached the level select",
  contact: "Found the contact terminal",
};

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let toastId = 0;

const AchievementToasts = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const achievedRef = useRef<Set<string>>(new Set());

  const pushToast = (title: string, name: string) => {
    const id = ++toastId;
    setToasts((t) => [...t, { id, title, name }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 3200);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !achievedRef.current.has(id) && ACHIEVEMENT_NAMES[id]) {
            achievedRef.current.add(id);
            pushToast("Achievement unlocked", ACHIEVEMENT_NAMES[id]);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let pos = 0;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === KONAMI[pos]) {
        pos++;
        if (pos === KONAMI.length) {
          pushToast("Secret found", "Konami code activated — you know your stuff");
          document.body.style.filter = "invert(1) hue-rotate(180deg)";
          setTimeout(() => {
            document.body.style.filter = "";
          }, 1500);
          pos = 0;
        }
      } else {
        pos = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2.5 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="toast-enter flex min-w-[220px] items-center gap-2.5 border border-primary bg-card px-4 py-3 text-xs shadow-lg"
        >
          <span className="text-lg text-primary">★</span>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {toast.title}
            </div>
            <div className="text-foreground">{toast.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementToasts;
