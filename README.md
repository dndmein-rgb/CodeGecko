# 🦎 CodeGecko

<div align="center">

**Cut Code Review Time & Bugs in Half. Instantly.**

SuperCharge your team to ship faster with the most Advanced AI code reviews.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://coderabbit-flame.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

CodeGecko is an AI-powered code review platform that helps development teams ship faster by automating code reviews, identifying bugs, and suggesting improvements. Built with Next.js 15 and modern web technologies, CodeGecko provides intelligent, context-aware code analysis to streamline your development workflow.

---

## ✨ Features

- 🤖 **AI-Powered Code Reviews** - Advanced AI analyzes your code for bugs, security issues, and best practices
- ⚡ **Fast Integration** - Seamlessly integrates with GitHub for automated pull request reviews
- 🔒 **Secure Authentication** - OAuth integration with GitHub for secure access
- 📊 **Detailed Analytics** - Track code quality metrics and review history
- 🎨 **Modern UI** - Clean, responsive interface built with modern design principles
- 🔄 **Real-time Updates** - Instant feedback on code changes using Inngest workflows
- 📝 **Custom Rules** - Configure review rules to match your team's coding standards

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Type-safe ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Inngest](https://www.inngest.com/)** - Background job processing

### Development Tools
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[Vercel](https://vercel.com/)** - Deployment platform

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- PostgreSQL database
- GitHub OAuth App credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dndmein-rgb/CodeGecko.git
   cd CodeGecko
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/codegecko"
   
   # GitHub OAuth
   GITHUB_CLIENT_ID="your_github_client_id"
   GITHUB_CLIENT_SECRET="your_github_client_secret"
   
   # Inngest
   INNGEST_EVENT_KEY="your_inngest_key"
   
   # NextAuth
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   bunx prisma generate
   bunx prisma db push
   ```

5. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
CodeGecko/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/            # Authentication pages
│   └── (dashboard)/       # Dashboard pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── hooks/                # Custom React hooks
├── inngest/              # Inngest background jobs
├── lib/                  # Utility functions and configurations
├── module/               # Business logic modules
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
├── public/               # Static assets
└── ...                   # Configuration files
```

---

## 💻 Development

### Available Scripts

```bash
# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run linter
bun run lint

# Format code
bun run format

# Database commands
bunx prisma studio        # Open Prisma Studio
bunx prisma migrate dev   # Create and apply migrations
```

### Code Style

This project uses ESLint and Prettier for code formatting. Make sure to run the linter before committing:

```bash
bun run lint
```

---

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy CodeGecko is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dndmein-rgb/CodeGecko)

### Other Platforms

CodeGecko can be deployed to any platform that supports Next.js:
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [AWS](https://aws.amazon.com/)
- [Google Cloud](https://cloud.google.com/)

---

### Development Guidelines

- Write TypeScript with proper typing
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits atomic and well-described

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Inspired by modern code review tools

---

## 📧 Contact & Support

- **Website**: [coderabbit-flame.vercel.app](https://coderabbit-flame.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/dndmein-rgb/CodeGecko/issues)
- **Discussions**: [GitHub Discussions](https://github.com/dndmein-rgb/CodeGecko/discussions)

---

<div align="center">


⭐ Star this repository if you find it helpful!

</div>
