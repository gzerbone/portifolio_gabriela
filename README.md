# Portfólio - Gabriela Zerbone

Portfólio profissional de Gabriela Zerbone - Cientista de Dados especializada em Machine Learning, Deep Learning e Visão Computacional.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server extremamente rápido
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes React reutilizáveis e acessíveis
- **React Router** - Roteamento para aplicações React
- **Lucide React** - Biblioteca de ícones

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🔧 Instalação e Execução Local

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd portifolio_gabriela
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 🏗️ Build para Produção

Para criar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 📦 Deploy no Netlify

### Opção 1: Deploy via Interface do Netlify (Recomendado para iniciantes)

1. Faça commit e push do seu código para o GitHub
```bash
git add .
git commit -m "Preparar para deploy"
git push origin main
```

2. Acesse [Netlify](https://www.netlify.com/) e faça login (ou crie uma conta gratuita)

3. Clique em **"Add new site"** → **"Import an existing project"**

4. Conecte sua conta do GitHub e selecione o repositório

5. Configure o build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Clique em **"Deploy site"**

6. Aguarde o deploy finalizar. Seu site estará no ar em poucos minutos!

### Opção 2: Deploy via Netlify CLI

1. Instale o Netlify CLI globalmente
```bash
npm install -g netlify-cli
```

2. Faça login no Netlify
```bash
netlify login
```

3. Inicialize o site
```bash
netlify init
```

4. Deploy manual
```bash
npm run build
netlify deploy --prod
```

### 🔄 Deploy Contínuo

Após configurar o deploy pelo GitHub, toda vez que você fizer push para a branch `main`, o Netlify automaticamente:
- Detectará as mudanças
- Executará o build
- Fará o deploy da nova versão

## 📁 Estrutura do Projeto

```
portifolio_gabriela/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   ├── sections/   # Seções da página
│   │   └── ui/         # Componentes de UI (shadcn)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilitários e helpers
│   ├── pages/          # Páginas da aplicação
│   ├── App.tsx         # Componente principal
│   ├── index.css       # Estilos globais
│   └── main.tsx        # Entry point
├── index.html          # Template HTML
├── netlify.toml        # Configuração do Netlify
├── package.json        # Dependências do projeto
├── tailwind.config.ts  # Configuração do Tailwind
├── tsconfig.json       # Configuração do TypeScript
└── vite.config.ts      # Configuração do Vite
```

## 🎨 Personalização

### Cores

As cores do tema podem ser personalizadas no arquivo `src/index.css` nas variáveis CSS:
- `--primary`: Cor principal (roxo)
- `--background`: Cor de fundo
- `--foreground`: Cor do texto

### Conteúdo

Os componentes estão organizados em `src/components/sections/`:
- `HeroSection.tsx` - Seção inicial
- `AboutSection.tsx` - Sobre mim
- `ExperienceSection.tsx` - Experiências profissionais
- `ProjectsSection.tsx` - Projetos realizados
- `SkillsSection.tsx` - Habilidades técnicas
- `EducationSection.tsx` - Formação acadêmica
- `CertificationsSection.tsx` - Certificações
- `ResearchSection.tsx` - Pesquisas e publicações
- `ContactSection.tsx` - Contato

## 🔍 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter

## 📝 Licença

Este projeto é de uso pessoal.

## 👤 Autora

**Gabriela Zerbone**
- Portfolio: [Seu site no Netlify]
- LinkedIn: [Seu LinkedIn]
- GitHub: [Seu GitHub]

---

Desenvolvido com ❤️ por Gabriela Zerbone
