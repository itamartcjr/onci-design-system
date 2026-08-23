# ONCI Design System

Documentação viva da linguagem visual da ONCI.

O repositório organiza os fundamentos que deverão ser compartilhados entre a loja web, React Native, WordPress/Gutenberg, campanhas e outros pontos de contato da marca.

## Stack

- Node.js 20+
- npm workspaces
- React 19
- TypeScript
- Vite
- pacote compartilhado `@onci/tokens`

## Estrutura

```text
onci-design-system/
├─ apps/
│  └─ docs/                 # documentação visual e playground
├─ packages/
│  └─ tokens/               # fonte de verdade dos design tokens
├─ docs/
│  ├─ adidas-benchmark.md   # pesquisa e decisões que absorvemos como método
│  └─ architecture.md       # arquitetura e integração futura
└─ package.json
```

## Rodar

```bash
npm install
npm run dev
```

Build e validação:

```bash
npm run check
npm run build
```

## Identidade ONCI preservada

A base inicial foi sincronizada com as decisões existentes no `wp-onci`:

- **Interface:** Nunito Sans
- **Marca:** 1797
- **Estrutura:** preto e branco
- **Vermelho ONCI:** `#D71920`
- **Azul ONCI:** `#1255A6`
- **Amarelo ONCI:** `#F2B705`
- **Laranja ONCI:** `#E86A17`
- **Terra ONCI:** `#8C3B20`
- **Conteúdo:** 1200px
- **Wide:** 1400px
- **Botões:** cantos retos, 1797, itálico, caixa alta

### Fontes e logo

Este repositório **não redistribui os arquivos binários da fonte 1797**. A aplicação referencia o nome da família e usa fallback durante o desenvolvimento. Em produção, a fonte deverá ser carregada a partir do asset oficial/licenciado da ONCI.

Não foi encontrado um arquivo de logo/wordmark oficial no estado atual do `wp-onci`. Por isso a documentação usa temporariamente um lockup tipográfico `ONCI` e reserva a estrutura para receber os assets oficiais em `apps/docs/public/brand/`, sem redesenhar ou adivinhar o símbolo.

## Referência Adidas

O sistema parte da **arquitetura e disciplina** observadas no Adidas Design Language e no YARN Design System: fundamentos separados de componentes, tokens, theming, grid, iconografia, estados, responsividade e documentação por exemplos.

Não copiamos logos, Três Listras, fontes, assets, fotografia, nomes proprietários ou identidade de marca da adidas.

## Próximas saídas dos tokens

A fonte de verdade é `packages/tokens/src/tokens.json`. A arquitetura foi preparada para gerar, em etapas futuras:

1. CSS Custom Properties para web;
2. objetos TypeScript para React e React Native;
3. presets/tema para componentes;
4. `theme.json` para WordPress;
5. JSON compatível com Figma Tokens / Tokens Studio, se desejado.
