from pathlib import Path
import json

root = Path('.')

# 1. Documentation app owns font loading because the TTF files live in apps/docs/public.
fonts_css = """@font-face {
  font-family: '1797';
  src: url('/1797_POSTER.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: '1797';
  src: url('/1797_MEDIUM.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: '1797';
  src: url('/1797_ITALIC.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
"""
(root / 'apps/docs/src/fonts.css').write_text(fonts_css, encoding='utf-8')

# 2. Keep token package portable: tokens name the family, app provides the actual assets.
tokens_css_path = root / 'packages/tokens/src/tokens.css'
tokens_css = tokens_css_path.read_text(encoding='utf-8')
root_marker = ':root {'
if root_marker in tokens_css:
    tokens_css = root_marker + tokens_css.split(root_marker, 1)[1]
tokens_css = tokens_css.replace("--onci-font-1797: 'ONCI 1797', 'Arial Black', sans-serif;", "--onci-font-1797: '1797', 'Arial Black', sans-serif;")
tokens_css_path.write_text(tokens_css, encoding='utf-8')

# 3. Load font faces after tokens so the docs always use repository assets.
styles_path = root / 'apps/docs/src/styles.css'
styles = styles_path.read_text(encoding='utf-8')
if "@import './fonts.css';" not in styles:
    styles = styles.replace("@import '@onci/tokens/tokens.css';", "@import '@onci/tokens/tokens.css';\n@import './fonts.css';")
styles = styles.replace(".brand-word { font-family: var(--onci-font-brand); font-style: italic; font-weight: 900;", ".brand-word { font-family: var(--onci-font-brand); font-style: italic; font-weight: 500;")
styles = styles.replace('font:italic 900 ', 'font:italic 500 ')
styles = styles.replace('font-weight: 900!important;', 'font-weight: 500!important;')
styles_path.write_text(styles, encoding='utf-8')

# 4. Remove synthetic heavy italic usages from current design-system examples.
system_css_path = root / 'apps/docs/src/system-docs.css'
system_css = system_css_path.read_text(encoding='utf-8')
system_css = system_css.replace('font:italic 900 ', 'font:italic 500 ')
system_css = system_css.replace('font-style:italic;font-weight:900', 'font-style:italic;font-weight:500')
system_css += """

/* 1797 family specimen */
.type-demo--1797{display:grid;grid-template-columns:1fr;min-height:0;background:#fff;border:1px solid #ddd}
.type-demo--1797 .type-demo-family-head{display:grid;grid-template-columns:minmax(180px,.45fr) minmax(0,1fr);gap:32px;padding:34px;background:#000;color:#fff;align-items:end}
.type-demo--1797 .type-demo-family-head small{font:10px var(--onci-font-mono);letter-spacing:.1em;color:#aaa}.type-demo--1797 .type-demo-family-head strong{font:400 clamp(66px,9vw,138px)/.72 var(--onci-font-brand);letter-spacing:-.04em}.type-demo--1797 .type-demo-family-head p{margin:0;color:#aaa;font-size:15px;line-height:1.5;max-width:640px}
.type-demo-1797-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid #ddd}.type-demo-1797-card{min-height:390px;padding:28px;border-right:1px solid #ddd;display:flex;flex-direction:column;overflow:hidden}.type-demo-1797-card:last-child{border-right:0}.type-demo-1797-card small{font:10px var(--onci-font-mono);color:#d71920;letter-spacing:.1em}.type-demo-1797-card strong{margin:auto 0 22px;font-family:var(--onci-font-brand);font-size:clamp(40px,4.5vw,72px);line-height:.82;overflow-wrap:anywhere}.type-demo-1797-card.medium strong{font-weight:500;font-style:normal}.type-demo-1797-card.italic strong{font-weight:500;font-style:italic}.type-demo-1797-card.poster strong{font-weight:400;font-style:normal;font-size:clamp(48px,5.5vw,88px)}.type-demo-1797-card footer{display:grid;gap:5px;padding-top:18px;border-top:1px solid #ddd;font:10px var(--onci-font-mono);color:#666}.type-demo-glyphs{padding:24px 28px;border-top:1px solid #ddd;background:#f5f5f5}.type-demo-glyphs small{display:block;margin-bottom:12px;font:10px var(--onci-font-mono);color:#777;letter-spacing:.08em}.type-demo-glyphs strong{font:500 clamp(24px,3.2vw,48px)/1.1 var(--onci-font-brand);letter-spacing:.02em;overflow-wrap:anywhere}.type-demo--1797 .type-demo-interface{border-top:1px solid #ddd;min-height:290px}
@media(max-width:900px){.type-demo--1797 .type-demo-family-head{grid-template-columns:1fr}.type-demo-1797-grid{grid-template-columns:1fr}.type-demo-1797-card{min-height:260px;border-right:0;border-bottom:1px solid #ddd}}
"""
system_css_path.write_text(system_css, encoding='utf-8')

