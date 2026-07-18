import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/profile-mustafa.jpg";

// Renders a photo as a grid of terminal-green dots — brightness of each
// sampled cell decides whether a dot is drawn, how big it is, and whether
// it gets the "highlight" bright-green treatment or the dim outline color.
const DotPortrait = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = profileImage;

    img.onload = () => {
      const cell = 6; // spacing between sample points, px
      const width = 340;
      const height = Math.round((img.height / img.width) * width);

      canvas.width = width;
      canvas.height = height;

      // sample the image at low res on an offscreen canvas
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const offCtx = off.getContext("2d");
      if (!offCtx) return;
      offCtx.drawImage(img, 0, 0, width, height);
      const data = offCtx.getImageData(0, 0, width, height).data;

      const styles = getComputedStyle(document.documentElement);
      const greenDim = styles.getPropertyValue("--green-dim").trim();
      const green = styles.getPropertyValue("--green").trim();

      const luminanceAt = (x: number, y: number) => {
        const i = (y * width + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      };

      // calibrate contrast using only the center of the frame, where a
      // headshot subject usually sits — keeps a blown-out or dim background
      // from skewing the whole normalization
      const cx0 = Math.floor(width * 0.2);
      const cx1 = Math.floor(width * 0.8);
      const cy0 = Math.floor(height * 0.15);
      const cy1 = Math.floor(height * 0.75);
      const centerLums: number[] = [];
      for (let y = cy0; y < cy1; y += cell) {
        for (let x = cx0; x < cx1; x += cell) {
          centerLums.push(luminanceAt(x, y));
        }
      }
      centerLums.sort((a, b) => a - b);
      const pct = (p: number) => centerLums[Math.floor(p * (centerLums.length - 1))];
      const lo = pct(0.03);
      const hi = pct(0.92);
      const range = Math.max(hi - lo, 0.001);

      ctx.clearRect(0, 0, width, height);

      for (let y = 0; y < height; y += cell) {
        for (let x = 0; x < width; x += cell) {
          const lum = luminanceAt(x, y);
          const n = Math.min(1, Math.max(0, (lum - lo) / range));

          // near-white after normalizing = background -> leave empty
          if (n > 0.85) continue;

          const isFeature = n >= 0.3 && n < 0.68;
          const radius = isFeature ? 1.7 : 1.0 + (1 - n) * 0.7;

          ctx.beginPath();
          ctx.fillStyle = isFeature ? `hsl(${green})` : `hsl(${greenDim})`;
          ctx.globalAlpha = isFeature ? 0.9 : 0.55;
          ctx.arc(x + cell / 2, y + cell / 2, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      setReady(true);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto w-full max-w-[340px]"
      style={{
        clipPath: ready ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        transition: "clip-path 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      <canvas ref={canvasRef} className="block w-full" />
    </div>
  );
};

export default DotPortrait;
