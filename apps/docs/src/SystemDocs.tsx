import type { ReactNode } from 'react';
import { onciTokens } from '@onci/tokens';
import type { SystemPageKey } from './system/navigation';
import './system-docs.css';

type ThemeName = 'base' | 'desempenho' | 'equipes' | 'raizes';
type TechRow = { token: string; value: string; usage: string; status?: 'definido' | 'operacional' | 'extraido' };
type Ref = { label: string; href: string; note: string };
type Spec = {
  eyebrow: string;
  title: string;
  description: string;
  purpose: string;
  kind: string;
  variants: string[];
  tech: TechRow[];
  refs: Ref[];
};

const repoRef = (path: string, note: string): Ref => ({ label: `wp-onci / ${path.split('/').pop()}`, href: `https://github.com/itamartcjr/wp-onci/blob/main/${path}`, note });
const dsRef: Ref = { label: 'Brand & Design System — arquitetura', href: 'https://github.com/itamartcjr/brand-and-design-system', note: 'Referência de metodologia, hierarquia de conteúdo e documentação visual. A estética não é copiada.' };
const figmaRef: Ref = { label: 'Figma — Brand e Design System', href: 'https://www.figma.com/design/99947Dmc328mSa2FmYj5fP/Brand-e-Design-System?node-id=0-1', note: 'Referência estrutural para navegação e organização das pranchas.' };
const wcagRef: Ref = { label: 'WCAG 2.2', href: 'https://www.w3.org/TR/WCAG22/', note: 'Contraste, foco, teclado, movimento e acessibilidade.' };
const themeRef = repoRef('themes/onci/theme.json', 'Fonte de verdade atual para paleta, tipografia, espaçamento e layout do tema WordPress.');
const buttonRef = repoRef('plugins/onci-core/blocks/src/native/button/style.scss', 'Comportamento de conteúdo e SVG dentro do botão.');
const navRef = repoRef('plugins/onci-core/blocks/src/mega-menu/style.scss', 'Navegação desktop/mobile, targets, transições e layout do mega menu.');
const filterRef = repoRef('plugins/onci-core/blocks/src/product-filters/style.scss', 'Drawer, overlay, campos, accordion e comportamento responsivo dos filtros.');
const galleryRef = repoRef('plugins/onci-core/blocks/src/product-gallery/style.scss', 'Grid, zoom, modal, controles e responsividade da galeria.');
const slidesRef = repoRef('plugins/onci-core/blocks/src/slides/style.scss', 'Carrossel, opacidade lateral, controles, formatos e motion dos slides.');
const productButtonRef = repoRef('plugins/onci-core/blocks/src/woocommerce/product-button/style.scss', 'Botão de produto, SVG currentColor e inclinação sem deformar conteúdo.');

