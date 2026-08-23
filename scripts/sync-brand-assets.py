from pathlib import Path


def replace_once(path: Path, old: str, new: str) -> None:
    text = path.read_text(encoding='utf-8')
    if old not in text:
        raise RuntimeError(f'Expected block not found in {path}: {old[:80]!r}')
    path.write_text(text.replace(old, new, 1), encoding='utf-8')


# README principal
readme = Path('README.md')
text = readme.read_text(encoding='utf-8')
logo_block = '''# ONCI Design System

<p align="center">
  <img src="apps/docs/public/brand/logo.svg" alt="Logo oficial ONCI" width="280" />
</p>
'''
if '<img src="apps/docs/public/brand/logo.svg"' not in text:
    text = text.replace('# ONCI Design System\n', logo_block, 1)
readme.write_text(text, encoding='utf-8')

replace_once(
    readme,
    '''Ainda não existe no repositório um arquivo vetorial oficial do logo/wordmark ONCI. Por isso a documentação usa temporariamente um lockup tipográfico `ONCI` e reserva `apps/docs/public/brand/` para receber os assets oficiais, sem redesenhar ou adivinhar o símbolo.

Quando o vetor oficial entrar, o Brand Book deverá ganhar as regras definitivas de construção, área de proteção, redução mínima, versões positivas/negativas e lockups das três frentes.''',
    '''Os assets vetoriais oficiais da ONCI estão em `apps/docs/public/brand/` e são usados diretamente pela documentação:

- `logo.svg` — assinatura principal;
- `symbol.svg` — símbolo isolado;
- `perfil.svg` — aplicação quadrada para perfil/avatar e favicon.

O Brand Book já usa esses arquivos oficiais. Permanecem como decisões futuras apenas as especificações que os vetores, sozinhos, não determinam: área de proteção, redução mínima, versões cromáticas adicionais e lockups formais de ONCI Desempenho, ONCI Equipes e ONCI Raízes.'''
)

# Brand Book fonte em Markdown
brand_book = Path('docs/brand-book.md')
text = brand_book.read_text(encoding='utf-8')
if '../apps/docs/public/brand/logo.svg' not in text:
    text = text.replace(
        '# ONCI Brand Book\n',
        '# ONCI Brand Book\n\n<p align="center">\n  <img src="../apps/docs/public/brand/logo.svg" alt="Logo oficial ONCI" width="360" />\n</p>\n',
        1,
    )
brand_book.write_text(text, encoding='utf-8')

old_logo_section = '''## 11. Logo e assinatura

### Estado atual — Pendente de asset oficial

O repositório do Design System ainda não contém um arquivo vetorial oficial da marca ONCI. Até que o asset seja incorporado, não devem ser inventadas proporções, áreas de proteção ou versões alternativas do símbolo.

### Regras que já podem ser adotadas

- preservar a grafia ONCI;
- não distorcer, inclinar adicionalmente ou comprimir o logo;
- não aplicar efeitos, sombras ou contornos sem uma versão oficial prevista;
- priorizar versões de alto contraste;
- não misturar o logo com grafismos que prejudiquem leitura.

### Pendências quando o vetor oficial entrar

- construção e proporção;
- área de proteção;
- tamanho mínimo;
- versões positiva/negativa;
- aplicação monocromática;
- aplicação sobre fotografia;
- símbolo isolado, se existir;
- lockups com Desempenho, Equipes e Raízes.'''

