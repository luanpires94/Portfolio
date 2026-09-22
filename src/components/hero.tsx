"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, FolderGit2 } from "lucide-react";
import Avatar from "../assets/images/perfil.png";

const GITHUB_URL = "https://github.com/luanpires94";
const LINKEDIN_URL = "https://www.linkedin.com/in/luanpires94/";
const EMAIL = "luan.94pires@gmail.com";

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
      {/* Background glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

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
                <span className="text-5xl font-bold text-accent">
                  <img className="rounded-full" src={Avatar} alt="Luan Pires" />
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Olá, sou o <span className="text-accent">Luan</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-muted-foreground">
              Desenvolvedor{" "}
              <span className="text-foreground font-semibold">Fullstack</span>
              {" "}Pleno
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={item} className="text-center space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Atuo de ponta a ponta em aplicações web escaláveis e de alta
              performance com{" "}
              <span className="text-foreground font-semibold">
                React.js, Next.js, Angular, Node.js e TypeScript
              </span>
              , da interface às APIs, dados e infraestrutura em AWS.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold transition-shadow hover:shadow-[0_0_24px_rgba(0,217,255,0.4)]"
            >
              <FolderGit2 size={20} />
              Ver projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent/40 text-accent font-semibold hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <Mail size={20} />
              Vamos conversar
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex gap-4 justify-center pt-4"
          >
            <motion.a
              href={GITHUB_URL}
              aria-label="GitHub"
              whileHover={{ scale: 1.2, color: "#00d9ff" }}
              className="p-3 rounded-lg border border-border hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, color: "#00d9ff" }}
              className="p-3 rounded-lg border border-border hover:border-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              whileHover={{ scale: 1.2, color: "#00d9ff" }}
              className="p-3 rounded-lg border border-border hover:border-accent transition-colors"
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
