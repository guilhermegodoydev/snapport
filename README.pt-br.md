<p align="center">
  <a href="./README.md">Read this in English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/dm/snapport?style=for-the-badge&logo=npm" alt="NPM Downloads">
  <img src="https://img.shields.io/npm/v/snapport?style=for-the-badge" alt="NPM Version">
  <img src="https://img.shields.io/github/license/guilhermegodoydev/snapport?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/bundlephobia/min/snapport?style=for-the-badge" alt="Bundle Size">
</p>

# Snap-Port 🚀

O **Snap-Port** é uma biblioteca desenvolvida em **TypeScript**, sem dependências externas, projetada para automatizar a exibição de projetos do GitHub em sites pessoais ou portfólios.

A proposta central é utilizar o GitHub como **fonte única de verdade:** ao marcar seus repositórios com a tag escolhida, a biblioteca se encarrega de buscar, tratar, aplicar cache e renderizar os dados, eliminando a manutenção manual no código do seu site.

---

## 🛠 Funcionalidades Técnicas

### 1. Seleção de Projetos e Controle de Stacks
O Snap-Port oferece controle total sobre o que é exibido e como as tecnologias são categorizadas:

- **Tag de Descoberta**: Por padrão, a biblioteca busca repositórios com a tag ``port``, mas você pode definir qualquer outra tag no momento da inicialização.
- **Filtros por Stacks (Topics):** Para que os filtros automáticos e a barra de busca funcionem corretamente, você deve listar as tecnologias (ex: ``react``, ``nodejs``, ``css``) nos topics do seu repositório no GitHub.
- **Por que não usar a "Language" automática?** A lib ignora o campo ``language`` do GitHub para permitir que você decida quais ferramentas quer destacar. Isso evita que um projeto de React seja classificado apenas como "HTML" ou "JavaScript" devido ao volume de arquivos gerados por ferramentas de build, garantindo que o filtro reflita a stack real do projeto.

### 2. Gestão Inteligente de Imagens
Como a API do GitHub não retorna links diretos de imagens de preview, o Snap-Port utiliza uma lógica de **geração automática** integrada aos componentes de UI.

Para que cada projeto tenha sua própria imagem, siga estas regras:

- **Arquivo de Preview:** Você deve criar um arquivo chamado ``preview.png`` na raiz do seu repositório.
- **Importante:** O nome deve ser exatamente preview.png (letras minúsculas), pois o GitHub diferencia maiúsculas de minúsculas (*case-sensitive*).

Caso o arquivo não exista ou ocorra algum erro de carregamento (como *Rate Limits*), a lib executa uma **estratégia de fallback em cascata:**

- **GitHub Open Graph:** Tenta carregar o card dinâmico gerado pelo próprio GitHub.
- **Placeholder de Segurança:** Se o GitHub bloquear a requisição, gera um card neutro contendo o nome do projeto via placehold.co.

### 3. Componentes de UI Integrados

- **Search Bar:** Filtro textual em tempo real (nome, descrição e tópicos).
- **Filter** Carousel: Carrossel dinâmico baseado nos tópicos definidos nos repositórios.
- **Project Cards (Layout 16:9):** Cards responsivos com badges de tecnologia e botões de ação (Código e Deploy).

---

## 💡 Dicas para um melhor Resultado

- **Proporção de Imagem:** Para que as imagens não fiquem com partes cortadas nos cards, salve seus arquivos ``preview.png`` na proporção **16:9** (ex: 1280x720px).
- **Link de Acesso (Deploy):** O botão "Acessar" só aparecerá se o campo **"Homepage"** estiver preenchido nas configurações do seu repositório no GitHub.

---

## 📦 Instalação e Integração

### Via NPM

```bash
npm install snapport
```

### Via CDN (Direto no HTML)
Se você preferir não usar gerenciadores de pacotes, pode importar os arquivos diretamente de um CDN. Recomendamos o uso de type="module" para melhor compatibilidade com o padrão moderno da biblioteca.

```html
<!-- 1. Estilos da Biblioteca -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/snapport/dist/snap-port.css">

<!-- 2. Lógica e Inicialização -->
<script type="module">
  // Importação do módulo oficial ES
  import { initPortfolio } from 'https://cdn.jsdelivr.net/npm/snapport/dist/snap-port.js';

  initPortfolio('seu-usuario', {
    tag: 'port',                      // Opcional: padrão é 'port'
    searchContainer: 'id-search',     // ID do container da busca
    filtersContainer: 'id-filters',   // ID do container dos filtros
    projectsContainer: 'id-projects'  // ID do container do grid
  });
</script>
```

---

## 🎨 Personalização Visual (CSS Variables)
Se você utiliza o layout padrão da biblioteca, pode adaptar as cores e o estilo ao seu tema sem modificar o código interno. O Snap-Port utiliza **Variáveis CSS** que podem ser facilmente sobrescritas no seu arquivo global:

```css
:root {
  --ghp-accent: #333;           /* Cor de destaque (botões e ícones) */
  --ghp-bg: #ffffff;            /* Fundo dos cards */
  --ghp-text: #333;             /* Título e textos principais */
  --ghp-text-light: #666;       /* Descrições e textos secundários */
  --ghp-border: rgba(226, 226, 228, 0.8); /* Bordas */
  --ghp-shadow: rgba(0, 0, 0, 0.1);       /* Sombras dos cards */
}
```

---

## ⚙️ Customização e Performance

### Injeção de Template Customizado
Mantenha a inteligência de busca e cache, mas use seu próprio design:

```javascript
initPortfolio('seu-usuario', {
  searchContainer: 'id-search',
  filtersContainer: 'id-filters',
  projectsContainer: 'id-projects',
  customCardTemplate: (repo) => `
    <div class="meu-card-personalizado">
      <h4>${repo.name}</h4>
      <p>${repo.description}</p>
      <a href="${repo.htmlUrl}">Ver código</a>
    </div>
  `
});
```

### Cache e Estabilidade
A biblioteca utiliza localStorage para garantir performance:

- **Persistência:** Dados armazenados por até 2 horas.
- **Isolamento:** Cache separado por usuário do GitHub.

---

> **Nota sobre Manutenção:**  
> Este é um projeto de código aberto mantido de forma independente. Sinta-se à vontade para contribuir! Se encontrar um bug ou tiver uma ideia de funcionalidade, abrir uma **Issue** ou um **Pull Request** é a melhor forma de ajudar o projeto a crescer.
>
> Para entender como colaborar com o código, consulte o nosso [**Guia de Contribuição**](./CONTRIBUTING.md).

**Autor**: Guilherme Godoy (@guilhermegodoydev)
