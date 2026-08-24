# ONCI — Marca e Sistema de Design

<p align="center">
  <img src="apps/docs/public/brand/logo.svg" alt="Logo oficial ONCI" width="280" />
</p>

Documentação viva da marca e do sistema de interface da ONCI.

O projeto usa o `brand-and-design-system` como referência de **estrutura e metodologia**, nunca como referência estética. A identidade, o conteúdo, o comportamento, os componentes e a direção de arte continuam sendo definidos pela ONCI.

## Documentação publicada

A aplicação possui duas áreas independentes dentro do mesmo projeto publicado:

- **Marca** — estratégia, narrativa, identidade, experiência e governança;
- **Sistema de Design** — fundações, tokens, componentes, padrões e exemplos de produto.

URL do projeto: `https://itamartcjr.github.io/onci-design-system/`

## Tecnologias

- Node.js 20+
- espaços de trabalho do npm
- React 19
- TypeScript
- Vite
- pacote compartilhado `@onci/tokens`

## Estrutura

```text
onci-design-system/
├─ apps/
│  └─ docs/
│     ├─ src/
│     │  ├─ BrandSystem.tsx         # área de Marca
│     │  ├─ DesignSystemView.tsx    # área do Sistema de Design + abas
│     │  ├─ SystemDocs.tsx          # pranchas visuais de interface
│     │  └─ brand/brandData.ts      # 20 módulos e decisões ONCI
│     └─ public/
│        └─ brand/                  # ativos oficiais
├─ packages/
│  └─ tokens/                       # tokens de design
├─ docs/
│  ├─ brand-book.md                 # fonte estratégica anterior / apoio
│  ├─ design-system-methodology.md  # regras de arquitetura documental
│  ├─ adidas-benchmark.md
│  └─ architecture.md
└─ package.json
```

## Marca

A área de Marca é separada do Sistema de Design.

A arquitetura segue cinco grupos e vinte módulos:

1. **Fundamentos** — Núcleo da marca, Estratégia de marca, Públicos e Personalidade da marca;
2. **Linguagem e Narrativa** — Identidade verbal, Sistema de mensagens e Narrativa da marca;
3. **Identidade Visual** — Identidade visual da marca, Tipografia, Direção fotográfica, Ilustração, Iconografia, Linguagem gráfica, Princípios de composição e Identidade de movimento;
4. **Experiência** — Identidade sonora, Experiência da marca e Marca em ação;
5. **IA e Governança** — Diretrizes de IA para a marca e Governança da marca.

Cada módulo possui seus próprios itens. As respostas ONCI são classificadas como **Definido**, **Proposta** ou **Pendente**. Um campo exigido pela estrutura não é preenchido artificialmente quando ainda não existe decisão suficiente.

## Sistema de Design

O Sistema de Design possui navegação própria:

- 00 — Introdução;
- 01 — Fundações;
- 02 — Tokens de design;
- 03 — Componentes;
- 04 — Padrões;
- 05 — Exemplos.

Páginas detalhadas utilizam as abas:

- **Visão geral**;
- **Uso**;
- **Tokens**;
- **Código**;
- **Referências**.

Páginas introdutórias podem usar fluxo editorial contínuo quando abas não adicionarem clareza.

## Princípio editorial

**Primeiro mostrar → depois explicar → depois especificar.**

A documentação deve ser visual e ensinar o sistema por demonstrações, estados, medidas, responsividade, tokens, código e exemplos reais da ONCI.

## Identidade ONCI

- **Interface:** Nunito Sans
- **Marca:** 1797
- **Estrutura:** preto e branco
- **Vermelho:** `#D71920`
- **Azul:** `#1255A6`
- **Amarelo:** `#F2B705`
- **Laranja:** `#E86A17`
- **Terra:** `#8C3B20`
- **Conteúdo:** 1200px
- **Largura ampla:** 1400px
- **Botões:** geometria reta, 1797, itálico e caixa alta quando usados como ação de marca

O projeto não redistribui arquivos binários da fonte 1797.

## Fontes de verdade

1. Marca: `docs/brand-book.md` + `apps/docs/src/brand/brandData.ts`;
2. ativos oficiais: `apps/docs/public/brand/`;
3. tokens: `packages/tokens/src/tokens.json`;
4. tema WordPress: `wp-onci/themes/onci/theme.json`;
5. comportamento real: `wp-onci/plugins/onci-core/blocks/src/`;
6. documentação visual: `apps/docs/src/SystemDocs.tsx`.

## Executar

```bash
npm install
npm run dev
```

Compilação e validação:

```bash
npm run check
npm run build
```

## Regra de evolução

Se uma decisão visual aparece repetidamente, avaliar se deve virar token, componente ou padrão.

Se algo existe uma única vez e não possui motivo de reutilização, não transformar automaticamente em sistema.

A referência organiza **como documentamos**. A ONCI determina **como a marca parece, fala, se move e funciona**.