new_logo_section = '''## 11. Logo e assinatura

### Estado atual — Definido

Os vetores oficiais da ONCI estão incorporados ao repositório e são a fonte de verdade para qualquer aplicação da marca.

<table>
  <tr>
    <td align="center"><img src="../apps/docs/public/brand/logo.svg" alt="Logo oficial ONCI" width="300" /></td>
    <td align="center"><img src="../apps/docs/public/brand/symbol.svg" alt="Símbolo oficial ONCI" width="120" /></td>
    <td align="center"><img src="../apps/docs/public/brand/perfil.svg" alt="Aplicação de perfil oficial ONCI" width="120" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Logo principal</strong><br><code>logo.svg</code></td>
    <td align="center"><strong>Símbolo</strong><br><code>symbol.svg</code></td>
    <td align="center"><strong>Perfil</strong><br><code>perfil.svg</code></td>
  </tr>
</table>

#### Logo principal — `logo.svg`

Assinatura completa da ONCI. É a versão prioritária para cabeçalhos, comunicação institucional e aplicações em que existe largura suficiente.

#### Símbolo — `symbol.svg`

Marca isolada para espaços compactos, ícones de produto e aplicações em que a assinatura completa não é necessária.

#### Perfil — `perfil.svg`

Aplicação quadrada preta com símbolo branco, indicada para avatar, perfil social, favicon e superfícies quadradas equivalentes.

### Regras de uso

- usar sempre os vetores oficiais; não redesenhar nem aproximar a marca por tipografia;
- não distorcer, esticar, comprimir, inclinar adicionalmente ou alterar as proporções internas;
- não aplicar efeitos, sombras, contornos, bevel, glow ou texturas não previstas;
- priorizar aplicações de alto contraste;
- não misturar o logo com grafismos que prejudiquem a leitura;
- `logo.svg` é a assinatura prioritária; `symbol.svg` entra quando o espaço ou a função pedirem uma marca compacta; `perfil.svg` é a aplicação quadrada oficial.

### Especificações ainda por definir

- área de proteção;
- tamanho mínimo / redução mínima;
- versões cromáticas adicionais além dos vetores oficiais atuais;
- regras formais de aplicação sobre fotografia;
- lockups de ONCI Desempenho, ONCI Equipes e ONCI Raízes.'''
replace_once(brand_book, old_logo_section, new_logo_section)

text = brand_book.read_text(encoding='utf-8')
text = text.replace(
    '- `apps/docs/public/brand` — assets oficiais quando forem incorporados.',
    '- `apps/docs/public/brand` — assets oficiais da marca: logo, símbolo e perfil.',
)
text = text.replace(
    '1. Incorporar logo vetorial oficial e suas variações.',
    '1. Definir área de proteção, redução mínima, aplicações sobre fotografia e lockups das três frentes.',
)
brand_book.write_text(text, encoding='utf-8')

# Inventário dos assets oficiais
brand_readme = Path('apps/docs/public/brand/README.md')
brand_readme.write_text('''# Assets oficiais da marca ONCI

Este diretório contém os vetores oficiais fornecidos para a identidade ONCI. Eles devem ser usados sem redesenho, aproximação tipográfica ou alteração de proporções.

## Arquivos

- `logo.svg` — assinatura principal da ONCI. Uso prioritário quando houver largura suficiente.
- `symbol.svg` — símbolo isolado para aplicações compactas.
- `perfil.svg` — aplicação quadrada preta com símbolo branco para avatar, perfil, favicon e superfícies equivalentes.

## Regras

- preservar paths, proporções e composição dos arquivos originais;
- não esticar, comprimir, inclinar adicionalmente ou redesenhar;
- não aplicar sombra, contorno, glow, bevel ou textura como parte da marca;
- não criar novas versões cromáticas sem aprovação e documentação no Brand Book;
- futuras versões oficiais devem ser adicionadas aqui e documentadas em `docs/brand-book.md` e na página Brand Book da aplicação.

## Ainda por especificar

Área de proteção, redução mínima, aplicação sobre fotografia, versões cromáticas adicionais e lockups formais de ONCI Desempenho, ONCI Equipes e ONCI Raízes.
''', encoding='utf-8')

# Brand Book visual: assinatura oficial também abre a página, não apenas a seção técnica.
brand_component = Path('apps/docs/src/BrandBook.tsx')
text = brand_component.read_text(encoding='utf-8')
if 'className="brand-book-signature"' not in text:
    text = text.replace(
        '  return <>\n    <PageHead',
        '  return <>\n    <div className="brand-book-signature"><img src={asset(\'logo.svg\')} alt="Logo oficial ONCI" /></div>\n\n    <PageHead',
        1,
    )
brand_component.write_text(text, encoding='utf-8')

brand_css = Path('apps/docs/src/brand-assets.css')
text = brand_css.read_text(encoding='utf-8')
if '.brand-book-signature' not in text:
    text += '''\n.brand-book-signature{display:flex;align-items:center;min-height:132px;margin:-26px 0 46px;border-bottom:1px solid #e5e7eb;padding:24px 0}.brand-book-signature img{display:block;width:min(360px,62vw);height:auto}.brand-book-signature+ .page-head{margin-top:0}@media(max-width:640px){.brand-book-signature{min-height:100px;margin-top:-36px;margin-bottom:32px}.brand-book-signature img{width:min(260px,72vw)}}\n'''
brand_css.write_text(text, encoding='utf-8')

print('Brand Book synchronized with official ONCI assets.')
