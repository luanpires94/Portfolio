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
    role: "Desenvolvedor Fullstack Pleno",
    company: "Certta",
    employment: "Terceirizado",
    location: "Remoto",
    description:
      "Atuo no desenvolvimento e evolução de aplicações web, unindo front-end (Angular, TypeScript e RxJS) e back-end (Node.js, MongoDB e AWS) em ambiente ágil (Scrum/Kanban).",
    activities: [
      "Projetei e consumi APIs REST com autenticação baseada em token, modelando e otimizando coleções no MongoDB.",
      "Implementei e monitorei infraestrutura AWS (Lambda, S3, CloudWatch), incluindo processamento serverless e observabilidade.",
      "Escrevi e mantive testes automatizados (unitários e de integração) com Jest e Testing Library, reduzindo regressões em produção.",
      "Aplico IA generativa (Cursor e Claude) em refatoração, geração de testes e análise de erros. Configuro e mantenho pipelines de CI/CD com GitHub Actions, automatizando build, testes e deploy.",
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
    role: "Desenvolvedor Frontend Pleno",
    company: "Fiotec – Fundação de Apoio à Fiocruz",
    employment: "Terceirizado",
    location: "Híbrido · Rio de Janeiro",
    description:
      "Atuei em projetos institucionais da Fiocruz, contribuindo para a construção, manutenção e evolução de aplicações web com React.js, com foco em qualidade, acessibilidade, responsividade e experiência do usuário.",
    activities: [
      "Integrei e consumi APIs REST, realizando tratamento de dados e integração das interfaces com serviços de back-end.",
      "Evoluí a arquitetura front-end para melhorar organização, escalabilidade e manutenção. Implementei interfaces responsivas e acessíveis, e realizei prototipação e handoff de telas com Figma.",
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
    role: "Desenvolvedor Front-end Pleno",
    company: "PagBank",
    employment: "Terceirizado",
    location: "Remoto",
    description:
      "Atuei principalmente no front-end e na camada BFF (Backend for Frontend), desenvolvendo e evoluindo aplicações web com Next.js, TypeScript, SASS e Node.js.",
    activities: [
      "Mantive fluxos de autenticação e autorização com JWT/OAuth2, incluindo área administrativa autenticada, controle de acesso e rotas protegidas.",
      "Mantive endpoints no BFF, integrando o front-end a APIs e serviços internos e transformando dados conforme as necessidades das aplicações. Integrei APIs REST com tratamento de respostas e erros.",
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
            Desenvolvedor front-end com experiência na construção e evolução
            de aplicações web usando React.js, Next.js, Angular e TypeScript.
            Tenho também vivência em projetos fullstack, colaborando com APIs,
            BFF e integrações com serviços de back-end.
          </p>

          <p className="mt-4">
            Na minha experiência mais recente, trabalhei também com Node.js,
            MongoDB e serviços AWS (Lambda, S3 e CloudWatch). Tenho experiência
            com testes automatizados (Jest, Testing Library), CI/CD e boas
            práticas de código, em times ágeis com code review.
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
