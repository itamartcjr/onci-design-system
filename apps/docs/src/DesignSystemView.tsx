import { useEffect, useMemo, useState } from 'react';
import SystemDocs from './SystemDocs';
import { pageLabel, type SystemPageKey } from './system/navigation';
import './design-system-tabs.css';

type TabKey = 'overview' | 'usage' | 'tokens' | 'code' | 'references';

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: 'overview', label: 'Visão geral' },
  { key: 'usage', label: 'Uso' },
  { key: 'tokens', label: 'Tokens' },
  { key: 'code', label: 'Código' },
  { key: 'references', label: 'Referências' },
];

const documentFlowPages = new Set<SystemPageKey>(['intro-overview','intro-principles','intro-how-to-use']);

const usageByArea = (page: SystemPageKey) => {
  if (page.startsWith('foundation-')) return {
    use: 'Use esta fundação sempre que uma decisão visual equivalente aparecer em mais de um componente, padrão ou plataforma.',
    avoid: 'Não crie uma segunda escala local para resolver um caso isolado. Antes, verifique se o valor existente já cobre a necessidade.',
    responsive: 'A fundação deve declarar o que permanece e o que muda entre computador, tablet e celular. Responsividade é comportamento, não miniaturização.',
    accessibility: 'Contraste, legibilidade, foco, movimento reduzido e tamanho de alvo fazem parte da regra, não são uma camada posterior.',
  };
  if (page.startsWith('component-')) return {
    use: 'Use o componente quando a ação ou informação tiver a mesma função semântica já documentada. Preserve anatomia, estados e hierarquia.',
    avoid: 'Não duplique um componente só para mudar cor, margem ou conteúdo. Prefira variante ou token quando a diferença for recorrente.',
    responsive: 'O componente pode mudar de largura, distribuição, densidade ou interação no celular sem perder função e acessibilidade.',
    accessibility: 'Estados de foco, teclado, desabilitado, carregamento, mensagens e alvo de toque devem continuar perceptíveis e operáveis.',
  };
  if (page.startsWith('pattern-')) return {
    use: 'Use o padrão para combinar componentes em um fluxo recorrente da loja, mantendo a lógica de compra e navegação previsível.',
    avoid: 'Não trate o padrão como uma captura rígida. Conteúdo, quantidade de itens e ponto de quebra podem mudar sem destruir sua estrutura.',
    responsive: 'Documente explicitamente a reorganização entre computador, tablet e celular, inclusive quando a interação muda de natureza.',
    accessibility: 'A ordem visual deve continuar coerente com a estrutura do documento, foco, leitura assistiva e mensagens de estado.',
  };
  if (page.startsWith('tokens-')) return {
    use: 'Use tokens para dar nome e intenção a decisões reutilizáveis e conectar marca, código e plataformas.',
    avoid: 'Não crie um token para cada valor isolado. Um token precisa representar uma decisão reutilizável ou uma relação estável.',
    responsive: 'Tokens podem apontar para valores diferentes por contexto quando a mudança de comportamento for parte do sistema.',
    accessibility: 'Tokens semânticos de foco, texto, retorno de estado e movimento reduzido ajudam a tornar a acessibilidade consistente entre componentes.',
  };
  return {
    use: 'Use esta página como exemplo aplicado do sistema ONCI, validando se a composição pode ser explicada pelos fundamentos e componentes existentes.',
    avoid: 'Não copie a composição como modelo universal quando o contexto de conteúdo ou produto pedir outra solução.',
    responsive: 'A expressão visual pode mudar por frente e tamanho de tela, preservando hierarquia, contraste e função.',
    accessibility: 'Toda aplicação final precisa manter foco, leitura, contraste e comportamento de interação documentados.',
  };
};