# 5. Brand typography board: add a visible Portuguese glyph specimen.
brand_path = root / 'apps/docs/src/BrandSystem.tsx'
brand = brand_path.read_text(encoding='utf-8')
old = "<article className=\"poster\"><small>POSTER</small><strong>PRÓXIMO NÍVEL</strong><p>Títulos grandes, números e campanhas.</p></article></div><div className=\"brand-type-interface\">"
new = "<article className=\"poster\"><small>POSTER</small><strong>PRÓXIMO NÍVEL</strong><p>Títulos grandes, números e campanhas.</p></article></div><div className=\"brand-type-glyphs\"><small>PORTUGUÊS COMPLETO</small><strong>Çç Ãã Õõ Áá Éé Íí Óó Úú Ââ Êê Ôô Àà Üü</strong></div><div className=\"brand-type-interface\">"
if old not in brand:
    raise SystemExit('BrandSystem typography marker not found')
brand = brand.replace(old, new)
brand_path.write_text(brand, encoding='utf-8')

brand_css_path = root / 'apps/docs/src/brand-system.css'
brand_css = brand_css_path.read_text(encoding='utf-8')
brand_css += """
.brand-type-glyphs{grid-column:1/-1;padding:24px 38px;border-top:1px solid #ddd;background:#fff;display:grid;grid-template-columns:180px minmax(0,1fr);gap:24px;align-items:center}.brand-type-glyphs small{font:10px var(--onci-font-mono);color:#777;letter-spacing:.1em}.brand-type-glyphs strong{font:500 clamp(24px,3vw,46px)/1.05 var(--onci-font-brand);overflow-wrap:anywhere}@media(max-width:900px){.brand-type-glyphs{grid-template-columns:1fr;padding:24px 26px}}
"""
brand_css_path.write_text(brand_css, encoding='utf-8')

# 6. System typography page: render all three real variants and asset names.
system_path = root / 'apps/docs/src/SystemDocs.tsx'
system = system_path.read_text(encoding='utf-8')
old_demo = "if (kind === 'typography') return <div className=\"type-demo\"><div className=\"type-demo-brand\"><small>1797 · FAMÍLIA</small><strong>1797</strong><div className=\"type-demo-1797-variants\"><span><b>MEDIUM</b> Força e clareza</span><span><b>ITALIC</b> Em movimento</span><span><b>POSTER</b> Próximo nível</span></div></div><div className=\"type-demo-interface\"><small>NUNITO SANS · INTERFACE</small><h2>Produto primeiro.</h2><p>Informação clara para preço, tamanho, estoque, navegação e conteúdo.</p><div><b>RÓTULO 12</b><span>Corpo 16 / 1.2</span></div></div></div>;"
new_demo = "if (kind === 'typography') return <div className=\"type-demo type-demo--1797\"><div className=\"type-demo-family-head\"><div><small>FAMÍLIA DE MARCA</small><strong>1797</strong></div><p>Uma única família com três variações oficiais. O navegador carrega os arquivos do próprio repositório e escolhe a variação pelo peso e estilo.</p></div><div className=\"type-demo-1797-grid\"><article className=\"type-demo-1797-card medium\"><small>MEDIUM</small><strong>FORÇA, PRECISÃO E AÇÃO.</strong><footer><span>500 · normal</span><code>1797_MEDIUM.ttf</code></footer></article><article className=\"type-demo-1797-card italic\"><small>ITALIC</small><strong>RELAÇÕES EM MOVIMENTO.</strong><footer><span>500 · italic</span><code>1797_ITALIC.ttf</code></footer></article><article className=\"type-demo-1797-card poster\"><small>POSTER</small><strong>RAÍZES DO PRÓXIMO NÍVEL.</strong><footer><span>400 · normal</span><code>1797_POSTER.ttf</code></footer></article></div><div className=\"type-demo-glyphs\"><small>CARACTERES EM PORTUGUÊS</small><strong>Çç Ãã Õõ Áá Éé Íí Óó Úú Ââ Êê Ôô Àà Üü</strong></div><div className=\"type-demo-interface\"><small>NUNITO SANS · INTERFACE</small><h2>Produto primeiro.</h2><p>Informação clara para preço, tamanho, estoque, navegação e conteúdo.</p><div><b>RÓTULO 12</b><span>Corpo 16 / 1.2</span></div></div></div>;"
if old_demo not in system:
    raise SystemExit('SystemDocs typography demo marker not found')
