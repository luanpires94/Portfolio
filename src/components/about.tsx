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
} from "lucide-react";
import SectionHeading from "./section-heading";

const stacks = [
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: Network },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Acessibilidade", icon: Shield },
  { name: "Testes", icon: Target },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Redux Toolkit", icon: Repeat },
];

const highlights = [
  "React.js & Next.js",
  "TypeScript",
  "Interfaces responsivas",
  "Acessibilidade & UX",
  "Performance web",
  "REST APIs & BFF",
  "Jest & Testing Library",
  "GitFlow & Code Review",
];

const timeline = [
  {
    role: "Desenvolvedor Fullstack Pleno",
    company: "Certta",
    period: "jan de 2026 - Atual",
    description:
      "Atuação principal na evolução do front-end com React.js e TypeScript, criando componentes reutilizáveis, integrando APIs REST e aprimorando qualidade com refatorações e testes automatizados. Colaboração pontual em serviços Node.js, MongoDB e AWS ampliou minha visão do produto de ponta a ponta.",
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
            Sou Desenvolvedor Front-end com mais de 4 anos de experiência
            na construção e evolução de aplicações web com React.js, Next.js,
            TypeScript e JavaScript.
          </p>

          <p>
            Atuei no PagBank e em projetos institucionais ligados à Fiocruz,
            trabalhando com integração de
            APIs REST e BFF, testes automatizados, componentização e boas
            práticas de arquitetura. Meu foco está em criar interfaces
            responsivas e acessíveis, com qualidade de código, performance e
            uma excelente experiência para o usuário. A vivência complementar
            com Node.js, MongoDB e AWS amplia minha colaboração com times de produto.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { value: "4+", label: "Anos de experiência" },
            { value: "4", label: "Empresas" },
            { value: "Frontend", label: "Especialidade principal" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-20"
        >
          {highlights.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent text-sm font-medium"
            >
              {item}
            </span>
          ))}
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
            Especialidades & Ferramentas
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {stacks.map((stack, idx) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={idx}
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
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Conhecimentos complementares: Vue.js e Angular em projetos de interface;
            Node.js, MongoDB e AWS na colaboração com back-end e infraestrutura.
          </p>
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
