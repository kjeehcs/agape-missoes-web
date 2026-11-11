# agape-missoes-web
Frontend do site da Ágape Missões Urbanas.

## Stack

Vite + React 18 + TypeScript, Tailwind CSS, React Router e pré-renderização estática com `vite-react-ssg`.

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # type-check + geração estática em dist/
```

## Onde editar

- **Conteúdo** (textos, programas, notícias, parceiros, equipe, transparência): `src/data/*.ts`, com os tipos em `src/types/`.
- **Imagens**: arquivos em `public/images/`, todas declaradas em `src/data/images.ts`.
- **Cores, raios e fontes**: variáveis CSS em `src/styles/globals.css`.

Itens marcados com `TODO` ou `[...]` nos dados são exemplos aguardando o conteúdo real.
