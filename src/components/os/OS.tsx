import { useState } from "react";
import { User, Briefcase, FolderOpen, Mail, TerminalSquare, Home } from "lucide-react";
import BootSequence from "./BootSequence";
import MenuBar from "./MenuBar";
import Dock, { dockItems } from "./Dock";
import WindowFrame from "./WindowFrame";
import Notification from "./Notification";
import { useWindowManager } from "./useWindowManager";
import HomeWindow from "./windows/HomeWindow";
import AboutWindow from "./windows/AboutWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ContactWindow from "./windows/ContactWindow";
import SkillsWindow from "./windows/SkillsWindow";
import TerminalWindow from "./windows/TerminalWindow";

const windowMeta: Record<string, { title: string; icon: JSX.Element; width?: number }> = {
  home: { title: "Home", icon: <Home className="h-3.5 w-3.5" />, width: 460 },
  about: { title: "About me", icon: <User className="h-3.5 w-3.5" />, width: 460 },
  experience: { title: "Experience", icon: <Briefcase className="h-3.5 w-3.5" />, width: 460 },
  projects: { title: "Projects", icon: <FolderOpen className="h-3.5 w-3.5" />, width: 440 },
  skills: { title: "Skills", icon: <User className="h-3.5 w-3.5" />, width: 400 },
  contact: { title: "Contact", icon: <Mail className="h-3.5 w-3.5" />, width: 400 },
  terminal: { title: "Terminal", icon: <TerminalSquare className="h-3.5 w-3.5" />, width: 440 },
};

const cascadeBase = { x: 120, y: 70 };
const cascadeStep = 32;
let cascadeCount = 0;

const OS = () => {
  const [booted, setBooted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showBell, setShowBell] = useState(false);
  const { windows, openWindow, closeWindow, focusWindow, minimizeWindow, moveWindow } =
    useWindowManager();

  const handleBootDone = () => {
    setBooted(true);
    openWindow("home", cascadeBase);
    setTimeout(() => setShowWelcome(true), 500);
  };

  const launch = (id: string) => {
    if (!windowMeta[id]) return;
    cascadeCount = (cascadeCount + 1) % 6;
    openWindow(id, {
      x: cascadeBase.x + cascadeCount * cascadeStep,
      y: cascadeBase.y + cascadeCount * cascadeStep,
    });
  };

  const openIds = Object.keys(windows).filter((id) => !windows[id].minimized);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {!booted && <BootSequence onDone={handleBootDone} />}

      {booted && (
        <>
          <MenuBar onBellClick={() => setShowBell((v) => !v)} />

          {showWelcome && (
            <Notification
              title="Welcome to MA/OS"
              body="A different way to explore my profile — open the apps in the dock to look around."
              onDismiss={() => setShowWelcome(false)}
            />
          )}
          {showBell && (
            <Notification
              title="Notifications"
              body="You're all caught up. Try the Terminal app for a little easter egg."
              onDismiss={() => setShowBell(false)}
            />
          )}

          {Object.values(windows).map((win) => {
            if (win.minimized) return null;
            const meta = windowMeta[win.id];
            if (!meta) return null;
            return (
              <WindowFrame
                key={win.id}
                title={meta.title}
                icon={meta.icon}
                x={win.x}
                y={win.y}
                z={win.z}
                width={meta.width}
                onClose={() => closeWindow(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onFocus={() => focusWindow(win.id)}
                onMove={(x, y) => moveWindow(win.id, x, y)}
              >
                {win.id === "home" && <HomeWindow onOpen={launch} />}
                {win.id === "about" && <AboutWindow />}
                {win.id === "experience" && <ExperienceWindow />}
                {win.id === "projects" && <ProjectsWindow />}
                {win.id === "skills" && <SkillsWindow />}
                {win.id === "contact" && <ContactWindow />}
                {win.id === "terminal" && <TerminalWindow />}
              </WindowFrame>
            );
          })}

          <Dock openIds={openIds} onLaunch={launch} />
        </>
      )}
    </div>
  );
};

export default OS;
