from pathlib import Path

brand_book = Path('apps/docs/src/BrandBook.tsx')
logo_guide = Path('apps/docs/src/LogoGuide.tsx')
styles = Path('apps/docs/src/brand-assets.css')
markdown = Path('docs/brand-book.md')
brand_readme = Path('apps/docs/public/brand/README.md')

logo_guide.write_text(r'''type LogoGuideProps = {
  asset: (file: string) => string;
};

const allowedBackgrounds = [
  ['Branco', '#FFFFFF'],
  ['Surface', '#F5F5F5'],
  ['Amarelo ONCI', '#F2B705'],
  ['Laranja ONCI', '#E86A17'],
  ['Vermelho ONCI', '#D71920'],
];

const blockedBackgrounds = [
  ['Preto', '#000000'],
  ['Surface Dark', '#1A1A1A'],
  ['Azul ONCI', '#1255A6'],
  ['Azul escuro', '#0B3468'],
  ['Vermelho escuro', '#A80F15'],
  ['Terra ONCI', '#8C3B20'],
];

const blockedLogoColors = [
  ['Vermelho', '#D71920'],
  ['Azul', '#1255A6'],
  ['Amarelo', '#F2B705'],
  ['Laranja', '#E86A17'],
  ['Terra', '#8C3B20'],
];

export default function LogoGuide({ asset }: LogoGuideProps) {
  return <section className="doc-section logo-guide">
    <div className="section-heading">
      <h2>09. Logo e assinatura</h2>
      <p>Guia de aplicação dos vetores oficiais da ONCI. O desenho é definido; clear space e redução mínima abaixo são padrões operacionais v0.2 e devem ser validados em provas físicas antes de virarem especificação final de produção.</p>
    </div>

    <div className="brand-assets">
      <article className="brand-asset"><div className="brand-asset__preview logo"><img src={asset('logo.svg')} alt="Logo oficial ONCI" /></div><h3>Logo principal</h3><code>brand/logo.svg</code><p>Assinatura prioritária. Use em cabeçalhos, comunicação institucional, embalagens, materiais de patrocínio e aplicações com largura suficiente.</p></article>
      <article className="brand-asset"><div className="brand-asset__preview symbol"><img src={asset('symbol.svg')} alt="Símbolo oficial ONCI" /></div><h3>Símbolo</h3><code>brand/symbol.svg</code><p>Marca compacta. Use quando o nome já estiver estabelecido ou quando o espaço não comportar a assinatura completa.</p></article>
      <article className="brand-asset"><div className="brand-asset__preview dark profile"><img src={asset('perfil.svg')} alt="Aplicação de perfil oficial ONCI" /></div><h3>Perfil</h3><code>brand/perfil.svg</code><p>Aplicação quadrada oficial. Use em avatar, perfil social, favicon e superfícies equivalentes.</p></article>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>01</span><div><h3>Qual versão usar</h3><p>Escolha pelo espaço e pela função; nunca reconstrua a marca com texto ou outro ícone.</p></div></div>
      <div className="logo-use-grid">
        <div><strong>Logo principal</strong><p>Primeira escolha sempre que houver largura. Prioritário para site, documentos, embalagem e assinatura institucional.</p></div>
        <div><strong>Símbolo</strong><p>Para áreas compactas, etiqueta pequena, marca d’água discreta e pontos em que ONCI já esteja identificada no contexto.</p></div>
        <div><strong>Perfil</strong><p>Para avatares e ícones quadrados. Não recorte `logo.svg` para fabricar um avatar.</p></div>
      </div>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>02</span><div><h3>Área de proteção</h3><p><code>PROPOSTA OPERACIONAL</code> — use <strong>X = 25% da altura total do ativo</strong> como espaço livre mínimo em todos os lados. Nenhum texto, borda, fotografia, ícone ou outro logo deve invadir X.</p></div></div>
      <div className="clearspace-grid">
        <div className="clearspace-demo">
          <div className="clearspace-frame clearspace-logo"><b className="x x-top">X</b><b className="x x-left">X</b><img src={asset('logo.svg')} alt="Exemplo de área de proteção do logo ONCI" /></div>
          <strong>Logo principal</strong><p>Padding mínimo externo = 0,25 × altura do logo.</p>
        </div>
        <div className="clearspace-demo">
          <div className="clearspace-frame clearspace-symbol"><b className="x x-top">X</b><b className="x x-left">X</b><img src={asset('symbol.svg')} alt="Exemplo de área de proteção do símbolo ONCI" /></div>
          <strong>Símbolo</strong><p>A mesma regra de X vale para a marca isolada.</p>
        </div>
        <div className="clearspace-demo">
          <div className="clearspace-frame clearspace-profile"><b className="x x-top">X</b><b className="x x-left">X</b><img src={asset('perfil.svg')} alt="Exemplo de área de proteção da aplicação de perfil ONCI" /></div>
          <strong>Perfil</strong><p>O quadrado já faz parte do asset; X começa fora dele.</p>
        </div>
      </div>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>03</span><div><h3>Redução mínima</h3><p><code>PROPOSTA OPERACIONAL</code> — abaixo destes tamanhos, troque de versão em vez de forçar a legibilidade.</p></div></div>
      <div className="logo-min-grid">
        <div><div className="min-logo"><img src={asset('logo.svg')} alt="Logo ONCI em tamanho mínimo digital" /></div><strong>Logo · digital</strong><p>96 px de largura mínima.</p></div>
        <div><div className="min-symbol"><img src={asset('symbol.svg')} alt="Símbolo ONCI em tamanho mínimo digital" /></div><strong>Símbolo · digital</strong><p>24 px de largura mínima.</p></div>
        <div><div className="min-profile"><img src={asset('perfil.svg')} alt="Perfil ONCI em tamanho mínimo digital" /></div><strong>Perfil · digital</strong><p>32 × 32 px mínimo.</p></div>
        <div className="min-print"><strong>Material impresso</strong><p>Começar com 25 mm para o logo, 8 mm para o símbolo e 10 mm para o perfil. Validar bordado, silk, transfer, etiqueta e impressão antes de produção em escala.</p></div>
      </div>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>04</span><div><h3>Cores oficiais do logo</h3><p>Os vetores recebidos definem hoje uma assinatura monocromática. As cores da ONCI pertencem ao sistema visual, mas <strong>não são automaticamente cores do logo</strong>.</p></div></div>
      <div className="logo-color-policy">
        <div className="logo-color-allowed"><span className="logo-color-chip black"/><div><strong>Permitido</strong><p>`logo.svg` e `symbol.svg` em preto, como fornecidos. `perfil.svg` deve permanecer preto + branco.</p></div></div>
        <div className="blocked-colors">
          {blockedLogoColors.map(([name, color]) => <div className="blocked-color" key={name}><span style={{ background: color }}/><b>×</b><small>{name}</small></div>)}
        </div>
      </div>
      <div className="rule-callout logo-rule"><strong>NÃO RECOLORIR.</strong><p>Não aplicar vermelho, azul, amarelo, laranja, terra, degradê ou múltiplas cores dentro da marca enquanto essas versões não existirem como arquivos oficiais aprovados.</p></div>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>05</span><div><h3>Fundos permitidos</h3><p>Para o `logo.svg` preto, use fundos claros ou cores que mantenham leitura forte. Se o fundo for escuro, não “inverta” o arquivo via CSS: use `perfil.svg` quando a aplicação quadrada servir ou produza futuramente uma versão negativa oficial.</p></div></div>
      <div className="background-grid">
        {allowedBackgrounds.map(([name, color]) => <div className="background-sample is-ok" style={{ background: color }} key={name}><span>✓</span><img src={asset('logo.svg')} alt={`Logo ONCI sobre ${name}`} /><small>{name}<br/>{color}</small></div>)}
        {blockedBackgrounds.map(([name, color]) => <div className="background-sample is-blocked" style={{ background: color }} key={name}><span>×</span><img src={asset('logo.svg')} alt={`Uso não recomendado do logo ONCI sobre ${name}`} /><small>{name}<br/>{color}</small></div>)}
      </div>
      <p className="guide-caption">Regra operacional para o logo preto atual: evitar especialmente fundos escuros e os tons ONCI Azul, Azul Escuro, Vermelho Escuro e Terra. A cor pode ocupar a composição ao redor da marca sem precisar pintar o logo.</p>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>06</span><div><h3>Usos incorretos</h3><p>O arquivo oficial não é matéria-prima para efeitos. Ele é a assinatura final.</p></div></div>
      <div className="logo-donts">
        <div><div className="dont-preview stretch"><img src={asset('logo.svg')} alt="Exemplo incorreto: logo ONCI esticado" /></div><strong>Não esticar</strong></div>
        <div><div className="dont-preview rotate"><img src={asset('logo.svg')} alt="Exemplo incorreto: logo ONCI rotacionado" /></div><strong>Não rotacionar</strong></div>
        <div><div className="dont-preview shadow"><img src={asset('logo.svg')} alt="Exemplo incorreto: logo ONCI com sombra" /></div><strong>Não aplicar sombra</strong></div>
        <div><div className="dont-preview opacity"><img src={asset('logo.svg')} alt="Exemplo incorreto: logo ONCI com baixa opacidade" /></div><strong>Não reduzir opacidade</strong></div>
        <div><div className="dont-preview crowded"><span>TEXTO</span><img src={asset('logo.svg')} alt="Exemplo incorreto: elementos invadindo a área do logo ONCI" /><span>CTA</span></div><strong>Não invadir X</strong></div>
        <div><div className="dont-preview boxed"><img src={asset('logo.svg')} alt="Exemplo incorreto: logo ONCI dentro de forma não oficial" /></div><strong>Não criar container novo</strong></div>
      </div>
    </div>

    <div className="logo-guide-block">
      <div className="logo-guide-title"><span>07</span><div><h3>Aplicação nas três frentes</h3><p>Desempenho, Equipes e Raízes podem mudar a atmosfera da composição, mas não mudam o desenho da marca principal.</p></div></div>
      <div className="brand-lines logo-lines">
        <div className="line performance"><img src={asset('logo.svg')} alt="ONCI em composição Desempenho" /><p><strong>Desempenho:</strong> vermelho entra em CTA, faixa, fotografia e dados; o logo permanece no arquivo oficial.</p></div>
        <div className="line teams"><img src={asset('logo.svg')} alt="ONCI em composição Equipes" /><p><strong>Equipes:</strong> vermelho e azul constroem o ambiente e convivem com escudos; não recolorir a ONCI para combinar com cada time.</p></div>
        <div className="line roots"><img src={asset('logo.svg')} alt="ONCI em composição Raízes" /><p><strong>Raízes:</strong> amarelo, laranja e terra entram em superfície, matéria e narrativa; o logo continua independente da paleta.</p></div>
      </div>
    </div>

    <div className="brand-rule-grid logo-final-rules">
      <div><strong>Use o arquivo certo</strong><p>Logo, símbolo e perfil têm papéis diferentes. Não recorte um para imitar o outro.</p></div>
      <div><strong>Mantenha X</strong><p>Clear space operacional mínimo de 25% da altura do ativo em todos os lados.</p></div>
      <div><strong>Marca monocromática</strong><p>Preto e preto+branco são as versões oficiais atuais. Cores de coleção ficam no sistema ao redor.</p></div>
      <div><strong>Produção física</strong><p>Antes de bordado, silk ou etiqueta em escala, fazer prova real e registrar ajustes específicos no Brand Book.</p></div>
    </div>
  </section>;
}
''', encoding='utf-8')