system = system.replace(old_demo, new_demo)
# Add asset rows below the family token.
needle = "{ token: 'font.family.brand', value: '1797', usage: 'Família tipográfica de marca', status: 'definido' },"
asset_rows = needle + "\n      { token: 'font.asset.brand.medium', value: '/1797_MEDIUM.ttf', usage: 'Medium · 500 normal', status: 'definido' },\n      { token: 'font.asset.brand.italic', value: '/1797_ITALIC.ttf', usage: 'Italic · 500 italic', status: 'definido' },\n      { token: 'font.asset.brand.poster', value: '/1797_POSTER.ttf', usage: 'Poster · 400 normal', status: 'definido' },"
if needle in system and 'font.asset.brand.medium' not in system:
    system = system.replace(needle, asset_rows)
system_path.write_text(system, encoding='utf-8')

# 7. Tokens expose the asset mapping as data, while font-family remains 1797.
tokens_json_path = root / 'packages/tokens/src/tokens.json'
data = json.loads(tokens_json_path.read_text(encoding='utf-8'))
data['meta']['version'] = '0.3.1'
variants = data.setdefault('fontVariant', {}).setdefault('brand', {})
variants.setdefault('medium', {})['asset'] = '/1797_MEDIUM.ttf'
variants.setdefault('italic', {})['asset'] = '/1797_ITALIC.ttf'
variants.setdefault('poster', {})['asset'] = '/1797_POSTER.ttf'
tokens_json_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

# 8. Brand source text must match the new public repository reality.
book_path = root / 'docs/brand-book.md'
book = book_path.read_text(encoding='utf-8')
book = book.replace('As três variações oficiais possuem cobertura de português, incluindo cedilha e acentuação. Os arquivos tipográficos são ativos da marca e não são redistribuídos publicamente pelo repositório.', 'As três variações oficiais possuem cobertura de português, incluindo cedilha e acentuação. Os arquivos usados pela documentação estão em `apps/docs/public/1797_MEDIUM.ttf`, `apps/docs/public/1797_ITALIC.ttf` e `apps/docs/public/1797_POSTER.ttf`.')
book_path.write_text(book, encoding='utf-8')

brand_data_path = root / 'apps/docs/src/brand/brandData.ts'
brand_data = brand_data_path.read_text(encoding='utf-8')
brand_data = brand_data.replace("A fonte 1797 é um ativo licenciado da marca e não deve ser redistribuída pela documentação.", "A família 1797 é carregada pela documentação a partir dos arquivos oficiais 1797_MEDIUM.ttf, 1797_ITALIC.ttf e 1797_POSTER.ttf mantidos em apps/docs/public.")
brand_data_path.write_text(brand_data, encoding='utf-8')

# 9. Keep all textual files NFC normalized.
import unicodedata
for path in [styles_path, system_css_path, brand_path, brand_css_path, system_path, tokens_json_path, book_path, brand_data_path, tokens_css_path]:
    value = path.read_text(encoding='utf-8')
    path.write_text(unicodedata.normalize('NFC', value), encoding='utf-8')
