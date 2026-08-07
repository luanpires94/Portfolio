"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeading from "./section-heading";

type Project = {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  highlight?: string;
};


const projects: Project[] = [
  {
    title: "DevPocket — Snippets no Bolso",
    description:
      "App mobile para desenvolvedores salvarem, organizarem e reutilizarem snippets de código direto no celular. Syntax highlighting para mais de 20 linguagens, organização por tags, busca avançada, temas claro/escuro e i18n (PT/EN).",
    stack: ["React Native", "Expo", "TypeScript", "Zustand"],
    highlight: "Mobile",
    repo: "https://github.com/luanpires94/devpocket",
  },
  {
    title: "Dashboard de Produtos",
    description:
      "Painel administrativo com listagem de produtos consumindo API REST. Exibe visão geral (total, preço médio, categorias e itens em estoque), busca e filtro por categoria em tabela responsiva.",
    stack: ["Next.js", "React", "SCSS Modules", "REST API"],
    highlight: "Dashboard",
    repo: "https://github.com/luanpires94/dashboard-web",
  },
  {
    title: "SnippetVault — Cofre de Snippets",
    description:
      "App fullstack para salvar, organizar e buscar trechos de código. Autenticação com JWT, CRUD completo, tags e filtro por linguagem — front-end e back-end no mesmo projeto Next.js com MongoDB.",
    stack: ["Next.js", "MongoDB", "JWT", "TypeScript"],
    highlight: "Fullstack",
    repo: "https://github.com/luanpires94/snippet-vault",
  },
  {
    title: "Pulse — Landing de App Fitness",
    description:
      "Landing page de um app de treino com visual escuro e energético. Hero com mockup de app em CSS puro, seções de recursos, programas e planos com toggle mensal/anual reativo. Componentizada e responsiva.",
    stack: ["Vue 3", "Vite", "CSS"],
    highlight: "Vue.js",
    repo: "https://github.com/luanpires94/pulse",
  },
  {
    title: "Cortex Academy — Landing de Cursos",
    description:
      "Landing page de uma plataforma de cursos online, com visual claro e profissional. Standalone components e signals para estado reativo (planos, busca e navbar dinâmica). Sintaxe moderna @for/@if nos templates.",
    stack: ["Angular", "TypeScript", "Signals"],
    highlight: "Angular",
    repo: "https://github.com/luanpires94/cortex",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" eyebrow="" title="Projetos" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:border-accent transition-colors"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-accent/20 via-muted to-background flex items-center justify-center">
                <span className="text-4xl font-bold text-accent/40">
                  {project.title.charAt(0)}
                </span>
                {project.highlight && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium">
                    {project.highlight}
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
