"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isScrolled: boolean;
}

const navItems = [
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Experiência", href: "#exp", id: "exp" },
  { label: "Projetos", href: "#projects", id: "projects" },
];

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Scroll spy — destaca a seção visível
  useEffect(() => {
    const ids = [...navItems.map((i) => i.id), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-colors ${
                active === item.id
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ color: "#00d9ff" }}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === "contact"
              ? "bg-accent text-background"
              : "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent"
          }`}
        >
          Contato
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block transition-colors ${
                  active === item.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