src = brand_book.read_text(encoding='utf-8')
if "import LogoGuide from './LogoGuide';" not in src:
    src = src.replace("import './brand-assets.css';", "import './brand-assets.css';\nimport LogoGuide from './LogoGuide';")
start = src.index('    <Section title="09. Logo e assinatura"')
end = src.index('\n\n    <Section title="10. Fotografia', start)
src = src[:start] + '    <LogoGuide asset={asset} />' + src[end:]
src = src.replace('<span>Área de proteção</span><span>Redução mínima</span><span>Versões cromáticas</span>', '<span>Clear space operacional</span><span>Redução mínima operacional</span><span>Versões cromáticas futuras</span>')
brand_book.write_text(src, encoding='utf-8')

css = styles.read_text(encoding='utf-8')
marker = '/* ONCI logo usage guide v0.2 */'
if marker not in css:
    css += r'''

/* ONCI logo usage guide v0.2 */
.logo-guide{scroll-margin-top:90px}.logo-guide-block{margin-top:36px;border-top:1px solid #ddd;padding-top:28px}.logo-guide-title{display:grid;grid-template-columns:48px 1fr;gap:16px;margin-bottom:20px}.logo-guide-title>span{font-family:var(--font-mono,monospace);font-size:12px;color:#6b7280;padding-top:5px}.logo-guide-title h3{font-size:24px;margin:0 0 6px}.logo-guide-title p{margin:0;color:#62676f;line-height:1.5}.logo-use-grid,.logo-min-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#ddd;border:1px solid #ddd}.logo-use-grid>div,.logo-min-grid>div{background:#fff;padding:24px}.logo-use-grid strong,.logo-min-grid strong{display:block;margin-bottom:7px}.logo-use-grid p,.logo-min-grid p{margin:0;color:#62676f;font-size:14px;line-height:1.5}.clearspace-grid{display:grid;grid-template-columns:1.5fr .75fr .75fr;gap:18px}.clearspace-demo{border:1px solid #ddd;padding:18px}.clearspace-demo>strong{display:block;margin-top:14px}.clearspace-demo>p{margin:6px 0 0;color:#62676f;font-size:13px}.clearspace-frame{position:relative;min-height:230px;padding:12.5%;display:flex;align-items:center;justify-content:center;background:#f5f5f5;border:1px dashed #8b9199}.clearspace-frame:before{content:'';position:absolute;inset:12.5%;border:1px solid rgba(0,0,0,.15);pointer-events:none}.clearspace-frame img{position:relative;z-index:1;max-width:100%;max-height:180px}.clearspace-symbol img{height:140px;width:auto}.clearspace-profile img{width:140px;height:140px}.clearspace-frame .x{position:absolute;font:700 11px/1 var(--font-mono,monospace);background:#fff;border:1px solid #aaa;padding:3px 5px}.clearspace-frame .x-top{top:5.5%;left:50%;transform:translateX(-50%)}.clearspace-frame .x-left{left:5.5%;top:50%;transform:translateY(-50%)}.logo-min-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.logo-min-grid>div{min-height:170px}.min-logo,.min-symbol,.min-profile{height:88px;display:flex;align-items:center;justify-content:flex-start;margin-bottom:12px}.min-logo img{width:96px}.min-symbol img{width:24px}.min-profile img{width:32px;height:32px}.min-print{background:#111!important;color:#fff}.min-print p{color:#d4d4d4}.logo-color-policy{display:grid;grid-template-columns:1fr 2fr;border:1px solid #ddd}.logo-color-allowed{padding:24px;display:flex;gap:18px;align-items:center;border-right:1px solid #ddd}.logo-color-allowed p{margin:5px 0 0;color:#62676f;font-size:13px}.logo-color-chip{width:64px;height:64px;border:1px solid #ddd;flex:0 0 auto}.logo-color-chip.black{background:#000}.blocked-colors{display:grid;grid-template-columns:repeat(5,1fr)}.blocked-color{position:relative;min-height:112px;display:flex;align-items:center;justify-content:center;border-right:1px solid #ddd;overflow:hidden}.blocked-color:last-child{border-right:0}.blocked-color>span{position:absolute;inset:0}.blocked-color>b{position:relative;z-index:1;font-size:42px;color:#fff;text-shadow:0 1px 5px rgba(0,0,0,.45)}.blocked-color small{position:absolute;z-index:1;bottom:8px;left:8px;background:#fff;padding:3px 5px;font-size:10px}.logo-rule{margin-top:16px}.background-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1px;background:#ddd;border:1px solid #ddd}.background-sample{position:relative;min-height:170px;padding:18px;display:flex;align-items:center;justify-content:center;overflow:hidden}.background-sample img{width:min(150px,80%)}.background-sample>span{position:absolute;top:10px;right:10px;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-weight:800;background:#fff;color:#000}.background-sample.is-blocked>span{background:#d71920;color:#fff}.background-sample small{position:absolute;left:10px;bottom:10px;background:rgba(255,255,255,.94);padding:5px 7px;font:10px/1.3 var(--font-mono,monospace);color:#111}.background-sample.is-blocked:after{content:'';position:absolute;width:130%;height:3px;background:#d71920;transform:rotate(-32deg)}.guide-caption{font-size:13px;line-height:1.5;color:#62676f;margin:12px 0 0}.logo-donts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#ddd;border:1px solid #ddd}.logo-donts>div{background:#fff;padding:18px}.logo-donts strong{display:block;margin-top:10px;font-size:13px}.dont-preview{height:130px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.dont-preview img{width:150px}.dont-preview.stretch img{transform:scaleX(1.45)}.dont-preview.rotate img{transform:rotate(-12deg)}.dont-preview.shadow img{filter:drop-shadow(8px 8px 4px rgba(215,25,32,.55))}.dont-preview.opacity img{opacity:.28}.dont-preview.crowded{gap:2px;font:900 15px/1 var(--font-brand,sans-serif)}.dont-preview.crowded img{width:120px}.dont-preview.boxed img{width:120px;border:8px solid #1255a6;padding:10px;border-radius:24px}.logo-lines img{display:block;width:120px;max-height:64px;object-fit:contain;margin:0 0 14px}.logo-lines.line{display:block}.logo-final-rules{margin-top:28px}@media(max-width:960px){.logo-use-grid,.logo-min-grid,.clearspace-grid,.logo-color-policy,.background-grid,.logo-donts{grid-template-columns:1fr}.logo-color-allowed{border-right:0;border-bottom:1px solid #ddd}.blocked-colors{grid-template-columns:repeat(2,1fr)}.background-grid{gap:1px}.logo-donts{gap:1px}.logo-guide-title{grid-template-columns:34px 1fr}}
'''
    styles.write_text(css, encoding='utf-8')

