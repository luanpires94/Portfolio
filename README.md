# Portfólio — Luan Pires

Portfólio pessoal de **Luan Pires**, Desenvolvedor Front-end especializado em React.js, Next.js e TypeScript. Uma single-page application moderna, responsiva e com foco em performance, acessibilidade e UX, apresentando trajetória profissional, stack técnica e projetos.

🔗 **Contato:** [LinkedIn](https://www.linkedin.com/in/luanpires94/) · [GitHub](https://github.com/luanpires94) · luan.94pires@gmail.com

---

## ✨ Sobre o projeto

Site de página única (SPA) construído com React + Vite, dividido em seções que contam a história profissional e técnica:

- **Hero** — posicionamento Front-end, projetos e contato.
- **Sobre mim** — resumo, métricas de carreira, tecnologias e linha do tempo de experiências (Certta, Fiotec/Fiocruz, PagBank, Instituto Precisa Ser).
- **Projetos** — cards com stack, demo ao vivo e link para o repositório.
- **Contato** — canais diretos de contato.

O design é dark-mode com cor de destaque ciano, animações suaves via Framer Motion e tipografia cuidada (Space Grotesk nos títulos, Inter no corpo e JetBrains Mono para trechos de código).

## 🛠️ Tecnologias

- **React 18** + **Vite 6**
- **Tailwind CSS 4**
- **Framer Motion** (animações)
- **Lucide React** / **React Icons** (ícones)
- **Sass** (estilos auxiliares)
- **ESLint** (padronização)

## 🚀 Como rodar localmente

Pré-requisitos: **Node.js 18+** e um gerenciador de pacotes (npm, pnpm ou yarn).

```bash
# 1. Clonar o repositório
git clone https://github.com/luanpires94/Portfolio.git
cd Portfolio

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## 📜 Scripts disponíveis

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento (HMR).    |
| `npm run build`   | Gera a build de produção em `dist/`.           |
| `npm run preview` | Serve localmente a build de produção.          |
| `npm run lint`    | Roda o ESLint em todo o projeto.               |

## 📁 Estrutura

```
Portfolio/
├── public/                 # Assets estáticos (favicon, CV)
├── src/
│   ├── assets/images/      # Imagens (avatar/perfil)
│   ├── components/         # Seções e componentes da UI
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── App.jsx             # Composição da página
│   └── main.jsx            # Ponto de entrada
├── globals.css             # Tema, fontes e animações
└── index.html
```

## 📄 Licença

Projeto de portfólio pessoal. Sinta-se à vontade para se inspirar. 🚀
