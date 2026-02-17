<p align="center">
  <a href="./CONTRIBUTING.md">Read this in English</a>
</p>

# Guia de Contribuição do Snap-Port 🤝

Obrigado por se interessar em contribuir! O **Snap-Port** é um projeto **Open Source em TypeScript** e toda ajuda para torná-lo mais robusto e leve é bem-vinda.

---

## 🚀 Como começar

1. **Faça um fork** do projeto no GitHub.
2. **Clone** o seu fork:
   
   ```bash
   git clone https://github.com/guilhermegodoydev/snapport.git
   cd snapport
   ```
   
3. **Instale as dependências** (utilizamos o Vite para o ambiente de dev)
   
   ```bash
   npm install
   ```
   
 4. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    
---

## 🌿 Fluxo de Trabalho

1. **Crie uma branch** para sua modificação:
   ```bash
     git checkout -b feat/minha-melhoria
   ```

2. **Desenvolva sua solução:**
   1. Mantenha o padrão de **TypeScript.**
   2. Evite adicionar dependências externas para manter a lib leve (~3kB).

3. **Valide o Build:**
  Antes de enviar, garanta que o TypeScript e o Vite conseguem compilar o projeto sem erros:

  ```bash
  npm run build
  ```

4. **Abra um Pull Request:**
  1. Descreva suas mudanças e o porquê delas.
  2. Se corrigiu um bug, mencione a Issue correspondente.

---

## 📌 Diretrizes de Código

- **Tipagem Estrita:** Sempre defina interfaces para novos dados no arquivo ``types.ts``.
- **Resiliência:** Se criar um novo componente de UI, garanta que ele tenha tratamento de erro (fallback).
- **CSS Variables:** Use as variáveis existentes (``--ghp-accent``, etc.) para manter a consistência do tema.
- **Simplicidade:** O Snap-Port preza pelo lema "Plug & Play". Evite configurações complexas para o usuário final.

---

## ⚠️ Nota de Manutenção

O Snap-Port é um projeto mantido de forma independente. Contribuições que foquem em performance, correção de bugs de API e acessibilidade têm prioridade na revisão.

> Dica: Se você deseja propor uma mudança grande na arquitetura, abra uma Issue para discutirmos a ideia antes de você começar a codar!