md = markdown.read_text(encoding='utf-8')
start = md.index('## 11. Logo e assinatura')
end = md.index('\n---\n\n## 12. Fotografia', start)
section = r'''## 11. Logo e assinatura

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

Assinatura prioritária da ONCI. Usar em cabeçalhos, comunicação institucional, embalagens, materiais de patrocínio e qualquer aplicação com largura suficiente.

#### Símbolo — `symbol.svg`

Marca isolada para áreas compactas e contextos em que ONCI já está identificada. Não deve substituir indiscriminadamente a assinatura principal.

#### Perfil — `perfil.svg`

Aplicação quadrada preta com símbolo branco para avatar, perfil social, favicon e superfícies quadradas equivalentes.

### Área de proteção — Proposta operacional v0.2

Até existir uma construção geométrica final assinada para produção, usar **X = 25% da altura total do ativo** como clear space mínimo em todos os lados.

- nenhum texto, borda, fotografia, ícone ou outro logo entra em X;
- no `perfil.svg`, X começa fora do quadrado preto, porque o quadrado faz parte do asset;
- aumentar o espaço é permitido; reduzir abaixo de X não é recomendado.

### Redução mínima — Proposta operacional v0.2

**Digital:**

- `logo.svg`: 96 px de largura mínima;
- `symbol.svg`: 24 px de largura mínima;
- `perfil.svg`: 32 × 32 px mínimo.

**Ponto de partida para material impresso:**

- logo: 25 mm de largura;
- símbolo: 8 mm de largura;
- perfil: 10 mm.

Bordado, silk, transfer, etiqueta e impressão devem passar por prova física antes de produção em escala. Se a assinatura perder definição, trocar para símbolo/perfil em vez de reduzir além do limite.

### Cores oficiais da marca gráfica

Os arquivos recebidos definem hoje uma marca **monocromática**:

- `logo.svg` — preto;
- `symbol.svg` — preto;
- `perfil.svg` — preto + branco.

As cores Vermelho ONCI, Azul ONCI, Amarelo ONCI, Laranja ONCI e Terra ONCI pertencem ao sistema visual, **mas não são automaticamente versões de cor do logo**.

#### Não usar dentro do logo enquanto não houver arquivo oficial

- Vermelho `#D71920`;
- Azul `#1255A6`;
- Amarelo `#F2B705`;
- Laranja `#E86A17`;
- Terra `#8C3B20`;
- degradês;
- duas ou mais cores na mesma assinatura;
- transparência/opacidade reduzida;
- contornos, sombras, glow, bevel ou texturas.

A cor deve entrar **ao redor** da marca: fundo, fotografia, faixa, CTA, dados e elementos da frente Desempenho/Equipes/Raízes.

### Fundos para o `logo.svg` preto — Regra operacional

**Fundos recomendados atualmente:**

- Branco `#FFFFFF`;
- Surface `#F5F5F5`;
- Amarelo ONCI `#F2B705`;
- Laranja ONCI `#E86A17`;
- Vermelho ONCI `#D71920`.

**Não aplicar diretamente o logo preto sobre:**

- Preto `#000000`;
- Surface Dark `#1A1A1A`;
- Azul ONCI `#1255A6`;
- Azul Escuro `#0B3468`;
- Vermelho Escuro `#A80F15`;
- Terra ONCI `#8C3B20`.

Nesses fundos, não criar uma versão branca improvisada via CSS, filtro ou editor. Usar `perfil.svg` quando a aplicação quadrada for adequada ou criar futuramente um **asset negativo oficial**.

### Usos incorretos

- não redesenhar a marca com a fonte 1797 ou qualquer outra fonte;
- não esticar ou comprimir;
- não inclinar/rotacionar além do desenho original;
- não aplicar sombra, contorno, glow, bevel ou textura;
- não reduzir opacidade;
- não colocar a marca dentro de círculos, cápsulas, escudos ou caixas inventadas;
- não invadir a área X;
- não cortar `logo.svg` para fabricar um símbolo ou avatar;
- não usar `symbol.svg` como ícone genérico de interface sem função de marca.

### Aplicação nas três frentes

- **ONCI Desempenho:** vermelho, preto e branco mudam a atmosfera da composição; o logo continua no asset oficial.
- **ONCI Equipes:** vermelho e azul convivem com escudos e uniformes; a ONCI não deve ser recolorida para combinar com cada parceiro.
- **ONCI Raízes:** amarelo, laranja e terra entram em superfície, fotografia, matéria e narrativa; não pintar o logo com essas cores.

### O que ainda precisa de validação final de produção

- construção geométrica e unidade X definitiva;
- prova final das reduções mínimas por técnica física;
- versão negativa oficial do logo/símbolo, se necessária;
- regras formais sobre fotografia complexa;
- lockups de ONCI Desempenho, ONCI Equipes e ONCI Raízes.
'''
md = md[:start] + section + md[end:]
md = md.replace('- `apps/docs/public/brand` — assets oficiais quando forem incorporados.', '- `apps/docs/public/brand` — assets oficiais da marca ONCI.')
md = md.replace('1. Incorporar logo vetorial oficial e suas variações.\n2. Fechar propósito, missão e visão em redação final.', '1. Validar clear space e redução mínima em provas físicas.\n2. Criar versão negativa oficial se houver necessidade real.\n3. Fechar propósito, missão e visão em redação final.')
markdown.write_text(md, encoding='utf-8')

