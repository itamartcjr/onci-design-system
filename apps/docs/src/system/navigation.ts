export type SystemPageKey =
  | 'intro-overview'
  | 'intro-principles'
  | 'intro-how-to-use'
  | 'foundation-colors'
  | 'foundation-typography'
  | 'foundation-spacing'
  | 'foundation-grid'
  | 'foundation-breakpoints'
  | 'foundation-radius-borders'
  | 'foundation-elevation'
  | 'foundation-icons'
  | 'foundation-motion'
  | 'tokens-primitive'
  | 'tokens-semantic'
  | 'tokens-component'
  | 'component-buttons'
  | 'component-forms'
  | 'component-navigation'
  | 'component-product'
  | 'component-gallery'
  | 'component-filters'
  | 'pattern-header'
  | 'pattern-plp'
  | 'pattern-pdp'
  | 'pattern-carousel'
  | 'examples-fronts';

export type NavigationGroup = {
  group: string;
  items: Array<{ key: SystemPageKey; label: string }>;
};

export const navigation: NavigationGroup[] = [
  {
    group: '00 — Introdução',
    items: [
      { key: 'intro-overview', label: 'Visão geral' },
      { key: 'intro-principles', label: 'Princípios' },
      { key: 'intro-how-to-use', label: 'Como usar' },
    ],
  },
  {
    group: '01 — Fundações',
    items: [
      { key: 'foundation-colors', label: 'Cores' },
      { key: 'foundation-typography', label: 'Tipografia' },
      { key: 'foundation-spacing', label: 'Espaçamento' },
      { key: 'foundation-grid', label: 'Grid' },
      { key: 'foundation-breakpoints', label: 'Breakpoints' },
      { key: 'foundation-radius-borders', label: 'Radius e bordas' },
      { key: 'foundation-elevation', label: 'Sombras e elevação' },
      { key: 'foundation-icons', label: 'Ícones' },
      { key: 'foundation-motion', label: 'Motion' },
    ],
  },
  {
    group: '02 — Tokens',
    items: [
      { key: 'tokens-primitive', label: 'Primitivos' },
      { key: 'tokens-semantic', label: 'Semânticos' },
      { key: 'tokens-component', label: 'Componentes' },
    ],
  },
  {
    group: '03 — Componentes',
    items: [
      { key: 'component-buttons', label: 'Botões' },
      { key: 'component-forms', label: 'Formulários' },
      { key: 'component-navigation', label: 'Navegação' },
      { key: 'component-product', label: 'Produto' },
      { key: 'component-gallery', label: 'Galeria' },
      { key: 'component-filters', label: 'Filtros' },
    ],
  },
  {
    group: '04 — Padrões',
    items: [
      { key: 'pattern-header', label: 'Header e mega menu' },
      { key: 'pattern-plp', label: 'Listagem de produtos' },
      { key: 'pattern-pdp', label: 'Página de produto' },
      { key: 'pattern-carousel', label: 'Carrossel e slides' },
    ],
  },
  {
    group: '05 — Exemplos',
    items: [
      { key: 'examples-fronts', label: 'Três frentes ONCI' },
    ],
  },
];

export const pageLabel = (key: SystemPageKey) =>
  navigation.flatMap((group) => group.items).find((item) => item.key === key)?.label ?? 'ONCI Design System';
