import { useCallback, useState } from "react";

export interface WindowState {
  id: string;
  x: number;
  y: number;
  z: number;
  minimized: boolean;
}

let zCounter = 10;

export function useWindowManager() {
  const [windows, setWindows] = useState<Record<string, WindowState>>({});

  const openWindow = useCallback((id: string, defaultPos: { x: number; y: number }) => {
    setWindows((prev) => {
      if (prev[id]) {
        // already open -> just focus + un-minimize
        zCounter += 1;
        return { ...prev, [id]: { ...prev[id], minimized: false, z: zCounter } };
      }
      zCounter += 1;
      return {
        ...prev,
        [id]: { id, x: defaultPos.x, y: defaultPos.y, z: zCounter, minimized: false },
      };
    });
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      zCounter += 1;
      return { ...prev, [id]: { ...prev[id], z: zCounter } };
    });
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], minimized: true } };
    });
  }, []);

  const moveWindow = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], x, y } };
    });
  }, []);

  return { windows, openWindow, closeWindow, focusWindow, minimizeWindow, moveWindow };
}
