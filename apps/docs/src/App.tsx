import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import BrandBook from './BrandBook';
import SystemDocs from './SystemDocs';
import { navigation, pageLabel, type PageKey, type SystemPageKey } from './system/navigation';

type ThemeName = 'base' | 'desempenho' | 'equipes' | 'raizes';

const themes: Record<ThemeName, { label: string; accent: string; accent2: string; bg: string; ink: string }> = {
  base: { label: 'Base', accent: '#D71920', accent2: '#000000', bg: '#FFFFFF', ink: '#000000' },
  desempenho: { label: 'Desempenho', accent: '#D71920', accent2: '#000000', bg: '#FFFFFF', ink: '#000000' },
  equipes: { label: 'Equipes', accent: '#D71920', accent2: '#1255A6', bg: '#FFFFFF', ink: '#000000' },
  raizes: { label: 'Raízes', accent: '#F2B705', accent2: '#E86A17', bg: '#111111', ink: '#FFFFFF' },
};

function Icon({ name, size = 18 }: { name: 'search' | 'menu'; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const, 'aria-hidden': true };
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
  return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
}

export default function App() {
  const [page, setPage] = useState<PageKey>('intro-overview');
  const [theme, setTheme] = useState<ThemeName>('base');
  const [query, setQuery] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
  const currentTheme = themes[theme];

  const filteredPages = useMemo(() => {
    if (!query.trim()) return navigation;
    const q = query.toLocaleLowerCase('pt-BR');
    return navigation
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => `${item.label} ${group.group}`.toLocaleLowerCase('pt-BR').includes(q)),
      }))
      .filter((group) => group.items.length);
  }, [query]);

  const openPage = (key: PageKey) => {
    setPage(key);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <div className="app" style={{
    '--theme-accent': currentTheme.accent,
    '--theme-accent-2': currentTheme.accent2,
    '--theme-bg': currentTheme.bg,
    '--theme-ink': currentTheme.ink,
  } as CSSProperties}>
    <header className="topbar">
      <button className="mobile-menu" onClick={() => setMobileNav((value) => !value)} aria-label="Abrir navegação"><Icon name="menu" /></button>
      <button className="brand-lockup" onClick={() => openPage('intro-overview')}>
        <span className="brand-word">ONCI</span>
        <span className="brand-meta">Brand + Design System <b>v0.2</b></span>
      </button>
      <div className="ds-current-page" aria-hidden="true"><span>Design System /</span><strong>{pageLabel(page)}</strong></div>
      <div className="theme-switcher" aria-label="Selecionar expressão ONCI">
        {(Object.keys(themes) as ThemeName[]).map((key) => <button key={key} className={theme === key ? 'active' : ''} onClick={() => setTheme(key)}>{themes[key].label}</button>)}
      </div>
    </header>

    <aside className={`sidebar ${mobileNav ? 'is-open' : ''}`}>
      <div className="search-box"><Icon name="search" size={16}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar na documentação" aria-label="Buscar na documentação"/><kbd>⌘ K</kbd></div>
      <nav>
        {filteredPages.map((group) => <div className="nav-group" key={group.group}>
          <div className="nav-group-title">{group.group}</div>
          {group.items.map((item) => <button key={item.key} className={page === item.key ? 'active' : ''} onClick={() => openPage(item.key)}>{item.label}</button>)}
        </div>)}
      </nav>
      <div className="sidebar-foot"><span className="status-dot"/>Estrutura compartilhável. Identidade 100% ONCI.</div>
    </aside>

    <main className="content">
      {page === 'brandBook' ? <BrandBook /> : <SystemDocs page={page as SystemPageKey} theme={theme} onNavigate={(key) => openPage(key)} />}
    </main>
    {mobileNav && <button className="scrim" aria-label="Fechar navegação" onClick={() => setMobileNav(false)}/>} 
  </div>;
}
