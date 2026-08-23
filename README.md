# ONCI Design System

<p align="center">
  <img src="apps/docs/public/brand/logo.svg" alt="Logo oficial ONCI" width="280" />
</p>

Documentação viva da linguagem visual **e da marca ONCI**.

O repositório organiza o **Brand Book** e o **Design System na mesma aplicação**, para que estratégia de marca, identidade, tokens, componentes e experiências digitais evoluam a partir da mesma fonte de verdade.

## Documentação publicada

- **Brand Book + Design System:** `https://itamartcjr.github.io/onci-design-system/`
- O **Brand Book é o primeiro item do menu lateral** e também a tela inicial da documentação.

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
│     ├─ src/                       # Brand Book + documentação visual do Design System
│     └─ public/
│        └─ brand/                  # assets oficiais da marca
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
- logo, símbolo e aplicação de perfil oficiais;
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

### Fontes e marca oficial

Este repositório **não redistribui os arquivos binários da fonte 1797**. A aplicação referencia o nome da família e usa fallback durante o desenvolvimento. Em produção, a fonte deverá ser carregada a partir do asset oficial/licenciado da ONCI.

Os assets vetoriais oficiais da ONCI estão em `apps/docs/public/brand/` e são usados diretamente pela documentação:

- `logo.svg` — assinatura principal;
- `symbol.svg` — símbolo isolado;
- `perfil.svg` — aplicação quadrada para perfil/avatar e favicon.

O Brand Book já usa esses arquivos oficiais. Permanecem como decisões futuras apenas as especificações que os vetores, sozinhos, não determinam: área de proteção, redução mínima, versões cromáticas adicionais e lockups formais de ONCI Desempenho, ONCI Equipes e ONCI Raízes.

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
