"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Dashboard Financeiro Interativo",
    description:
      "Platform de análise financeira em tempo real com gráficos interativos, filtros avançados e export de dados. Desenvolvido para simplificar a gestão de transações em fintech.",
    image: "/financial-dashboard-react.jpg",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Chart.js",
      "React Query",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Sistema de Pagamentos Escalável",
    description:
      "Arquitetura frontend completa para processamento de pagamentos. Implementei componentes reutilizáveis, validação robusta e integração com múltiplas gateways de pagamento.",
    image: "/payment-system-interface.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe API",
      "Zustand",
      "Tailwind CSS",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Plataforma de Marketplace",
    description:
      "E-commerce completo com sistema de busca avançada, filtros inteligentes, carrinho persistente e checkout otimizado. Focus em UX e performance.",
    image: "/ecommerce-marketplace-react.jpg",
    technologies: [
      "React",
      "GraphQL",
      "Apollo Client",
      "Styled Components",
      "Redux",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "App de Gestão de Tarefas",
    description:
      "Aplicação web progressiva com sincronização em tempo real, modo offline, notificações push e interface intuitiva. Desenvolvido com foco em performance e acessibilidade.",
    image: "/task-management-app.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Firebase",
      "Service Workers",
      "TypeScript",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Sistema de Design Completo",
    description:
      "Design system robusto com 50+ componentes reutilizáveis, documentação Storybook e guias de uso. Facilita desenvolvimento consistente em múltiplos produtos.",
    image: "/design-system-components.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "CSS Modules",
      "Figma Integration",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "Analytics Dashboard Customizado",
    description:
      "Dashboard customizável para análise de dados com visualizações interativas, exportação de relatórios e integração com APIs externas.",
    image: "/analytics-dashboard-interactive.jpg",
    technologies: ["React", "D3.js", "Recharts", "Node.js", "PostgreSQL"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos Destacados
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-xl border border-border overflow-hidden hover:border-accent transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-medium text-sm hover:bg-accent-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent text-muted-foreground hover:text-accent font-medium text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Código
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="https://github.com/luanpires94/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-black transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Todos os Projetos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