const specs: Record<SystemPageKey, Spec> = {
  'intro-overview': {
    eyebrow: '00 — Introdução', title: 'Visão geral', description: 'Um sistema para transformar decisões recorrentes da ONCI em linguagem visual, tokens, componentes e padrões reutilizáveis.',
    purpose: 'Evitar que web, WordPress, aplicativo, campanha e experiências futuras redesenhem a mesma decisão. O sistema organiza o que já existe e só cria novas regras quando uma repetição real precisa ser normalizada.', kind: 'overview', variants: ['Marca', 'Fundações', 'Tokens', 'Componentes', 'Padrões', 'Exemplos'], tech: [
      { token: 'layout.content', value: onciTokens.layout.content, usage: 'Conteúdo funcional', status: 'definido' },
      { token: 'layout.wide', value: onciTokens.layout.wide, usage: 'Composições amplas', status: 'definido' },
      { token: 'color.action.primary', value: onciTokens.color.red, usage: 'Energia e ação principal', status: 'definido' },
      { token: 'motion.fast', value: '120ms', usage: 'Feedback imediato e menus', status: 'extraido' },
    ], refs: [dsRef, figmaRef, themeRef]
  },
  'intro-principles': {
    eyebrow: '00 — Introdução', title: 'Princípios', description: 'Regras para decidir quando ainda não existe um componente pronto.',
    purpose: 'Os princípios funcionam como filtro: uma nova tela deve parecer ONCI antes mesmo de existir um padrão específico para ela.', kind: 'principles', variants: ['Produto primeiro', 'Contraste direto', 'Geometria firme', 'Energia controlada', 'Sistema antes de exceção', 'Responsivo por comportamento'], tech: [
      { token: 'principle.productFirst', value: 'produto > ornamento', usage: 'E-commerce e comunicação' },
      { token: 'principle.geometry', value: 'raio mínimo / borda firme', usage: 'Controles e superfícies' },
      { token: 'principle.brandType', value: '1797 em momentos de energia', usage: 'Display, CTA e números' },
      { token: 'principle.interfaceType', value: 'Nunito Sans', usage: 'Leitura, dados e UI' },
    ], refs: [themeRef, dsRef]
  },
  'intro-how-to-use': {
    eyebrow: '00 — Introdução', title: 'Como usar', description: 'O fluxo de decisão que conecta marca, token, componente, padrão e tela final.',
    purpose: 'Uma decisão não deve terminar em um valor solto no CSS. Quando algo é recorrente, ele ganha nome, significado, implementação e documentação.', kind: 'workflow', variants: ['Decisão existente', 'Nova decisão recorrente', 'Exceção única'], tech: [
      { token: 'fluxo.1', value: 'observar', usage: 'Identificar repetição no produto' },
      { token: 'fluxo.2', value: 'tokenizar', usage: 'Dar nome e função ao valor' },
      { token: 'fluxo.3', value: 'compor', usage: 'Aplicar em componente/padrão' },
      { token: 'fluxo.4', value: 'documentar', usage: 'Mostrar uso, estados e responsividade' },
    ], refs: [dsRef, figmaRef]
  },
  'brand-overview': {
    eyebrow: '01 — Marca', title: 'Marca ONCI', description: 'Performance, pertencimento e raiz organizados em uma marca esportiva brasileira.',
    purpose: 'A marca define o ritmo do Design System. O sistema não deve neutralizar a ONCI: preto e branco estruturam, a cor entra com função e a tipografia 1797 injeta energia nos momentos certos.', kind: 'brand', variants: ['ONCI Desempenho', 'ONCI Equipes', 'ONCI Raízes'], tech: [
      { token: 'brand.interface', value: 'Nunito Sans', usage: 'Clareza e leitura', status: 'definido' },
      { token: 'brand.display', value: '1797', usage: 'Energia, CTA e headlines', status: 'definido' },
      { token: 'brand.base', value: '#000000 / #FFFFFF', usage: 'Estrutura dominante', status: 'definido' },
      { token: 'brand.energy', value: '#D71920', usage: 'Ação e Desempenho', status: 'definido' },
    ], refs: [themeRef]
  },
  'brand-logo': {
    eyebrow: '01 — Marca', title: 'Logo', description: 'Assinatura principal, símbolo, perfil e regras para preservar reconhecimento e contraste.',
    purpose: 'Evitar reconstruções, recolorações e aplicações que enfraqueçam a marca. Os arquivos SVG oficiais são a fonte de verdade; regras geométricas ainda não derivadas do desenho são explicitamente marcadas como operacionais.', kind: 'logo', variants: ['Logo principal', 'Símbolo', 'Perfil', 'Clear space', 'Tamanho mínimo', 'Uso incorreto'], tech: [
      { token: 'logo.primary', value: 'brand/logo.svg', usage: 'Assinatura prioritária', status: 'definido' },
      { token: 'logo.symbol', value: 'brand/symbol.svg', usage: 'Uso compacto', status: 'definido' },
      { token: 'logo.profile', value: 'brand/perfil.svg', usage: 'Avatar e favicon', status: 'definido' },
      { token: 'logo.clearspace', value: '0.25 × altura', usage: 'Regra operacional v0.2', status: 'operacional' },
      { token: 'logo.min.digital', value: '96 / 24 / 32px', usage: 'Logo / símbolo / perfil', status: 'operacional' },
    ], refs: [themeRef]
  },
  'brand-applications': {
    eyebrow: '01 — Marca', title: 'Aplicações', description: 'Como a mesma assinatura convive com Desempenho, Equipes e Raízes sem virar três logos diferentes.',
    purpose: 'A frente muda atmosfera, cor, fotografia e ritmo. O logo continua sendo a âncora estável. Isso permite variedade de campanha sem fragmentar reconhecimento.', kind: 'applications', variants: ['Fundo claro', 'Fundo de cor', 'Desempenho', 'Equipes', 'Raízes'], tech: [
      { token: 'application.logo', value: 'monocromático', usage: 'Não recolorir a assinatura atual' },
      { token: 'application.performance', value: 'black / white / red', usage: 'Alta energia e precisão' },
      { token: 'application.teams', value: 'red / blue / white', usage: 'Coletivo e institucional' },
      { token: 'application.roots', value: 'black / yellow / orange / earth', usage: 'Editorial e materialidade' },
    ], refs: [themeRef]
  },
  'foundation-colors': {
    eyebrow: '02 — Fundações', title: 'Cores', description: 'Paleta de marca, neutros e semântica de interface organizadas por intenção, não apenas por hexadecimal.',
    purpose: 'Separar identidade de função. Vermelho, azul e tons de Raízes mantêm significado de marca; canvas, texto, borda e feedback recebem nomes semânticos para que componentes não dependam de valores mágicos.', kind: 'colors', variants: ['Marca', 'Neutros', 'Semânticas', 'Temas ONCI'], tech: Object.entries(onciTokens.color).map(([token, value]) => ({ token: `color.${token}`, value, usage: 'Token existente no projeto', status: 'definido' as const })), refs: [themeRef, wcagRef]
  },
  'foundation-typography': {
    eyebrow: '02 — Fundações', title: 'Tipografia', description: 'Nunito Sans organiza informação; 1797 cria impulso e assinatura esportiva.',
    purpose: 'Manter leitura eficiente sem perder caráter. A fonte de marca não substitui a fonte de interface: elas têm papéis complementares.', kind: 'typography', variants: ['Display 1797', 'Heading Nunito', 'Body', 'Label', 'Escala fluida'], tech: [
      { token: 'font.family.primary', value: 'Nunito Sans', usage: 'Interface e leitura', status: 'definido' },
      { token: 'font.family.brand', value: '1797', usage: 'Display e ação', status: 'definido' },
      { token: 'heading.weight', value: '800', usage: 'Headings do tema', status: 'extraido' },
      { token: 'heading.lineHeight', value: '1.05', usage: 'Headings do tema', status: 'extraido' },
      { token: 'heading.letterSpacing', value: '-0.02em', usage: 'Headings do tema', status: 'extraido' },
      { token: 'button.font', value: '1797 / 900 / italic / uppercase', usage: 'Ação de alto impacto', status: 'extraido' },
    ], refs: [themeRef]
  },
  'foundation-spacing': {
    eyebrow: '02 — Fundações', title: 'Espaçamento', description: 'Escala modular para padding, gap e ritmo vertical.',
    purpose: 'Evitar números arbitrários e criar relações perceptíveis entre elementos. Os mesmos tokens devem aparecer em componentes e padrões.', kind: 'spacing', variants: Object.keys(onciTokens.spacing), tech: Object.entries(onciTokens.spacing).map(([token, value]) => ({ token: `spacing.${token}`, value, usage: 'Escala base ONCI', status: 'definido' as const })), refs: [themeRef]
  },
  'foundation-grid': {
    eyebrow: '02 — Fundações', title: 'Grid', description: 'Container, colunas, gutters e margens demonstrados como estrutura real em Desktop, Tablet e Mobile.',
    purpose: 'O tema já define 1200px de conteúdo e 1400px wide. A malha de 12/8/4 colunas é uma sistematização operacional para tornar a estrutura explícita e reutilizável; pode ser refinada conforme novas telas reais surgirem.', kind: 'grid', variants: ['Desktop — 12 colunas', 'Tablet — 8 colunas', 'Mobile — 4 colunas'], tech: [
      { token: 'grid.desktop.viewport', value: '1440px', usage: 'Prancha de referência', status: 'operacional' },
      { token: 'grid.desktop.columns', value: '12', usage: 'Malha operacional', status: 'operacional' },
      { token: 'grid.desktop.gutter', value: '24px', usage: 'spacing.lg', status: 'operacional' },
      { token: 'grid.tablet.viewport', value: '1024px', usage: 'Breakpoint real da galeria', status: 'extraido' },
      { token: 'grid.tablet.columns', value: '8', usage: 'Malha operacional', status: 'operacional' },
      { token: 'grid.mobile.viewport', value: '390px', usage: 'Prancha de referência', status: 'operacional' },
      { token: 'grid.mobile.columns', value: '4', usage: 'Malha operacional', status: 'operacional' },
      { token: 'layout.content', value: '1200px', usage: 'Container de conteúdo', status: 'definido' },
      { token: 'layout.wide', value: '1400px', usage: 'Container amplo', status: 'definido' },
    ], refs: [themeRef, galleryRef]
  },
  'foundation-breakpoints': {
    eyebrow: '02 — Fundações', title: 'Breakpoints', description: 'Pontos de mudança extraídos dos comportamentos reais, antes de serem forçados a uma escala abstrata.',
    purpose: 'Responsividade é mudança de comportamento, não redução proporcional. Hoje o código possui breakpoints especializados; o Design System documenta essa realidade e identifica onde uma futura consolidação é segura.', kind: 'breakpoints', variants: ['≤ 767px', '≤ 782px', '≤ 1024px', '≤ 1180px'], tech: [
      { token: 'breakpoint.mobile', value: '767px', usage: 'Galeria e slides mudam de composição', status: 'extraido' },
      { token: 'breakpoint.wpCompact', value: '782px', usage: 'Drawer de filtros ocupa a tela', status: 'extraido' },
      { token: 'breakpoint.tablet', value: '1024px', usage: 'Galeria troca quantidade de colunas', status: 'extraido' },
      { token: 'breakpoint.navCompact', value: '1180px', usage: 'Mega menu reduz margens/gaps', status: 'extraido' },
    ], refs: [galleryRef, filterRef, navRef, slidesRef]
  },
  'foundation-radius-borders': {
    eyebrow: '02 — Fundações', title: 'Radius e bordas', description: 'Geometria direta com superfícies majoritariamente retas e pills apenas quando a função pede.',
    purpose: 'A forma ajuda a ONCI a manter uma linguagem firme e esportiva. Radius não é decoração automática: botões, inputs, galeria e drawers atuais são quadrados.', kind: 'radius', variants: ['0 — estrutural', '2px — micro', '4px — discreto', '999px — indicador/pill'], tech: [
      { token: 'radius.none', value: onciTokens.radius.none, usage: 'Botões, inputs, cards de produto', status: 'definido' },
      { token: 'radius.sm', value: onciTokens.radius.sm, usage: 'Micro ajustes', status: 'definido' },
      { token: 'radius.md', value: onciTokens.radius.md, usage: 'Superfície discreta', status: 'definido' },
      { token: 'radius.pill', value: onciTokens.radius.pill, usage: 'Contadores e indicadores', status: 'definido' },
      { token: 'border.hairline', value: '1px', usage: 'Divisores e inputs' },
      { token: 'border.strong', value: '2px', usage: 'Seleção e foco estrutural' },
      { token: 'border.emphasis', value: '3px', usage: 'Ênfase visual' },
    ], refs: [themeRef, filterRef, galleryRef]
  },
  'foundation-elevation': {
    eyebrow: '02 — Fundações', title: 'Sombras e elevação', description: 'A ONCI usa profundidade com parcimônia: borda e contraste fazem a maior parte do trabalho.',
    purpose: 'Evitar uma interface excessivamente “cardificada”. Sombra aparece quando existe uma necessidade espacial real, como o drawer de filtros acima da página.', kind: 'elevation', variants: ['Flat', 'Drawer', 'Overlay', 'Modal backdrop'], tech: [
      { token: 'shadow.none', value: 'none', usage: 'Estado padrão da maioria das superfícies', status: 'extraido' },
      { token: 'shadow.drawer', value: '-8px 0 30px rgb(0 0 0 / .12)', usage: 'Drawer de filtros', status: 'extraido' },
      { token: 'overlay.filter', value: 'rgb(0 0 0 / .45)', usage: 'Backdrop do filtro', status: 'extraido' },
      { token: 'overlay.gallery', value: 'rgb(0 0 0 / .62)', usage: 'Backdrop da galeria', status: 'extraido' },
    ], refs: [filterRef, galleryRef]
  },
  'foundation-icons': {
    eyebrow: '02 — Fundações', title: 'Ícones', description: 'Ícones funcionais alinhados por currentColor, com alvos de toque maiores que o desenho visual.',
    purpose: 'Manter consistência entre Remix Icon, SVGs ONCI e controles. O SVG deve herdar a cor do componente, enquanto o target interativo permanece acessível.', kind: 'icons', variants: ['16px', '20px', '24px', '32px', 'Target 44/48px'], tech: [
      { token: 'icon.sm', value: '16px', usage: 'Metadados e ações compactas' },
      { token: 'icon.md', value: '20px', usage: 'Controles' },
      { token: 'icon.lg', value: '24px', usage: 'Navegação e setas', status: 'extraido' },
      { token: 'icon.xl', value: '32px', usage: 'Destaque' },
      { token: 'target.minimum', value: '44px', usage: 'Controles de galeria/filtro', status: 'extraido' },
      { token: 'icon.color', value: 'currentColor', usage: 'SVG acompanha texto', status: 'extraido' },
    ], refs: [buttonRef, navRef, galleryRef, wcagRef]
  },
  'foundation-motion': {
    eyebrow: '02 — Fundações', title: 'Motion', description: 'Movimento rápido, direto e funcional, com desaceleração suficiente para comunicar mudança sem atrasar a interação.',
    purpose: 'Motion na ONCI confirma estado, navegação e profundidade. Ele não é um efeito decorativo permanente. Componentes atuais já respeitam prefers-reduced-motion.', kind: 'motion', variants: ['120ms — instantâneo', '140–160ms — feedback', '220ms — drawer', '320ms — imagem', '400ms — narrativa'], tech: [
      { token: 'motion.instant', value: '120ms ease', usage: 'Painel do mega menu', status: 'extraido' },
      { token: 'motion.fast', value: '140ms ease', usage: 'Indicador do menu', status: 'extraido' },
      { token: 'motion.control', value: '160ms ease', usage: 'Accordion/plus', status: 'extraido' },
      { token: 'motion.drawer', value: '220ms ease', usage: 'Filtro e navegação mobile', status: 'extraido' },
      { token: 'motion.media', value: '320ms ease', usage: 'Zoom de imagem', status: 'extraido' },
      { token: 'motion.story', value: '400ms ease', usage: 'Slides/campanha', status: 'extraido' },
      { token: 'motion.navigationEase', value: 'cubic-bezier(.4,0,.2,1)', usage: 'Drawer do mega menu mobile', status: 'extraido' },
    ], refs: [navRef, filterRef, galleryRef, slidesRef, wcagRef]
  },
  'tokens-primitive': {
    eyebrow: '03 — Tokens', title: 'Tokens primitivos', description: 'Valores puros e reutilizáveis: cor, espaço, dimensão, duração e geometria.',
    purpose: 'Primitivos evitam duplicação, mas não dizem onde usar. Eles são a matéria-prima; componentes devem preferir tokens semânticos ou de componente.', kind: 'primitiveTokens', variants: ['Color', 'Space', 'Radius', 'Motion', 'Size'], tech: [
      { token: 'primitive.color.red.500', value: '#D71920', usage: 'Valor de marca' },
      { token: 'primitive.color.black', value: '#000000', usage: 'Valor neutro' },
      { token: 'primitive.space.16', value: '1rem', usage: 'Base espacial' },
      { token: 'primitive.radius.0', value: '0', usage: 'Geometria reta' },
      { token: 'primitive.motion.220', value: '220ms', usage: 'Duração bruta' },
      { token: 'primitive.size.touch44', value: '44px', usage: 'Alvo mínimo recorrente' },
    ], refs: [themeRef, dsRef]
  },
  'tokens-semantic': {
    eyebrow: '03 — Tokens', title: 'Tokens semânticos', description: 'Nomes baseados em intenção: background, texto, borda, ação, feedback e movimento.',
    purpose: 'O componente pede “ação primária”, não “vermelho”. Isso permite que cada frente ONCI e cada plataforma reaproveitem significado sem espalhar hexadecimais.', kind: 'semanticTokens', variants: ['Background', 'Text', 'Action', 'Feedback', 'Motion', 'Layout'], tech: [
      { token: 'color.background.canvas', value: '{color.base}', usage: 'Canvas principal' },
      { token: 'color.text.primary', value: '{color.contrast}', usage: 'Texto principal' },
      { token: 'color.text.muted', value: '{color.muted}', usage: 'Texto secundário' },
      { token: 'color.action.primary', value: '{color.red}', usage: 'Ação ONCI' },
      { token: 'color.action.primaryHover', value: '{color.redDark}', usage: 'Hover normalizado' },
      { token: 'color.border.default', value: '{color.border}', usage: 'Divisor/controle' },
      { token: 'motion.drawer', value: '220ms', usage: 'Entrada lateral' },
    ], refs: [themeRef, dsRef]
  },
  'tokens-component': {
    eyebrow: '03 — Tokens', title: 'Tokens de componente', description: 'Valores semânticos específicos quando um componente precisa de uma decisão estável própria.',
    purpose: 'Component tokens conectam a linguagem global ao detalhe de implementação sem transformar toda propriedade em token. Só entram aqui decisões recorrentes e justificáveis.', kind: 'componentTokens', variants: ['Button', 'Navigation', 'Filter Drawer', 'Product Gallery', 'Slides'], tech: [
      { token: 'button.height.default', value: '52px', usage: 'Ação principal de compra' },
      { token: 'button.radius', value: '{radius.none}', usage: 'Geometria ONCI' },
      { token: 'navigation.height', value: '64px', usage: 'Menu principal' },
      { token: 'filter.drawer.width', value: '480px', usage: 'Desktop' },
      { token: 'gallery.gap', value: '4px', usage: 'Grid de produto' },
      { token: 'slides.transition', value: '400ms ease', usage: 'Narrativa/campanha' },
    ], refs: [navRef, filterRef, galleryRef, slidesRef]
  },
  'component-buttons': {
    eyebrow: '04 — Componentes', title: 'Botões', description: 'Ações de alta clareza com geometria reta, tipografia de marca e suporte a SVG por currentColor.',
    purpose: 'Criar hierarquia inequívoca para ações sem perder energia ONCI. O mesmo contrato deve funcionar no Gutenberg, e-commerce e futuras interfaces React Native.', kind: 'buttons', variants: ['Primary', 'Secondary', 'Tertiary', 'Icon', 'Hover', 'Focus', 'Active', 'Loading', 'Disabled', 'Com SVG'], tech: [
      { token: 'button.font', value: '1797 / 900 / italic / uppercase', usage: 'Ação principal', status: 'extraido' },
      { token: 'button.padding.x', value: '24px', usage: '1.5rem no theme.json', status: 'extraido' },
      { token: 'button.padding.y', value: '12px', usage: '.75rem no theme.json', status: 'extraido' },
      { token: 'button.radius', value: '0', usage: 'Botão core', status: 'extraido' },
      { token: 'button.icon.gap', value: '.5em', usage: 'Texto + SVG', status: 'extraido' },
      { token: 'button.icon.color', value: 'currentColor', usage: 'SVG acompanha texto', status: 'extraido' },
    ], refs: [themeRef, buttonRef, productButtonRef, wcagRef]
  },
  'component-forms': {
    eyebrow: '04 — Componentes', title: 'Formulários', description: 'Campos retos, labels persistentes e feedback de foco/erro sem depender de placeholder.',
    purpose: 'Entrada de dados precisa ser previsível e acessível. A documentação parte dos campos já usados em filtros e normaliza foco, ajuda e validação para o restante do produto.', kind: 'forms', variants: ['Default', 'Hover', 'Focus', 'Filled', 'Error', 'Success', 'Disabled', 'Textarea'], tech: [
      { token: 'field.height', value: '44px', usage: 'Preço nos filtros', status: 'extraido' },
      { token: 'field.padding.x', value: '12px', usage: 'Input dos filtros', status: 'extraido' },
      { token: 'field.border', value: '1px solid #B7B7B7', usage: 'Estado padrão', status: 'extraido' },
      { token: 'field.radius', value: '0', usage: 'Geometria ONCI', status: 'extraido' },
      { token: 'focus.ring', value: '3px #D71920', usage: 'Padrão de documentação/acessibilidade', status: 'operacional' },
    ], refs: [filterRef, themeRef, wcagRef]
  },
  'component-navigation': {
    eyebrow: '04 — Componentes', title: 'Navegação', description: 'Triggers, links, níveis, estados e targets que sustentam o header e o mega menu.',
    purpose: 'Organizar descoberta de categorias sem esconder estrutura. Desktop privilegia varredura horizontal; mobile muda para navegação hierárquica em tela cheia.', kind: 'navigation', variants: ['Desktop trigger', 'Hover/focus', 'Panel', 'Mobile drawer', 'Subnível', 'Reduced motion'], tech: [
      { token: 'navigation.height', value: '64px', usage: 'Lista e triggers', status: 'extraido' },
      { token: 'navigation.item.minWidth', value: '104px', usage: 'Trigger desktop', status: 'extraido' },
      { token: 'navigation.item.paddingX', value: '20px', usage: 'Trigger desktop', status: 'extraido' },
      { token: 'navigation.indicator', value: '3px / 140ms', usage: 'Underline ativo', status: 'extraido' },
      { token: 'navigation.panel.motion', value: '120ms ease', usage: 'Panel desktop', status: 'extraido' },
      { token: 'navigation.mobile.motion', value: '220ms cubic-bezier(.4,0,.2,1)', usage: 'Drawer/screens', status: 'extraido' },
    ], refs: [navRef, wcagRef]
  },
  'component-product': {
    eyebrow: '04 — Componentes', title: 'Produto', description: 'Imagem, nome, preço, rating, sale badge, estoque, SKU, resumo e ação de compra como uma família coerente.',
    purpose: 'Esses elementos já existem como blocos independentes no onci-core. O Design System documenta a hierarquia visual que permite combiná-los em card, listagem e PDP sem perder consistência.', kind: 'product', variants: ['Card', 'Preço', 'Sale badge', 'Rating', 'Estoque', 'SKU', 'Add to cart'], tech: [
      { token: 'product.surface', value: '{color.surface}', usage: 'Área de mídia' },
      { token: 'product.gap.compact', value: '{spacing.xs}', usage: 'Metadados relacionados' },
      { token: 'product.gap.default', value: '{spacing.md}', usage: 'Blocos de informação' },
      { token: 'product.action.height', value: '52px', usage: 'Compra principal' },
      { token: 'product.icon.color', value: 'currentColor', usage: 'Ação com SVG', status: 'extraido' },
    ], refs: [productButtonRef, themeRef]
  },
  'component-gallery': {
    eyebrow: '04 — Componentes', title: 'Galeria de produto', description: 'Grid de mídia com zoom, modal full-screen, thumbnails e alternativa de slider no mobile.',
    purpose: 'Dar prioridade visual ao produto sem sacrificar navegação e detalhe. O comportamento muda de forma real no mobile em vez de apenas encolher o grid.', kind: 'gallery', variants: ['Desktop grid', 'Tablet grid', 'Mobile grid', 'Mobile slider', 'Hover zoom', 'Modal', 'Zoomed'], tech: [
      { token: 'gallery.columns.desktop', value: '2', usage: 'Padrão atual', status: 'extraido' },
      { token: 'gallery.columns.tablet', value: '2', usage: '≤1024px', status: 'extraido' },
      { token: 'gallery.columns.mobile', value: '1', usage: '≤767px', status: 'extraido' },
      { token: 'gallery.gap', value: '4px', usage: 'Entre mídias', status: 'extraido' },
      { token: 'gallery.hover.scale', value: '1.075', usage: 'Pointer fine', status: 'extraido' },
      { token: 'gallery.hover.duration', value: '320ms ease', usage: 'Zoom de mídia', status: 'extraido' },
      { token: 'gallery.control.target', value: '44 / 52px', usage: 'Toolbar / navegação', status: 'extraido' },
    ], refs: [galleryRef, wcagRef]
  },
  'component-filters': {
    eyebrow: '04 — Componentes', title: 'Filtros de produto', description: 'Drawer lateral com overlay, accordions, chips ativos, controles e ação final.',
    purpose: 'Manter a listagem limpa enquanto filtros complexos ficam disponíveis sob demanda. No mobile o drawer vira uma superfície de 100vw.', kind: 'filters', variants: ['Fechado', 'Aberto', 'Filtros ativos', 'Accordion', 'Desktop 480px', 'Mobile 100vw'], tech: [
      { token: 'filter.drawer.width', value: '480px', usage: 'Desktop', status: 'extraido' },
      { token: 'filter.overlay.opacity', value: '.45', usage: 'Separação espacial', status: 'extraido' },
      { token: 'filter.motion', value: '220ms ease', usage: 'Drawer/overlay', status: 'extraido' },
      { token: 'filter.header.height', value: '72px', usage: 'Desktop', status: 'extraido' },
      { token: 'filter.close.target', value: '44px', usage: 'Ação fechar', status: 'extraido' },
      { token: 'filter.apply.height', value: '52px', usage: 'CTA', status: 'extraido' },
      { token: 'filter.mobile.breakpoint', value: '782px', usage: 'Drawer 100vw', status: 'extraido' },
    ], refs: [filterRef, wcagRef]
  },
  'pattern-header': {
    eyebrow: '05 — Padrões', title: 'Header e mega menu', description: 'Composição recorrente de marca, navegação principal, categorias, utilidades e descoberta.',
    purpose: 'Um componente isolado não explica o header. O padrão documenta como marca, links, painel amplo, spotlight e navegação mobile se combinam.', kind: 'headerPattern', variants: ['Desktop', 'Desktop panel aberto', 'Compact', 'Mobile raiz', 'Mobile subnível'], tech: [
      { token: 'header.height', value: '64px', usage: 'Linha principal', status: 'extraido' },
      { token: 'header.panel.maxWidth', value: '1440px', usage: 'Conteúdo do mega menu', status: 'extraido' },
      { token: 'header.panel.columns', value: '4 + spotlight', usage: 'Padrão atual', status: 'extraido' },
      { token: 'header.mobile.target', value: '44–48px', usage: 'Abrir/voltar/fechar', status: 'extraido' },
    ], refs: [navRef]
  },
  'pattern-plp': {
    eyebrow: '05 — Padrões', title: 'Listagem de produtos', description: 'Título de coleção, controles, filtros em drawer e grid de produtos trabalhando como uma experiência única.',
    purpose: 'A PLP combina descoberta e comparação. O padrão evita que cada coleção invente uma hierarquia diferente para filtros, contagem, cards e paginação.', kind: 'plpPattern', variants: ['Desktop', 'Drawer aberto', 'Filtros ativos', 'Mobile'], tech: [
      { token: 'plp.container', value: '{layout.wide}', usage: 'Lista ampla' },
      { token: 'plp.filter', value: '{filter.drawer.*}', usage: 'Descoberta' },
      { token: 'plp.card.gap', value: '{spacing.sm}', usage: 'Ritmo interno' },
      { token: 'plp.mobile', value: '1–2 colunas conforme conteúdo', usage: 'Validar por template', status: 'operacional' },
    ], refs: [filterRef, themeRef]
  },
  'pattern-pdp': {
    eyebrow: '05 — Padrões', title: 'Página de produto', description: 'Galeria ampla + informação de produto + ação de compra, com adaptação real entre desktop e mobile.',
    purpose: 'A PDP precisa equilibrar exploração visual e decisão de compra. O padrão mostra quais componentes formam esse fluxo e em que ordem eles ganham prioridade.', kind: 'pdpPattern', variants: ['Desktop split', 'Galeria expandida', 'Mobile stack', 'Modal de mídia'], tech: [
      { token: 'pdp.media', value: '{gallery.*}', usage: 'Mídia de produto' },
      { token: 'pdp.info.maxWidth', value: 'aprox. 420–520px', usage: 'Faixa operacional, validar no template', status: 'operacional' },
      { token: 'pdp.action', value: '{button.*}', usage: 'Compra' },
      { token: 'pdp.mobile.order', value: 'mídia → dados → ação', usage: 'Hierarquia móvel', status: 'operacional' },
    ], refs: [galleryRef, productButtonRef]
  },
  'pattern-carousel': {
    eyebrow: '05 — Padrões', title: 'Carrossel e slides', description: 'Narrativa horizontal com altura soberana, formatos variáveis, clones para loop contínuo e slides laterais esmaecidos.',
    purpose: 'Campanhas e coleções precisam de movimento expressivo sem flash de loop ou quebra de proporção. O padrão atual já resolve normalização de clones e comportamento móvel.', kind: 'carouselPattern', variants: ['Full', 'Square', '4:3', 'Inactive fade', 'Loop', 'Dots', 'Arrows', 'Mobile'], tech: [
      { token: 'slides.height', value: '640px', usage: 'Default atual', status: 'extraido' },
      { token: 'slides.transition', value: '400ms ease', usage: 'Track e opacity', status: 'extraido' },
      { token: 'slides.inactive.opacity', value: '.45', usage: 'Slides laterais', status: 'extraido' },
      { token: 'slides.arrow.target', value: '44px', usage: 'Ação lateral', status: 'extraido' },
      { token: 'slides.dot', value: '10px / .35', usage: 'Indicador inativo', status: 'extraido' },
      { token: 'slides.mobile.height', value: '100vw', usage: 'Default mobile', status: 'extraido' },
    ], refs: [slidesRef]
  },
  'examples-fronts': {
    eyebrow: '06 — Exemplos', title: 'Três frentes ONCI', description: 'O mesmo sistema assumindo três atmosferas sem perder estrutura, tipografia, comportamento e reconhecimento.',
    purpose: 'Demonstrar que tema não é fork de componente. Desempenho, Equipes e Raízes compartilham anatomia e tokens semânticos; mudam acentos, conteúdo e direção artística.', kind: 'fronts', variants: ['Desempenho', 'Equipes', 'Raízes'], tech: [
      { token: 'theme.desempenho', value: '#000 / #FFF / #D71920', usage: 'Performance' },
      { token: 'theme.equipes', value: '#D71920 / #1255A6 / #FFF', usage: 'Coletivo' },
      { token: 'theme.raizes', value: '#000 / #F2B705 / #E86A17 / #8C3B20', usage: 'Editorial e território' },
      { token: 'theme.structure', value: 'compartilhada', usage: 'Não duplicar componentes' },
    ], refs: [themeRef]
  },
};

