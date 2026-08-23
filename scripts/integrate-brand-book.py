from pathlib import Path

app_path = Path('apps/docs/src/App.tsx')
readme_path = Path('README.md')
legacy_path = Path('apps/docs/public/brand-book/index.html')

app = app_path.read_text()

replacements = [
    (
        "import { onciTokens } from '@onci/tokens';\n",
        "import { onciTokens } from '@onci/tokens';\nimport BrandBook from './BrandBook';\n",
    ),
    (
        "type PageKey =\n  | 'overview'",
        "type PageKey =\n  | 'brandBook'\n  | 'overview'",
    ),
    (
        "const pages: Array<{ group: string; items: Array<{ key: PageKey; label: string }> }> = [\n  {\n    group: 'Introdução',",
        "const pages: Array<{ group: string; items: Array<{ key: PageKey; label: string }> }> = [\n  {\n    group: 'Marca',\n    items: [\n      { key: 'brandBook', label: 'Brand Book' },\n    ],\n  },\n  {\n    group: 'Introdução',",
    ),
    (
        "const [page, setPage] = useState<PageKey>('overview');",
        "const [page, setPage] = useState<PageKey>('brandBook');",
    ),
    (
        "<button className=\"brand-lockup\" onClick={() => openPage('overview')}>",
        "<button className=\"brand-lockup\" onClick={() => openPage('brandBook')}>",
    ),
    (
        "<span className=\"brand-meta\">Design System <b>v0.1</b></span>",
        "<span className=\"brand-meta\">Brand + Design System <b>v0.1</b></span>",
    ),
    (
        "Base sincronizada com wp-onci",
        "Brand Book + Design System ONCI",
    ),
    (
        "<main className=\"content\">\n        {page === 'overview'",
        "<main className=\"content\">\n        {page === 'brandBook' && <BrandBook />}\n        {page === 'overview'",
    ),
]

for old, new in replacements:
    if new in app:
        continue
    if old not in app:
        raise RuntimeError(f'Marker not found in App.tsx: {old[:80]!r}')
    app = app.replace(old, new, 1)

app_path.write_text(app)

readme = readme_path.read_text()
readme = readme.replace(
    "O repositório organiza tanto o **Brand Book** quanto o **Design System**, para que estratégia de marca, identidade, tokens, componentes e experiências digitais evoluam a partir da mesma fonte de verdade.",
    "O repositório organiza o **Brand Book** e o **Design System na mesma aplicação**, para que estratégia de marca, identidade, tokens, componentes e experiências digitais evoluam a partir da mesma fonte de verdade.",
)
readme = readme.replace(
    "- **Design System:** `https://itamartcjr.github.io/onci-design-system/`\n- **Brand Book:** `https://itamartcjr.github.io/onci-design-system/brand-book/`\n\nO Brand Book também possui uma versão-fonte em Markdown em `docs/brand-book.md`, usada para revisão e versionamento das decisões estratégicas.",
    "- **Brand Book + Design System:** `https://itamartcjr.github.io/onci-design-system/`\n- O **Brand Book é o primeiro item do menu lateral** e também a tela inicial da documentação.\n\nO Brand Book também possui uma versão-fonte em Markdown em `docs/brand-book.md`, usada para revisão e versionamento das decisões estratégicas.",
)
readme = readme.replace(
    "│     ├─ src/                       # documentação visual do Design System\n│     └─ public/\n│        ├─ brand/                  # assets oficiais da marca\n│        └─ brand-book/             # Brand Book publicado no GitHub Pages",
    "│     ├─ src/                       # Brand Book + documentação visual do Design System\n│     └─ public/\n│        └─ brand/                  # assets oficiais da marca",
)
readme_path.write_text(readme)

if legacy_path.exists():
    legacy_path.unlink()

print('Brand Book integrated into the main documentation app.')
