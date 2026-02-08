# Snap-Port 🚀
O **Snap-Port** é uma biblioteca **vanilla JavaScript**, sem dependências, pensada para desenvolvedores que desejam automatizar a exibição de projetos do GitHub em sites pessoais ou portfólios.

A proposta é simples: você marca seus repositórios com a tag ``port`` no GitHub, e o Snap-Port se encarrega de **buscar, cachear, filtrar e renderizar** esses projetos na sua interface — eliminando a necessidade de atualizações manuais no código do site.

> **Use o GitHub como fonte única de verdade para o seu portfólio.**

---

## 🛠 O que a biblioteca oferece?

A biblioteca foi desenhada para ser modular, funcionando tanto como um **motor de dados (headless)** quanto como uma **solução visual pronta para uso.**

### 1. Camada de Dados (Headless)

Se você já possui seu próprio layout ou utiliza frameworks como **React** ou **Vue**, pode consumir apenas a lógica de dados.

O método ``getPortProjects`` retorna um JSON tratado, abstraindo o ruído da API do GitHub e entregando apenas o essencial:

- Nome
- Descrição
- Tópicos
- Link do repositório
- Link de deploy
- Linguagem principal

Exemplo básico de uso:
  ```bash
    import { getPortProjects } from 'snap-port';

    const projects = await getPortProjects('seu-usuario', 'topic-tag');
  ```

---

### 2. Componentes de UI (Plug & Play)

Para quem busca agilidade, o Snap-Port oferece componentes de interface prontos, que podem ser usados sem frameworks:

- **Search Bar**  
  Filtro textual instantâneo que atua sobre os dados em cache.

- **Filter Carousel**  
  Carrossel horizontal de tecnologias que identifica automaticamente suas stacks a partir dos tópicos do GitHub.

- **Project Cards**  
  Cards minimalistas que incluem:
  - Social Preview (imagem do repositório)
  - Descrição com limite de linhas
  - Botões de ação para código-fonte e deploy

---

## 🚀 Instalação e Uso

### Via NPM

```bash
npm install snap-port
```

### Via CDN (Direto no HTML)
Se preferir não usar gerenciadores de pacotes, você pode importar os arquivos de distribuição diretamente:

```bash
<!-- Estilos da Lib -->
<link rel="stylesheet" href="https://unpkg.com/snap-port/dist/snap-port.css">

<!-- Lógica da Lib -->
<script type="module">
  import { initPortfolio } from 'https://unpkg.com/snap-port/dist/snap-port.js';

  initPortfolio('seu-usuario', {
    search: 'id-do-input',
    filters: 'id-container-dos-filtros',
    projects: 'id-do-grid'
  });
</script>
```

## ⚙️ Customização e Comportamento

### Gerenciamento de Tags e Imagens

A biblioteca utiliza os **topics** do seu repositório para duas funções:

- **Filtro de Descoberta**  
  Apenas repositórios com a tag **`port`** são processados.

- **Identidade Visual**  
  Tags como `react`, `nodejs` ou `typescript` são mapeadas para seus respectivos ícones e cores oficiais.

- **Imagens**  
  O Snap-Port consome o **Open Graph** do repositório para exibir automaticamente a imagem de preview do projeto.

---

### Cache, Performance e Rate Limit

Para evitar chamadas excessivas à API do GitHub e reduzir impactos de **rate limit**, o Snap-Port implementa um **sistema de cache inteligente baseado em ``localStorage``**.

Esse sistema:

- Armazena os dados tratados por usuário de forma isolada, evitando conflitos quando múltiplos portfólios utilizam a biblioteca no mesmo ambiente (ex: recrutadores abrindo vários ports).

- Possui ciclo de expiração automática, garantindo que os dados sejam atualizados periodicamente (entre 1 e 2 horas).

- Realiza limpeza automática de entradas antigas, funcionando como um garbage collector manual, evitando crescimento indefinido do localStorage.

- Trata casos de borda para impedir reutilização indevida de cache entre usuários diferentes.

Na prática, isso garante:

- Melhor performance,

- Menos requisições,

- E maior previsibilidade no consumo da API do GitHub.

---

### Estilização

A interface é construída com **variáveis CSS**, permitindo que você adapte as cores ao seu tema sem modificar o código interno:

```css
:root {
  --ghp-accent: #333;   /* Cor de destaque (botões ativos e ícones) */
  --ghp-bg: #fff;       /* Fundo dos cards */
  --ghp-border: #ddd;   /* Bordas e divisores */
}
```

## ⚠️ Status do Projeto e Contribuições

Este projeto está em sua fase **MVP (Minimum Viable Product)**.  

Atualmente, os componentes de UI compartilham estado interno para otimizar filtragem e performance.

> Este projeto é mantido no tempo livre e não possui garantias de suporte contínuo. Mudanças na API do GitHub ou na própria biblioteca podem ocorrer sem aviso prévio.

Sugestões, ideias de funcionalidades e relatos de bugs são bem-vindos.
Sinta-se à vontade para abrir uma **Issue** ou enviar um **Pull Request**.
Para detalhes sobre como contribuir, consulte o [**Guia de Contribuição.**](https://github.com/guilhermegodoydev/snap-port/blob/main/CONTRIBUTING.md)

---

**Autor:** Guilherme Godoy ([@guilhermegodoydev](https://github.com/guilhermegodoydev)) • **Licença:** MIT • **Peso:** 2.8kB gzipped


