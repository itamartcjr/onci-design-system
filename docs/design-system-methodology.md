# ONCI — Marca e Sistema de Design

## Regra central

O projeto `brand-and-design-system` é referência de **arquitetura de documentação**, não de identidade visual.

A ONCI reutiliza a inteligência estrutural da referência e mantém 100% da própria identidade, conteúdo, movimento, componentes e linguagem.

## Duas áreas independentes

### Marca

Marca não é uma seção do Sistema de Design.

A área de Marca possui navegação, hierarquia e governança próprias. Ela segue a mesma lógica de grupos e módulos do projeto de referência:

1. Fundamentos — módulos 01 a 04.
2. Linguagem e Narrativa — módulos 05 a 07.
3. Identidade Visual — módulos 08 a 15.
4. Experiência — módulos 16 a 18.
5. IA e Governança — módulos 19 e 20.

Cada módulo abre seus próprios campos. Um campo precisa registrar definição, objetivo, perguntas de validação, decisão ONCI, estado, forma de apresentação e fonte interna.

Estados da Marca:

- **Definido** — decisão consolidada e utilizável.
- **Proposta** — direção formulada, ainda sujeita a validação ou aprovação.
- **Pendente** — a estrutura exige a decisão, mas ainda não existe informação ONCI suficiente para fechá-la.

Nunca preencher um item de Marca apenas para completar documentação.

## Sistema de Design

O Sistema de Design é técnico e separado da área de Marca.

Sua navegação atual é:

- 00 — Introdução;
- 01 — Fundações;
- 02 — Tokens de design;
- 03 — Componentes;
- 04 — Padrões;
- 05 — Exemplos.

Páginas detalhadas usam abas, seguindo a lógica do projeto de referência:

1. **Visão geral** — descrição, finalidade, demonstração visual, variações e estados.
2. **Uso** — quando usar, quando evitar, responsividade e acessibilidade.
3. **Tokens** — valores e nomes que controlam o padrão.
4. **Código** — ligação entre documentação e implementação.
5. **Referências** — fontes internas e técnicas usadas para validar a decisão.

Páginas introdutórias podem permanecer em fluxo editorial contínuo quando abas não melhorarem a compreensão.

## Princípio editorial

**Primeiro mostrar → depois explicar → depois especificar.**

A documentação não deve parecer uma instalação padrão do Storybook, um painel genérico de produto digital ou uma lista automática de componentes. Ela também é uma expressão da ONCI.

## Fontes de verdade

1. Marca: `docs/brand-book.md` e `apps/docs/src/brand/brandData.ts`.
2. Ativos oficiais: `apps/docs/public/brand/`.
3. Tokens: `packages/tokens/src/tokens.json`.
4. Tema WordPress: `wp-onci/themes/onci/theme.json`.
5. Comportamento real: `wp-onci/plugins/onci-core/blocks/src/`.
6. Sistema de Design visual: `apps/docs/src/SystemDocs.tsx`.

## Tokens e estado técnico

No Sistema de Design:

- **definido** — valor consolidado no sistema atual;
- **extraído** — valor encontrado em implementação real e documentado;
- **operacional** — normalização usada para organizar o sistema, ainda sujeita a consolidação.

A arquitetura preferida é **Primitivo → Semântico → Componente**.

## Responsividade

Responsividade documenta mudança de comportamento, não simples redução da versão para computador.

Pontos de quebra reais encontrados no produto atual:

- 767px — galeria e carrossel;
- 782px — filtros e contexto WordPress;
- 1024px — galeria em tablet;
- 1180px — compactação do menu expansível.

Uma futura consolidação deve acontecer por migração consciente.

## Movimento

Valores encontrados na implementação atual:

- 120ms — painel do menu expansível;
- 140ms — indicador de navegação;
- 160ms — controles e acordeões;
- 220ms — painéis laterais e navegação em celular;
- 320ms — mídia e ampliação;
- 400ms — painéis de campanha.

`prefers-reduced-motion` é uma propriedade técnica e permanece com seu nome original no código; seu tratamento é obrigatório em novas implementações com movimento.

## Regra de evolução

Se uma decisão aparece repetidamente, avaliar se deve virar token, componente ou padrão.

Se existe uma única vez e não há motivo de reutilização, continua sendo decisão local.

A arquitetura da referência organiza a documentação. A ONCI determina como tudo parece, se move, fala e se comporta.
