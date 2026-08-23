import { useEffect, useState } from "react";

const STEPS = [
  "Starting MA/OS",
  "Loading profile",
  "Mounting experience.log",
  "Indexing projects",
  "Ready",
];

const BootSequence = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1900;
    const frame = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      setStepIndex(Math.min(STEPS.length - 1, Math.floor((pct / 100) * STEPS.length)));
      if (pct < 100) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(onDone, 300);
      }
    };
    const raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-bold tracking-tight">
        MA
      </div>
      <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-xs text-muted-foreground">{STEPS[stepIndex]}…</div>
    </div>
  );
};

export default BootSequence;
