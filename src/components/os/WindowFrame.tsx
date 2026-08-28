import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface WindowFrameProps {
  title: string;
  icon?: ReactNode;
  x: number;
  y: number;
  z: number;
  width?: number;
  isMobile?: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  children: ReactNode;
}

const WindowFrame = ({
  title,
  icon,
  x,
  y,
  z,
  width = 480,
  isMobile = false,
  onClose,
  onMinimize,
  onFocus,
  onMove,
  children,
}: WindowFrameProps) => {
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(
    null
  );

  const [dragging, setDragging] = useState(false);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (isMobile) return; // no dragging on mobile — windows are full screen
      onFocus();
      dragRef.current = { startX: e.clientX, startY: e.clientY, origX: x, origY: y };
      setDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [x, y, onFocus, isMobile]
  );

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      onMove(
        Math.max(8, dragRef.current.origX + dx),
        Math.max(36, dragRef.current.origY + dy)
      );
    };
    const handleUp = () => {
      setDragging(false);
      dragRef.current = null;
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, onMove]);

  const desktopStyle = { left: x, top: y, width, zIndex: z, maxHeight: "78vh" };
  const mobileStyle = { top: 40, left: 0, right: 0, bottom: 76, zIndex: z };

  return (
    <div
      className={
        isMobile
          ? "animate-window-in glass-panel fixed flex flex-col overflow-hidden rounded-t-xl shadow-2xl"
          : "animate-window-in glass-panel absolute flex flex-col overflow-hidden rounded-xl shadow-2xl"
      }
      style={isMobile ? mobileStyle : desktopStyle}
      onMouseDown={onFocus}
    >
      <div
        className={`no-select flex shrink-0 items-center gap-2 border-b border-white/5 px-4 py-3 ${
          isMobile ? "" : "cursor-grab active:cursor-grabbing"
        }`}
        onPointerDown={handlePointerDown}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="traffic-dot bg-[#ff5f57] hover:opacity-80"
            aria-label="Close window"
          />
          {!isMobile && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
              className="traffic-dot bg-[#febc2e] hover:opacity-80"
              aria-label="Minimize window"
            />
          )}
          {!isMobile && <div className="traffic-dot bg-[#28c840] opacity-40" />}
        </div>
        <div className="ml-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          {icon}
          {title}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">{children}</div>
    </div>
  );
};

export default WindowFrame;
