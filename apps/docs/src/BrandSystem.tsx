import { brandGroups, brandModuleById, brandModules, type BrandField, type BrandModule, type BrandStatus } from './brand/brandData';
import { campoEmPortugues, grupoEmPortugues, moduloEmPortugues, textoEmPortugues } from './brand/ptBR';
import './brand-system.css';

export type BrandSelection = { moduleId: string; fieldIndex: number } | null;

type Props = {
  selection: BrandSelection;
  onSelect: (selection: BrandSelection) => void;
};

const asset = (name: string) => `${import.meta.env.BASE_URL}brand/${name}`;

const statusLabel: Record<BrandStatus, string> = {
  definido: 'Definido',
  proposta: 'Proposta',
  pendente: 'Pendente',
};

function Status({ value }: { value: BrandStatus }) {
  return <span className="brand-status" data-status={value}>{statusLabel[value]}</span>;
}

function BrandOverview({ onSelect }: { onSelect: Props['onSelect'] }) {
  const definidos = brandModules.reduce((total, module) => total + module.fields.filter((field) => field.status === 'definido').length, 0);
  const propostas = brandModules.reduce((total, module) => total + module.fields.filter((field) => field.status === 'proposta').length, 0);
  const pendentes = brandModules.reduce((total, module) => total + module.fields.filter((field) => field.status === 'pendente').length, 0);

  return <>
    <header className="brand-overview-hero">
      <div className="brand-overview-copy">
        <p className="brand-kicker">ONCI / Marca</p>
        <h1>Performance. Pertencimento. Raiz.</h1>
        <p>Marca brasileira de artigos esportivos criada para unir desempenho, cultura esportiva, equipes e identidade brasileira contemporânea.</p>
        <div className="brand-overview-signals"><span>DESEMPENHO</span><span>EQUIPES</span><span>RAÍZES</span></div>
      </div>
      <div className="brand-overview-mark"><img src={asset('logo.svg')} alt="ONCI"/><small>Marca ONCI</small></div>
    </header>

    <section className="brand-board-section">
      <header><span>01</span><div><h2>Frentes da marca</h2></div></header>
      <div className="brand-group-map">
        <article><small>ONCI</small><strong>Desempenho</strong><p>Preto, branco e vermelho. Treino, corrida, competição, tecnologia de produto e alta energia.</p></article>
        <article><small>ONCI</small><strong>Equipes</strong><p>Vermelho, azul e branco. Clubes, escolas, times, uniformes, campeonatos e projetos esportivos.</p></article>
        <article><small>ONCI</small><strong>Raízes</strong><p>Preto, amarelo, laranja e terra. Brasil, território, cultura, materialidade, histórias e expressão casual.</p></article>
      </div>
    </section>

    <section className="brand-board-section">
      <header><span>02</span><div><h2>Documentação da marca</h2></div></header>
      <div className="brand-module-grid">
        {brandModules.map((module) => {
          const defined = module.fields.filter((field) => field.status === 'definido').length;
          const proposed = module.fields.filter((field) => field.status === 'proposta').length;
          const pending = module.fields.length - defined - proposed;
          return <button key={module.id} onClick={() => onSelect({ moduleId: module.id, fieldIndex: 0 })}>
            <span>{module.number}</span>
            <small>{grupoEmPortugues(module.group)}</small>
            <strong>{moduloEmPortugues(module.id, module.title)}</strong>
            <footer><b>{defined} definidos</b><b>{proposed} propostas</b><b>{pending} pendentes</b></footer>
          </button>;
        })}
      </div>
    </section>

    <section className="brand-board-section">
      <header><span>03</span><div><h2>Estado atual</h2></div></header>
      <div className="brand-source-board">
        <article><small>DEFINIDO</small><strong>{definidos}</strong><p>Decisões que já podem orientar marca, produto e comunicação.</p></article>
        <article><small>PROPOSTA</small><strong>{propostas}</strong><p>Direções já formuladas que ainda podem ser refinadas.</p></article>
        <article><small>PENDENTE</small><strong>{pendentes}</strong><p>Itens que ainda não possuem uma decisão ONCI fechada.</p></article>
      </div>
    </section>
  </>;
}

function LogoVisual() {
  return <div className="logo-doc-demo">
    <article className="wide"><span>ASSINATURA PRINCIPAL</span><div><img src={asset('logo.svg')} alt="Logo principal ONCI"/></div></article>
    <article><span>SÍMBOLO</span><div><img src={asset('symbol.svg')} alt="Símbolo ONCI"/></div></article>
    <article className="dark"><span>PERFIL</span><div><img src={asset('perfil.svg')} alt="Perfil ONCI"/></div></article>
  </div>;
}

function ColorVisual() {
  return <div className="brand-visual-color">
    <div className="black"><img src={asset('logo.svg')} alt="ONCI"/></div>
    <div className="red"/>
    <div className="blue"/>
    <div className="roots"><i/><i/><i/></div>
  </div>;
}

