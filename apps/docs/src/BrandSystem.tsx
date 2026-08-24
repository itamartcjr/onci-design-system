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

const textoDoCampo = (value: string, module: BrandModule, field: BrandField) => textoEmPortugues(
  value
    .replaceAll(field.name, campoEmPortugues(field.name))
    .replaceAll(module.title, moduloEmPortugues(module.id, module.title)),
);

function Status({ value }: { value: BrandStatus }) {
  return <span className="brand-status" data-status={value}>{statusLabel[value]}</span>;
}

function BrandOverview({ onSelect }: { onSelect: Props['onSelect'] }) {
  return <>
    <header className="brand-overview-hero">
      <div className="brand-overview-copy">
        <p className="brand-kicker">ONCI / Marca</p>
        <h1>A marca antes do sistema.</h1>
        <p>Marca e Sistema de Design são áreas diferentes. Aqui ficam essência, estratégia, públicos, linguagem, identidade visual, experiência e governança da ONCI.</p>
        <div className="brand-overview-signals"><span>DESEMPENHO</span><span>PERTENCIMENTO</span><span>RAIZ</span></div>
      </div>
      <div className="brand-overview-mark"><img src={asset('logo.svg')} alt="ONCI"/><small>Estrutura da marca · documento vivo</small></div>
    </header>

    <section className="brand-board-section">
      <header><span>01</span><div><h2>Como a área de Marca está organizada</h2><p>A arquitetura segue o projeto de referência: grupos → módulos → decisões. O conteúdo é ONCI.</p></div></header>
      <div className="brand-group-map">
        {brandGroups.map((group) => <article key={group.label}>
          <small>{String(group.min).padStart(2,'0')}—{String(group.max).padStart(2,'0')}</small>
          <strong>{grupoEmPortugues(group.label)}</strong>
          <p>{brandModules.filter((module) => module.group === group.label).map((module) => moduloEmPortugues(module.id, module.title)).join(' · ')}</p>
        </article>)}
      </div>
    </section>

    <section className="brand-board-section">
      <header><span>02</span><div><h2>20 módulos</h2><p>Cada módulo contém os itens que precisam ser decididos, documentados e governados. Nenhum campo pendente é preenchido artificialmente.</p></div></header>
      <div className="brand-module-grid">
        {brandModules.map((module) => {
          const defined = module.fields.filter((field) => field.status === 'definido').length;
          const proposed = module.fields.filter((field) => field.status === 'proposta').length;
          return <button key={module.id} onClick={() => onSelect({ moduleId: module.id, fieldIndex: 0 })}>
            <span>{module.number}</span><small>{grupoEmPortugues(module.group)}</small><strong>{moduloEmPortugues(module.id, module.title)}</strong><p>{textoEmPortugues(module.summary)}</p>
            <footer><b>{defined} definidos</b><b>{proposed} propostas</b><b>{module.fields.length - defined - proposed} pendentes</b></footer>
          </button>;
        })}
      </div>
    </section>

    <section className="brand-board-section">
      <header><span>03</span><div><h2>Fonte de verdade atual</h2><p>A estrutura não apaga o Manual da Marca existente. Ela distribui as decisões já tomadas pela estrutura completa da marca e torna as lacunas visíveis.</p></div></header>
      <div className="brand-source-board">
        <article><small>MARCA</small><strong>docs/brand-book.md</strong><p>Estratégia, frentes, personalidade, voz, fotografia, patrocínio e governança já discutidos.</p></article>
        <article><small>VISUAL</small><strong>theme.json + ativos oficiais</strong><p>Paleta, tipografia, composição e arquivos de marca que já existem no projeto.</p></article>
        <article><small>ESTADO</small><strong>Definido / Proposta / Pendente</strong><p>O sistema deixa explícito o que é decisão, o que é direção em validação e o que ainda precisa ser resolvido.</p></article>
      </div>
    </section>
  </>;
}

