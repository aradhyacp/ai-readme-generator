# 🤖 AI README Generator

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/aradhyacp/ai-readme-generator/graphs/commit-activity)

**AI README Generator** is a powerful, developer-centric tool designed to automate the creation of high-quality, professional `README.md` files. Its fully frontend no Backend involved. By leveraging AI, this application analyzes project details and structures to generate comprehensive documentation in seconds, allowing developers to focus on what matters most: **writing code.**

---

## 🚀 Features

-   **Your API KEY Your Readme**: Its fully Frontend uses your own API key and generates your own README.md
-   **✨ AI-Powered Generation**: Automatically crafts descriptive sections based on your project input using the custom `ReadmeAiGenerator` utility.
-   **🎨 Modern UI/UX**: Built with a sleek, responsive interface using **Shadcn UI** and **Tailwind CSS**.
-   **🌓 Dark/Light Mode**: Full theme support out of the box with `next-themes`.
-   **📝 Live Preview**: View your generated Markdown in real-time before exporting.
-   **⚡ Fast & Lightweight**: Optimized with Next.js App Router for peak performance.
-   **🧩 Modular Components**: Easily extensible codebase with a clear separation of concerns.
-   **📱 Fully Responsive**: Works seamlessly on desktops, tablets, and mobile devices.

---

## 🛠 Tech Stack

### Core Frameworks & Languages
| Technology | Description |
| :--- | :--- |
| **Next.js 15** | React Framework for the web |
| **TypeScript** | Static type checking for robust code |
| **Tailwind CSS** | Utility-first CSS framework |

### UI & Styling
-   **Shadcn UI**: High-quality, accessible component library.
-   **Lucide React**: Beautifully simple pixel-perfect icons.
-   **Radix UI**: Unstyled, accessible components for building high-quality design systems.

### Tools & Utilities
-   **ESLint**: Pluggable linting utility for JavaScript/TypeScript.
-   **PostCSS**: Tool for transforming CSS with JavaScript.
-   **Custom Hooks**: Managed state and notifications via `use-toast`.

---

## 📸 Screenshots

| Landing Page | Generation Interface |
| :---: | :---: |
| ![Hero Section](https://via.placeholder.com/800x450?text=Hero+Section+Screenshot) | ![Editor Section](https://via.placeholder.com/800x450?text=AI+Editor+Screenshot) |

> *Note: Replace these placeholders with actual screenshots from your running application.*

---

## 📂 Project Structure

```bash
.
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── how-it-works/     # Instructional page
│   ├── layout.tsx        # Root layout with ThemeProvider
│   └── page.tsx          # Main landing/generator page
├── components/           # Reusable React components
│   ├── ui/               # Shadcn UI atoms (Button, Card, Input, etc.)
│   ├── Header.tsx        # Navigation and Logo
│   ├── Footer.tsx        # Credits and Links
│   ├── Hero.tsx          # Catchy introduction section
│   └── theme-provider.tsx# Dark/Light mode context
├── hooks/                # Custom React hooks (e.g., use-toast)
├── lib/                  # Utility functions and shared helpers
├── utils/                # Core AI logic (ReadmeAiGenerator.ts)
└── public/               # Static assets (Favicons, Icons)
```

---

## ⚙️ Getting Started

### Prerequisites
-   Node.js (Latest LTS recommended)
-   npm or yarn or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/aradhyacp/ai-readme-generator.git
    cd ai-readme-generator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory and add your AI service API keys (if applicable):
    ```env
    AI_SERVICE_API_KEY=your_key_here
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact & Support

Aradhya CP - [@aradhyacp](https://github.com/aradhyacp)

Project Link: [https://github.com/aradhyacp/ai-readme-generator](https://github.com/aradhyacp/ai-readme-generator)

---

## 💖 Acknowledgements

-   [Shadcn UI](https://ui.shadcn.com/) for the stunning components.
-   [Vercel](https://vercel.com/) for the hosting and Next.js framework.
-   All the AI models that made automated READMEs possible!

---
<p align="center">Made with ❤️ for the Developer Community</p>
