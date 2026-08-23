import type { ReactNode } from 'react';
import './brand-assets.css';
import LogoGuide from './LogoGuide';

function PageHead({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-head"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>;
}

function Section({ title, children, note }: { title: string; children: ReactNode; note?: string }) {
  return <section className="doc-section"><div className="section-heading"><h2>{title}</h2>{note && <p>{note}</p>}</div>{children}</section>;
}

const asset = (file: string) => `${import.meta.env.BASE_URL}brand/${file}`;

const palette = [
  ['Preto ONCI', 'contrast', '#000000', 'Estrutura, texto e fundos de alto contraste.'],
  ['Branco', 'base', '#FFFFFF', 'Canvas, respiro e contraste.'],
  ['Vermelho ONCI', 'onci-red', '#D71920', 'Energia principal, ação e Desempenho.'],
  ['Azul ONCI', 'onci-blue', '#1255A6', 'Equipes e contraste secundário.'],
  ['Amarelo ONCI', 'onci-yellow', '#F2B705', 'Raízes e destaque solar.'],
  ['Laranja ONCI', 'onci-orange', '#E86A17', 'Raízes, calor e transição.'],
  ['Terra ONCI', 'onci-earth', '#8C3B20', 'Raízes e apoio editorial.'],
];

const personality = [
  ['Forte', 'Sem ser agressiva.'],
  ['Direta', 'Sem ser fria.'],
  ['Energética', 'Sem ser barulhenta o tempo todo.'],
  ['Competitiva', 'Sem diminuir o adversário.'],
  ['Brasileira', 'Sem recorrer a clichês nacionais.'],
  ['Coletiva', 'Sem perder a ambição individual.'],
  ['Contemporânea', 'Sem seguir tendências que apaguem sua identidade.'],
];

export default function BrandBook() {
  return <>
    <PageHead eyebrow="Marca / Brand Book" title="A ONCI antes da interface." description="O Brand Book é a primeira camada do sistema: define por que a ONCI existe, como se posiciona, como fala e como deve ser reconhecida. O Design System transforma essas decisões em produto digital." />

    <div className="hero-system">
      <div className="hero-words"><span>FORÇA.</span><span>MOVIMENTO.</span><span>RAIZ.</span></div>
      <div className="hero-grid">
        <div><small>Categoria</small><strong>Artigos esportivos</strong></div>
        <div><small>Território</small><strong>Performance + casual</strong></div>
        <div><small>Frentes</small><strong>Desempenho · Equipes · Raízes</strong></div>
        <div><small>Identidade</small><strong>Assets oficiais incorporados</strong></div>
      </div>
    </div>

    <Section title="01. A marca" note="Núcleo já definido para orientar produto, comunicação e experiência.">
      <div className="brand-identity-showcase" aria-label="Identidade visual oficial ONCI">
        <div className="brand-identity-primary">
          <span>ASSINATURA PRINCIPAL</span>
          <div className="brand-identity-primary__canvas">
            <img src={asset('logo.svg')} alt="Logo principal oficial ONCI" />
          </div>
          <p>Esta é a assinatura principal da ONCI e deve ser a primeira escolha sempre que houver espaço suficiente.</p>
        </div>
        <div className="brand-identity-secondary">
          <div className="brand-identity-mark">
            <span>SÍMBOLO</span>
            <div className="brand-identity-mark__canvas light"><img src={asset('symbol.svg')} alt="Símbolo oficial ONCI" /></div>
            <p>Uso compacto quando a marca já estiver reconhecida no contexto.</p>
          </div>
          <div className="brand-identity-mark">
            <span>PERFIL</span>
            <div className="brand-identity-mark__canvas dark"><img src={asset('perfil.svg')} alt="Aplicação oficial de perfil ONCI" /></div>
            <p>Avatar, favicon, redes sociais e outras superfícies quadradas.</p>
          </div>
        </div>
      </div>
      <div className="principles-list">
        <div className="principle"><span>01</span><div><h2>ONCI</h2><p><code>DEFINIDO</code> — Nome curto que remete à <strong>onça</strong>, buscando memória rápida, sonoridade forte e uma terminação marcante. A onça é referência de presença, potência, precisão e origem brasileira, sem precisar virar um clichê visual obrigatório.</p></div></div>
        <div className="principle"><span>02</span><div><h2>Categoria</h2><p><code>DEFINIDO</code> — Marca brasileira de artigos esportivos com atuação entre <strong>performance e casual</strong>, começando por vestuário esportivo básico e evoluindo para um ecossistema mais amplo de produto, equipes e experiências esportivas.</p></div></div>
        <div className="principle"><span>03</span><div><h2>Essência</h2><p><strong>Performance. Pertencimento. Raiz.</strong> A ONCI busca desempenho, cresce junto das pessoas e carrega identidade brasileira própria.</p></div></div>
      </div>
    </Section>

    <Section title="02. Por que a ONCI existe" note="Formulações estratégicas propostas; ainda podem ser refinadas antes de virarem texto institucional definitivo.">
      <div className="principles-list">
        <div className="principle"><span>01</span><div><h2>Propósito</h2><p><code>PROPOSTA</code> — Dar força ao movimento e crescer junto de quem pratica o esporte.</p></div></div>
        <div className="principle"><span>02</span><div><h2>Missão</h2><p><code>PROPOSTA</code> — Criar produtos e experiências esportivas funcionais, desejáveis e acessíveis, com identidade brasileira, apoiando indivíduos e equipes na evolução dentro e fora da competição.</p></div></div>
        <div className="principle"><span>03</span><div><h2>Visão</h2><p><code>PROPOSTA</code> — Ser uma marca esportiva brasileira reconhecida por performance, cultura e capacidade de construir relações de longo prazo com atletas, equipes e comunidades.</p></div></div>
        <div className="principle"><span>04</span><div><h2>Ambição</h2><p><code>DIREÇÃO DEFINIDA</code> — Construir uma marca com personalidade própria e presença em desempenho e casual, aprendendo com a escala e consistência de grandes marcas esportivas sem copiar seus códigos proprietários.</p></div></div>
      </div>
    </Section>

    <Section title="03. Três forças, uma marca" note="As frentes são expressões da ONCI; não são marcas independentes.">
      <div className="brand-lines">
        <div className="line performance"><div className="line-name">ONCI <b>DESEMPENHO</b></div><p><strong>Preto, branco e vermelho.</strong> Produto, velocidade, precisão, competição, tecnologia, materiais e evolução do atleta.</p></div>
        <div className="line teams"><div className="line-name">ONCI <b>EQUIPES</b></div><p><strong>Vermelho, azul e branco.</strong> Clubes, escolas, equipes, uniformes, campeonatos, projetos personalizados e esporte de base.</p></div>
        <div className="line roots"><div className="line-name">ONCI <b>RAÍZES</b></div><p><strong>Preto, amarelos, laranja e terra.</strong> Brasil, natureza, materialidade, território, histórias, colaborações e casual editorial.</p></div>
      </div>
    </Section>

    <Section title="04. Posicionamento" note="A diferenciação deve vir da consistência entre produto, visual e presença real no esporte.">
      <div className="two-col-text">
        <p><strong>Território:</strong> roupa esportiva funcional, cultura esportiva, uso casual, times e instituições, formação de atletas e identidade brasileira contemporânea.</p>
        <p><strong>Identidade brasileira sem caricatura:</strong> a origem deve ser reconhecível sem reduzir o Brasil a símbolos óbvios ou tendências passageiras.</p>
        <p><strong>Indivíduo + equipe:</strong> a ONCI atende quem treina sozinho e também clubes, escolas e projetos esportivos.</p>
        <p><strong>Produto primeiro:</strong> design e comunicação existem para valorizar a peça, o atleta, o time e a história.</p>
      </div>
    </Section>

    <Section title="05. Público">
      <div className="principles-list">
        {[
          ['Atleta em evolução', 'Pessoas que treinam, competem ou praticam esporte com frequência e querem produto funcional com identidade.'],
          ['Jovem atleta', 'Público infanto-juvenil ligado a escolas, clubes, campeonatos estaduais e nacionais e programas de formação.'],
          ['Equipes e instituições', 'Clubes, escolas, projetos esportivos, academias, eventos e organizações que precisam de uniformes, identidade e fornecimento.'],
          ['Esporte como estilo de vida', 'Pessoas que usam referências esportivas no cotidiano e transitam entre performance e casual.'],
        ].map(([title, text], index) => <div className="principle" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{text}</p></div></div>)}
      </div>
    </Section>

    <Section title="06. Personalidade" note="Comportamento da marca em qualquer canal.">
      <div className="principles-list">{personality.map(([title, text], index) => <div className="principle" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{text}</p></div></div>)}</div>
      <div className="rule-callout"><strong>HERÓI + TIME</strong><p><code>PROPOSTA</code> — O comportamento combina evolução, esforço e performance com pertencimento, proximidade e construção coletiva.</p></div>
    </Section>

    <Section title="07. Voz e tom" note="Frases curtas. Verbos ativos. Pouca ornamentação. Segurança. Ritmo.">
      <div className="two-col-text">
        <p><strong>Falar de ação antes de abstração.</strong> Preferir português natural, texto simples e memorável e termos técnicos somente quando trouxerem precisão.</p>
        <p><strong>Tratar o público como capaz.</strong> Atleta, equipe e consumidor não precisam de motivação genérica.</p>
        <p><strong>Evitar:</strong> excesso de adjetivos, linguagem militarizada gratuita, humilhação do adversário, excesso de inglês e promessas que o produto não sustenta.</p>
        <p><strong>Direções editoriais, não slogans aprovados:</strong> “O jogo começa antes do apito.” · “Feito para entrar em movimento.” · “Da base para o próximo nível.”</p>
      </div>
    </Section>

    <Section title="08. Sistema visual" note="Branco e preto formam a estrutura. Cor entra com intenção.">
      <div className="color-list">{palette.map(([name, token, hex, usage]) => <div className="color-row" key={token}><div className="color-swatch" style={{ background: hex }}/><div><strong>{name}</strong><code>color.{token}</code></div><code>{hex}</code><p>{usage}</p></div>)}</div>
      <div className="font-showcase" style={{ marginTop: 36 }}>
        <div className="font-card primary"><span>Interface</span><h2>Nunito Sans</h2><p>Clareza para navegação, produto, formulários, dados, documentação e textos longos.</p></div>
        <div className="font-card brand"><span>Marca</span><h2>1797</h2><p>FORÇA<br/>EM MOVIMENTO.</p><small>A família é referenciada, mas o arquivo de fonte não é redistribuído neste repositório.</small></div>
      </div>
    </Section>

    <LogoGuide asset={asset} />

    <Section title="10. Fotografia e direção de arte" note="Movimento real. Produto visível. Contexto verdadeiro.">
      <div className="research-list">
        <div className="research-item"><span>01</span><div><h2>Desempenho</h2><p>Ação, detalhe técnico, suor, textura e esforço sem artificialidade; contraste alto e composição precisa.</p></div></div>
        <div className="research-item"><span>02</span><div><h2>Equipes</h2><p>Grupo, uniformes completos, gesto coletivo, arquibancada, escola, quadra, campo e bastidores.</p></div></div>
        <div className="research-item"><span>03</span><div><h2>Raízes</h2><p>Paisagem, matéria, cor, textura, território brasileiro específico, pessoas e histórias reais e colaborações culturais com autoria visível.</p></div></div>
      </div>
    </Section>

    <Section title="11. Cultura e referências" note="Inspiração não é cópia."><div className="rule-callout"><strong>CONTEXTO.</strong><p>Referências a artesanatos e culturas indígenas devem ser tratadas com responsabilidade. Evitar copiar grafismos específicos ou identificáveis sem contexto, autorização e colaboração. Quando a inspiração for direta, priorizar parceria e crédito.</p></div></Section>

    <Section title="12. Produto e experiência"><div className="two-col-text"><p><strong>Produto primeiro:</strong> fotografia grande, preço e variações claros, filtros objetivos e CTA direto.</p><p><strong>Coerência multicanal:</strong> web, app, WordPress, campanha e experiências futuras compartilham o mesmo vocabulário visual.</p><p><strong>Acessibilidade:</strong> faz parte da definição de cada componente.</p><p><strong>Sistema:</strong> decisões recorrentes viram token, variante, componente ou padrão reutilizável.</p></div></Section>

    <Section title="13. Esporte de base e comunidade" note="Direção estratégica já presente na construção da ONCI.">
      <div className="research-list"><div className="research-item"><span>01</span><div><h2>Eventos</h2><p>Patrocínio de eventos esportivos infanto-juvenis estaduais e nacionais.</p></div></div><div className="research-item"><span>02</span><div><h2>Equipes</h2><p>Fornecimento de uniformes e relacionamento com escolas, clubes e projetos esportivos.</p></div></div><div className="research-item"><span>03</span><div><h2>Atletas em formação</h2><p>Apoio a atletas e possibilidade de bolsas ou parcerias educacionais/esportivas estruturadas.</p></div></div></div>
      <div className="rule-callout"><strong>DA BASE.</strong><p>A ONCI não chega apenas quando o atleta vence. A marca pode participar da construção do caminho.</p></div>
    </Section>

    <Section title="14. Regras de expressão"><div className="two-col-text"><p><strong>FAZER:</strong> produto em primeiro plano; contraste forte; grids claros; cor com intenção; Brasil contemporâneo; pessoas e comunidades com contexto real.</p><p><strong>EVITAR:</strong> estética fitness genérica; Brasil reduzido a clichês; cultura como ornamento; efeitos gratuitos no logo; copiar códigos proprietários de concorrentes.</p></div></Section>

    <Section title="15. Governança" note="Marca define intenção; Design System transforma intenção em código.">
      <div className="token-map"><div><code>DEFINIDO</code><span>Decisão consolidada que já pode orientar implementação.</span></div><div><code>PROPOSTA</code><span>Formulação que organiza a estratégia, mas pode ser refinada.</span></div><div><code>PENDENTE</code><span>Depende de validação ou decisão futura.</span></div><div><code>FONTE DE VERDADE</code><span>O conteúdo completo e versionável permanece em docs/brand-book.md.</span></div></div>
      <div className="do-not-copy" style={{ marginTop: 24 }}><span>Assets oficiais incorporados</span><span>Clear space operacional</span><span>Redução mínima operacional</span><span>Versões cromáticas futuras</span><span>Lockups das frentes</span><span>Aprovação final de missão e visão</span></div>
    </Section>
  </>;
}
