# Instalação

O **Snapport** pode ser integrado via gerenciadores de pacotes para projetos modernos ou diretamente via CDN para sites estáticos.

## 1. Via NPM

Ideal para projetos que utilizam ferramentas de build (Vite, Webpack, etc).

```bash
npm install snapport
```

Após instalar, importe a lógica e os estilos no seu projeto:

```typescript
import { initPortfolio } from 'snapport';
import 'snapport/dist/index.css';

// Inicialização básica
initPortfolio('seu-usuario-github', {
  searchContainer: 'id-da-busca',
  filtersContainer: 'id-dos-filtros',
  projectsContainer: 'id-dos-projetos'
});
```

## 2. Via CDN (HTML Direto)

Esta é a forma mais simples de adicionar a biblioteca ao seu site. Utilize `type="module"` para garantir a compatibilidade.

```html
<!-- 1. Estilos da Biblioteca -->
<link rel="stylesheet" href="https://jsdelivr.net">

<!-- 2. Estrutura HTML -->
<div id="meu-search"></div>
<div id="meu-filters"></div>
<div id="meu-projects"></div>

<!-- 3. Lógica e Inicialização -->
<script type="module">
  import { initPortfolio } from 'https://jsdelivr.net';

  initPortfolio('seu-usuario-github', {
    tag: 'port',                      // Opcional: padrão é 'port'
    searchContainer: 'meu-search',     // ID do container de busca
    filtersContainer: 'meu-filters',   // ID do container de filtros
    projectsContainer: 'meu-projects'  // ID do grid de projetos
  });
</script>
```

---

### Observação importante
Diferente de outras bibliotecas, o Snapport exige que você informe os IDs dos containers onde os componentes serão injetados. Isso garante que você tenha total controle sobre onde cada parte do seu portfólio irá aparecer no layout.