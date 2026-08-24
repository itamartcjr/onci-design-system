import { useMemo, useState } from 'react';
import BrandSystem, { type BrandSelection } from './BrandSystem';
import DesignSystemView from './DesignSystemView';
import { brandGroups, brandModuleById, brandModules } from './brand/brandData';
import { navigation, pageLabel, type SystemPageKey } from './system/navigation';
import './app-shell-v03.css';

type Area = 'brand' | 'design-system';

function Icon({ name, size = 18 }: { name: 'search' | 'menu' | 'chevron'; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const, 'aria-hidden': true };
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
  if (name === 'chevron') return <svg {...common}><path d="m9 6 6 6-6 6"/></svg>;
  return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
}

export default function App() {
  const [area, setArea] = useState<Area>('brand');
  const [designPage, setDesignPage] = useState<SystemPageKey>('intro-overview');
  const [brandSelection, setBrandSelection] = useState<BrandSelection>(null);
  const [query, setQuery] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
  const [openBrandGroup, setOpenBrandGroup] = useState<string>('Foundation');
  const [openBrandModule, setOpenBrandModule] = useState<string | null>('core');

  const filteredDesign = useMemo(() => {
    if (!query.trim()) return navigation;
    const q = query.toLocaleLowerCase('pt-BR');
    return navigation.map((group) => ({
      ...group,
      items: group.items.filter((item) => `${item.label} ${group.group}`.toLocaleLowerCase('pt-BR').includes(q)),
    })).filter((group) => group.items.length);
  }, [query]);

  const filteredBrand = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('pt-BR');
    return brandGroups.map((group) => ({
      ...group,
      modules: brandModules.filter((module) => module.group === group.label).map((module) => ({
        ...module,
        visibleFields: q
          ? module.fields.map((field, fieldIndex) => ({ field, fieldIndex })).filter(({ field }) => `${module.title} ${field.name} ${group.label}`.toLocaleLowerCase('pt-BR').includes(q))
          : module.fields.map((field, fieldIndex) => ({ field, fieldIndex })),
      })).filter((module) => !q || module.visibleFields.length > 0),
    })).filter((group) => group.modules.length > 0);
  }, [query]);

  const currentBrandModule = brandSelection ? brandModuleById(brandSelection.moduleId) : null;
  const currentBrandField = currentBrandModule && brandSelection ? currentBrandModule.fields[brandSelection.fieldIndex] : null;
  const currentTitle = area === 'brand' ? (currentBrandField?.name ?? 'Overview') : pageLabel(designPage);

  const switchArea = (next: Area) => {
    setArea(next);
    setQuery('');
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDesign = (key: SystemPageKey) => {
    setDesignPage(key);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBrand = (selection: BrandSelection) => {
    setBrandSelection(selection);
    if (selection) {
      const module = brandModuleById(selection.moduleId);
      if (module) setOpenBrandGroup(module.group);
      setOpenBrandModule(selection.moduleId);
    }
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <div className="app app-v03">
    <header className="topbar">
      <button className="mobile-menu" onClick={() => setMobileNav((value) => !value)} aria-label="Abrir navegação"><Icon name="menu"/></button>
      <button className="brand-lockup" onClick={() => area === 'brand' ? openBrand(null) : openDesign('intro-overview')}>
        <span className="brand-word">ONCI</span>
        <span className="brand-meta">{area === 'brand' ? 'Brand' : 'Design System'} <b>v0.3</b></span>
      </button>
      <div className="ds-current-page"><span>{area === 'brand' ? 'Brand /' : 'Design System /'}</span><strong>{currentTitle}</strong></div>
      <div className="area-switch">
        <button type="button" onClick={() => switchArea(area === 'brand' ? 'design-system' : 'brand')}>
          {area === 'brand' ? 'Design System' : 'Brand'} <span>↗</span>
        </button>
      </div>
    </header>

    <aside className={`sidebar ${mobileNav ? 'is-open' : ''}`}>
      <div className="search-box"><Icon name="search" size={16}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={area === 'brand' ? 'Buscar na marca' : 'Buscar no Design System'} aria-label="Buscar na documentação"/><kbd>⌘ K</kbd></div>

      {area === 'brand' ? <nav className="brand-side-nav">
        <div className="brand-nav-home"><button className={!brandSelection ? 'active' : ''} onClick={() => openBrand(null)}><span>00</span><strong>Overview</strong></button></div>
        {filteredBrand.map((group) => {
          const groupOpen = Boolean(query.trim()) || openBrandGroup === group.label;
          return <div className={`brand-nav-group ${groupOpen ? 'open' : ''}`} key={group.label}>
            <button className="brand-nav-group-toggle" onClick={() => setOpenBrandGroup(groupOpen && !query.trim() ? '' : group.label)} aria-expanded={groupOpen}>
              <span>{group.label}</span><Icon name="chevron" size={14}/>
            </button>
            {groupOpen && <div className="brand-nav-group-items">
              {group.modules.map((module) => {
                const moduleOpen = Boolean(query.trim()) || openBrandModule === module.id || brandSelection?.moduleId === module.id;
                return <div className={`brand-nav-module ${moduleOpen ? 'open' : ''}`} key={module.id}>
                  <button className={`brand-nav-module-toggle ${brandSelection?.moduleId === module.id ? 'active' : ''}`} onClick={() => setOpenBrandModule(moduleOpen && !query.trim() ? null : module.id)} aria-expanded={moduleOpen}>
                    <span>{module.number}</span><strong>{module.title}</strong><Icon name="chevron" size={13}/>
                  </button>
                  {moduleOpen && <div className="brand-nav-fields">{module.visibleFields.map(({ field, fieldIndex }) => <button key={`${module.id}-${fieldIndex}`} className={brandSelection?.moduleId === module.id && brandSelection.fieldIndex === fieldIndex ? 'active' : ''} onClick={() => openBrand({ moduleId: module.id, fieldIndex })}><span>{module.number}.{String(fieldIndex + 1).padStart(2,'0')}</span><strong>{field.name}</strong></button>)}</div>}
                </div>;
              })}
            </div>}
          </div>;
        })}
      </nav> : <nav>
        {filteredDesign.map((group) => <div className="nav-group" key={group.group}>
          <div className="nav-group-title">{group.group}</div>
          {group.items.map((item) => <button key={item.key} className={designPage === item.key ? 'active' : ''} onClick={() => openDesign(item.key)}>{item.label}</button>)}
        </div>)}
      </nav>}

      <div className="sidebar-foot"><span className="status-dot"/>{area === 'brand' ? 'Brand ONCI · decisões e governança' : 'Design System ONCI · interface e código'}</div>
    </aside>

    <main className="content">
      {area === 'brand'
        ? <BrandSystem selection={brandSelection} onSelect={openBrand}/>
        : <DesignSystemView page={designPage} onNavigate={openDesign}/>} 
    </main>
    {mobileNav && <button className="scrim" aria-label="Fechar navegação" onClick={() => setMobileNav(false)}/>} 
  </div>;
}
