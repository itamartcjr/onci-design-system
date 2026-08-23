from pathlib import Path

APP = Path('apps/docs/src/App.tsx')
BRAND = Path('apps/docs/src/BrandBook.tsx')
LOGO = Path('apps/docs/src/LogoGuide.tsx')
CSS = Path('apps/docs/src/brand-assets.css')

app = APP.read_text()

old_pages_type = "const pages: Array<{ group: string; items: Array<{ key: PageKey; label: string }> }> = ["
new_pages_type = "const pages: Array<{ group: string; items: Array<{ key: PageKey; label: string; anchor?: string }> }> = ["
if old_pages_type not in app:
    raise SystemExit('pages type pattern not found')
app = app.replace(old_pages_type, new_pages_type, 1)

old_brand_group = """  {
    group: 'Marca',
    items: [
      { key: 'brandBook', label: 'Brand Book' },
    ],
  },"""
new_brand_group = """  {
    group: 'Marca',
    items: [
      { key: 'brandBook', label: 'Brand Book' },
      { key: 'brandBook', label: 'A marca', anchor: 'a-marca' },
      { key: 'brandBook', label: 'Propósito e missão', anchor: 'por-que-a-onci-existe' },
      { key: 'brandBook', label: 'Frentes ONCI', anchor: 'tres-forcas-uma-marca' },
      { key: 'brandBook', label: 'Posicionamento', anchor: 'posicionamento' },
      { key: 'brandBook', label: 'Público', anchor: 'publico' },
      { key: 'brandBook', label: 'Personalidade', anchor: 'personalidade' },
      { key: 'brandBook', label: 'Voz e tom', anchor: 'voz-e-tom' },
      { key: 'brandBook', label: 'Sistema visual', anchor: 'sistema-visual' },
      { key: 'brandBook', label: 'Logo e assinatura', anchor: 'logo-e-assinatura' },
      { key: 'brandBook', label: 'Fotografia', anchor: 'fotografia-e-direcao-de-arte' },
      { key: 'brandBook', label: 'Cultura e referências', anchor: 'cultura-e-referencias' },
      { key: 'brandBook', label: 'Produto e experiência', anchor: 'produto-e-experiencia' },
      { key: 'brandBook', label: 'Esporte de base', anchor: 'esporte-de-base-e-comunidade' },
      { key: 'brandBook', label: 'Regras de expressão', anchor: 'regras-de-expressao' },
      { key: 'brandBook', label: 'Governança', anchor: 'governanca' },
    ],
  },"""
if old_brand_group not in app:
    raise SystemExit('brand group pattern not found')
app = app.replace(old_brand_group, new_brand_group, 1)

old_state = """  const [query, setQuery] = useState('');
  const [mobileNav, setMobileNav] = useState(false);"""
new_state = """  const [query, setQuery] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
  const [brandAnchor, setBrandAnchor] = useState<string | null>(null);"""
if old_state not in app:
    raise SystemExit('state pattern not found')
app = app.replace(old_state, new_state, 1)

old_open = """  const openPage = (key: PageKey) => {
    setPage(key);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };"""
new_open = """  const openPage = (key: PageKey, anchor?: string) => {
    setPage(key);
    setMobileNav(false);
    setBrandAnchor(key === 'brandBook' ? anchor ?? null : null);

    if (key === 'brandBook' && anchor) {
      window.setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };"""
if old_open not in app:
    raise SystemExit('openPage pattern not found')
app = app.replace(old_open, new_open, 1)

old_buttons = """              {group.items.map((item) => (
                <button key={item.key} className={page === item.key ? 'active' : ''} onClick={() => openPage(item.key)}>{item.label}</button>
              ))}"""
new_buttons = """              {group.items.map((item) => (
                <button
                  key={`${item.key}-${item.anchor ?? 'root'}-${item.label}`}
                  className={page === item.key && (item.key !== 'brandBook' || brandAnchor === (item.anchor ?? null)) ? 'active' : ''}
                  onClick={() => openPage(item.key, item.anchor)}
                >{item.label}</button>
              ))}"""
if old_buttons not in app:
    raise SystemExit('nav buttons pattern not found')
app = app.replace(old_buttons, new_buttons, 1)
APP.write_text(app)

brand = BRAND.read_text()
old_section = """function Section({ title, children, note }: { title: string; children: ReactNode; note?: string }) {
  return <section className=\"doc-section\"><div className=\"section-heading\"><h2>{title}</h2>{note && <p>{note}</p>}</div>{children}</section>;
}"""
new_section = """function sectionId(title: string) {
  return title
    .replace(/^\\d+\\.\\s*/, '')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function Section({ title, children, note }: { title: string; children: ReactNode; note?: string }) {
  return <section id={sectionId(title)} className=\"doc-section brand-book-section\"><div className=\"section-heading\"><h2>{title}</h2>{note && <p>{note}</p>}</div>{children}</section>;
}"""
if old_section not in brand:
    raise SystemExit('BrandBook Section pattern not found')
brand = brand.replace(old_section, new_section, 1)
BRAND.write_text(brand)

logo = LOGO.read_text()
old_logo_section = '<section className="doc-section logo-guide">'
new_logo_section = '<section id="logo-e-assinatura" className="doc-section logo-guide brand-book-section">'
if old_logo_section not in logo:
    raise SystemExit('LogoGuide section pattern not found')
logo = logo.replace(old_logo_section, new_logo_section, 1)
LOGO.write_text(logo)

css = CSS.read_text()
append = """

/* Brand Book sidebar anchor navigation */
.brand-book-section{scroll-margin-top:82px}
.sidebar .nav-group:first-of-type button{font-size:12px}
.sidebar .nav-group:first-of-type button.active{font-weight:800}
"""
if '/* Brand Book sidebar anchor navigation */' not in css:
    CSS.write_text(css + append)

print('Brand navigation updated')
