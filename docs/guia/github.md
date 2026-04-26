# Configuração do GitHub

Para que a Snapport funcione como sua "Fonte Única de Verdade", você precisa organizar seus repositórios no GitHub seguindo algumas convenções simples.

## 1. Seleção de Projetos (Tags)

A biblioteca não lista todos os seus repositórios automaticamente. Ela busca apenas aqueles que você marcou especificamente para o seu portfólio.

- **Tag de Descoberta**: Por padrão, a Snapport procura pela tag `port`.
- **Como configurar**: Vá até o seu repositório no GitHub, clique no ícone de engrenagem em "About" e adicione `port` na seção de **Topics**.

> **Dica**: Você pode usar uma tag customizada passando a propriedade `tag` na inicialização da lib.

## 2. Definindo as Stacks (Topics)

A biblioteca ignora o campo automático "Language" do GitHub para evitar que ferramentas de build (como arquivos gerados de CSS/HTML) poluam seus filtros. 

Para que os filtros e as categorias funcionem corretamente:
- Liste as tecnologias reais que você usou nos **Topics** do repositório (ex: `react`, `typescript`, `nodejs`, `sass`).
- **Importante**: A Snapport possui um mapeamento interno de cores e ícones. Para que a estilização automática funcione, o nome do tópico deve seguir o padrão reconhecido pela lib.
- Você pode conferir a **[Lista de Stacks Compatíveis](./stacks.md)** para garantir que está usando os termos corretos.

## 3. Gestão de Imagens (preview.png)

A Snapport busca uma imagem de capa diretamente no seu repositório para garantir a melhor performance.

- **Arquivo**: Você deve criar um arquivo chamado `preview.png` na raiz (root) do seu repositório.
- **Regra de Ouro**: O nome deve ser **exatamente** `preview.png` (letras minúsculas). O GitHub diferencia maiúsculas de minúsculas (*case-sensitive*).
- **Proporção**: Recomendamos o uso da proporção **16:9** (ex: 1280x720px) para evitar cortes nos cards.

### Estratégia de Fallback
Caso você esqueça do arquivo ou ocorra algum erro, a lib possui um sistema de segurança em cascata:
1. Tenta carregar o seu `preview.png`.
2. Se não existir, tenta o **GitHub Open Graph** (a imagem social do repo).
3. Se tudo falhar, gera um **Placeholder** neutro com o nome do projeto.