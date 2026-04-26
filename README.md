<p align="center">
  <img src="https://github.com/guilhermegodoydev/snapport/blob/main/preview.png" width="300" height="300" style="border-radius: 50%" alt="Logo" />
</p>

<h1 align="center">Snapport</h1>

<p align="center">
  <strong>Seu portfólio alimentado automaticamente pelos tópicos do seu GitHub.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/snapport" alt="NPM Version">
  <img src="https://img.shields.io/bundlephobia/minzip/snapport" alt="Bundle Size">
  <img src="https://img.shields.io/npm/l/snapport" alt="License">
</p>

<p align="center">
  <a href="https://guilhermegodoydev.github.io/snapport"><strong>Explorar Documentação »</strong></a>
  <br /><br />
  <a href="https://github.com/guilhermegodoydev/snapport/issues">Reportar Bug</a>
  ·
  <a href="https://github.com/guilhermegodoydev/snapport/issues">Sugestão de Feature</a>
</p>

---

## 💡 Por que Snapport?

Cansado de atualizar manualmente o HTML do seu portfólio toda vez que termina um projeto? O **Snapport** transforma seus repositórios do GitHub na sua única fonte de verdade. Marque com uma tag, e seu site se atualiza sozinho.

- **Zero Dependências:** TypeScript puro. Sem inchaço no seu bundle.
- **Cache Inteligente:** Persistência local de 2 horas para respeitar os limites da API.
- **Framework Agnostic:** Use com React, Vue, Angular ou apenas HTML puro.

## 🚀 Início Rápido

```bash
npm install snapport
```

```typescript
import { initPortfolio } from 'snapport';

initPortfolio('seu-usuario', {
  searchContainer: 'search-id',
  filtersContainer: 'filters-id',
  projectsContainer: 'projects-id'
});
```

## 🎨 Personalização Visual

O Snapport é totalmente customizável via **CSS Variables**. Adapte as cores ao seu tema sem esforço:

```css
:root {
  --ghp-accent: #3178C6;
  --ghp-bg: #ffffff;
  --ghp-text: #333;
}
```

## 🛠️ Stacks Suportadas

A lib reconhece automaticamente ícones e cores oficiais para diversas tecnologias:
`React` • `TypeScript` • `Node.js` • `Docker` • `Tailwind` • `Sass` • `Python` • `e muito mais...`

---

## 🤝 Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender e criar. Confira nosso [Guia de Contribuição](https://guilhermegodoydev.github.io/snapport/projeto/contribuir.html) para começar.

## 📄 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](https://github.com/guilhermegodoydev/snapport/blob/main/LICENSE) para mais informações.
