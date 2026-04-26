# Estilização e Temas

O **Snapport** já vem com um design moderno e responsivo, mas foi construído para ser facilmente adaptável ao estilo visual do seu próprio site.

## Variáveis CSS (Theming)

A forma mais simples de personalizar a biblioteca é sobrescrever as variáveis de ambiente no seu arquivo CSS global. Isso afetará todos os componentes simultaneamente.

```css
:root {
  /* Cores de Destaque e Ação */
  --ghp-accent: #333;           /* Botões, ícones e estados de foco */
  
  /* Cores de Fundo e Texto */
  --ghp-bg: #ffffff;            /* Fundo dos cards e botões */
  --ghp-text: #333;             /* Títulos e textos principais */
  --ghp-text-light: #666;       /* Descrições e textos secundários */

  /* Estrutura e Profundidade */
  --ghp-border: rgba(226, 226, 228, 0.8);
  --ghp-shadow: rgba(0, 0, 0, 0.1);
}
```

## Estilização Dinâmica por Tecnologia

Uma das funcionalidades exclusivas do Snapport é o suporte a cores dinâmicas baseadas na tecnologia. 

Os botões de filtro e badges utilizam uma variável chamada `--tech-color`. Quando um tópico é reconhecido pela lib, o componente aplica automaticamente a cor oficial daquela stack (ex: `#61DAFB` para React).

Se você deseja desabilitar ou mudar esse comportamento, pode sobrescrever o seletor:

```css
.ghp-filter-btn:hover {
  /* Forçar uma cor fixa mesmo que a tecnologia mude */
  border-color: var(--ghp-accent) !important;
}
```

## Responsividade

A biblioteca utiliza **CSS Grid** e **Flexbox** para garantir que seu portfólio funcione bem em qualquer tamanho de tela:

- **Desktop**: Grid de 3 colunas.
- **Tablets**: Ajuste dinâmico com `minmax(280px, 1fr)`.
- **Mobile**: Filtros com rolagem horizontal e botões otimizados para toque.

## Animações de Carregamento

O Snapport inclui uma animação de *Skeleton Loading* nativa. Se você quiser mudar a cor do "pulso" de carregamento para combinar com um tema escuro (Dark Mode), utilize:

```css
.ghp-skeleton {
  background: linear-gradient(90deg, #222 25%, #333 50%, #222 75%);
}
```