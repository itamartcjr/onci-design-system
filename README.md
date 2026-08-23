# ONCI Design System

Documentação viva da linguagem visual **e da marca ONCI**.

O repositório organiza tanto o **Brand Book** quanto o **Design System**, para que estratégia de marca, identidade, tokens, componentes e experiências digitais evoluam a partir da mesma fonte de verdade.

## Documentação publicada

- **Design System:** `https://itamartcjr.github.io/onci-design-system/`
- **Brand Book:** `https://itamartcjr.github.io/onci-design-system/brand-book/`

O Brand Book também possui uma versão-fonte em Markdown em `docs/brand-book.md`, usada para revisão e versionamento das decisões estratégicas.

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
│  └─ docs/
│     ├─ src/                       # documentação visual do Design System
│     └─ public/
│        ├─ brand/                  # assets oficiais da marca
│        └─ brand-book/             # Brand Book publicado no GitHub Pages
├─ packages/
│  └─ tokens/                       # fonte de verdade dos design tokens
├─ docs/
│  ├─ brand-book.md                 # estratégia e expressão da marca ONCI
│  ├─ adidas-benchmark.md           # pesquisa e decisões absorvidas como método
│  └─ architecture.md               # arquitetura e integração futura
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

## Brand Book

O Brand Book documenta:

- origem e significado do nome ONCI;
- propósito, missão, visão e ambição;
- posicionamento;
- ONCI Desempenho, ONCI Equipes e ONCI Raízes;
- públicos e personalidade;
- voz e tom;
- paleta e tipografia;
- direção fotográfica e linguagem gráfica;
- esporte de base, patrocínios e comunidade;
- regras de uso e governança da marca.

As decisões são classificadas como **Definido**, **Proposta** ou **Pendente** para evitar que uma formulação editorial ainda em discussão seja tratada automaticamente como regra final de marca.

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

Ainda não existe no repositório um arquivo vetorial oficial do logo/wordmark ONCI. Por isso a documentação usa temporariamente um lockup tipográfico `ONCI` e reserva `apps/docs/public/brand/` para receber os assets oficiais, sem redesenhar ou adivinhar o símbolo.

Quando o vetor oficial entrar, o Brand Book deverá ganhar as regras definitivas de construção, área de proteção, redução mínima, versões positivas/negativas e lockups das três frentes.

## Referência Adidas

O sistema parte da **arquitetura e disciplina** observadas no Adidas Design Language e no YARN Design System: fundamentos separados de componentes, tokens, theming, grid, iconografia, estados, responsividade e documentação por exemplos.

Não copiamos logos, Três Listras, fontes, assets, fotografia, nomes proprietários ou identidade de marca da adidas.

## Relação Brand Book × Design System

O **Brand Book** responde quem a ONCI é e como deve se expressar.

O **Design System** responde como essa expressão vira interface: tokens, componentes, estados, grids, motion, padrões de produto e acessibilidade.

Uma decisão de marca deve poder chegar ao produto digital sem ser reinterpretada em cada projeto.

## Próximas saídas dos tokens

A fonte de verdade é `packages/tokens/src/tokens.json`. A arquitetura foi preparada para gerar, em etapas futuras:

1. CSS Custom Properties para web;
2. objetos TypeScript para React e React Native;
3. presets/tema para componentes;
4. `theme.json` para WordPress;
5. JSON compatível com Figma Tokens / Tokens Studio, se desejado.
