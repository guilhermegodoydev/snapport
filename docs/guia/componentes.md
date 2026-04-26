# Componentes de UI

A Snapport entrega componentes de interface prontos, responsivos e otimizados. Eles foram desenhados para serem injetados em containers vazios (`div`) no seu HTML.

## 1. Barra de Busca
Permite filtrar seus projetos instantaneamente através do nome, descrição ou tópicos.

- **Comportamento**: A filtragem ocorre em tempo real conforme o usuário digita.
- **Identificador**: O input gerado possui o ID `#gh-port-search` para caso você queira aplicar estilos específicos.

## 2. Carrossel de Filtros
Gera botões dinâmicos baseados nas tecnologias (`topics`) que a biblioteca encontrou nos seus repositórios.

- **Inteligência**: Se você usa `react` e `typescript`, a lib gerará botões com os ícones oficiais e cores da marca de cada tecnologia.
- **Scroll**: Em dispositivos móveis, o carrossel suporta rolagem horizontal suave com *scroll snapping*.
- **Estado**: O botão "Todos" vem ativado por padrão para exibir a listagem completa.

## 3. Cards de Projeto
Os cards utilizam um layout de proporção **16:9** e possuem uma lógica de fallback para garantir que seu portfólio nunca tenha imagens quebradas.

### Gestão de Imagens (Fallback em Cascata)
A Snapport tenta carregar a imagem seguindo esta ordem de prioridade:
1. `preview.png` na raiz do seu repositório.
2. **GitHub Open Graph**: A imagem gerada pelo GitHub para redes sociais.
3. **Placeholder**: Um card neutro com o nome do projeto (via `placehold.co`).

### Botões de Ação
- **Github**: Link direto para o código fonte do repositório.
- **Acessar**: Este botão é **dinâmico**. Ele só será renderizado se você tiver preenchido o campo **"Homepage"** nas configurações do seu repositório no GitHub.

## 4. Skeleton Loading (Carregamento)
Para evitar que o layout do seu site "pule" enquanto os dados são buscados, a lib exibe **Skeletons** (blocos cinzas com animação de pulsação) que simulam o formato dos cards reais.

- **Performance**: Melhora a percepção de velocidade do site e evita mudanças bruscas de layout (*Cumulative Layout Shift*).

---

### Customização de Layout
Se você não quiser usar os cards padrão, a Snapport permite injetar o seu próprio HTML através da propriedade `customCardTemplate` na inicialização da API.