import { useMemo, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { onciTokens } from '@onci/tokens';

type ThemeName = 'base' | 'desempenho' | 'equipes' | 'raizes';
type PageKey =
  | 'overview'
  | 'principles'
  | 'colors'
  | 'typography'
  | 'layout'
  | 'motion'
  | 'iconography'
  | 'theming'
  | 'buttons'
  | 'forms'
  | 'navigation'
  | 'commerce'
  | 'feedback'
  | 'accessibility'
  | 'tokens'
  | 'research';

const pages: Array<{ group: string; items: Array<{ key: PageKey; label: string }> }> = [
  {
    group: 'Introdução',
    items: [
      { key: 'overview', label: 'Visão geral' },
      { key: 'principles', label: 'Princípios' },
    ],
  },
  {
    group: 'Fundações',
    items: [
      { key: 'colors', label: 'Cores' },
      { key: 'typography', label: 'Tipografia' },
      { key: 'layout', label: 'Grid e espaçamento' },
      { key: 'motion', label: 'Motion' },
      { key: 'iconography', label: 'Iconografia' },
      { key: 'theming', label: 'Temas ONCI' },
    ],
  },
  {
    group: 'Componentes',
    items: [
      { key: 'buttons', label: 'Botões e links' },
      { key: 'forms', label: 'Formulários' },
      { key: 'navigation', label: 'Navegação' },
      { key: 'commerce', label: 'E-commerce' },
      { key: 'feedback', label: 'Feedback e estados' },
    ],
  },
  {
    group: 'Sistema',
    items: [
      { key: 'accessibility', label: 'Acessibilidade' },
      { key: 'tokens', label: 'Tokens' },
      { key: 'research', label: 'Benchmark Adidas' },
    ],
  },
];

const themes: Record<ThemeName, { label: string; accent: string; accent2: string; bg: string; ink: string }> = {
  base: { label: 'Base', accent: '#D71920', accent2: '#000000', bg: '#FFFFFF', ink: '#000000' },
  desempenho: { label: 'Desempenho', accent: '#D71920', accent2: '#000000', bg: '#FFFFFF', ink: '#000000' },
  equipes: { label: 'Equipes', accent: '#D71920', accent2: '#1255A6', bg: '#FFFFFF', ink: '#000000' },
  raizes: { label: 'Raízes', accent: '#F2B705', accent2: '#E86A17', bg: '#111111', ink: '#FFFFFF' },
};

function Icon({ name, size = 18 }: { name: 'search' | 'menu' | 'copy' | 'arrow' | 'check' | 'close'; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const, 'aria-hidden': true };
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
  if (name === 'menu') return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
  if (name === 'copy') return <svg {...common}><rect x="8" y="8" width="11" height="11"/><path d="M5 16H4V4h12v1"/></svg>;
  if (name === 'arrow') return <svg {...common}><path d="M5 12h13M14 7l5 5-5 5"/></svg>;
  if (name === 'check') return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
  return <svg {...common}><path d="M5 5l14 14M19 5 5 19"/></svg>;
}

function App() {
  const [page, setPage] = useState<PageKey>('overview');
  const [theme, setTheme] = useState<ThemeName>('base');
  const [query, setQuery] = useState('');
  const [mobileNav, setMobileNav] = useState(false);

  const currentTheme = themes[theme];
  const filteredPages = useMemo(() => {
    if (!query.trim()) return pages;
    const q = query.toLocaleLowerCase('pt-BR');
    return pages
      .map((group) => ({ ...group, items: group.items.filter((item) => item.label.toLocaleLowerCase('pt-BR').includes(q)) }))
      .filter((group) => group.items.length);
  }, [query]);

  const openPage = (key: PageKey) => {
    setPage(key);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="app"
      style={{
        '--theme-accent': currentTheme.accent,
        '--theme-accent-2': currentTheme.accent2,
        '--theme-bg': currentTheme.bg,
        '--theme-ink': currentTheme.ink,
      } as CSSProperties}
    >
      <header className="topbar">
        <button className="mobile-menu" onClick={() => setMobileNav((v) => !v)} aria-label="Abrir navegação"><Icon name="menu" /></button>
        <button className="brand-lockup" onClick={() => openPage('overview')}>
          <span className="brand-word">ONCI</span>
          <span className="brand-meta">Design System <b>v0.1</b></span>
        </button>
        <div className="theme-switcher" aria-label="Selecionar tema">
          {(Object.keys(themes) as ThemeName[]).map((key) => (
            <button key={key} className={theme === key ? 'active' : ''} onClick={() => setTheme(key)}>{themes[key].label}</button>
          ))}
        </div>
      </header>

      <aside className={`sidebar ${mobileNav ? 'is-open' : ''}`}>
        <div className="search-box">
          <Icon name="search" size={16} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar na documentação" aria-label="Buscar na documentação" />
          <kbd>⌘ K</kbd>
        </div>
        <nav>
          {filteredPages.map((group) => (
            <div className="nav-group" key={group.group}>
              <div className="nav-group-title">{group.group}</div>
              {group.items.map((item) => (
                <button key={item.key} className={page === item.key ? 'active' : ''} onClick={() => openPage(item.key)}>{item.label}</button>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-foot">
          <span className="status-dot" />
          Base sincronizada com wp-onci
        </div>
      </aside>

      <main className="content">
        {page === 'overview' && <Overview onNavigate={openPage} />}
        {page === 'principles' && <Principles />}
        {page === 'colors' && <Colors />}
        {page === 'typography' && <Typography />}
        {page === 'layout' && <Layout />}
        {page === 'motion' && <Motion />}
        {page === 'iconography' && <Iconography />}
        {page === 'theming' && <Theming theme={theme} setTheme={setTheme} />}
        {page === 'buttons' && <Buttons />}
        {page === 'forms' && <Forms />}
        {page === 'navigation' && <Navigation />}
        {page === 'commerce' && <Commerce />}
        {page === 'feedback' && <Feedback />}
        {page === 'accessibility' && <Accessibility />}
        {page === 'tokens' && <Tokens />}
        {page === 'research' && <Research />}
      </main>
      {mobileNav && <button className="scrim" aria-label="Fechar navegação" onClick={() => setMobileNav(false)} />}
    </div>
  );
}

function PageHead({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-head"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>;
}

function Section({ title, children, note }: { title: string; children: ReactNode; note?: string }) {
  return <section className="doc-section"><div className="section-heading"><h2>{title}</h2>{note && <p>{note}</p>}</div>{children}</section>;
}

function Overview({ onNavigate }: { onNavigate: (key: PageKey) => void }) {
  return <>
    <PageHead eyebrow="ONCI / Sistema visual" title="Uma linguagem para todos os pontos de contato." description="O Design System ONCI reúne identidade, tokens, padrões e componentes para que loja, aplicativos, WordPress, campanhas e experiências futuras pareçam parte da mesma marca." />
    <div className="hero-system">
      <div className="hero-words"><span>RÁPIDO.</span><span>CLARO.</span><span>ONCI.</span></div>
      <div className="hero-grid">
        <div><small>Base</small><strong>Preto + branco</strong></div>
        <div><small>Energia</small><strong>Vermelho ONCI</strong></div>
        <div><small>Marca</small><strong>1797</strong></div>
        <div><small>Interface</small><strong>Nunito Sans</strong></div>
      </div>
    </div>
    <Section title="Arquitetura do sistema" note="A organização segue uma lógica de fundações → temas → componentes → padrões de produto.">
      <div className="architecture-grid">
        {[
          ['01', 'Fundações', 'Cores, tipografia, espaçamento, grid, motion e ícones.', 'colors'],
          ['02', 'Temas', 'A mesma estrutura assume a personalidade de Desempenho, Equipes e Raízes.', 'theming'],
          ['03', 'Componentes', 'Primitivos reutilizáveis com estados e acessibilidade definidos.', 'buttons'],
          ['04', 'E-commerce', 'Cards, filtros, galeria, navegação, carrinho e padrões de compra.', 'commerce'],
        ].map(([n, title, text, key]) => <button className="architecture-item" key={n} onClick={() => onNavigate(key as PageKey)}><span>{n}</span><h3>{title}</h3><p>{text}</p><Icon name="arrow" /></button>)}
      </div>
    </Section>
    <Section title="Três frentes, uma marca">
      <div className="brand-lines">
        <div className="line performance"><div className="line-name">ONCI <b>DESEMPENHO</b></div><p>Velocidade, precisão, competição e produto em primeiro plano.</p></div>
        <div className="line teams"><div className="line-name">ONCI <b>EQUIPES</b></div><p>Energia coletiva, pertencimento, clubes, escolas e projetos esportivos.</p></div>
        <div className="line roots"><div className="line-name">ONCI <b>RAÍZES</b></div><p>Origem brasileira, materialidade, território e códigos visuais inspirados na onça e no artesanato.</p></div>
      </div>
    </Section>
  </>;
}

function Principles() {
  const principles = [
    ['Produto primeiro', 'A interface existe para destacar produto, atleta, time e história — nunca para competir com eles.'],
    ['Contraste sem medo', 'Preto e branco formam a estrutura. As cores ONCI entram com intenção e função.'],
    ['Geometria direta', 'Poucos raios, bordas firmes, grids claros e áreas amplas. Esportivo sem virar “template fitness”.'],
    ['Energia controlada', '1797, itálico, escala e movimento criam velocidade. O restante da UI continua legível e funcional.'],
    ['Sistema antes de página', 'Qualquer decisão visual deve poder virar token, variante ou padrão reutilizável.'],
    ['Coerência multicanal', 'Web, React Native, WordPress, campanha e retail físico devem compartilhar vocabulário visual.'],
  ];
  return <><PageHead eyebrow="Introdução" title="Princípios" description="Regras para tomar decisões quando ainda não existir um componente pronto."/><div className="principles-list">{principles.map(([title, text], i) => <div className="principle" key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h2>{title}</h2><p>{text}</p></div></div>)}</div></>;
}

function Colors() {
  const colors = [
    ['Preto ONCI', 'contrast', '#000000', 'Texto, fundos de alto contraste, navegação e estrutura.'],
    ['Branco', 'base', '#FFFFFF', 'Canvas principal, áreas de respiro e texto sobre escuro.'],
    ['Vermelho ONCI', 'onci-red', '#D71920', 'Energia principal, CTA, foco de campanha e Desempenho.'],
    ['Azul ONCI', 'onci-blue', '#1255A6', 'Equipes, esporte coletivo e contraste secundário.'],
    ['Amarelo ONCI', 'onci-yellow', '#F2B705', 'Raízes, destaques e materialidade solar.'],
    ['Laranja ONCI', 'onci-orange', '#E86A17', 'Raízes e transições quentes.'],
    ['Terra ONCI', 'onci-earth', '#8C3B20', 'Raízes, superfícies e apoio editorial.'],
    ['Superfície', 'surface', '#F5F5F5', 'Cards neutros, fundos de produto e separação de conteúdo.'],
    ['Borda', 'border', '#E5E7EB', 'Hairlines, divisores e inputs.'],
    ['Texto secundário', 'muted', '#6B7280', 'Metadados e informação de menor hierarquia.'],
  ];
  return <><PageHead eyebrow="Fundações" title="Cores" description="A identidade usa o contraste preto/branco como base e reserva as cores ONCI para significado, energia e diferenciação das frentes."/><div className="color-list">{colors.map(([name, token, hex, usage]) => <div className="color-row" key={token}><div className="color-swatch" style={{background: hex}}/><div><strong>{name}</strong><code>color.{token}</code></div><code>{hex}</code><p>{usage}</p></div>)}</div><Section title="Regra de uso"><div className="rule-callout"><strong>80 / 20</strong><p>Em interfaces funcionais, aproximadamente 80% da estrutura deve permanecer neutra. Cor de marca entra nos 20% que precisam de energia, estado, foco ou diferenciação.</p></div></Section></>;
}

function Typography() {
  const sizes = [
    ['Display', 'clamp(3.5rem, 8vw, 8rem)', '1797 / 900 italic'],
    ['H1', 'clamp(2.5rem, 5vw, 4.5rem)', 'Nunito Sans / 800'],
    ['H2', '2.25rem', 'Nunito Sans / 800'],
    ['H3', '1.5rem', 'Nunito Sans / 800'],
    ['Body L', '1.125rem', 'Nunito Sans / 400'],
    ['Body', '1rem', 'Nunito Sans / 400'],
    ['Small', '0.875rem', 'Nunito Sans / 600'],
    ['Label', '0.75rem', 'Nunito Sans / 800 uppercase'],
  ];
  return <><PageHead eyebrow="Fundações" title="Tipografia" description="Nunito Sans carrega clareza e leitura. 1797 entra como voz de marca em momentos de alta energia, especialmente CTAs, números, títulos de campanha e wordmarks."/>
    <div className="font-showcase"><div className="font-card primary"><span>Interface</span><h2>Nunito Sans</h2><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz 0123456789</p></div><div className="font-card brand"><span>Marca</span><h2>1797</h2><p>VELOCIDADE<br/>SEM DESCULPAS.</p><small>O repositório de documentação referencia a família, mas não redistribui os arquivos de fonte.</small></div></div>
    <Section title="Escala tipográfica"><div className="type-table">{sizes.map(([name,size,style]) => <div key={name}><strong>{name}</strong><code>{size}</code><span>{style}</span><div className={`sample sample-${name.toLowerCase().replace(' ','-')}`}>ONCI em movimento</div></div>)}</div></Section>
  </>;
}

function Layout() {
  const spacing = Object.entries(onciTokens.spacing);
  return <><PageHead eyebrow="Fundações" title="Grid e espaçamento" description="A estrutura parte do que já existe no tema ONCI: conteúdo de 1200px, largura ampla de 1400px e escala modular baseada em rem."/>
    <div className="layout-demo"><div className="layout-wide">1400px / wide<div className="layout-content">1200px / content<div className="layout-reading">760px / reading</div></div></div></div>
    <Section title="Escala de espaçamento"><div className="spacing-list">{spacing.map(([name,value]) => <div key={name}><code>{name}</code><span>{value}</span><div style={{width:value}} /></div>)}</div></Section>
    <Section title="Breakpoints recomendados"><div className="breakpoints"><div><b>sm</b><span>480px</span></div><div><b>md</b><span>768px</span></div><div><b>lg</b><span>960px</span></div><div><b>xl</b><span>1200px</span></div><div><b>2xl</b><span>1440px</span></div></div></Section>
  </>;
}

function Motion() {
  return <><PageHead eyebrow="Fundações" title="Motion" description="Movimento comunica velocidade e relação espacial. Deve ser curto, físico e previsível — sem animação decorativa gratuita."/><div className="motion-grid"><div className="motion-card"><span>120ms</span><div className="motion-dot fast"/><h3>Fast</h3><p>Hover, foco, cor, ícone.</p></div><div className="motion-card"><span>180ms</span><div className="motion-dot base"/><h3>Base</h3><p>Botões, tabs, pequenos estados.</p></div><div className="motion-card"><span>320ms</span><div className="motion-dot slow"/><h3>Slow</h3><p>Drawer, modal e troca de painel.</p></div></div><Section title="Princípios"><div className="two-col-text"><p><strong>Entradas:</strong> elementos devem parecer chegar de uma direção que faça sentido espacialmente.</p><p><strong>Saídas:</strong> ligeiramente mais rápidas do que entradas para não segurar a interação.</p><p><strong>Carrosséis:</strong> manter continuidade visual, inclusive ao atravessar último/primeiro slide.</p><p><strong>Redução:</strong> respeitar <code>prefers-reduced-motion</code> em toda transição não essencial.</p></div></Section></>;
}

function Iconography() {
  return <><PageHead eyebrow="Fundações" title="Iconografia" description="A família de referência será Remix Icon, alinhada ao que já vinha sendo usado no ecossistema ONCI. O sistema também aceita SVGs próprios via componente de ícone."/><div className="icon-demo">{(['search','menu','copy','arrow','check','close'] as const).map((name)=><div key={name}><Icon name={name} size={28}/><code>{name}</code></div>)}</div><Section title="Regras"><div className="two-col-text"><p>Ícones herdam <code>currentColor</code>, inclusive dentro de botões e links.</p><p>Tamanhos base: 16, 20, 24 e 32px. Evitar dimensões intermediárias sem motivo.</p><p>Não misturar famílias outline e filled no mesmo contexto funcional.</p><p>SVGs de marca ficam separados de ícones funcionais e nunca são tratados como simples glyphs.</p></div></Section></>;
}

function Theming({theme,setTheme}:{theme:ThemeName;setTheme:(theme:ThemeName)=>void}) {
  return <><PageHead eyebrow="Fundações" title="Temas ONCI" description="Um único conjunto de componentes muda de atmosfera por tokens semânticos. A estrutura permanece reconhecível; o conteúdo e a frente determinam a intensidade cromática."/><div className="theme-board">{(Object.keys(themes) as ThemeName[]).filter(k=>k!=='base').map((key)=><button key={key} className={`theme-board-item ${theme===key?'active':''}`} onClick={()=>setTheme(key)} style={{'--swatch-a':themes[key].accent,'--swatch-b':themes[key].accent2,'--swatch-bg':themes[key].bg,'--swatch-ink':themes[key].ink} as CSSProperties}><span className="theme-stripe"/><h2>ONCI <b>{themes[key].label.toUpperCase()}</b></h2><div className="theme-colors"><i/><i/></div></button>)}</div><Section title="Tokens semânticos"><div className="token-map"><div><code>theme.accent</code><span>CTA, seleção e energia</span></div><div><code>theme.accentSecondary</code><span>Contraste editorial</span></div><div><code>theme.canvas</code><span>Canvas da experiência</span></div><div><code>theme.ink</code><span>Conteúdo sobre canvas</span></div></div></Section></>;
}

function Buttons() {
  return <><PageHead eyebrow="Componentes" title="Botões e links" description="A linguagem ONCI usa botões retos, tipografia de marca e estados claros. O ícone sempre acompanha a cor do texto via currentColor."/>
    <ComponentStage title="Button / principais"><div className="button-row"><button className="btn primary">COMPRAR AGORA <Icon name="arrow"/></button><button className="btn dark">ADICIONAR AO CARRINHO <Icon name="arrow"/></button><button className="btn outline">VER DETALHES</button><button className="btn ghost">SAIBA MAIS <Icon name="arrow"/></button></div></ComponentStage>
    <ComponentStage title="Estados"><div className="button-row"><button className="btn dark">NORMAL</button><button className="btn dark hover-demo">HOVER</button><button className="btn dark focus-demo">FOCUS</button><button className="btn dark" disabled>DISABLED</button></div></ComponentStage>
    <Section title="Anatomia"><div className="anatomy"><span>altura mínima 48px</span><span>padding x 24px</span><span>1797 / italic / uppercase</span><span>raio 0</span><span>ícone 20–24px</span></div></Section>
  </>;
}

function ComponentStage({title,children}:{title:string;children:ReactNode}) { return <div className="component-stage"><div className="component-stage-head"><code>{title}</code><button><Icon name="copy" size={16}/> Copiar</button></div><div className="component-stage-body">{children}</div></div> }

function Forms() {
  return <><PageHead eyebrow="Componentes" title="Formulários" description="Campos densos o suficiente para e-commerce, com labels persistentes, borda nítida e foco de alto contraste."/><ComponentStage title="Inputs"><div className="form-grid"><label><span>E-mail</span><input placeholder="voce@exemplo.com"/></label><label><span>Buscar</span><div className="input-icon"><Icon name="search"/><input placeholder="Tênis, camisa, time..."/></div></label><label><span>Tamanho</span><select defaultValue=""><option value="" disabled>Selecione</option><option>P</option><option>M</option><option>G</option><option>GG</option></select></label><label className="field-error"><span>CPF</span><input defaultValue="123"/><small>Informe um CPF válido.</small></label></div></ComponentStage><Section title="Seleção"><div className="choice-row"><label><input type="checkbox" defaultChecked/> Receber novidades</label><label><input type="radio" name="shipping" defaultChecked/> Entrega padrão</label><label><input type="radio" name="shipping"/> Retirar</label></div></Section></>;
}

function Navigation() {
  return <><PageHead eyebrow="Componentes" title="Navegação" description="A navegação nasce da estrutura que já existe no wp-onci e herda referências de varejo esportivo: utilitário discreto, navegação principal forte e mega menus orientados a categorias."/><ComponentStage title="Header / desktop"><div className="header-demo"><div className="utility-demo"><span>Atendimento</span><span>Acompanhar pedido</span><span>Trocas e devoluções</span><span>Onde encontrar</span><div>Entrar &nbsp; Busca &nbsp; Favoritos</div></div><div className="mainnav-demo"><strong>ONCI</strong><nav><span>Lançamentos</span><span>Masculino</span><span>Feminino</span><span>Infantil</span><span>Esportes</span><span>Times</span><span>Coleções</span><span>Ofertas</span></nav><button>Carrinho</button></div></div></ComponentStage><Section title="Padrões obrigatórios"><div className="two-col-text"><p>Mega menus devem agrupar por intenção: categoria, esporte, coleção e descoberta.</p><p>No mobile, navegação vira drawer e mantém o logo/identidade no topo.</p><p>Busca, conta, favoritos e carrinho são ações persistentes do e-commerce.</p><p>Estados de menu devem ser navegáveis por teclado e usar foco visível.</p></div></Section></>;
}

function Commerce() {
  return <><PageHead eyebrow="Componentes" title="E-commerce" description="Biblioteca inicial baseada nos blocos que já existem no wp-onci e nos padrões recorrentes da Adidas: product-led, informação direta e interação sem ornamentação excessiva."/>
    <div className="commerce-grid">
      <ProductCard name="Camiseta ONCI Desempenho" category="Performance" price="R$ 199,90" accent="#D71920"/>
      <ProductCard name="Camisa ONCI Equipes" category="Teams" price="R$ 249,90" accent="#1255A6"/>
      <ProductCard name="Camiseta ONCI Raízes" category="Raízes" price="R$ 229,90" accent="#F2B705"/>
    </div>
    <Section title="Inventário inicial"><div className="inventory-grid">{['Product Card','Product Image','Product Price','Rating','Sale Badge','Stock Indicator','SKU','Product Summary','Add to Cart','Product Gallery','Product Filters / Drawer','Carousel','Tabs','Size Selector','Quantity','Wishlist','Cart Item','Mini Cart'].map((x)=><span key={x}>{x}</span>)}</div></Section>
    <Section title="Filtro lateral"><div className="filter-demo"><div className="fake-page"><div/><div/><div/></div><div className="filter-panel"><div className="filter-title"><b>FILTROS</b><Icon name="close"/></div><label>Categoria <span>+</span></label><label>Tamanho <span>+</span></label><label>Cor <span>+</span></label><label>Preço <span>+</span></label><button className="btn dark">APLICAR FILTROS</button></div></div></Section>
  </>;
}

function ProductCard({name,category,price,accent}:{name:string;category:string;price:string;accent:string}) {
  return <article className="product-card"><div className="product-image" style={{'--product-accent':accent} as CSSProperties}><button aria-label="Favoritar">♡</button><div className="shirt-shape"><i/><i/></div><span>NOVO</span></div><div className="product-info"><small>{category}</small><h3>{name}</h3><p>3 cores</p><strong>{price}</strong></div></article>
}

function Feedback() {
  return <><PageHead eyebrow="Componentes" title="Feedback e estados" description="Estados devem ser rápidos de reconhecer e sempre combinar cor, texto e forma — nunca depender apenas da cor."/><div className="feedback-stack"><div className="alert success"><Icon name="check"/><div><strong>Produto adicionado</strong><p>O item foi incluído no carrinho.</p></div></div><div className="alert warning"><span>!</span><div><strong>Últimas unidades</strong><p>Este tamanho pode esgotar em breve.</p></div></div><div className="alert error"><Icon name="close"/><div><strong>Não foi possível concluir</strong><p>Revise os dados e tente novamente.</p></div></div></div><Section title="Loading"><div className="skeletons"><div/><div/><div/></div></Section></>;
}

function Accessibility() {
  const checks = ['Contraste WCAG AA como mínimo para texto e controles.','Foco visível em todo elemento interativo.','Alvos de toque com pelo menos 44×44px; botões principais com 48px ou mais.','Não remover label de formulário em favor de placeholder.','Motion reduzido para usuários com prefers-reduced-motion.','Ordem DOM acompanha a ordem visual e de leitura.','Componentes de e-commerce anunciam mudanças de carrinho e erros para tecnologia assistiva.','SVG funcional recebe nome acessível; SVG decorativo fica aria-hidden.'];
  return <><PageHead eyebrow="Sistema" title="Acessibilidade" description="Acessibilidade faz parte da definição do componente, não é uma camada aplicada depois."/><div className="checklist">{checks.map(x=><div key={x}><Icon name="check"/><p>{x}</p></div>)}</div></>;
}

function Tokens() {
  const [copied,setCopied] = useState(false);
  const tokenText = JSON.stringify(onciTokens,null,2);
  const copy = async()=>{ try { await navigator.clipboard.writeText(tokenText); setCopied(true); setTimeout(()=>setCopied(false),1200); } catch { setCopied(false); } };
  return <><PageHead eyebrow="Sistema" title="Tokens" description="Tokens são a fonte de verdade. A mesma definição deverá gerar CSS para web, objetos TypeScript e, na próxima etapa, saída compatível com React Native e theme.json."/><div className="code-panel"><div><span>packages/tokens/src/tokens.json</span><button onClick={copy}>{copied?<Icon name="check" size={16}/>:<Icon name="copy" size={16}/>} {copied?'Copiado':'Copiar JSON'}</button></div><pre>{tokenText}</pre></div></>;
}

function Research() {
  return <><PageHead eyebrow="Pesquisa" title="Benchmark Adidas" description="Referência estrutural para o sistema ONCI. A meta é absorver decisões de arquitetura, ritmo e consistência — preservando identidade, tipografia, cores e linguagem próprias da ONCI."/>
    <div className="research-list">
      <ResearchItem n="01" title="Design System publicado" text="A Adidas mantém documentação pública com Overview, Core Components, Theming, Iconography, Grid e Utils. Isso reforça a separação entre fundações, componentes e utilitários."/>
      <ResearchItem n="02" title="YARN como precedente técnico" text="O YARN organiza Basics, Components, Mixins e Variables, usa unidades relativas, BEM e uma biblioteca centralizada para consistência entre aplicações."/>
      <ResearchItem n="03" title="Produto e narrativa" text="O ecossistema digital atual trabalha com layouts product-led, momentos de narrativa fortes e componentes flexíveis que mudam de tom por sub-marca/campanha."/>
      <ResearchItem n="04" title="Monocromia estrutural" text="No e-commerce, preto, branco e cinzas dominam a UI. Cores e fotografia entram sobretudo pelo conteúdo e produto. A ONCI seguirá a mesma disciplina, usando vermelho/azul/amarelo de forma semântica."/>
      <ResearchItem n="05" title="Responsividade" text="A documentação histórica do YARN trabalha a partir de 16px e separa comportamentos desktop/mobile, escondendo ou transformando navegação lateral/tabbar em telas menores."/>
      <ResearchItem n="06" title="E-commerce recorrente" text="Navegação ampla, listagem com filtros, cards informativos, favoritos, badges, preço, variações e CTAs claros formam o esqueleto funcional que também já aparece nos blocos ONCI."/>
    </div>
    <Section title="O que não vamos copiar"><div className="do-not-copy"><span>Logos e Três Listras</span><span>Tipografia adidas</span><span>Nomes de componentes proprietários</span><span>Fotografia/campanhas</span><span>Paleta de marca</span><span>Assets proprietários</span></div></Section>
  </>;
}

function ResearchItem({n,title,text}:{n:string;title:string;text:string}) { return <div className="research-item"><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div></div> }

export default App;
