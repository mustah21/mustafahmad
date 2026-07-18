import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "quests", href: "#experience" },
  { name: "levels", href: "#projects" },
  { name: "contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between px-6 py-3.5">
        <a href="#" className="font-extrabold tracking-wider text-primary">
          MA://
        </a>

        <div className="hidden items-center gap-5 text-[13px] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="p-2 text-muted-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-line bg-background md:hidden"
          >
            <div className="container flex flex-col gap-1 px-6 py-4 text-[13px]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
