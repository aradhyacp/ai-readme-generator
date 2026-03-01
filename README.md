
# 🤖 AI README Generator with Streaming

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/aradhyacp/ai-readme-generator/graphs/commit-activity)

**AI README Generator** is a cutting-edge, developer-friendly tool that automates the creation of high-quality `README.md` files — with a unique focus on **streaming AI-generated content** using the powerful **Streamdown** library.  

This frontend-only app streams AI responses in real-time, rendering beautifully animated Markdown content as it arrives, letting you see your README take shape instantly while the AI writes.

### 🎥 **Real-Time Streaming with Streamdown**

Experience your README being written **live**, as the AI streams content chunk-by-chunk. Powered by [Streamdown](https://streamdown.ai/), your markdown renders smoothly with beautiful animated transitions, syntax-highlighted code blocks, and interactive copy buttons — all updating instantly without page reloads.

## 🚀 Key Features

- **Streamed Markdown Rendering**: Uses [Streamdown](https://streamdown.ai/) to animate the streaming AI output for a smooth, live content reveal.
- **Your API Key, Your Data**: Fully frontend—uses your own AI API key without backend servers.
- **✨ AI-Powered Generation**: Custom `ReadmeAiGenerator` utility transforms your project inputs into well-structured README content on the fly.
- **🎨 Modern UI/UX**: Built with **Shadcn UI** + **Tailwind CSS** for a sleek, responsive design.
- **🌓 Dark/Light Mode**: Seamlessly supports theme switching with `next-themes`.
- **📝 Live Preview with Syntax Highlighting**: Preview the generated README with real-time syntax-highlighted code blocks powered by Streamdown + Shiki.
- **⚡ Lightweight & Fast**: Optimized with Next.js App Router.
- **📱 Fully Responsive**: Works flawlessly across desktop, tablet, and mobile devices.

---

## 🛠 Tech Stack

### Core Frameworks & Languages
| Technology | Description |
| :--- | :--- |
| **Next.js 15** | React framework optimized for performance |
| **TypeScript** | Statically typed JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |

### UI & Styling
- **Shadcn UI** — Accessible component library
- **Lucide React** — Beautiful icon set
- **Radix UI** — Accessible primitives for building custom UI

### Streaming & Markdown Rendering
- **Streamdown** — Streaming markdown renderer with animation support
- **@streamdown/code** — Syntax highlighting powered by Shiki with dual theme support

### Tools & Utilities
- **ESLint** & **PostCSS** — Code quality and CSS transformations
- **Custom React hooks** — For notifications and state management

---

## 📂 Project Structure

```bash
.
├── app/                  # Next.js app router (pages & layouts)
│   ├── globals.css       # Global styles and Tailwind setup
│   ├── how-it-works/     # Instructional page
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Main landing & generator page
├── components/           # Reusable React components
│   ├── ui/               # Shadcn UI atoms (Button, Card, Input, etc.)
│   ├── Hero.tsx          # Main interactive generator section with streaming preview
│   ├── Header.tsx        # Navigation & branding
│   ├── Footer.tsx        # Footer & credits
│   └── theme-provider.tsx# Dark/light mode context
├── hooks/                # Custom React hooks (e.g., notifications)
├── lib/                  # Utility functions and shared helpers
├── utils/                # Core AI logic (ReadmeAiGenerator.ts)
└── public/               # Static assets (icons, favicons)
````

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (Latest LTS recommended)
* npm / yarn / pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aradhyacp/ai-readme-generator.git
   cd ai-readme-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set your Gemini or OpenAI API key**

   * You can add your key in the UI or store it in local storage.
   * No backend required.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to your branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📧 Contact & Support

Aradhya CP — [@aradhyacp](https://github.com/aradhyacp)

Project: [https://github.com/aradhyacp/ai-readme-generator](https://github.com/aradhyacp/ai-readme-generator)

---

## 💖 Acknowledgements

* [Streamdown](https://streamdown.dev/) for beautiful streaming markdown rendering
* [Shadcn UI](https://ui.shadcn.com/) for stunning components
* [Vercel](https://vercel.com/) for hosting and Next.js framework
* All AI models powering this automated README generator

---

<p align="center">Made with ❤️ for the Developer Community</p>
