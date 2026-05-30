import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Snapport | Automação de Portfólio com GitHub",
  description: "Automatize a criação da seção de projetos do seu portfólio usando dados dos seus repositórios do GitHub.",
  base: '/snapport/',
  head: [
    [
      'meta', 
      { 
        name: 'google-site-verification', 
        content: 'nZLOzlPEznu3x0-mg0zAElrhMAZwHHfU4wsccHs3xJU' 
      },
    ],

    [
      'meta',
      {
        name: 'description',
        content:
          'Generate portfolio project sections automatically from GitHub repositories.'
      }
    ],

    [
      'meta',
      {
        property: 'og:title',
        content: 'Snapport'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Generate portfolio project sections automatically from GitHub repositories.'
      }
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://guilhermegodoydev.github.io/snapport/'
      }
    ],

    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',

        name: 'Snapport',
        url: 'https://guilhermegodoydev.github.io/snapport/',
        description:
          'Generate portfolio project sections automatically from GitHub repositories.',

        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'All',

        programmingLanguage: [
          'JavaScript',
          'TypeScript'
        ],

        codeRepository:
          'https://github.com/guilhermegodoydev/snapport',

        license:
          'https://opensource.org/licenses/MIT',

        author: {
          '@type': 'Person',
          name: 'Guilherme Godoy',
          url: 'https://github.com/guilhermegodoydev'
        },

        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      })
    ]
  ],

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