function VisualField({ module, field }: { module: BrandModule; field: BrandField }) {
  if (module.id === 'visual-brand-identity') {
    const logoFields = new Set(['Primary Logo','Secondary Logo','Symbol','Wordmark','Logo variations','Positive','Negative','Monochrome','Clear Space','Minimum Size','Background Usage','Incorrect Usage','Co-branding','Logo Decision Tree']);
    return logoFields.has(field.name) ? <LogoVisual/> : <ColorVisual/>;
  }
  if (module.id === 'typography') return <div className="brand-visual-type"><div><small>1797</small><strong>MOVIMENTO<br/>SEM RUÍDO.</strong></div><div><small>NUNITO SANS</small><h3>Clareza para produto, navegação e informação.</h3><p>A fonte de marca cria impulso. A fonte de interface organiza a leitura.</p></div></div>;
  if (module.id === 'photography') return <div className="brand-visual-photo"><div className="photo-action"><span>MOVIMENTO REAL</span></div><div className="photo-product"><span>PRODUTO VISÍVEL</span></div><div className="photo-context"><span>CONTEXTO VERDADEIRO</span></div></div>;
  if (module.id === 'verbal-identity' || module.id === 'messaging' || module.id === 'storytelling') return <div className="brand-visual-verbal"><small>LINGUAGEM ONCI</small><strong>AÇÃO ANTES<br/>DA ABSTRAÇÃO.</strong><div><span>curta</span><span>ativa</span><span>segura</span><span>sem excesso</span></div></div>;
  if (module.id === 'motion') return <div className="brand-visual-motion"><div><i/><span>ENTRADA</span></div><div><i/><span>RESPOSTA</span></div><div><i/><span>SAÍDA</span></div></div>;
  if (module.group === 'Experience') return <div className="brand-visual-experience"><article><small>01</small><strong>PRODUTO</strong></article><b>→</b><article><small>02</small><strong>ATLETA</strong></article><b>→</b><article><small>03</small><strong>EQUIPE</strong></article><b>→</b><article><small>04</small><strong>COMUNIDADE</strong></article></div>;
  if (module.group === 'AI & Governance') return <div className="brand-visual-governance"><div><span>MARCA</span><strong>ONCI</strong></div><b>→</b><div><span>ESTADO</span><strong>{statusLabel[field.status]}</strong></div><b>→</b><div><span>USO</span><strong>{field.status === 'pendente' ? 'A DEFINIR' : 'ATUAL'}</strong></div></div>;
  return <div className="brand-visual-statement"><small>{module.number} — {moduloEmPortugues(module.id, module.title)}</small><strong>{field.status === 'pendente' ? 'AINDA NÃO DEFINIDO.' : textoEmPortugues(field.decision)}</strong></div>;
}

function RelatedFields({ module, fieldIndex, onSelect }: { module: BrandModule; fieldIndex: number; onSelect: Props['onSelect'] }) {
  return <div className="brand-question-grid">
    {module.fields.map((item, index) => <button key={`${module.id}-${item.name}`} className={index === fieldIndex ? 'active' : ''} onClick={() => onSelect({ moduleId: module.id, fieldIndex: index })}>
      <span>{module.number}.{String(index + 1).padStart(2,'0')}</span>
      <p>{campoEmPortugues(item.name)}</p>
    </button>)}
  </div>;
}

function BrandDetail({ module, field, fieldIndex, onSelect }: { module: BrandModule; field: BrandField; fieldIndex: number; onSelect: Props['onSelect'] }) {
  const fieldName = campoEmPortugues(field.name);
  const decision = field.status === 'pendente' ? 'Ainda não definido para a ONCI.' : textoEmPortugues(field.decision);

  return <>
    <header className="brand-detail-head">
      <div className="brand-detail-meta"><span>{module.number}.{String(fieldIndex + 1).padStart(2,'0')}</span><span>{grupoEmPortugues(module.group)}</span><Status value={field.status}/></div>
      <h1>{fieldName}</h1>
      <p>{decision}</p>
    </header>

    <section className="brand-board-section">
      <VisualField module={module} field={field}/>
    </section>

    <section className="brand-board-section">
      <header><span>01</span><div><h2>Diretriz atual</h2></div></header>
      <div className="brand-decision-card" data-status={field.status}>
        <Status value={field.status}/>
        <p>{decision}</p>
        {field.evidence && <small>{textoEmPortugues(field.evidence)}</small>}
      </div>
    </section>

    <section className="brand-board-section">
      <header><span>02</span><div><h2>{moduloEmPortugues(module.id, module.title)}</h2></div></header>
      <RelatedFields module={module} fieldIndex={fieldIndex} onSelect={onSelect}/>
    </section>
  </>;
}

export default function BrandSystem({ selection, onSelect }: Props) {
  if (!selection) return <BrandOverview onSelect={onSelect}/>;
  const module = brandModuleById(selection.moduleId);
  if (!module) return <BrandOverview onSelect={onSelect}/>;
  const safeIndex = Math.max(0, Math.min(selection.fieldIndex, module.fields.length - 1));
  return <BrandDetail module={module} field={module.fields[safeIndex]} fieldIndex={safeIndex} onSelect={onSelect}/>;
}
