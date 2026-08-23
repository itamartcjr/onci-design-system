type LogoGuideProps = {
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
