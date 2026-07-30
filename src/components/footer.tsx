"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-bold">Luan Pires</h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer com foco em criar experiências digitais usando
              React, TypeScript e Next.js.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Sobre", href: "#about" },
                { label: "Experiência", href: "#exp" },
                { label: "Projetos", href: "#projects" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-bold">Redes Sociais</h3>
            <div className="flex gap-3">
              {[
                {
                  icon: Github,
                  url: "https://github.com/luanpires94",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/luanpires94/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  url: "mailto:luan.94pires@gmail.com",
                  label: "Email",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    whileHover={{ scale: 1.2, color: "#00d9ff" }}
                    className="p-2 rounded-lg border border-border hover:border-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Luan Pires. Todos os direitos reservados.</p>
          <p>
            Feito com <span className="text-accent">React</span>,{" "}
            <span className="text-accent">Tailwind</span> &{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
