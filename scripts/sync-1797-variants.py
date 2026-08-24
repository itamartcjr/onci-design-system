from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace_once(path: Path, old: str, new: str) -> None:
    text = path.read_text(encoding='utf-8')
    if old not in text:
        raise RuntimeError(f'Expected text not found in {path}: {old[:120]!r}')
    path.write_text(text.replace(old, new, 1), encoding='utf-8')


# 1) Tokens: uma única família 1797, com variações internas.
tokens_path = ROOT / 'packages/tokens/src/tokens.json'
tokens = json.loads(tokens_path.read_text(encoding='utf-8'))
tokens['meta']['version'] = '0.3.0'
tokens['fontFamily']['brand'] = "'1797', 'Arial Black', sans-serif"
tokens['fontVariant'] = {
    'brand': {
        'medium': {
            'family': '{fontFamily.brand}',
            'name': 'Medium',
            'fontWeight': '500',
            'fontStyle': 'normal',
            'role': 'Textos curtos de marca, subtítulos e composições que pedem presença com leitura estável.',
        },
        'italic': {
            'family': '{fontFamily.brand}',
            'name': 'Italic',
            'fontWeight': '500',
            'fontStyle': 'italic',
            'role': 'Chamadas esportivas, ações, títulos de energia e situações em que movimento faz parte da mensagem.',
        },
        'poster': {
            'family': '{fontFamily.brand}',
            'name': 'Poster',
            'fontWeight': '400',
            'fontStyle': 'normal',
            'role': 'Títulos grandes, campanhas, números e composições editoriais de alto impacto.',
        },
    }
}
# O botão passa a apontar para a variação, sem criar uma segunda família.
tokens['component']['button']['fontVariation'] = '{fontVariant.brand.italic}'
tokens['component']['button']['fontWeight'] = '500'
tokens['component']['button']['fontStyle'] = 'italic'
tokens_path.write_text(json.dumps(tokens, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

# 2) CSS tokens. Nenhum binário de fonte é incluído no repositório.
tokens_css = ROOT / 'packages/tokens/src/tokens.css'
replace_once(
    tokens_css,
    "  --onci-font-primary: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  --onci-font-brand: '1797', 'Arial Black', sans-serif;\n  --onci-font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;",
    "  --onci-font-primary: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  --onci-font-1797: '1797', 'Arial Black', sans-serif;\n  --onci-font-brand: var(--onci-font-1797);\n  --onci-font-1797-medium-weight: 500;\n  --onci-font-1797-medium-style: normal;\n  --onci-font-1797-italic-weight: 500;\n  --onci-font-1797-italic-style: italic;\n  --onci-font-1797-poster-weight: 400;\n  --onci-font-1797-poster-style: normal;\n  --onci-font-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;"
)

# 3) Marca: decisões tipográficas deixam claro que 1797 é a família e Medium/Italic/Poster são variações.
brand_data = ROOT / 'apps/docs/src/brand/brandData.ts'
text = brand_data.read_text(encoding='utf-8')
replacements = {
    "'typography:Primary Brand Typeface': { decision: '1797 para assinatura de energia: headlines, números e CTAs selecionados.', status: 'definido' },":
    "'typography:Primary Brand Typeface': { decision: '1797 é a família tipográfica de marca. Suas variações oficiais são Medium, Italic e Poster.', status: 'definido' },",
    "'typography:Secondary Typeface': { decision: 'Nunito Sans para interface, leitura, navegação, produto, formulários e informação funcional.', status: 'definido' },":
    "'typography:Secondary Typeface': { decision: 'Nunito Sans é a família de interface e leitura para navegação, produto, formulários e informação funcional.', status: 'definido' },",
}
for old, new in replacements.items():
    if old not in text:
        raise RuntimeError(f'Expected typography decision not found: {old}')
    text = text.replace(old, new, 1)
# Completa os campos já existentes sem criar novas famílias.
insert_after = "'typography:Secondary Typeface': { decision: 'Nunito Sans é a família de interface e leitura para navegação, produto, formulários e informação funcional.', status: 'definido' },"
addition = "\n  'typography:Display Typeface': { decision: '1797 Poster. Usar em títulos grandes, números, campanhas e composições editoriais de alto impacto.', status: 'definido' },\n  'typography:Supporting Typeface': { decision: '1797 Medium. Usar em textos curtos de marca, subtítulos e composições que precisam de presença com leitura estável.', status: 'definido' },\n  'typography:Função tipográfica': { decision: '1797 Italic. Usar em chamadas esportivas, ações e títulos em que movimento e energia façam parte da mensagem.', status: 'definido' },"
if "'typography:Display Typeface':" not in text:
    text = text.replace(insert_after, insert_after + addition, 1)
brand_data.write_text(text, encoding='utf-8')

# 4) Rótulos da área Marca.
ptbr = ROOT / 'apps/docs/src/brand/ptBR.ts'
text = ptbr.read_text(encoding='utf-8')
text = text.replace("'Primary Brand Typeface': 'Tipografia principal da marca',", "'Primary Brand Typeface': '1797',", 1)
text = text.replace("'Display Typeface': 'Tipografia de destaque',", "'Display Typeface': '1797 · Poster',", 1)
text = text.replace("'Supporting Typeface': 'Tipografia de apoio',", "'Supporting Typeface': '1797 · Medium',", 1)
ptbr.write_text(text, encoding='utf-8')

# 5) Visual da Marca: uma família 1797 com três variações, e Nunito Sans separada para interface.
brand_system = ROOT / 'apps/docs/src/BrandSystem.tsx'
text = brand_system.read_text(encoding='utf-8')
old = "  if (module.id === 'typography') return <div className=\"brand-visual-type\"><div><small>1797</small><strong>MOVIMENTO<br/>SEM RUÍDO.</strong></div><div><small>NUNITO SANS</small><h3>Clareza para produto, navegação e informação.</h3><p>A fonte de marca cria impulso. A fonte de interface organiza a leitura.</p></div></div>;"
new = "  if (module.id === 'typography') return <div className=\"brand-visual-type brand-visual-type--1797\"><div className=\"brand-type-family\"><small>FAMÍLIA DE MARCA</small><strong>1797</strong><p>Medium · Italic · Poster</p></div><div className=\"brand-type-variants\"><article className=\"medium\"><small>MEDIUM</small><strong>FORÇA E CLAREZA</strong><p>Textos curtos de marca e subtítulos.</p></article><article className=\"italic\"><small>ITALIC</small><strong>EM MOVIMENTO</strong><p>Chamadas, ações e títulos de energia.</p></article><article className=\"poster\"><small>POSTER</small><strong>PRÓXIMO NÍVEL</strong><p>Títulos grandes, números e campanhas.</p></article></div><div className=\"brand-type-interface\"><small>INTERFACE</small><h3>Nunito Sans</h3><p>Navegação, produto, formulários, dados e textos de leitura.</p></div></div>;"
if old not in text:
    raise RuntimeError('Typography visual block not found in BrandSystem.tsx')
brand_system.write_text(text.replace(old, new, 1), encoding='utf-8')

# 6) Estilos da prancha tipográfica.
brand_css = ROOT / 'apps/docs/src/brand-system.css'
css = brand_css.read_text(encoding='utf-8')
marker = '.brand-visual-type--1797{'
if marker not in css:
    css += "\n.brand-visual-type--1797{grid-template-columns:minmax(260px,.7fr) minmax(0,1.3fr);min-height:520px;border:1px solid #ddd}.brand-visual-type--1797>div{min-width:0}.brand-visual-type--1797 .brand-type-family{background:#000;color:#fff;padding:38px;display:flex;flex-direction:column}.brand-visual-type--1797 .brand-type-family small{color:#aaa}.brand-visual-type--1797 .brand-type-family strong{margin:auto 0 12px;font:400 clamp(72px,9vw,140px)/.72 var(--onci-font-brand);letter-spacing:-.04em}.brand-visual-type--1797 .brand-type-family p{margin:0;color:#aaa;font-size:14px}.brand-type-variants{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));padding:0!important;background:#fff!important;color:#000!important}.brand-type-variants article{min-height:360px;padding:26px;border-left:1px solid #ddd;display:flex;flex-direction:column}.brand-type-variants article small{color:#d71920;font-size:10px;font-weight:900;letter-spacing:.1em}.brand-type-variants article strong{margin:auto 0 18px;font-family:var(--onci-font-brand);font-size:clamp(30px,3vw,52px);line-height:.9}.brand-type-variants .medium strong{font-weight:500;font-style:normal}.brand-type-variants .italic strong{font-weight:500;font-style:italic}.brand-type-variants .poster strong{font-weight:400;font-style:normal;font-size:clamp(38px,4vw,64px)}.brand-type-variants article p{margin:0;color:#666;font-size:13px;line-height:1.45}.brand-visual-type--1797 .brand-type-interface{grid-column:1/-1;padding:28px 38px!important;border-top:1px solid #ddd;background:#f5f5f5!important;color:#000!important;display:grid!important;grid-template-columns:140px minmax(180px,.45fr) minmax(0,1fr);gap:24px;align-items:center}.brand-type-interface h3,.brand-type-interface p{margin:0}.brand-type-interface h3{font-size:30px}.brand-type-interface p{color:#666;line-height:1.45}@media(max-width:900px){.brand-visual-type--1797{grid-template-columns:1fr}.brand-type-variants{grid-template-columns:1fr}.brand-type-variants article{min-height:220px;border-left:0;border-top:1px solid #ddd}.brand-visual-type--1797 .brand-type-interface{grid-template-columns:1fr}}\n"
brand_css.write_text(css, encoding='utf-8')

# 7) Sistema de Design: página Tipografia passa a documentar a família + variações.
system_docs = ROOT / 'apps/docs/src/SystemDocs.tsx'
text = system_docs.read_text(encoding='utf-8')
text = text.replace(
    "eyebrow: '02 — Fundações', title: 'Tipografia', description: 'Nunito Sans organiza informação; 1797 cria impulso e assinatura esportiva.',",
    "eyebrow: '02 — Fundações', title: 'Tipografia', description: '1797 é a família de marca, com variações Medium, Italic e Poster. Nunito Sans organiza interface e leitura.',",
    1,
)
text = text.replace(
    "kind: 'typography', variants: ['Display 1797', 'Heading Nunito', 'Body', 'Label', 'Escala fluida'], tech: [",
    "kind: 'typography', variants: ['1797 · Medium', '1797 · Italic', '1797 · Poster', 'Nunito Sans', 'Escala fluida'], tech: [",
    1,
)
text = text.replace(
    "{ token: 'font.family.brand', value: '1797', usage: 'Display e ação', status: 'definido' },",
    "{ token: 'font.family.brand', value: '1797', usage: 'Família tipográfica de marca', status: 'definido' },\n      { token: 'font.variant.brand.medium', value: '500 / normal', usage: 'Textos curtos de marca e subtítulos', status: 'definido' },\n      { token: 'font.variant.brand.italic', value: '500 / italic', usage: 'Chamadas, ações e energia', status: 'definido' },\n      { token: 'font.variant.brand.poster', value: '400 / normal', usage: 'Títulos grandes, números e campanhas', status: 'definido' },",
    1,
)
old_demo = "  if (kind === 'typography') return <div className=\"type-demo\"><div className=\"type-demo-brand\"><small>1797 · DISPLAY / CTA</small><strong>FORÇA<br/>EM MOVIMENTO.</strong></div><div className=\"type-demo-interface\"><small>NUNITO SANS · INTERFACE</small><h2>Produto primeiro.</h2><p>Informação clara para preço, tamanho, estoque, navegação e conteúdo.</p><div><b>LABEL 12</b><span>Body 16 / 1.2</span></div></div></div>;"
new_demo = "  if (kind === 'typography') return <div className=\"type-demo\"><div className=\"type-demo-brand\"><small>1797 · FAMÍLIA</small><strong>1797</strong><div className=\"type-demo-1797-variants\"><span><b>MEDIUM</b> Força e clareza</span><span><b>ITALIC</b> Em movimento</span><span><b>POSTER</b> Próximo nível</span></div></div><div className=\"type-demo-interface\"><small>NUNITO SANS · INTERFACE</small><h2>Produto primeiro.</h2><p>Informação clara para preço, tamanho, estoque, navegação e conteúdo.</p><div><b>RÓTULO 12</b><span>Corpo 16 / 1.2</span></div></div></div>;"
if old_demo not in text:
    raise RuntimeError('Typography Demo block not found in SystemDocs.tsx')
text = text.replace(old_demo, new_demo, 1)
system_docs.write_text(text, encoding='utf-8')

# 8) CSS da demonstração do Sistema de Design.
system_css = ROOT / 'apps/docs/src/system-docs.css'
css = system_css.read_text(encoding='utf-8')
if '.type-demo-1797-variants{' not in css:
    css += "\n.type-demo-1797-variants{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;margin-top:auto;background:#333}.type-demo-1797-variants span{padding:18px;background:#0b0b0b;color:#fff;font-family:var(--onci-font-brand);font-size:22px;line-height:1}.type-demo-1797-variants b{display:block;margin-bottom:10px;color:#d71920;font:800 10px var(--onci-font-primary);letter-spacing:.1em}.type-demo-1797-variants span:nth-child(1){font-weight:500;font-style:normal}.type-demo-1797-variants span:nth-child(2){font-weight:500;font-style:italic}.type-demo-1797-variants span:nth-child(3){font-weight:400;font-style:normal;font-size:28px}@media(max-width:760px){.type-demo-1797-variants{grid-template-columns:1fr}}\n"
system_css.write_text(css, encoding='utf-8')

# 9) Manual da Marca em Markdown.
brand_book = ROOT / 'docs/brand-book.md'
text = brand_book.read_text(encoding='utf-8')
pattern = re.compile(r"### 1797 — Definido\n.*?(?=### Nunito Sans — Definido)", re.S)
replacement = """### 1797 — Definido

Família tipográfica de marca. A família é sempre apresentada como **1797**; Medium, Italic e Poster são variações internas, não famílias separadas.

#### Medium

Peso `500`, estilo normal. Usar em textos curtos de marca, subtítulos e composições que precisam de presença com leitura estável.

#### Italic

Peso `500`, estilo itálico. Usar em chamadas esportivas, ações e títulos em que movimento e energia façam parte da mensagem.

#### Poster

Peso `400`, estilo normal. Usar em títulos grandes, campanhas, números e composições editoriais de alto impacto.

As três variações oficiais possuem cobertura de português, incluindo cedilha e acentuação. Os arquivos tipográficos são ativos da marca e não são redistribuídos publicamente pelo repositório.

"""
text, count = pattern.subn(replacement, text, count=1)
if count != 1:
    raise RuntimeError('1797 section not found in docs/brand-book.md')
brand_book.write_text(text, encoding='utf-8')

# 10) README.
readme = ROOT / 'README.md'
text = readme.read_text(encoding='utf-8')
text = text.replace('**Marca:** 1797', '**Marca:** 1797 — variações Medium, Italic e Poster', 1)
readme.write_text(text, encoding='utf-8')

print('1797 typography synchronized successfully.')