function PageHead({ spec }: { spec: Spec }) {
  return <div className="page-head system-page-head"><div className="eyebrow">{spec.eyebrow}</div><h1>{spec.title}</h1><p>{spec.description}</p><div className="doc-method"><strong>Primeiro mostrar.</strong><span>Depois explicar.</span><span>Depois especificar.</span></div></div>;
}

function Section({ number, title, note, children }: { number: string; title: string; note?: string; children: ReactNode }) {
  return <section className="doc-section ds-doc-section"><div className="section-heading"><h2><small>{number}</small>{title}</h2>{note && <p>{note}</p>}</div>{children}</section>;
}

function ProjectCallout() {
  return <aside className="project-definition"><span>REGRA DO SISTEMA</span><div><strong>O token manda no valor.</strong><p>Esta documentação define intenção e comportamento. Quando um valor puder mudar por frente, plataforma ou evolução da marca, a implementação deve ler o token correspondente em vez de repetir um número ou hexadecimal.</p></div></aside>;
}

function TechnicalTable({ rows }: { rows: TechRow[] }) {
  return <div className="ds-tech-table"><div className="ds-tech-head"><span>Token / propriedade</span><span>Valor</span><span>Uso</span><span>Status</span></div>{rows.map((row) => <div className="ds-tech-row" key={row.token}><code>{row.token}</code><strong>{row.value}</strong><span>{row.usage}</span><small data-status={row.status ?? 'definido'}>{row.status ?? 'definido'}</small></div>)}</div>;
}

