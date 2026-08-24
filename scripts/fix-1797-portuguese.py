from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def replace(path: str, old: str, new: str):
    file = ROOT / path
    text = file.read_text(encoding='utf-8')
    if old not in text:
        raise SystemExit(f'Expected text not found in {path}: {old[:80]!r}')
    file.write_text(text.replace(old, new), encoding='utf-8')


def ensure_prefix(path: str, prefix: str):
    file = ROOT / path
    text = file.read_text(encoding='utf-8')
    if prefix.strip() not in text:
        file.write_text(prefix + text, encoding='utf-8')

font_faces = """@font-face {
  font-family: 'ONCI 1797';
  src: local('1797 POSTER Portugues');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'ONCI 1797';
  src: local('1797 MEDIUM Portugues');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'ONCI 1797';
  src: local('1797 ITALIC_V2 Portugues');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

"""

ensure_prefix('packages/tokens/src/tokens.css', font_faces)
replace(
    'packages/tokens/src/tokens.css',
    "--onci-font-1797: '1797', 'Arial Black', sans-serif;",
    "--onci-font-1797: 'ONCI 1797', 'Arial Black', sans-serif;",
)

brand_css = ROOT / 'apps/docs/src/brand-system.css'
brand_text = brand_css.read_text(encoding='utf-8')
brand_text = brand_text.replace('font:italic 900', 'font:italic 500')
brand_css.write_text(brand_text, encoding='utf-8')

replace(
    'apps/docs/src/brand/ptBR.ts',
    "export const textoEmPortugues = (value: string) => value\n",
    "export const textoEmPortugues = (value: string) => value.normalize('NFC')\n",
)
replace(
    'apps/docs/src/ptBRRuntime.ts',
    "const translate = (value: string) => replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value);",
    "const translate = (value: string) => replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value.normalize('NFC'));",
)

system_docs = ROOT / 'apps/docs/src/SystemDocs.tsx'
system_text = system_docs.read_text(encoding='utf-8')
system_text = system_text.replace('1797 / 900 / italic / uppercase', '1797 / 500 / italic / uppercase')
system_docs.write_text(system_text, encoding='utf-8')

# Remove this one-shot migration and its workflow from the resulting tree.
(ROOT / 'scripts/fix-1797-portuguese.py').unlink(missing_ok=True)
(ROOT / '.github/workflows/fix-1797-portuguese.yml').unlink(missing_ok=True)
