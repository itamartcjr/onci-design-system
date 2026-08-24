const replacements: Array<[RegExp, string]> = [
  [/Brand & Design System/gi, 'Marca e Sistema de Design'],
  [/Brand Book/gi, 'Manual da Marca'],
  [/Design System/gi, 'Sistema de Design'],
  [/Brand framework/gi, 'Estrutura da marca'],
  [/Visual Brand Identity/gi, 'Identidade visual da marca'],
  [/Brand Strategy/gi, 'Estratégia de marca'],
  [/Brand Personality/gi, 'Personalidade da marca'],
  [/Verbal Identity/gi, 'Identidade verbal'],
  [/Messaging System/gi, 'Sistema de mensagens'],
  [/Brand Storytelling/gi, 'Narrativa da marca'],
  [/Photography Direction/gi, 'Direção fotográfica'],
  [/Graphic Language/gi, 'Linguagem gráfica'],
  [/Layout Principles/gi, 'Princípios de composição'],
  [/Motion Identity/gi, 'Identidade de movimento'],
  [/Sonic Identity/gi, 'Identidade sonora'],
  [/Brand Experience/gi, 'Experiência da marca'],
  [/Brand in Action/gi, 'Marca em ação'],
  [/AI Brand Guidelines/gi, 'Diretrizes de IA para a marca'],
  [/Brand Governance/gi, 'Governança da marca'],
  [/Language & Narrative/gi, 'Linguagem e Narrativa'],
  [/Visual Identity/gi, 'Identidade Visual'],
  [/AI & Governance/gi, 'IA e Governança'],
  [/Exemplo real/gi, 'Aplicação'],
  [/Informações técnicas/gi, 'Especificações'],
  [/Reduced motion/gi, 'Movimento reduzido'],
  [/Sale badge/gi, 'Selo de promoção'],
  [/Add to cart/gi, 'Adicionar ao carrinho'],
  [/Product Gallery/gi, 'Galeria de produto'],
  [/Inactive fade/gi, 'Desvanecimento dos inativos'],
  [/Pointer fine/gi, 'Ponteiro preciso'],
  [/Full screen/gi, 'Tela cheia'],
  [/full-screen/gi, 'tela cheia'],
  [/Mega menu/gi, 'Menu expansível'],
  [/\bFoundation\b/gi, 'Fundamentos'],
  [/\bExperience\b/gi, 'Experiência'],
  [/\bOverview\b/gi, 'Visão geral'],
  [/\bBreakpoints\b/gi, 'Pontos de quebra'],
  [/\bBreakpoint\b/gi, 'Ponto de quebra'],
  [/\bGrid\b/gi, 'Grade'],
  [/\bMotion\b/gi, 'Movimento'],
  [/\bRadius\b/gi, 'Raio'],
  [/\bHeader\b/gi, 'Cabeçalho'],
  [/\bDesktop\b/gi, 'Computador'],
  [/\bMobile\b/gi, 'Celular'],
  [/\bDrawer\b/gi, 'Painel lateral'],
  [/\bOverlay\b/gi, 'Sobreposição'],
  [/\bAccordion\b/gi, 'Acordeão'],
  [/\bPrimary\b/gi, 'Primário'],
  [/\bSecondary\b/gi, 'Secundário'],
  [/\bTertiary\b/gi, 'Terciário'],
  [/\bHover\b/gi, 'Ao passar o cursor'],
  [/\bFocus\b/gi, 'Foco'],
  [/\bActive\b/gi, 'Ativo'],
  [/\bLoading\b/gi, 'Carregando'],
  [/\bDisabled\b/gi, 'Desabilitado'],
  [/\bDefault\b/gi, 'Padrão'],
  [/\bFilled\b/gi, 'Preenchido'],
  [/\bError\b/gi, 'Erro'],
  [/\bSuccess\b/gi, 'Sucesso'],
  [/\bPanel\b/gi, 'Painel'],
  [/\bCard\b/gi, 'Cartão'],
  [/\bRating\b/gi, 'Avaliação'],
  [/\bThumbnails\b/gi, 'Miniaturas'],
  [/\bSlider\b/gi, 'Carrossel'],
  [/\bZoomed\b/gi, 'Ampliado'],
  [/\bCompact\b/gi, 'Compacto'],
  [/\bFull\b/gi, 'Completo'],
  [/\bSquare\b/gi, 'Quadrado'],
  [/\bDots\b/gi, 'Indicadores'],
  [/\bArrows\b/gi, 'Setas'],
  [/\bSplit\b/gi, 'Dividido'],
  [/\bStack\b/gi, 'Empilhado'],
  [/\bSpotlight\b/gi, 'Destaque'],
  [/\bBackground\b/gi, 'Fundo'],
  [/\bText\b/gi, 'Texto'],
  [/\bAction\b/gi, 'Ação'],
  [/\bFeedback\b/gi, 'Retorno'],
  [/\bLayout\b/gi, 'Composição'],
  [/\bButton\b/gi, 'Botão'],
  [/\bNavigation\b/gi, 'Navegação'],
  [/\bFilter\b/gi, 'Filtro'],
  [/\bSlides\b/gi, 'Painéis'],
  [/\bDisplay\b/gi, 'Destaque'],
  [/\bHeading\b/gi, 'Título'],
  [/\bBody\b/gi, 'Corpo de texto'],
  [/\bLabel\b/gi, 'Rótulo'],
  [/\bToolbar\b/gi, 'Barra de ferramentas'],
  [/\bTrack\b/gi, 'Trilho'],
  [/\bOpacity\b/gi, 'Opacidade'],
  [/\bCanvas\b/gi, 'Plano de fundo'],
  [/\bTrigger\b/gi, 'Acionador'],
  [/\bTargets\b/gi, 'Alvos'],
  [/\bUnderline\b/gi, 'Sublinhado'],
  [/\bScreens\b/gi, 'Telas'],
  [/\bTemplates\b/gi, 'Modelos'],
  [/\bTemplate\b/gi, 'Modelo'],
  [/\bBrand\b/gi, 'Marca'],
];

const shouldSkip = (node: Node) => {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest('code, pre, kbd, script, style'));
};

const translate = (value: string) => replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value.normalize('NFC'));

const translateTextNode = (node: Node) => {
  if (shouldSkip(node)) return;
  const current = node.nodeValue ?? '';
  const next = translate(current);
  if (next !== current) node.nodeValue = next;
};

const removeStructuralReferences = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLAnchorElement>('a[href*="brand-and-design-system"], a[href*="99947Dmc328mSa2FmYj5fP"]')
    .forEach((link) => {
      const item = link.closest('.research-item, article, li');
      if (item) item.remove();
      else link.remove();
    });
};

const translateTree = (root: Node) => {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
    return;
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    translateTextNode(node);
    node = walker.nextNode();
  }
  if (root instanceof Element || root instanceof Document) removeStructuralReferences(root);
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'characterData') translateTree(mutation.target);
    mutation.addedNodes.forEach(translateTree);
  });
});

observer.observe(document.documentElement, { childList: true, characterData: true, subtree: true });
translateTree(document.body);
removeStructuralReferences();