function References({ refs }: { refs: Ref[] }) {
  return <div className="reference-grid ds-reference-grid">{refs.map((ref) => <a className="reference-card" href={ref.href} target="_blank" rel="noreferrer" key={ref.href}><div><small>Referência</small><strong>{ref.label}</strong><p>{ref.note}</p></div><span>↗</span></a>)}</div>;
}

function Variations({ items, kind }: { items: string[]; kind: string }) {
  return <div className="variation-board">{items.map((item, index) => <div className="variation-card" key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><div className={`variation-signal variation-${kind}`}/></div>)}</div>;
}

const asset = (file: string) => `${import.meta.env.BASE_URL}brand/${file}`;

function Demo({ kind, theme }: { kind: string; theme: ThemeName }) {
  if (kind === 'overview') return <div className="system-architecture"><div className="system-architecture-hero"><span>ONCI</span><strong>MARCA → CÓDIGO</strong><p>Uma decisão recorrente atravessa o sistema sem perder contexto.</p></div>{['Marca','Fundações','Tokens','Componentes','Padrões','Tela real'].map((item, i) => <div className="system-architecture-step" key={item}><small>{String(i).padStart(2,'0')}</small><b>{item}</b><span>→</span></div>)}</div>;
  if (kind === 'principles') return <div className="principle-board">{[['PRODUTO','primeiro'],['PRETO + BRANCO','estrutura'],['COR','com função'],['1797','energia'],['NUN ITO','clareza'],['MOBILE','comportamento']].map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>;
  if (kind === 'workflow') return <div className="workflow-demo">{['Observar padrão real','Nomear token','Aplicar componente','Compor padrão','Demonstrar e documentar'].map((item,i)=><div key={item}><span>{i+1}</span><strong>{item}</strong>{i<4&&<b>→</b>}</div>)}</div>;
  if (kind === 'brand') return <div className="brand-demo"><div className="brand-demo-logo"><img src={asset('logo.svg')} alt="Logo ONCI"/><p>Performance. Pertencimento. Raiz.</p></div><div className="brand-demo-front performance"><b>DESEMPENHO</b><span>precisão · velocidade</span></div><div className="brand-demo-front teams"><b>EQUIPES</b><span>coletivo · pertencimento</span></div><div className="brand-demo-front roots"><b>RAÍZES</b><span>território · matéria</span></div></div>;
  if (kind === 'logo') return <div className="logo-doc-demo"><article className="wide"><span>ASSINATURA PRINCIPAL</span><div><img src={asset('logo.svg')} alt="Logo principal ONCI"/></div></article><article><span>SÍMBOLO</span><div><img src={asset('symbol.svg')} alt="Símbolo ONCI"/></div></article><article className="dark"><span>PERFIL</span><div><img src={asset('perfil.svg')} alt="Perfil ONCI"/></div></article><article className="clearspace"><span>CLEAR SPACE · X</span><div><i>X</i><img src={asset('logo.svg')} alt="Clear space ONCI"/></div></article></div>;
  if (kind === 'applications') return <div className="application-demo"><div className="application-scene light"><img src={asset('logo.svg')} alt="Logo ONCI em fundo claro"/><small>Base</small></div><div className="application-scene performance"><img src={asset('logo.svg')} alt="Logo ONCI em Desempenho"/><small>Desempenho</small></div><div className="application-scene teams"><img src={asset('logo.svg')} alt="Logo ONCI em Equipes"/><small>Equipes</small></div><div className="application-scene roots"><img src={asset('perfil.svg')} alt="Perfil ONCI em Raízes"/><small>Raízes</small></div></div>;
  if (kind === 'colors') return <div className="color-demo"><div className="color-demo-main"><div style={{background:onciTokens.color.contrast}}><span>contrast</span></div><div style={{background:onciTokens.color.base}}><span>base</span></div><div style={{background:onciTokens.color.red}}><span>red</span></div></div><div className="color-demo-support">{['blue','yellow','orange','earth','surface','border','muted'].map((key)=><div key={key} style={{background:onciTokens.color[key as keyof typeof onciTokens.color]}}><span>{key}</span></div>)}</div></div>;
  if (kind === 'typography') return <div className="type-demo"><div className="type-demo-brand"><small>1797 · DISPLAY / CTA</small><strong>FORÇA<br/>EM MOVIMENTO.</strong></div><div className="type-demo-interface"><small>NUNITO SANS · INTERFACE</small><h2>Produto primeiro.</h2><p>Informação clara para preço, tamanho, estoque, navegação e conteúdo.</p><div><b>LABEL 12</b><span>Body 16 / 1.2</span></div></div></div>;
  if (kind === 'spacing') return <div className="spacing-demo">{Object.entries(onciTokens.spacing).map(([key,value])=><div key={key}><code>spacing.{key}</code><span>{value}</span><i style={{width:`calc(${value} * 2)`}}/></div>)}</div>;
  if (kind === 'grid') return <div className="grid-demo">{[['Desktop','1440','12'],['Tablet','1024','8'],['Mobile','390','4']].map(([label,width,cols])=><article key={label} className={`grid-viewport grid-${label.toLowerCase()}`}><header><strong>{label}</strong><span>{width}px · {cols} colunas</span></header><div className="grid-frame">{Array.from({length:Number(cols)}).map((_,i)=><i key={i}/>)}</div><footer><span>margin</span><span>gutter</span><span>container</span></footer></article>)}</div>;
  if (kind === 'breakpoints') return <div className="responsive-demo"><div className="responsive-device desktop"><div className="mini-nav"><b>ONCI</b><span>HOMEM</span><span>MULHER</span><span>CRIANÇAS</span><span>ESPORTES</span></div><div className="mini-products">{[1,2,3,4].map(i=><i key={i}/>)}</div></div><div className="responsive-device tablet"><div className="mini-nav"><b>ONCI</b><span>MENU</span></div><div className="mini-products">{[1,2].map(i=><i key={i}/>)}</div></div><div className="responsive-device mobile"><div className="mini-nav"><b>ONCI</b><span>☰</span></div><div className="mini-products"><i/></div></div></div>;
  if (kind === 'radius') return <div className="radius-demo">{[['none','0'],['sm','2px'],['md','4px'],['pill','999px']].map(([name,value])=><div key={name}><i style={{borderRadius:value}}/><code>radius.{name}</code><span>{value}</span></div>)}<div className="border-stack"><i/><i/><i/><span>1 / 2 / 3px</span></div></div>;
  if (kind === 'elevation') return <div className="elevation-demo"><div className="flat"><strong>FLAT</strong><span>bordas antes de sombras</span></div><div className="drawer"><strong>DRAWER</strong><span>-8px 0 30px / .12</span></div><div className="overlay"><div><strong>OVERLAY</strong><span>.45</span></div></div><div className="modal"><div><strong>MODAL</strong><span>.62</span></div></div></div>;
  if (kind === 'icons') return <div className="icons-demo"><div className="icon-sizes">{[16,20,24,32].map(size=><div key={size}><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16M13 5l7 7-7 7"/></svg><span>{size}px</span></div>)}</div><div className="icon-target"><button aria-label="Favoritar">♡</button><i/><span>ícone 24 · target 44</span></div><div className="icon-current"><button><span>COMPRAR</span><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h-2l-1 2v2h2l2 9h9l2-8H8"/></svg></button><span>SVG = currentColor</span></div></div>;
  if (kind === 'motion') return <div className="motion-demo">{[['120','MENU'],['160','CONTROL'],['220','DRAWER'],['320','MEDIA'],['400','SLIDE']].map(([duration,label])=><div key={duration} style={{'--demo-duration':`${duration}ms`} as React.CSSProperties}><span>{label}</span><i/><strong>{duration}ms</strong></div>)}</div>;
  if (kind.endsWith('Tokens')) return <TokenMap kind={kind}/>;
  if (kind === 'buttons') return <div className="button-demo"><div className="button-row"><button className="onci-demo-button primary">COMPRAR AGORA</button><button className="onci-demo-button secondary">VER DETALHES</button><button className="onci-demo-button tertiary">GUIA DE TAMANHOS</button><button className="onci-demo-button icon" aria-label="Favoritar">♡</button></div><div className="button-states"><button className="onci-demo-button primary hover">HOVER</button><button className="onci-demo-button primary focus">FOCUS</button><button className="onci-demo-button primary active">ACTIVE</button><button className="onci-demo-button primary loading"><i/>CARREGANDO</button><button className="onci-demo-button primary" disabled>DISABLED</button></div></div>;
  if (kind === 'forms') return <div className="forms-demo"><label><span>Tamanho</span><input placeholder="Selecione"/></label><label className="focus"><span>CEP</span><input value="74000-000" readOnly/></label><label className="error"><span>Cupom</span><input value="ONC123" readOnly/><small>Código não encontrado</small></label><label className="success"><span>E-mail</span><input value="time@onci.com.br" readOnly/><small>Disponível para receber novidades</small></label><label className="disabled"><span>País</span><input value="Brasil" disabled readOnly/></label></div>;
  if (kind === 'navigation') return <div className="navigation-demo"><div className="nav-desktop-demo"><b>ONCI</b><button className="active">NOVIDADES</button><button>HOMEM</button><button>MULHER</button><button>CRIANÇAS</button><button>ESPORTES</button><span>⌕ ♡ ◫</span></div><div className="nav-panel-demo"><div><strong>DESTAQUES</strong><a>Tênis</a><a>Corrida</a><a>Treino</a></div><div><strong>COLEÇÕES</strong><a>Desempenho</a><a>Equipes</a><a>Raízes</a></div><div className="spotlight"><i/><b>CHEGOU AGORA</b></div></div><div className="nav-mobile-demo"><b>ONCI</b><span>MENU EM TELA CHEIA → SUBNÍVEL</span><button>×</button></div></div>;
  if (kind === 'product') return <ProductCardDemo/>;
  if (kind === 'gallery') return <GalleryDemo/>;
  if (kind === 'filters') return <FilterDemo/>;
  if (kind === 'headerPattern') return <div className="pattern-screen"><div className="pattern-header"><b>ONCI</b><span>NOVIDADES · HOMEM · MULHER · CRIANÇAS · ESPORTES</span><span>BUSCA · ♡ · SACOLA</span></div><div className="pattern-mega"><div><strong>RUNNING</strong><span>Tênis de corrida</span><span>Roupas</span><span>Acessórios</span></div><div><strong>FUTEBOL</strong><span>Chuteiras</span><span>Uniformes</span><span>Times</span></div><div className="pattern-spot"><i/><b>ONCI DESEMPENHO</b></div></div></div>;
  if (kind === 'plpPattern') return <PLPDemo/>;
  if (kind === 'pdpPattern') return <PDPDemo/>;
  if (kind === 'carouselPattern') return <CarouselDemo/>;
  if (kind === 'fronts') return <FrontsDemo/>;
  return <div className="visual-placeholder">Visual em construção</div>;
}

function TokenMap({ kind }: { kind: string }) {
  const rows = kind === 'primitiveTokens'
    ? [['color.red.500','#D71920'],['space.16','16px'],['radius.0','0'],['motion.220','220ms'],['size.touch44','44px']]
    : kind === 'semanticTokens'
      ? [['background.canvas','→ base'],['text.primary','→ contrast'],['action.primary','→ red.500'],['border.default','→ border'],['motion.drawer','→ motion.220']]
      : [['button.radius','→ radius.0'],['navigation.height','64px'],['filter.drawer.width','480px'],['gallery.gap','4px'],['slides.transition','400ms']];
  return <div className="token-map-demo">{rows.map(([name,value],i)=><div key={name}><span>{String(i+1).padStart(2,'0')}</span><code>{name}</code><strong>{value}</strong><i/></div>)}</div>;
}

function ProductCardDemo() {
  return <div className="product-demo"><article className="product-card-demo"><div className="product-media-demo"><span>NOVO</span><button aria-label="Favoritar">♡</button><i/></div><div className="product-copy-demo"><small>ONCI DESEMPENHO</small><h3>Camiseta de treino ONCI</h3><p>Masculino · Treino</p><strong>R$ 149,90</strong><div className="rating-demo">★★★★★ <span>24</span></div><button className="onci-demo-button primary">ADICIONAR</button></div></article><div className="product-parts-demo"><span>Imagem</span><span>Badge</span><span>Nome</span><span>Preço</span><span>Rating</span><span>Estoque</span><span>CTA</span></div></div>;
}

function GalleryDemo() {
  return <div className="gallery-demo"><div className="gallery-grid-demo">{[1,2,3,4].map(i=><button key={i}><i/><span>0{i}</span></button>)}</div><div className="gallery-mobile-demo"><div><i/><span>1 / 4</span></div><small>Mobile: grid ou slider 100%</small></div></div>;
}

function FilterDemo() {
  return <div className="filter-demo"><div className="filter-page"><span>LISTAGEM DE PRODUTOS</span><div>{[1,2,3].map(i=><i key={i}/>)}</div></div><aside><header><strong>FILTROS</strong><button>×</button></header><div className="filter-chips"><span>PRETO ×</span><span>M ×</span></div>{['Categoria','Tamanho','Cor','Preço'].map((item,i)=><div className="filter-section" key={item}><strong>{item}</strong><span>{i===0?'−':'+'}</span></div>)}<footer><button>APLICAR FILTROS</button></footer></aside></div>;
}

function PLPDemo() {
  return <div className="plp-demo"><header><div><small>ONCI DESEMPENHO</small><h2>Treino</h2></div><button>FILTROS <b>2</b></button></header><div className="plp-active"><span>PRETO ×</span><span>CAMISETAS ×</span></div><div className="plp-grid">{[1,2,3,4].map(i=><article key={i}><i/><small>ONCI</small><strong>Produto {i < 10 ? `0${i}` : i}</strong><span>R$ 149,90</span></article>)}</div></div>;
}

function PDPDemo() {
  return <div className="pdp-demo"><div className="pdp-gallery">{[1,2,3,4].map(i=><i key={i}/>)}</div><aside><small>ONCI DESEMPENHO</small><h2>Camiseta de treino ONCI</h2><strong>R$ 149,90</strong><p>Escolha o tamanho</p><div className="size-grid"><button>P</button><button>M</button><button>G</button><button>GG</button></div><button className="onci-demo-button primary">ADICIONAR À SACOLA</button><div className="pdp-meta"><span>✓ Estoque disponível</span><span>↗ Guia de tamanhos</span></div></aside></div>;
}

function CarouselDemo() {
  return <div className="carousel-demo"><button>‹</button><div className="carousel-slide prev"><span>ONCI</span></div><div className="carousel-slide active"><small>ONCI DESEMPENHO</small><strong>ENTRE<br/>EM MOVIMENTO.</strong><span>400ms · opacity 1</span></div><div className="carousel-slide next"><span>ONCI</span></div><button>›</button><div className="carousel-dots"><i className="active"/><i/><i/></div></div>;
}

function FrontsDemo() {
  return <div className="fronts-demo"><article className="performance"><small>ONCI DESEMPENHO</small><strong>PRONTO<br/>PARA O RITMO.</strong><button>VER PRODUTOS</button></article><article className="teams"><small>ONCI EQUIPES</small><strong>O TIME<br/>ENTRA JUNTO.</strong><div><span>12</span><span>ONCI</span></div></article><article className="roots"><small>ONCI RAÍZES</small><strong>TERRITÓRIO<br/>EM MOVIMENTO.</strong><i/></article></div>;
}

export default function SystemDocs({ page, theme, onNavigate }: { page: SystemPageKey; theme: ThemeName; onNavigate: (key: SystemPageKey) => void }) {
  const spec = specs[page];
  return <>
    <PageHead spec={spec}/>
    <Section number="01" title="Para que serve"><div className="purpose-grid"><p>{spec.purpose}</p><ProjectCallout/></div></Section>
    <Section number="02" title="Exemplo real" note="A demonstração usa a linguagem ONCI e, quando existe implementação, parte do comportamento já presente no wp-onci."><div className="visual-stage onci-visual-stage"><Demo kind={spec.kind} theme={theme}/></div></Section>
    <Section number="03" title="Variações e estados" note="Variações só entram quando representam uma necessidade real, uma frente da marca ou um comportamento existente."><Variations items={spec.variants} kind={spec.kind}/></Section>
    <Section number="04" title="Informações técnicas" note="Valores extraídos do código são marcados como extraídos; decisões ainda em validação são operacionais."><TechnicalTable rows={spec.tech}/></Section>
    <Section number="05" title="Referências" note="Fontes usadas para entender ou validar esta página. Referências estruturais não definem a estética ONCI."><References refs={spec.refs}/></Section>
    {page === 'intro-overview' && <div className="next-system-area"><strong>COMO NAVEGAR</strong><p>Comece pela marca, desça para fundações e tokens, depois veja componentes e padrões em contexto.</p><div><button onClick={()=>onNavigate('brand-overview')}>MARCA →</button><button onClick={()=>onNavigate('foundation-grid')}>GRID →</button><button onClick={()=>onNavigate('component-buttons')}>BOTÕES →</button></div></div>}
  </>;
}
