# ONCI Design System — metodologia de documentação

## Regra central

O projeto `brand-and-design-system` é referência de **arquitetura de documentação**, não de identidade visual.

A ONCI reutiliza a inteligência estrutural:

- navegação por grupos e páginas pequenas;
- cada assunto como uma prancha visual independente;
- mostrar antes de explicar;
- explicar antes de especificar;
- exemplos reais antes de tabelas técnicas;
- tokens conectando decisão visual e código;
- components abaixo de foundations/tokens;
- patterns acima de components e abaixo de telas finais.

A ONCI não reutiliza cores, tipografia, componentes estilizados, motion, imagens ou linguagem visual do projeto de referência.

## Ordem obrigatória de uma página

1. Título.
2. Descrição curta.
3. Para que serve.
4. Exemplo real e visual.
5. Variações e estados relevantes.
6. Informações técnicas, preferindo nomes de token.
7. Referências.

O princípio editorial é: **primeiro mostrar → depois explicar → depois especificar**.

## Fontes de verdade da ONCI

1. Marca e Brand Book: `docs/brand-book.md` + SVGs oficiais em `apps/docs/public/brand/`.
2. Tokens: `packages/tokens/src/tokens.json`.
3. Tema WordPress: `wp-onci/themes/onci/theme.json`.
4. Comportamento real de componentes: `wp-onci/plugins/onci-core/blocks/src/`.
5. Documentação visual: `apps/docs/src/SystemDocs.tsx`.

## Status dos valores

- **definido** — decisão consolidada de marca/sistema.
- **extraído** — valor encontrado em implementação real e documentado como padrão existente.
- **operacional** — normalização proposta para organizar o sistema; precisa ser validada por uso real antes de virar regra definitiva.

## Arquitetura atual

### 00 — Introdução

Visão geral, princípios e como usar.

### 01 — Marca

Marca ONCI, logo, aplicações e Brand Book completo.

### 02 — Fundações

Cores, tipografia, espaçamento, grid, breakpoints, radius/bordas, elevação, ícones e motion.

### 03 — Tokens

Primitivos → Semânticos → Componentes.

### 04 — Componentes

Somente componentes já utilizados ou claramente necessários na ONCI. A primeira leva documenta botões, formulários, navegação, produto, galeria e filtros.

### 05 — Padrões

Combinações recorrentes: header/mega menu, PLP, PDP e carrossel/slides.

### 06 — Exemplos

Demonstra a mesma estrutura assumindo Desempenho, Equipes e Raízes.

## O que ainda não vira página

Templates genéricos, dashboards, pricing, tabelas, avatares, tooltips e outros componentes do projeto de referência não entram automaticamente. Eles só devem ser adicionados quando a ONCI tiver uso real que justifique documentação e reutilização.

## Responsividade

A documentação deve mostrar mudança de comportamento. Os breakpoints atuais são extraídos do código e ainda não formam uma única escala universal:

- 767px — galeria e slides;
- 782px — filtros / contexto WordPress;
- 1024px — galeria tablet;
- 1180px — compactação do mega menu.

Uma futura consolidação deve acontecer por migração consciente, não por renomear valores que já possuem comportamento diferente.

## Motion

Valores encontrados no produto atual:

- 120ms — painel do mega menu;
- 140ms — indicador de navegação;
- 160ms — controles como plus/accordion;
- 220ms — drawers e navegação mobile;
- 320ms — zoom/hover de mídia;
- 400ms — slides de campanha.

Componentes principais já possuem tratamento para `prefers-reduced-motion`; esse comportamento é obrigatório em novas implementações com movimento.

## Regra de evolução

Se uma decisão aparece repetidamente, ela deve ser avaliada para virar token, componente ou padrão.

Se aparece uma única vez e não existe razão para reutilização, ela continua sendo uma decisão local.
