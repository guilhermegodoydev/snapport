<p align="center">
  <a href="./CONTRIBUTING.pt-br.md">Leia isto em Português</a>
</p>

# Snap-Port Contributing Guide 🤝

Thank you for your interest in contributing! **Snap-Port** is an **Open Source TypeScript** project, and any help in making it more robust and lightweight is highly appreciated.

---

## 🚀 Getting Started

1. **Fork** the project on GitHub.
2. **Clone** your fork:
   
   ```bash
   git clone https://github.com
   cd snapport
   ```
3. **Install dependencies** (we use Vite for the development environment):

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## 🌿 Workflow

1. **Create a branch** for your changes:

   ```bash
     git checkout -b feat/my-improvement
   ```
   
2. **Develop your solution:**
   1. Maintain **TypeScript** standards.
   2. Avoid adding external dependencies to keep the library lightweight (~3kB).

2. **Validate the Build:**
   Before submitting, ensure that TypeScript and Vite can compile the project without errors:

   ```bash
   npm run build
   ```

4. **Open a Pull Request:**
   1. Describe your changes and the reasoning behind them.
   2. If you fixed a bug, mention the corresponding Issue.
  
---

## 📌 Coding Guidelines

- **Resilience:** If creating a new UI component, ensure it has proper error handling (fallback).
- **CSS Variables:** Use existing variables (``--ghp-accent``, etc.) to maintain theme consistency.
- **Simplicity:** Snap-Port values the "Plug & Play" philosophy. Avoid complex configurations for the end user.

---

## ⚠️ Maintenance Note
Snap-Port is an independently maintained project. Contributions focusing on performance, API bug fixes, and accessibility have priority in the review process.

> **Tip:** If you wish to propose a major architectural change, please open an Issue to discuss the idea before you start coding.
