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
  [/Foundation/gi, 'Fundamentos'],
  [/Experience/gi, 'Experiência'],
  [/Overview/gi, 'Visão geral'],
  [/Breakpoints/gi, 'Pontos de quebra'],
  [/Breakpoint/gi, 'Ponto de quebra'],
  [/Grid/gi, 'Grade'],
  [/Motion/gi, 'Movimento'],
  [/Radius/gi, 'Raio'],
  [/Header/gi, 'Cabeçalho'],
  [/Mega menu/gi, 'Menu expansível'],
  [/Desktop/gi, 'Computador'],
  [/Mobile/gi, 'Celular'],
  [/Drawer/gi, 'Painel lateral'],
  [/Overlay/gi, 'Sobreposição'],
  [/Accordion/gi, 'Acordeão'],
  [/Primary/gi, 'Primário'],
  [/Secondary/gi, 'Secundário'],
  [/Tertiary/gi, 'Terciário'],
  [/Hover/gi, 'Ao passar o cursor'],
  [/Focus/gi, 'Foco'],
  [/Active/gi, 'Ativo'],
  [/Loading/gi, 'Carregando'],
  [/Disabled/gi, 'Desabilitado'],
  [/Default/gi, 'Padrão'],
  [/Filled/gi, 'Preenchido'],
  [/Error/gi, 'Erro'],
  [/Success/gi, 'Sucesso'],
  [/Reduced motion/gi, 'Movimento reduzido'],
  [/Panel/gi, 'Painel'],
  [/Card/gi, 'Cartão'],
  [/Sale badge/gi, 'Selo de promoção'],
  [/Rating/gi, 'Avaliação'],
  [/Add to cart/gi, 'Adicionar ao carrinho'],
  [/full-screen/gi, 'tela cheia'],
  [/Full screen/gi, 'Tela cheia'],
  [/Thumbnails/gi, 'Miniaturas'],
  [/Slider/gi, 'Carrossel'],
  [/Zoomed/gi, 'Ampliado'],
  [/Compact/gi, 'Compacto'],
  [/Full/gi, 'Completo'],
  [/Square/gi, 'Quadrado'],
  [/Inactive fade/gi, 'Desvanecimento dos inativos'],
  [/Dots/gi, 'Indicadores'],
  [/Arrows/gi, 'Setas'],
  [/Split/gi, 'Dividido'],
  [/Stack/gi, 'Empilhado'],
  [/Spotlight/gi, 'Destaque'],
  [/Background/gi, 'Fundo'],
  [/Text/gi, 'Texto'],
  [/Action/gi, 'Ação'],
  [/Feedback/gi, 'Retorno'],
  [/Layout/gi, 'Composição'],
  [/Button/gi, 'Botão'],
  [/Navigation/gi, 'Navegação'],
  [/Filter/gi, 'Filtro'],
  [/Product Gallery/gi, 'Galeria de produto'],
  [/Slides/gi, 'Painéis'],
  [/Display/gi, 'Destaque'],
  [/Heading/gi, 'Título'],
  [/Body/gi, 'Corpo de texto'],
  [/Label/gi, 'Rótulo'],
  [/Pointer fine/gi, 'Ponteiro preciso'],
  [/Toolbar/gi, 'Barra de ferramentas'],
  [/Track/gi, 'Trilho'],
  [/Opacity/gi, 'Opacidade'],
  [/Canvas/gi, 'Plano de fundo'],
  [/Trigger/gi, 'Acionador'],
  [/Targets/gi, 'Alvos'],
  [/Underline/gi, 'Sublinhado'],
  [/Screens/gi, 'Telas'],
  [/Template/gi, 'Modelo'],
  [/Templates/gi, 'Modelos'],
  [/Web\b/gi, 'Web'],
  [/\bBrand\b/gi, 'Marca'],
];

const shouldSkip = (node: Node) => {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest('code, pre, kbd, script, style'));
};

const translate = (value: string) => replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value);

const translateTree = (root: Node) => {
  if (root.nodeType === Node.TEXT_NODE) {
    if (!shouldSkip(root)) root.nodeValue = translate(root.nodeValue ?? '');
    return;
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (!shouldSkip(node)) node.nodeValue = translate(node.nodeValue ?? '');
    node = walker.nextNode();
  }
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => mutation.addedNodes.forEach(translateTree));
});

observer.observe(document.documentElement, { childList: true, subtree: true });
translateTree(document.body);
