from pathlib import Path

brand_book = Path('apps/docs/src/BrandBook.tsx')
css = Path('apps/docs/src/brand-assets.css')

source = brand_book.read_text()
needle = '''    <Section title="01. A marca" note="Núcleo já definido para orientar produto, comunicação e experiência.">\n      <div className="principles-list">'''
replacement = '''    <Section title="01. A marca" note="Núcleo já definido para orientar produto, comunicação e experiência.">\n      <div className="brand-identity-showcase" aria-label="Identidade visual oficial ONCI">\n        <div className="brand-identity-primary">\n          <span>ASSINATURA PRINCIPAL</span>\n          <div className="brand-identity-primary__canvas">\n            <img src={asset('logo.svg')} alt="Logo principal oficial ONCI" />\n          </div>\n          <p>Esta é a assinatura principal da ONCI e deve ser a primeira escolha sempre que houver espaço suficiente.</p>\n        </div>\n        <div className="brand-identity-secondary">\n          <div className="brand-identity-mark">\n            <span>SÍMBOLO</span>\n            <div className="brand-identity-mark__canvas light"><img src={asset('symbol.svg')} alt="Símbolo oficial ONCI" /></div>\n            <p>Uso compacto quando a marca já estiver reconhecida no contexto.</p>\n          </div>\n          <div className="brand-identity-mark">\n            <span>PERFIL</span>\n            <div className="brand-identity-mark__canvas dark"><img src={asset('perfil.svg')} alt="Aplicação oficial de perfil ONCI" /></div>\n            <p>Avatar, favicon, redes sociais e outras superfícies quadradas.</p>\n          </div>\n        </div>\n      </div>\n      <div className="principles-list">'''

if needle not in source:
    raise SystemExit('Brand section anchor not found')
source = source.replace(needle, replacement, 1)
brand_book.write_text(source)

styles = css.read_text()
addition = r'''

/* Official identity showcase at the start of the Brand Book */
.brand-identity-showcase{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(280px,.85fr);border:1px solid #ddd;background:#ddd;gap:1px;margin:0 0 32px}.brand-identity-primary,.brand-identity-mark{background:#fff}.brand-identity-primary{padding:28px;display:flex;flex-direction:column;gap:14px}.brand-identity-primary>span,.brand-identity-mark>span{font:700 10px/1.2 var(--font-mono,monospace);letter-spacing:.12em;color:#6b7280}.brand-identity-primary__canvas{min-height:280px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;padding:48px}.brand-identity-primary__canvas img{display:block;width:min(520px,88%);max-height:190px}.brand-identity-primary p,.brand-identity-mark p{margin:0;color:#62676f;font-size:13px;line-height:1.5}.brand-identity-secondary{display:grid;grid-template-rows:1fr 1fr;background:#ddd;gap:1px}.brand-identity-mark{padding:22px;display:grid;grid-template-columns:1fr;gap:12px}.brand-identity-mark__canvas{min-height:145px;display:flex;align-items:center;justify-content:center;padding:24px}.brand-identity-mark__canvas.light{background:#f5f5f5}.brand-identity-mark__canvas.dark{background:#000}.brand-identity-mark__canvas img{display:block;max-width:100%;max-height:105px}.brand-identity-mark__canvas.light img{height:92px;width:auto}.brand-identity-mark__canvas.dark img{height:96px;width:96px}@media(max-width:960px){.brand-identity-showcase{grid-template-columns:1fr}.brand-identity-secondary{grid-template-columns:1fr 1fr;grid-template-rows:auto}.brand-identity-primary__canvas{min-height:220px;padding:34px}}@media(max-width:620px){.brand-identity-secondary{grid-template-columns:1fr}.brand-identity-primary,.brand-identity-mark{padding:18px}.brand-identity-primary__canvas{min-height:180px;padding:26px}.brand-identity-primary__canvas img{width:min(420px,94%)}}
'''
if 'Official identity showcase at the start of the Brand Book' not in styles:
    css.write_text(styles + addition)
