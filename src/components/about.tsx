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
  Smartphone,
  Workflow,
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
  { name: "Zustand", icon: Repeat },
  { name: "Node.js", icon: Server },
  { name: "APIs REST, GraphQL & BFF", icon: Plug },
  { name: "MongoDB", icon: Database },
  { name: "AWS: Lambda, S3 & CloudWatch", icon: Cloud },
  { name: "JWT & OAuth2", icon: Shield },
  { name: "React Native & Expo", icon: Smartphone },
  { name: "Jest", icon: Target },
  { name: "Testing Library", icon: Target },
  { name: "GitHub Actions", icon: Workflow },
  { name: "Storybook & Figma", icon: Layers },
  { name: "Git & GitFlow", icon: GitBranch },
  { name: "Acessibilidade web", icon: Shield },
];

const timeline = [
  {
    role: "Desenvolvedor Fullstack Pleno",
    company: "Certta",
    employment: "Terceirizado",
    period: "jan de 2026 - ago de 2026 · 8 meses",
    location: "Remoto",
    description:
      "Desenvolvi e mantive aplicações web full stack com Angular, TypeScript e RxJS no front-end e Node.js no back-end, em ambiente ágil (Scrum/Kanban).",
    activities: [
      "Desenvolvimento de interfaces e funcionalidades com Angular, TypeScript e RxJS, utilizando Angular Router para navegação entre módulos.",
      "Projetei e consumi APIs REST com autenticação baseada em token, modelando e otimizando coleções no MongoDB.",
      "Implementei e monitorei infraestrutura AWS (Lambda, S3, CloudWatch), incluindo processamento serverless e observabilidade.",
      "Escrevi e mantive testes automatizados (unitários e de integração) com Jest e Testing Library, reduzindo regressões em produção.",
      "Apliquei IA generativa (Cursor, Claude) em refatoração, geração de testes e análise de erros.",
      "Configurei e mantive pipelines de CI/CD com GitHub Actions, automatizando build, testes e deploy.",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Node.js",
      "MongoDB",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    role: "Desenvolvedor Front End Pleno",
    company: "Fiotec - Fundação de Apoio à Fiocruz",
    employment: "Terceirizado",
    period: "jan de 2025 - jan de 2026 · 1 ano 1 mês",
    location: "Rio de Janeiro, Brasil · Híbrido",
    description:
      "Atuei como Desenvolvedor Front End em projetos institucionais de grande impacto, contribuindo para a construção e evolução de aplicações web modernas, escaláveis e acessíveis, alinhadas às necessidades de diferentes áreas da Fiocruz.",
    activities: [
      "Desenvolvimento de interfaces responsivas e acessíveis com React.js, com prototipação e handoff de telas em Figma.",
      "Criação e evolução de arquitetura front-end, garantindo organização, escalabilidade e facilidade de manutenção.",
      "Implementação de layouts responsivos e acessíveis, seguindo boas práticas de UX/UI e padrões de acessibilidade.",
      "Integração com APIs REST, consumindo dados dinâmicos e garantindo uma boa experiência para o usuário final.",
      "Atuação com versionamento Git seguindo fluxo GitFlow, participando ativamente de code reviews.",
      "Colaboração próxima com times multidisciplinares, participando de cerimônias ágeis, alinhamentos técnicos e planejamento de entregas.",
    ],
    stack: [
      "React.js",
      "JavaScript",
      "Figma",
      "APIs REST",
      "GitFlow",
      "UX/UI",
      "Acessibilidade",
    ],
  },
  {
    role: "Desenvolvedor Front End Pleno",
    company: "PagBank",
    employment: "Terceirizado",
    period: "jan de 2023 - jan de 2025 · 2 anos 1 mês",
    location: "Remoto",
    description:
      "Atuei como Desenvolvedor Front End Pleno no PagBank, uma das maiores fintechs do Brasil. Desenvolvi interfaces modernas e de alta performance utilizando Next.js, TypeScript e Sass, com forte foco em usabilidade, componentização e integração via arquitetura BFF.",
    activities: [
      "Desenvolvimento de aplicações web modernas e escaláveis com Next.js, TypeScript e Sass.",
      "Atuação no portal de notícias e em sua área administrativa, com autenticação JWT/OAuth2 e controle de acesso a rotas protegidas.",
      "Integração de APIs utilizando arquitetura BFF (Backend for Frontend).",
      "Documentação e organização de componentes no Storybook, apoiando a padronização do design system entre squads.",
      "Implementação de boas práticas: clean code, componentização, reuso e otimização.",
      "Colaboração com squads multidisciplinares em ambiente ágil (Scrum).",
      "Versionamento, code review e fluxo Git/GitFlow.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Sass",
      "BFF",
      "JWT/OAuth2",
      "Storybook",
      "GitFlow",
      "Scrum",
    ],
  },
  {
    role: "Desenvolvedor Front End Júnior",
    company: "Instituto Precisa Ser",
    employment: "Tempo integral",
    period: "jan de 2021 - dez de 2021 · 1 ano",
    location: "Rio de Janeiro, Brasil",
    description:
      "Atuei como Desenvolvedor Front End Júnior no Instituto Precisa Ser, organização que desenvolve soluções digitais voltadas ao impacto social. Contribuí no desenvolvimento de interfaces utilizando HTML, CSS e JavaScript, priorizando acessibilidade, responsividade e fidelidade ao design.",
    activities: [
      "Desenvolvimento e manutenção de interfaces com HTML, CSS e JavaScript.",
      "Implementação de layouts fiéis ao design, equilibrando estética e funcionalidade.",
      "Integrações básicas com APIs para exibição de dados dinâmicos.",
      "Otimização de performance e acessibilidade.",
      "Atuação colaborativa, aprimorando habilidades técnicas e comunicação.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "APIs REST", "Acessibilidade"],
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
            Desenvolvedor Fullstack com atuação de ponta a ponta em aplicações
            web: da construção de interfaces e gerenciamento de estado (React.js,
            Next.js, Angular, TypeScript) ao desenvolvimento de APIs, regras de
            negócio, persistência de dados e integrações entre sistemas (Node.js,
            MongoDB, AWS).
          </p>

          <p className="mt-4">
            Experiência em fintech e em projetos institucionais de grande escala,
            com APIs REST/BFF, autenticação (JWT/OAuth2), testes automatizados
            (Jest, Testing Library), CI/CD e boas práticas de código limpo, atuando
            em times ágeis com prática de code review.
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
            Competências técnicas
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
                    <p className="text-accent font-medium">
                      {exp.company} · {exp.employment}
                    </p>
                  </div>

                  <div className="mt-2 md:mt-0 md:text-right text-sm text-muted-foreground">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <div className="mb-5">
                  <p className="font-medium mb-2">Atividades:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.activities.map((activity) => (
                      <li key={activity} className="flex gap-3">
                        <span className="text-accent" aria-hidden="true">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
            <span className="w-6 h-px bg-accent" />
            Formação acadêmica
          </h3>
          <div className="p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-semibold">Análise e Desenvolvimento de Sistemas</h4>
                <p className="text-accent font-medium">Tecnólogo · Uniamérica</p>
              </div>
              <p className="text-sm text-muted-foreground">jan de 2023 – ago de 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
