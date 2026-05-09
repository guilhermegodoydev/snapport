<p align="center">
  <img src="https://github.com/guilhermegodoydev/snapport/blob/main/preview.png" width="120" height="120" style="border-radius: 50%" alt="Logo" />
</p>

<h1 align="center">Snapport</h1>

<p align="center">
  <strong>Gere automaticamente a seção de projetos do seu portfólio a partir dos seus repositórios do GitHub.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/snapport" alt="NPM Version">
  <img src="https://img.shields.io/bundlephobia/minzip/snapport" alt="Bundle Size">
  <img src="https://img.shields.io/npm/l/snapport" alt="License">
</p>

<p align="center">
  <a href="https://guilhermegodoydev.github.io/snapport"><strong>Ver Documentação »</strong></a>
</p>

---

## 💡 O problema

Manter a seção de projetos do portfólio atualizada manualmente é repetitivo:

- você cria um novo projeto
- atualiza o GitHub
- esquece de atualizar o portfólio
- seu portfólio fica desatualizado

---

## ✨ O que o Snapport faz

O Snapport automatiza a geração da seção de projetos do seu portfólio com base nos seus repositórios do GitHub.

Você define onde os projetos serão renderizados e a lib cuida da sincronização.

---

## 🔥 Antes vs Depois

### ❌ Antes (manual)

```html
<div>
  <h2>Projetos</h2>
  <ul>
    <li>Projeto A</li>
    <li>Projeto B</li>
  </ul>
</div>
```

### ✅ Depois (automático)

```js
import { initPortfolio } from 'snapport';

initPortfolio('seu-usuario-github', {
  tag: 'port',
  searchContainer: 'meu-search',
  filtersContainer: 'meu-filters',
  projectsContainer: 'meu-projects'
});
```

---

## 🚀 Início rápido

### Via npm

```bash
npm install snapport
```

```js
import { initPortfolio } from 'snapport';

initPortfolio('seu-usuario-github', {
  tag: 'port',
  searchContainer: 'meu-search',
  filtersContainer: 'meu-filters',
  projectsContainer: 'meu-projects'
});
```

### Via CDN (vanilla JS)

```html
<script type="module">
  import { initPortfolio } from 'https://cdn.jsdelivr.net/npm/snapport/dist/snap-port.js';

  initPortfolio('seu-usuario-github', {
    tag: 'port',
    searchContainer: 'meu-search',
    filtersContainer: 'meu-filters',
    projectsContainer: 'meu-projects'
  });
</script>
```

---

## 🎨 Personalização

```css
:root {
  --ghp-accent: #3178C6;
  --ghp-bg: #ffffff;
  --ghp-text: #333;
}
```

---

## ⚙️ Características

- Zero dependências em runtime
- Cache local (2h)
- Funciona com qualquer framework
- Baseado em GitHub Topics
- Leve e direto ao ponto

---

## 🛠 Tecnologias suportadas

React • TypeScript • Node.js • Docker • Tailwind • Python • etc

---

## 🤝 Contribuição

Veja a documentação: [CONTRIBUIR](https://guilhermegodoydev.github.io/snapport/projeto/contribuir.html)
