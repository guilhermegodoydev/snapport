# Referência da API

Nesta página você encontrará o detalhamento técnico das funções e configurações disponíveis na Snapport.

## `initPortfolio(username, config)`

Esta é a função principal que gerencia o ciclo de vida completo: busca os dados, gerencia o cache e renderiza os componentes na tela.

### Parâmetros

- **`username`** (string): Seu nome de usuário no GitHub.
- **`config`** (objeto): Configurações opcionais de inicialização.


| Propriedade | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `searchContainer` | `string` | `'search-cont'` | ID do container para a barra de busca. |
| `filtersContainer` | `string` | `'filters-cont'` | ID do container para o carrossel de filtros. |
| `projectsContainer` | `string` | `'projects-cont'` | ID do container para o grid de projetos. |
| `tag` | `string` | `'port'` | Topic do GitHub usado para filtrar os projetos. |
| `customCardTemplate` | `function` | `undefined` | Função que recebe os dados do repo e retorna uma string HTML. |

### Retorno
A função retorna uma `Promise` com o objeto:
```typescript
{
  projects: SanitizedRepo[], // Lista de projetos processados
  status: 'success' | 'error',
  message?: string           // Mensagem de erro caso ocorra falha
}
```

---

## `getPortProjects(username, tag, options)`

Caso você queira apenas os dados (sem usar a interface padrão da lib), utilize este método.

### Opções de Cache e Desenvolvimento
A Snapport possui um sistema de **Cache Inteligente**:
- **Persistência**: Os dados são armazenados no `localStorage` por **2 horas**.
- **Dev Mode**: O cache é **desativado automaticamente** se detectado ambiente de desenvolvimento (`localhost`, Vite dev, etc.), garantindo que suas mudanças no GitHub apareçam instantaneamente.
- **Limpeza**: Ao mudar o usuário, a lib limpa caches de usuários antigos para economizar espaço.

### Forçando Atualização
Para ignorar o cache manualmente, você pode passar a propriedade `forceRefresh`:

```typescript
const projects = await getPortProjects('usuario', 'port', { forceRefresh: true });
```

---

## Comportamento em Falhas de Rede

A Snapport é resiliente. Caso ocorra um erro de conexão ou limite de taxa da API do GitHub:
1. Ela tentará buscar um **cache expirado** no seu navegador como última alternativa.
2. Se não houver nenhum dado disponível, ela retornará um array vazio e exibirá uma mensagem amigável no container de projetos.

---

## Métodos Utilitários (UI)

Se você estiver construindo sua própria lógica de renderização, pode utilizar os métodos de interface separadamente:

- `renderSkeleton(container, count)`: Exibe os cards de carregamento.
- `renderSearchBar(container)`: Injeta o input de busca.
- `renderFilters(projects, container)`: Injeta os botões de categorias.
- `renderProjects(projects, container, username, template?)`: Injeta os cards finais.