brand_readme.write_text(r'''# Assets oficiais da marca ONCI

Este diretório contém a marca gráfica oficial da ONCI. Não reconstruir, recolorir ou alterar os vetores.

## Arquivos e uso

- `logo.svg` — assinatura principal; primeira escolha em comunicação institucional, site, embalagem e patrocínio.
- `symbol.svg` — marca isolada para espaço compacto e contexto em que ONCI já esteja identificada.
- `perfil.svg` — aplicação quadrada oficial para avatar, perfil, favicon e superfícies equivalentes.

## Clear space — padrão operacional v0.2

Usar **X = 25% da altura total do ativo** como espaço livre mínimo em todos os lados. No `perfil.svg`, X começa fora do quadrado preto.

## Redução mínima — padrão operacional v0.2

Digital: logo 96 px de largura; símbolo 24 px de largura; perfil 32 × 32 px. Para impressão, começar em 25 mm / 8 mm / 10 mm e validar a técnica em prova física.

## Cores

A marca gráfica atual é monocromática: logo e símbolo pretos; perfil preto + branco.

**Não recolorir** a marca com Vermelho ONCI, Azul ONCI, Amarelo ONCI, Laranja ONCI, Terra ONCI, degradês ou misturas de cor sem um novo asset oficial aprovado.

Para o logo preto, priorizar Branco, Surface, Amarelo ONCI, Laranja ONCI e Vermelho ONCI. Evitar Preto, Surface Dark, Azul ONCI, Azul Escuro, Vermelho Escuro e Terra ONCI. Em fundo escuro, não fabricar versão branca via CSS/filtro; usar `perfil.svg` quando adequado ou uma futura versão negativa oficial.

## Não fazer

- esticar, comprimir ou rotacionar;
- aplicar sombra, contorno, glow, bevel, textura ou baixa opacidade;
- invadir o clear space;
- colocar dentro de formas inventadas;
- recortar um asset para fabricar outro;
- reconstruir o logo com tipografia.

O guia visual completo fica em **Brand Book → Logo e assinatura** na documentação publicada e a especificação textual em `docs/brand-book.md`.
''', encoding='utf-8')