const codeByPage: Partial<Record<SystemPageKey, string>> = {
  'foundation-colors': `:root {\n  --onci-color-base: #FFFFFF;\n  --onci-color-contrast: #000000;\n  --onci-color-action-primary: #D71920;\n  --onci-color-border: #E5E7EB;\n}\n\n.product-action {\n  background: var(--onci-color-action-primary);\n  color: var(--onci-color-base);\n}`,
  'foundation-grid': `.onci-container {\n  width: min(100% - 48px, 1200px);\n  margin-inline: auto;\n}\n\n.onci-wide {\n  width: min(100% - 48px, 1400px);\n  margin-inline: auto;\n}\n\n/* A malha de colunas é operacional; validar por produto. */`,
  'foundation-motion': `:root {\n  --motion-menu: 120ms;\n  --motion-control: 160ms;\n  --motion-drawer: 220ms;\n  --motion-media: 320ms;\n  --motion-slide: 400ms;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n  }\n}`,
  'component-buttons': `.onci-button {\n  min-height: 52px;\n  border-radius: var(--radius-none);\n  font-family: var(--onci-font-brand);\n  font-style: italic;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n\n.onci-button svg {\n  fill: currentColor;\n  stroke: currentColor;\n}`,
  'component-navigation': `.onci-mega-menu__trigger {\n  min-height: 64px;\n}\n\n.onci-mega-menu__panel {\n  opacity: 0;\n  transform: translateY(-4px);\n  transition: opacity 120ms ease, transform 120ms ease;\n}`,
  'component-gallery': `.onci-product-gallery__grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px;\n}\n\n@media (max-width: 767px) {\n  .onci-product-gallery--mobile-slider .onci-product-gallery__grid {\n    display: flex;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n  }\n}`,
  'component-filters': `.onci-product-filters__drawer {\n  width: min(480px, 100vw);\n  transform: translateX(100%);\n  transition: transform 220ms ease;\n}\n\n.onci-product-filters.is-open .onci-product-filters__drawer {\n  transform: translateX(0);\n}`,
  'pattern-carousel': `.onci-campaign-hero__track {\n  transition: transform var(--onci-slides-transition-speed, 400ms) ease;\n}\n\n.onci-campaign-hero__track > .wp-block-onci-slide {\n  opacity: var(--onci-slides-inactive-opacity, .45);\n}`,
};

function UsagePanel({ page }: { page: SystemPageKey }) {
  const usage = usageByArea(page);
  return <section className="ds-tab-supplement">
    <div className="ds-tab-panel-head"><small>Uso</small><h2>Como aplicar {pageLabel(page)} sem quebrar o sistema.</h2></div>
    <div className="ds-usage-grid">
      <article><span>01</span><strong>Quando usar</strong><p>{usage.use}</p></article>
      <article><span>02</span><strong>Evite</strong><p>{usage.avoid}</p></article>
      <article><span>03</span><strong>Responsividade</strong><p>{usage.responsive}</p></article>
      <article><span>04</span><strong>Acessibilidade</strong><p>{usage.accessibility}</p></article>
    </div>
  </section>;
}

function CodePanel({ page }: { page: SystemPageKey }) {
  const code = codeByPage[page] ?? `import { onciTokens } from '@onci/tokens';\n\n// Use tokens semânticos primeiro.\n// Crie valor local somente quando a decisão não for reutilizável.\n\nconst exemplo = {\n  color: onciTokens.semantic.color.text.primary,\n  spacing: onciTokens.spacing.md,\n};`;
  return <section className="ds-tab-supplement">
    <div className="ds-tab-panel-head"><small>Código</small><h2>A documentação visual precisa chegar à implementação.</h2><p>Trecho de referência. O código real do componente continua sendo a fonte de verdade quando já existe no produto.</p></div>
    <div className="ds-code-board"><div className="ds-code-meta"><span>ONCI / {pageLabel(page)}</span><b>CSS / TS</b></div><pre><code>{code}</code></pre></div>
  </section>;
}

export default function DesignSystemView({ page, onNavigate }: { page: SystemPageKey; onNavigate: (key: SystemPageKey) => void }) {
  const [tab, setTab] = useState<TabKey>('overview');
  const usesTabs = !documentFlowPages.has(page);
  useEffect(() => setTab('overview'), [page]);
  const activeIndex = useMemo(() => tabs.findIndex((item) => item.key === tab), [tab]);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    let next = activeIndex;
    if (event.key === 'ArrowLeft') next = (activeIndex - 1 + tabs.length) % tabs.length;
    if (event.key === 'ArrowRight') next = (activeIndex + 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    setTab(tabs[next].key);
    requestAnimationFrame(() => document.getElementById(`ds-tab-${tabs[next].key}`)?.focus());
  };

  return <div className={`design-system-view ${usesTabs ? 'is-tabbed' : 'is-document-flow'}`} data-tab={tab}>
    <SystemDocs page={page} theme="base" onNavigate={onNavigate}/>
    {usesTabs && <div className="ds-page-tabs" role="tablist" aria-label={`Seções de ${pageLabel(page)}`}>
      {tabs.map((item) => <button
        id={`ds-tab-${item.key}`}
        key={item.key}
        type="button"
        role="tab"
        aria-selected={tab === item.key}
        tabIndex={tab === item.key ? 0 : -1}
        className={tab === item.key ? 'active' : ''}
        onClick={() => setTab(item.key)}
        onKeyDown={onTabKeyDown}
      >{item.label}</button>)}
    </div>}
    {usesTabs && tab === 'usage' && <UsagePanel page={page}/>} 
    {usesTabs && tab === 'code' && <CodePanel page={page}/>} 
  </div>;
}
