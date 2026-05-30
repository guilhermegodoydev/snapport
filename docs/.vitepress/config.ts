import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Snapport",
  description: "Automação de portfólio via GitHub",
  base: '/snapport/',
  head: [['meta', { name: 'google-site-verification', content: 'nZLOzlPEznu3x0-mg0zAElrhMAZwHHfU4wsccHs3xJU' }]],

  sitemap: {
    hostname: 'https://guilhermegodoydev.github.io/snapport/'
  },

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Documentação', link: '/guia/instalacao' }
    ],

    sidebar: [
      {
        text: 'Começando',
        items: [
          { text: 'Instalação', link: '/guia/instalacao' },
          { text: 'Configuração do GitHub', link: '/guia/github' },
          { text: 'Componentes', link: '/guia/componentes' },
          { text: 'Stacks Compatíveis', link: '/guia/stacks' }
        ]
      },
      {
        text: 'Referência',
        items: [
          { text: 'API (Parâmetros)', link: '/guia/api' },
          { text: 'Customização CSS', link: '/guia/estilizacao' }
        ],
      },
      {
        text: 'Comunidade',
        items: [
          { text: 'Roadmap', link: '/projeto/roadmap' },
          { text: 'Como Contribuir', link: '/projeto/contribuir' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guilhermegodoydev/snapport' }
    ],

    footer: {
      message: 'Lançado sob a Licença MIT.',
    }
  }
})
