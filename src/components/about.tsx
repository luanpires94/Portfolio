"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Target,
  Atom,
  Network,
  Shield,
  Server,
  Database,
  Cloud,
  GitBranch,
  Plug,
  Layers,
  Workflow,
} from "lucide-react";
import SectionHeading from "./section-heading";

const stacks = [
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: Network },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Angular", icon: Shield },
  { name: "RxJS", icon: Network },
  { name: "Tailwind", icon: Layers },
  { name: "SASS", icon: Layers },
  { name: "Styled Components", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "APIs REST, GraphQL & BFF", icon: Plug },
  { name: "MongoDB", icon: Database },
  { name: "AWS: Lambda, S3 & CloudWatch", icon: Cloud },
  { name: "JWT & OAuth2", icon: Shield },
  { name: "Jest", icon: Target },
  { name: "Testing Library", icon: Target },
  { name: "GitHub Actions", icon: Workflow },
  { name: "Storybook & Figma", icon: Layers },
  { name: "Git & GitFlow", icon: GitBranch },
  { name: "Scrum, Kanban & Code Review", icon: Workflow },
  { name: "Cursor & Claude", icon: Code2 },
];

const timeline = [
  {
    role: "Desenvolvedor Fullstack Sênior",
    company: "Certta",
    employment: "Terceirizado",
    period: "jan de 2026 - ago de 2026 · 8 meses",
    location: "Remoto",
    description:
      "Desenvolvi e mantive aplicações full stack unindo front-end (Angular, TypeScript, RxJS) e back-end (Node.js), em ambiente ágil Scrum/Kanban.",
    activities: [
      "Projetei e consumi APIs REST com autenticação baseada em token, modelando e otimizando coleções no MongoDB.",
      "Implementei e monitorei infraestrutura AWS (Lambda, S3, CloudWatch), incluindo processamento serverless e observabilidade.",
      "Escrevi e mantive testes automatizados (unitários e de integração) com Jest e Testing Library, reduzindo regressões em produção.",
      "Utilizei ferramentas de IA generativa (Cursor, Claude) no fluxo de desenvolvimento para refatoração, geração de testes e análise de erros; configurei pipelines de CI/CD com GitHub Actions.",
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
    role: "Desenvolvedor Frontend Sênior",
    company: "Fiotec – Fundação de Apoio à Fiocruz",
    employment: "Terceirizado",
    period: "jan de 2025 - jan de 2026 · 1 ano 1 mês",
    location: "Híbrido · Rio de Janeiro",
    description:
      "Desenvolvi e mantive interfaces web com React.js em projetos institucionais de grande impacto na Fiocruz, com foco em componentização, reutilização, responsividade e performance.",
    activities: [
      "Integrei e consumi APIs REST, realizando tratamento de dados e integração das interfaces com serviços de back-end.",
      "Evoluí a arquitetura front-end buscando organização, escalabilidade e facilidade de manutenção; implementei interfaces acessíveis seguindo boas práticas de UX/UI, com prototipação e handoff de telas em Figma.",
      "Colaborei com times multidisciplinares em ambiente ágil, com versionamento em Git/GitFlow, code reviews e participação em cerimônias e alinhamentos técnicos.",
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
    role: "Desenvolvedor Fullstack Pleno",
    company: "PagBank",
    employment: "Terceirizado",
    period: "jan de 2023 - jan de 2025 · 2 anos 1 mês",
    location: "Remoto",
    description:
      "Desenvolvi e mantive aplicações com Next.js, TypeScript e SASS, e a camada BFF (Backend for Frontend) em Node.js, integrando front-end a APIs e serviços internos.",
    activities: [
      "Implementei e mantive fluxos de autenticação e autorização com JWT/OAuth2, incluindo área administrativa logada e rotas protegidas.",
      "Realizei tratamento e transformação de dados no BFF, e integração/consumo de APIs REST com tratamento de erros entre camadas.",
      "Documentei componentes de UI no Storybook, padronizando o design system entre squads; colaborei em ambiente ágil (Scrum) com code reviews.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "SASS",
      "Node.js",
      "BFF",
      "JWT/OAuth2",
      "Storybook",
      "GitFlow",
      "Scrum",
    ],
  },
  {
    role: "Desenvolvedor Front-end Júnior",
    company: "Instituto Precisa Ser",
    employment: "Tempo integral",
    period: "jan de 2022 - dez de 2022 · 1 ano",
    location: "Rio de Janeiro, Brasil",
    description:
      "Desenvolvi e mantive interfaces com HTML, CSS e JavaScript, implementando layouts fiéis ao design com foco em responsividade e acessibilidade.",
    activities: [
      "Realizei integrações básicas com APIs REST para exibição de dados dinâmicos.",
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
            web: construção de interfaces e gerenciamento de estado (React.js,
            Next.js, Angular, TypeScript) e desenvolvimento de back-end — APIs
            REST/BFF, regras de negócio, modelagem e persistência de dados,
            autenticação (JWT/OAuth2) e integrações entre sistemas (Node.js,
            MongoDB).
          </p>

          <p className="mt-4">
            Experiência com infraestrutura AWS (Lambda, S3, CloudWatch), testes
            automatizados (Jest, Testing Library), CI/CD e boas práticas de código
            limpo, atuando em times ágeis com prática de code review.
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
