# ONCI — Brand + Design System

## Regra central

O projeto `brand-and-design-system` é referência de **arquitetura de documentação**, não de identidade visual.

A ONCI reutiliza a inteligência estrutural da referência e mantém 100% da própria identidade, conteúdo, movimento, componentes e linguagem.

## Duas áreas independentes

### Brand

Brand não é uma seção do Design System.

A área Brand possui navegação, hierarquia e governança próprias. Ela segue a mesma lógica de grupos e módulos do projeto de referência:

1. Foundation — módulos 01 a 04.
2. Language & Narrative — módulos 05 a 07.
3. Visual Identity — módulos 08 a 15.
4. Experience — módulos 16 a 18.
5. AI & Governance — módulos 19 e 20.

Cada módulo abre seus próprios campos. Um campo precisa registrar definição, objetivo, perguntas de validação, decisão ONCI, status, forma de apresentação e fonte interna.

Status de Brand:

- **Definido** — decisão consolidada e utilizável.
- **Proposta** — direção formulada, ainda sujeita a validação/aprovação.
- **Pendente** — a estrutura exige a decisão, mas ainda não existe informação ONCI suficiente para fechá-la.

Nunca preencher um item de Brand apenas para completar documentação.

## Design System

O Design System é técnico e separado da área Brand.

Sua navegação atual é:

- 00 — Introdução;
- 01 — Fundações;
- 02 — Tokens;
- 03 — Componentes;
- 04 — Padrões;
- 05 — Exemplos.

Páginas detalhadas usam abas, seguindo a lógica do projeto de referência:

1. **Overview** — descrição, finalidade, demonstração visual, variações e estados.
2. **Uso** — quando usar, quando evitar, responsividade e acessibilidade.
3. **Tokens** — valores e nomes que controlam o padrão.
4. **Código** — ligação entre documentação e implementação.
5. **Referências** — fontes internas e técnicas usadas para validar a decisão.

Páginas introdutórias podem permanecer em fluxo editorial contínuo quando abas não melhorarem a compreensão.

## Princípio editorial

**Primeiro mostrar → depois explicar → depois especificar.**

A documentação não deve parecer Storybook padrão, dashboard SaaS ou lista automática de componentes. Ela também é uma expressão da ONCI.

## Fontes de verdade

1. Brand: `docs/brand-book.md` e `apps/docs/src/brand/brandData.ts`.
2. Ativos oficiais: `apps/docs/public/brand/`.
3. Tokens: `packages/tokens/src/tokens.json`.
4. Tema WordPress: `wp-onci/themes/onci/theme.json`.
5. Comportamento real: `wp-onci/plugins/onci-core/blocks/src/`.
6. Design System visual: `apps/docs/src/SystemDocs.tsx`.

## Tokens e status técnico

No Design System:

- **definido** — valor consolidado no sistema atual;
- **extraído** — valor encontrado em implementação real e documentado;
- **operacional** — normalização usada para organizar o sistema, ainda sujeita a consolidação.

A arquitetura preferida é Primitive → Semantic → Component.

## Responsividade

Responsividade documenta mudança de comportamento, não redução do desktop.

Breakpoints reais encontrados no produto atual:

- 767px — galeria e slides;
- 782px — filtros / contexto WordPress;
- 1024px — galeria tablet;
- 1180px — compactação do mega menu.

Uma futura consolidação deve acontecer por migração consciente.

## Motion

Valores encontrados na implementação atual:

- 120ms — painel do mega menu;
- 140ms — indicador de navegação;
- 160ms — controles/accordion;
- 220ms — drawers e navegação mobile;
- 320ms — mídia/zoom;
- 400ms — slides de campanha.

`prefers-reduced-motion` é obrigatório em novas implementações com movimento.

## Regra de evolução

Se uma decisão aparece repetidamente, avaliar se deve virar token, componente ou padrão.

Se existe uma única vez e não há motivo de reutilização, continua sendo decisão local.

A arquitetura da referência organiza a documentação. A ONCI determina como tudo parece, se move, fala e se comporta.
