"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Target,
  Atom,
  Network,
  Wind,
  Repeat,
  Shield,
  Server,
  Database,
  Cloud,
  GitBranch,
  Plug,
  Triangle,
  Boxes,
  FileCode2,
  Paintbrush,
  Layers,
} from "lucide-react";
import SectionHeading from "./section-heading";

const stacks = [
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: Network },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Angular", icon: Shield },
  { name: "Vue.js", icon: Triangle },
  { name: "HTML5", icon: FileCode2 },
  { name: "CSS3", icon: Paintbrush },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Sass", icon: Paintbrush },
  { name: "Styled Components", icon: Layers },
  { name: "Bootstrap", icon: Boxes },
  { name: "Redux Toolkit", icon: Repeat },
  { name: "Node.js", icon: Server },
  { name: "APIs REST & BFF", icon: Plug },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Jest", icon: Target },
  { name: "Testing Library", icon: Target },
  { name: "Git & GitFlow", icon: GitBranch },
  { name: "Acessibilidade web", icon: Shield },
];

const timeline = [
  {
    role: "Desenvolvedor Fullstack Pleno",
    company: "Certta",
    period: "jan de 2026 - Atual",
    description:
      "Desenvolvimento e evolução de aplicações web com React.js e TypeScript, criação de componentes reutilizáveis, integração com APIs REST, refatoração e testes automatizados. Atuação também com serviços em Node.js, MongoDB e AWS, contribuindo com o fluxo completo do produto.",
    stack: [
      "React",
      "TypeScript",
      "Jest",
      "Testing Library",
      "REST API",
    ],
  },
  {
    role: "Desenvolvedor Front-end Pleno",
    company: "Fiotec - Fundação de Apoio à Fiocruz",
    period: "jan de 2025 - jan de 2026",
    description:
      "Desenvolvimento de interfaces responsivas e acessíveis com React.js para projetos institucionais da Fiocruz. Atuação na arquitetura componentizada, integração com APIs REST, aplicação de boas práticas de UX/UI, GitFlow, code review e metodologias ágeis.",
    stack: [
      "React",
      "Styled Components",
      "REST API",
      "Bootstrap",
      "GitFlow",
    ],
  },
  {
    role: "Desenvolvedor Front-end Pleno",
    company: "PagBank",
    period: "jan de 2023 - jan de 2025",
    description:
      "Desenvolvimento de aplicações de alta performance utilizando Next.js, TypeScript e Sass. Atuação no portal de notícias, integração via arquitetura BFF, componentização de interfaces, otimização de performance e colaboração em squads ágeis.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "SASS",
      "BFF",
    ],
  },
  {
    role: "Desenvolvedor Front-end Júnior",
    company: "Instituto Precisa Ser",
    period: "jan de 2022 - dez de 2022",
    description:
      "Desenvolvimento e manutenção de interfaces utilizando HTML, CSS e JavaScript, integração com APIs REST, foco em responsividade, acessibilidade e fidelidade ao design em projetos de impacto social.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-background/60 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" eyebrow="" title="Sobre mim" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 text-lg text-muted-foreground leading-relaxed max-w-3xl"
        >
          <p className="mb-4">
            Desenvolvedor Full Stack atuando no desenvolvimento e evolução de
            aplicações web com React.js, Next.js, TypeScript e Node.js.
          </p>

          <p>
            Atuei em projetos no PagBank e Fiocruz, desenvolvendo soluções web,
            interfaces responsivas e acessíveis, componentes reutilizáveis,
            APIs REST e integrações com serviços BFF.
          </p>

          <p className="mt-4">
            Tenho experiência com JavaScript/TypeScript, React.js, Next.js,
            Angular, Node.js, MongoDB e AWS, atuando desde a construção de
            interfaces e gerenciamento de estado até desenvolvimento de APIs,
            regras de negócio, persistência de dados e integrações entre sistemas.
          </p>

          <p className="mt-4">
            Também trabalho com testes automatizados utilizando Jest e Testing
            Library, Git, code review e práticas de desenvolvimento em times
            ágeis, participando do ciclo de desenvolvimento e evolução das aplicações.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-2xl font-bold mb-8"
          >
            <span className="w-6 h-px bg-accent" />
            Tecnologias & Ferramentas
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {stacks.map((stack) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={stack.name}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)",
                  }}
                  className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-accent transition-colors cursor-pointer group"
                >
                  <Icon
                    className="mb-3 text-accent group-hover:scale-110 transition-transform"
                    size={24}
                  />

                  <p className="font-semibold text-sm">{stack.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-2xl font-bold mb-8"
            id="exp"
          >
            <span className="w-6 h-px bg-accent" />
            Experiência Profissional
          </motion.h3>

          <div className="space-y-8">
            {timeline.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-accent transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