function VisualField({ module, field }: { module: BrandModule; field: BrandField }) {
  if (module.id === 'visual-brand-identity') return <div className="brand-visual-color"><div className="black"><img src={asset('logo.svg')} alt="ONCI"/></div><div className="red"/><div className="blue"/><div className="roots"><i/><i/><i/></div></div>;
  if (module.id === 'typography') return <div className="brand-visual-type"><div><small>1797</small><strong>MOVIMENTO<br/>SEM RUÍDO.</strong></div><div><small>NUNITO SANS</small><h3>Clareza para produto, navegação e informação.</h3><p>A fonte de marca cria impulso. A fonte de interface organiza a leitura.</p></div></div>;
  if (module.id === 'photography') return <div className="brand-visual-photo"><div className="photo-action"><span>MOVIMENTO REAL</span></div><div className="photo-product"><span>PRODUTO VISÍVEL</span></div><div className="photo-context"><span>CONTEXTO VERDADEIRO</span></div></div>;
  if (module.id === 'verbal-identity' || module.id === 'messaging' || module.id === 'storytelling') return <div className="brand-visual-verbal"><small>LINGUAGEM ONCI</small><strong>AÇÃO ANTES<br/>DA ABSTRAÇÃO.</strong><div><span>curta</span><span>ativa</span><span>segura</span><span>sem excesso</span></div></div>;
  if (module.id === 'motion') return <div className="brand-visual-motion"><div><i/><span>ENTRADA</span></div><div><i/><span>RESPOSTA</span></div><div><i/><span>SAÍDA</span></div></div>;
  if (module.group === 'Experience') return <div className="brand-visual-experience"><article><small>01</small><strong>PRODUTO</strong></article><b>→</b><article><small>02</small><strong>ATLETA</strong></article><b>→</b><article><small>03</small><strong>EQUIPE</strong></article><b>→</b><article><small>04</small><strong>COMUNIDADE</strong></article></div>;
  if (module.group === 'AI & Governance') return <div className="brand-visual-governance"><div><span>DECISÃO</span><strong>ONCI</strong></div><b>→</b><div><span>ESTADO</span><strong>{statusLabel[field.status]}</strong></div><b>→</b><div><span>USO</span><strong>REVISÁVEL</strong></div></div>;
  return <div className="brand-visual-statement"><small>{module.number} — {moduloEmPortugues(module.id, module.title)}</small><strong>{field.status === 'pendente' ? 'DECISÃO AINDA NÃO FECHADA.' : textoEmPortugues(field.decision)}</strong></div>;
}

function BrandDetail({ module, field, fieldIndex }: { module: BrandModule; field: BrandField; fieldIndex: number }) {
  const fieldName = campoEmPortugues(field.name);
  return <>
    <header className="brand-detail-head">
      <div className="brand-detail-meta"><span>{module.number}.{String(fieldIndex + 1).padStart(2,'0')}</span><span>{grupoEmPortugues(module.group)}</span><Status value={field.status}/></div>
      <h1>{fieldName}</h1>
      <p>{textoEmPortugues(module.summary)}</p>
    </header>

    <section className="brand-board-section brand-field-purpose">
      <header><span>01</span><div><h2>Definição</h2><p>O que este item precisa registrar dentro da marca.</p></div></header>
      <div className="brand-two-column"><p>{textoDoCampo(field.definition, module, field)}</p><aside><small>OBJETIVO</small><strong>{textoDoCampo(field.objective, module, field)}</strong></aside></div>
    </section>

    <section className="brand-board-section">
      <header><span>02</span><div><h2>Decisão ONCI</h2><p>A estrutura vem da referência. A resposta vem somente do que já foi definido para esta marca.</p></div></header>
      <VisualField module={module} field={field}/>
      <div className="brand-decision-card" data-status={field.status}><Status value={field.status}/><p>{textoEmPortugues(field.decision)}</p>{field.evidence && <small>{textoEmPortugues(field.evidence)}</small>}</div>
    </section>

    <section className="brand-board-section">
      <header><span>03</span><div><h2>Perguntas de validação</h2><p>Antes de promover uma proposta ou pendência para “Definido”, estas perguntas precisam ter resposta.</p></div></header>
      <div className="brand-question-grid">{field.questions.map((question, index) => <article key={question}><span>{String(index + 1).padStart(2,'0')}</span><p>{textoDoCampo(question, module, field)}</p></article>)}</div>
    </section>

    <section className="brand-board-section">
      <header><span>04</span><div><h2>Como apresentar</h2><p>A documentação da Marca também precisa ser visual e ensinável.</p></div></header>
      <div className="brand-presentation-rule"><strong>MOSTRAR → EXPLICAR → DELIMITAR</strong><p>{textoDoCampo(field.presentation, module, field)}</p></div>
    </section>

    <section className="brand-board-section">
      <header><span>05</span><div><h2>Referências internas</h2><p>As decisões deste campo devem continuar rastreáveis para as fontes da própria ONCI.</p></div></header>
      <div className="brand-source-board"><article><small>MANUAL DA MARCA</small><strong>docs/brand-book.md</strong><p>Fonte estratégica consolidada até aqui.</p></article><article><small>SISTEMA DE DESIGN</small><strong>packages/tokens + wp-onci</strong><p>Quando a decisão de marca precisar chegar ao produto.</p></article><article><small>GOVERNANÇA</small><strong>Estado explícito</strong><p>Nunca transformar uma hipótese em regra sem registrar a decisão.</p></article></div>
    </section>
  </>;
}

export default function BrandSystem({ selection, onSelect }: Props) {
  if (!selection) return <BrandOverview onSelect={onSelect}/>;
  const module = brandModuleById(selection.moduleId);
  if (!module) return <BrandOverview onSelect={onSelect}/>;
  const safeIndex = Math.max(0, Math.min(selection.fieldIndex, module.fields.length - 1));
  return <BrandDetail module={module} field={module.fields[safeIndex]} fieldIndex={safeIndex}/>;
}
