"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Avatar/Profile Image */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-dark p-1 animate-glow"
            >
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <span className="text-5xl font-bold text-accent">LP</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Olá, sou <span className="text-accent">Luan Pires</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={item} className="text-center space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor Frontend especializado em{" "}
              <span className="text-foreground font-semibold">
                React, TypeScript e Next.js
              </span>
              . Criei interfaces modernas e de alto desempenho para empresas de
              fintech e startups inovadoras.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-black rounded-lg font-semibold text-lg hover:bg-accent-dark transition-colors"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-accent text-accent rounded-lg font-semibold text-lg hover:bg-accent/10 transition-colors"
            >
              Entrar em Contato
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex gap-4 justify-center pt-8"
          >
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.2, color: "#00d9ff" }}
              className="p-3 rounded-lg border border-border hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.2, color: "#00d9ff" }}
              className="p-3 rounded-lg border border-border hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:luan.94pires@gmail.com"
              whileHover={{ scale: 1.2, color: "#00d9ff" }}
              className="p-3 rounded-lg border border-border hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex justify-center pt-12"
          >
            <div className="p-2 rounded-full border border-border">
              <ChevronDown className="text-accent" size={24} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
