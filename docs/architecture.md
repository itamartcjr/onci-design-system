# Arquitetura do ONCI Design System

## Objetivo

Criar uma fonte de verdade visual independente de framework. O produto pode mudar de WordPress para React, React Native ou outra stack sem recriar a identidade visual.

## Camadas

### 1. Foundations

- color
- typography
- spacing
- layout/grid
- border
- radius
- elevation
- motion
- iconography
- accessibility

### 2. Semantic themes

Todos os componentes consomem papéis semânticos em vez de cores hardcoded.

- `base`
- `desempenho`
- `equipes`
- `raizes`

As três frentes podem mudar energia, canvas e acentos sem mudar a anatomia dos componentes.

### 3. Primitives

- Button
- Link
- Icon
- Input
- Select
- Checkbox
- Radio
- Badge
- Tag
- Divider
- Surface
- Container

### 4. Navigation

- Utility Bar
- Header
- Primary Navigation
- Mega Menu
- Mobile Drawer
- Breadcrumb
- Tabs
- Pagination

### 5. Commerce

O inventário inicial reaproveita os padrões já construídos no `wp-onci`:

- Product Card
- Product Image
- Product Price
- Product Rating
- Sale Badge
- Stock Indicator
- SKU
- Product Summary
- Add to Cart
- Product Gallery
- Product Filters / Drawer
- Carousel
- Size Selector
- Quantity
- Wishlist
- Cart Item
- Mini Cart

### 6. Patterns

Combinações de componentes para fluxos completos:

- PLP / listagem de produtos
- PDP / página de produto
- carrinho
- checkout
- busca
- conta
- favoritos
- navegação mobile
- landing de coleção
- páginas editoriais

## Regra de dependência

```text
Foundations
   ↓
Semantic Themes
   ↓
Primitives
   ↓
Components
   ↓
Patterns / Screens
```

Uma camada nunca deve precisar conhecer uma tela específica para funcionar.

## Integração futura

### React Native

`tokens.json` → objeto TypeScript → tema da aplicação.

### WordPress

`tokens.json` → script de build → `theme.json` e CSS variables. O objetivo é impedir divergência entre Gutenberg/editor e frontend.

### Figma

Os tokens podem ser exportados para formato consumível por Tokens Studio/Figma, mantendo nomenclatura alinhada ao código.
