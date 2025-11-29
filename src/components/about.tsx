"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Target,
  Atom,
  Network,
  Wind,
  Settings,
  Repeat,
} from "lucide-react";

const stacks = [
  { name: "React.js", icon: Atom },
  { name: "TypeScript", icon: Code2 },
  { name: "Next.js", icon: Network },
  { name: "Tailwind", icon: Wind },
  { name: "Bootstrap", icon: Zap },
  { name: "GraphQL", icon: Target },
  { name: "Git", icon: Settings },
  { name: "Redux", icon: Repeat },
];

const timeline = [
  {
    role: "Desenvolvedor Frontend Pleno",
    company: "WA Fênix",
    period: "jan de 2025 - dez de 2025",
    description:
      "Atuo como Desenvolvedor Front End Pleno na WA Fênix, empresa de tecnologia que desenvolve soluções digitais. Trabalho com foco em React.js, criando interfaces responsivas e funcionalidades alinhadas às necessidades dos clientes, atuando alocado na Fiotec em modelo híbrido.",
    stack: ["React", "Styled Components", "REST API", "Bootstrap"],
  },
  {
    role: "Desenvolvedor Frontend Pleno",
    company: "PagBank (Fintech)",
    period: "jan de 2023 - jan de 2025",
    description:
      "Atuei como Desenvolvedor Front End Pleno no PagBank, uma das maiores fintechs do Brasil. Desenvolvi interfaces modernas e de alta performance utilizando Next.js, TypeScript e Sass, com forte foco em usabilidade, componentização e integração via arquitetura BFF.",
    stack: ["React", "TypeScript", "Next.js", "SASS", "BFF"],
  },
  {
    role: "Instrutor Frontend",
    company: "Vai na Web",
    period: "jan de 2022 - dez de 2022",
    description:
      "Fui Instrutor Front End no Vai na Web, um programa de formação que prepara novos profissionais para o mercado de tecnologia. Ministrei aulas práticas de HTML, CSS, JavaScript e React, além de orientar alunos em projetos reais e revisar códigos com foco em boas práticas.",
    stack: ["HTML5", "CSS3", "Git", "Javascript"],
  },
  {
    role: "Desenvolvedor Frontend Júnior",
    company: "Instituto Precisa Ser",
    period: "jan de 2020 - dez de 2021",
    description:
      "Atuei como Desenvolvedor Front End Júnior no Instituto Precisa Ser, organização que desenvolve soluções digitais voltadas ao impacto social. Contribuí no desenvolvimento de interfaces utilizando HTML, CSS e JavaScript, priorizando acessibilidade, responsividade e fidelidade ao design.",
    stack: ["HTML5", "CSS3", "Git", "Javascript"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 text-lg text-muted-foreground leading-relaxed max-w-3xl"
        >
          <p className="mb-4">
            Sou desenvolvedor Frontend com experiência em React, com foco em
            criar experiências digitais excepcionais. Com mais de 4 anos de
            experiência, trabalhei em projetos desafiadores no setor de fintech,
            desenvolvendo interfaces complexas, otimizando performance e
            implementando soluções escaláveis.
          </p>
        </motion.div>

        {/* Stacks */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Tecnologias Principais
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
                  className="p-4 rounded-lg border border-border hover:border-accent transition-colors cursor-pointer group"
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

        {/* Timeline */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
            id="exp"
          >
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
                className="p-6 rounded-lg border border-border hover:border-accent hover:bg-muted/50 transition-all"
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
                <p className="text-muted-foreground mb-4">{exp.description}</p>
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
