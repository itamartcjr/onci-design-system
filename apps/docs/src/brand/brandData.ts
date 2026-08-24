export type BrandStatus = 'definido' | 'proposta' | 'pendente';

export type BrandField = {
  name: string;
  definition: string;
  objective: string;
  questions: string[];
  decision: string;
  status: BrandStatus;
  evidence?: string;
  presentation: string;
};

export type BrandModule = {
  number: string;
  id: string;
  title: string;
  group: BrandGroupName;
  summary: string;
  why: string;
  fields: BrandField[];
};

export type BrandGroupName = 'Foundation' | 'Language & Narrative' | 'Visual Identity' | 'Experience' | 'AI & Governance';

export const brandGroups: Array<{ label: BrandGroupName; min: number; max: number }> = [
  { label: 'Foundation', min: 1, max: 4 },
  { label: 'Language & Narrative', min: 5, max: 7 },
  { label: 'Visual Identity', min: 8, max: 15 },
  { label: 'Experience', min: 16, max: 18 },
  { label: 'AI & Governance', min: 19, max: 20 },
];

type Decision = { decision: string; status: BrandStatus; evidence?: string };

const decisions: Record<string, Decision> = {
  'core:Brand Essence': { decision: 'Performance. Pertencimento. Raiz.', status: 'proposta', evidence: 'Síntese estratégica já usada no Brand Book ONCI.' },
  'core:Purpose': { decision: 'Dar força ao movimento e crescer junto de quem pratica o esporte.', status: 'proposta' },
  'core:Mission': { decision: 'Criar produtos e experiências esportivas funcionais, desejáveis e acessíveis, com identidade brasileira e apoio à evolução de pessoas e equipes.', status: 'proposta' },
  'core:Vision': { decision: 'Ser uma marca esportiva brasileira reconhecida por performance, cultura e relações de longo prazo com atletas, equipes e comunidades.', status: 'proposta' },
  'core:Positioning': { decision: 'Marca esportiva brasileira entre performance e casual, começando por roupas esportivas básicas e evoluindo para produtos, equipes e experiências.', status: 'definido' },
  'core:Differentiators': { decision: 'Brasil sem caricatura; proximidade com esporte de base; indivíduo + equipe; produto primeiro; relações de longo prazo.', status: 'definido' },
  'core:Audience': { decision: 'Atleta em evolução; atleta jovem; equipes e instituições; pessoas que vivem o esporte também fora da competição.', status: 'definido' },
  'core:Brand Story': { decision: 'ONCI nasce de “onça”: um nome curto, memorável e de final sonoro forte. A onça orienta presença, potência, precisão e origem brasileira sem exigir uma representação literal.', status: 'definido' },
  'core:Ambition': { decision: 'Construir personalidade própria em performance e casual e crescer junto do esporte de base até alcançar escala nacional.', status: 'definido' },
  'core:Brand Principles': { decision: 'Produto primeiro. Contraste direto. Geometria firme. Energia controlada. Sistema antes de exceção. Coerência multicanal.', status: 'definido' },
  'strategy:Categoria': { decision: 'Artigos esportivos e sportswear, com atuação B2C e uma frente estruturada para equipes e instituições.', status: 'definido' },
  'strategy:Concorrentes': { decision: 'Nike, Adidas e Puma são benchmarks de escala, consistência, performance e casual — nunca fontes para copiar identidade proprietária.', status: 'definido' },
  'strategy:Posicionamento': { decision: 'Performance, pertencimento e identidade brasileira com produto em primeiro plano e proximidade real com atletas e equipes em formação.', status: 'proposta' },
  'strategy:Diferenciação': { decision: 'Crescer junto de atletas e equipes desde a base, combinar produto individual e projetos coletivos e construir brasilidade contemporânea sem clichês.', status: 'definido' },
  'strategy:Territórios da marca': { decision: 'Treino, competição, esporte de base, equipes, cultura esportiva, território brasileiro, produto e evolução.', status: 'definido' },
  'strategy:Brand Architecture': { decision: 'ONCI é a masterbrand. Desempenho, Equipes e Raízes são frentes de expressão. “Essenciais” pode funcionar como coleção transversal, não como quarta marca.', status: 'definido' },
  'strategy:Naming System': { decision: 'Preservar ONCI intacto; preferir português quando fizer sentido; evitar submarcas para cada coleção; nomear tecnologia apenas quando existir tecnologia real.', status: 'definido' },
  'audience:Público principal': { decision: 'Pessoas em evolução esportiva que buscam produto funcional, identidade e preço competitivo.', status: 'proposta' },
  'audience:Atleta jovem': { decision: 'Jovens em esporte escolar, clubes, projetos de formação e competições de base.', status: 'definido' },
  'audience:Equipes e instituições': { decision: 'Clubes, escolas, times, projetos sociais e organizadores que precisam de uniformes, presença e relacionamento recorrente.', status: 'definido' },
  'audience:Sport lifestyle': { decision: 'Pessoas que usam códigos esportivos também no cotidiano e no casual.', status: 'definido' },
  'personality:Personalidade': { decision: 'Forte sem ser agressiva; direta sem ser fria; energética sem ser sempre barulhenta; competitiva sem diminuir o adversário; brasileira sem clichês.', status: 'definido' },
  'personality:Arquétipo principal': { decision: 'Herói.', status: 'proposta' },
  'personality:Arquétipo secundário': { decision: 'Companheiro, com camada de território brasileiro.', status: 'proposta' },
  'personality:Comportamentos proibidos': { decision: 'Humilhar adversários, militarizar gratuitamente a linguagem, exagerar claims de performance, tratar brasilidade como fantasia e copiar códigos proprietários de concorrentes.', status: 'definido' },
  'verbal-identity:Voice': { decision: 'Direta, ativa, segura e econômica. Verbos antes de abstrações; frases curtas; pouco ornamento.', status: 'definido' },
  'verbal-identity:Tone': { decision: 'A energia varia por contexto: mais precisa em performance, mais coletiva em equipes e mais editorial/material em Raízes, sem trocar a personalidade central.', status: 'proposta' },
  'verbal-identity:Preferred Words': { decision: 'Movimento, treino, jogo, time, evolução, produto, base, território, desempenho, ritmo.', status: 'proposta' },
  'verbal-identity:Forbidden Words': { decision: 'Evitar clichês vazios de superação, humilhação do adversário, promessas sem prova e termos em inglês quando o português comunica melhor.', status: 'definido' },
  'verbal-identity:English usage': { decision: 'Usar somente quando for termo técnico, de produto ou linguagem estabelecida e trouxer clareza real.', status: 'definido' },
  'messaging:Brand Essence': { decision: 'Performance. Pertencimento. Raiz.', status: 'proposta' },
  'messaging:Brand Promise': { decision: 'Pendente. A promessa institucional ainda precisa ser fechada sem criar claim que o produto não sustente.', status: 'pendente' },
  'messaging:Tagline': { decision: 'Pendente. As frases editoriais existentes são direção de linguagem, não tagline oficial.', status: 'pendente' },
  'storytelling:Origem': { decision: 'ONCI parte da onça como referência de presença, força, precisão e origem brasileira e de uma ambição de construir uma marca esportiva nacional contemporânea.', status: 'definido' },
  'storytelling:Visão de futuro': { decision: 'Crescer com atletas, equipes e comunidades, participando do caminho antes da vitória e não apenas aparecendo quando o resultado já existe.', status: 'proposta' },
  'visual-brand-identity:Primary Logo': { decision: 'Usar apenas o arquivo oficial da assinatura ONCI. Não reconstruir por texto.', status: 'definido' },
  'visual-brand-identity:Clear Space': { decision: 'Pendente de fechamento geométrico oficial a partir do vetor mestre.', status: 'pendente' },
  'visual-brand-identity:Minimum Size': { decision: 'Pendente de teste e validação óptica em suportes digitais e físicos.', status: 'pendente' },
  'visual-brand-identity:Incorrect Usage': { decision: 'Não distorcer, comprimir, aplicar efeitos, contornos ou sombras não oficiais, nem alterar proporções ou inclinação arbitrariamente.', status: 'definido' },
  'visual-brand-identity:Brand Colors': { decision: 'Preto e branco estruturam; vermelho e azul são acentos centrais; amarelo, laranja e terra ampliam Raízes.', status: 'definido' },
  'visual-brand-identity:Primary Colors': { decision: 'Branco #FFFFFF, Preto #000000 e Vermelho ONCI #D71920.', status: 'definido' },
  'visual-brand-identity:Secondary Colors': { decision: 'Azul #1255A6, Amarelo #F2B705, Laranja #E86A17 e Terra #8C3B20.', status: 'definido' },
  'visual-brand-identity:Neutral Colors': { decision: 'Surface #F5F5F5, Surface Dark #1A1A1A, Border #E5E7EB e Muted #6B7280.', status: 'definido' },
  'typography:Primary Brand Typeface': { decision: '1797 é a família tipográfica de marca. Suas variações oficiais são Medium, Italic e Poster.', status: 'definido' },
  'typography:Secondary Typeface': { decision: 'Nunito Sans é a família de interface e leitura para navegação, produto, formulários e informação funcional.', status: 'definido' },
  'typography:Display Typeface': { decision: '1797 Poster. Usar em títulos grandes, números, campanhas e composições editoriais de alto impacto.', status: 'definido' },
  'typography:Supporting Typeface': { decision: '1797 Medium. Usar em textos curtos de marca, subtítulos e composições que precisam de presença com leitura estável.', status: 'definido' },
  'typography:Função tipográfica': { decision: '1797 Italic. Usar em chamadas esportivas, ações e títulos em que movimento e energia façam parte da mensagem.', status: 'definido' },
  'typography:Licenciamento e fontes oficiais': { decision: 'A família 1797 é carregada pela documentação a partir dos arquivos oficiais 1797_MEDIUM.ttf, 1797_ITALIC.ttf e 1797_POSTER.ttf mantidos em apps/docs/public.', status: 'definido' },
  'photography:Subjects': { decision: 'Atletas, equipes, produto, treino, jogo, deslocamento e contexto esportivo real.', status: 'proposta' },
  'photography:Authenticity': { decision: 'Priorizar movimento verdadeiro, produto visível e contexto real. Evitar stock genérico de fitness e pose sem ação.', status: 'definido' },
  "photography:This isn't us": { decision: 'Fitness genérico, brasilidade estereotipada, pose publicitária vazia e imagem que esconde o produto.', status: 'definido' },
  'iconography:Personalidade': { decision: 'Ícones diretos, legíveis, geométricos e funcionais, sem competir com o produto.', status: 'proposta' },
  'iconography:Tamanhos de referência': { decision: '16, 20, 24 e 32px; alvos interativos devem atingir ao menos 44×44px quando aplicável.', status: 'definido' },
  'graphic-language:Reconhecimento sem logo': { decision: 'Contraste preto/branco, blocos grandes, tipografia 1797 em momentos de impulso, vermelho funcional, grids firmes e poucos raios.', status: 'proposta' },
  'layout:Composição': { decision: 'Produto primeiro, hierarquia grande, áreas amplas, grids claros, bordas firmes e contraste alto.', status: 'definido' },
  'layout:Whitespace': { decision: 'Usar respiro para aumentar foco no produto e na mensagem; cor e tipografia de impacto não devem ocupar tudo ao mesmo tempo.', status: 'proposta' },
  'motion:Personalidade de movimento': { decision: 'Rápida, direta e controlada. Movimento comunica resposta e direção, não decoração permanente.', status: 'proposta' },
  'motion:Ritmo': { decision: 'A implementação digital atual trabalha principalmente entre 120ms e 400ms conforme a escala da interação.', status: 'definido' },
  'brand-experience:Website': { decision: 'Produto primeiro, fotografia ampla, categorias/esportes claros, filtros eficientes, favoritos e sacola persistentes e responsividade por comportamento.', status: 'definido' },
  'brand-experience:Events': { decision: 'Priorizar esporte de base, campeonatos, escolas e projetos com relacionamento contínuo, não somente exposição pontual.', status: 'definido' },
  'brand-experience:Partnerships': { decision: 'Parcerias devem equilibrar alcance, credibilidade, impacto e relação de longo prazo com atletas, equipes e comunidades.', status: 'proposta' },
  'brand-in-action:Website': { decision: 'E-commerce é uma expressão central da marca: produto, navegação, galeria, filtros, compra e conteúdo devem compartilhar o mesmo sistema.', status: 'definido' },
  'ai-guidelines:Forbidden Styles': { decision: 'Não gerar ou pedir imitação de Nike, Adidas, Puma, grafismos indígenas específicos/sagrados ou identidades de terceiros.', status: 'definido' },
  'ai-guidelines:Forbidden Language': { decision: 'Não criar claims de performance sem prova, slogans tratados como oficiais sem aprovação ou linguagem que humilhe adversários.', status: 'definido' },
  'governance:Brand Version': { decision: 'Brand Book atual: v0.1, tratado como documento vivo.', status: 'definido' },
  'governance:Stable': { decision: 'Decisões marcadas como “Definido” podem orientar implementação atual.', status: 'definido' },
  'governance:Experimental': { decision: 'Decisões “Proposta” devem ser testadas e aprovadas antes de serem tratadas como regra permanente.', status: 'definido' },
  'governance:Research & Evidence': { decision: 'Decisões de mercado, claims, percepção e patrocínio devem registrar fonte e evidência quando disponíveis.', status: 'proposta' },
  'governance:Accessibility & Inclusion': { decision: 'Acessibilidade deve atravessar identidade, interface, conteúdo e mídia — contraste, foco, teclado, movimento reduzido e leitura assistiva.', status: 'definido' },
  'governance:Legal & Licensing': { decision: 'Registrar direitos de logo, fontes, fotografia, ilustração, música, nomes e ativos de terceiros antes de distribuição.', status: 'definido' },
};

const fieldNames = {
  core: ['Brand Essence','Purpose','Mission','Vision','Values','Brand Promise','Positioning','Value Proposition','Differentiators','Audience','Personas','Needs','Pain Points','Brand Story','Manifesto','Ambition','Brand Beliefs','Brand Principles'],
  strategy: ['Mercado','Categoria','Concorrentes','Contexto da marca','Percepção atual','Percepção desejada','Posicionamento','Diferenciação','Proposta de valor','Reasons to Believe','Atributos da marca','Territórios da marca','Oportunidades','Ameaças','Brand Pillars','Brand Architecture','Naming System','Brand Measurement'],
  audience: ['Público principal','Público secundário','Atleta jovem','Equipes e instituições','Sport lifestyle','Stakeholders','Jobs to be Done','Necessidades','Pain points','Motivações','Barreiras','Gatilhos','Comportamentos','Contextos de uso','Segmentos','Personas','Research & Evidence'],
  personality: ['Personalidade','Atributos','Arquétipo principal','Arquétipo secundário','Proporção entre arquétipos','Características','Comportamentos','Personalidade desejada','Comportamentos proibidos','Escalas de personalidade'],
  'verbal-identity': ['Voice','Tone','Tone of Voice','Voice Principles','Messaging Principles','Brand Vocabulary','Preferred Words','Forbidden Words','Expressions','Grammar','Punctuation','Capitalization','Emojis','English usage','Technical language','Humor','Calls to action','Headlines','Microcopy','UX Writing','Social Media','Advertising','Institutional Communication','Customer Support','Somos / Não somos','Antes / Depois'],
  messaging: ['Brand Essence','Brand Promise','Big Idea','Tagline','Elevator Pitch','One-line description','25-word description','50-word description','Institutional description','About text','Boilerplate','Social bio','Sales message','Campaign message','Product message','CTA library','Mensagens principais','Mensagens secundárias','Provas','Benefícios funcionais','Benefícios emocionais','Reasons to Believe'],
  storytelling: ['Origem','Problema','Transformação','Visão de futuro','Fundador','História da marca','Histórias que a marca conta','Histórias que a marca não deve contar','Conflito','Propósito','Manifesto','Narrativa institucional'],
  'visual-brand-identity': ['Primary Logo','Secondary Logo','Symbol','Wordmark','Logo variations','Positive','Negative','Monochrome','Clear Space','Minimum Size','Background Usage','Incorrect Usage','Co-branding','Logo Decision Tree','Brand Colors','Primary Colors','Secondary Colors','Neutral Colors','Supporting Colors'],
  typography: ['Primary Brand Typeface','Secondary Typeface','Display Typeface','Supporting Typeface','Função tipográfica','Personalidade tipográfica','Hierarquia','Combinações','Usos corretos','Usos incorretos','Licenciamento e fontes oficiais'],
  photography: ['Subjects','People','Environment','Lighting','Composition','Framing','Camera angle','Depth','Emotion','Color treatment','Texture','Authenticity','Scenarios','This is us',"This isn't us",'Direitos e releases'],
  illustration: ['Estilo','Formas','Traços','Proporções','Perspectiva','Personagens','Cores','Texturas','Sombras','Fundos','Composição','This is us',"This isn't us",'Licenciamento'],
  iconography: ['Personalidade','Grid','Stroke','Corner style','Filled vs outline','Optical balance','Princípios visuais','Tamanhos de referência','Metáforas permitidas','Metáforas proibidas'],
  'graphic-language': ['Shapes','Patterns','Frames','Lines','Textures','Gradients','Masks','Containers','Graphic devices','Decorative elements','Brand signatures','Reconhecimento sem logo'],
  layout: ['Composição','Hierarquia','Alinhamento','Whitespace','Densidade','Equilíbrio','Proporção','Grids editoriais','Comportamento da marca no espaço','Social','Publicidade','Apresentações','Landing pages','Peças institucionais'],
  motion: ['Personalidade de movimento','Entrada','Saída','Transições','Logo animation','Brand reveals','Storytelling','Ritmo','Calm','Energetic','Precise','Playful','Elegant','Expressive',"Do / Don't"],
  sonic: ['Sonic logo','Sound signature','Music direction','Voice','Notification personality','Podcast identity','Audiovisual direction','Licenciamento musical',"Do / Don't"],
  'brand-experience': ['Website','Social','Advertising','Presentation','Email','Print','Packaging','Events','Environment','Customer Service','Sales','Partnerships','Princípios invariáveis','Adaptação por canal'],
  'brand-in-action': ['Campanha','Instagram','LinkedIn','Apresentação','Outdoor','Embalagem','Evento','Website','Anúncio','Material institucional','Raciocínio de aplicação','Checklist de consistência'],
  'ai-guidelines': ['Brand System Prompt','Writing Prompt','Tone Prompt','Image Generation Prompt','Photography Prompt','Campaign Prompt','Social Prompt','Forbidden Styles','Forbidden Language','Brand Vocabulary','Negative Prompts','Examples','Evaluation Checklist','Versionamento de prompts'],
  governance: ['Brand Owner','Design Owner','Marketing Owner','Approval Process','Brand Version','Last Update','Changelog','Stable','Beta','Experimental','Deprecated','Assets','Official Files','Naming Convention','Versioning','Brand Architecture','Naming System','Research & Evidence','Brand Measurement','Accessibility & Inclusion','Localization','Legal & Licensing'],
} as const;

const moduleMeta: Array<[string,string,string,BrandGroupName,string]> = [
  ['01','core','Brand Core','Foundation','O núcleo estratégico que deve continuar reconhecível mesmo quando produtos, campanhas e canais mudam.'],
  ['02','strategy','Brand Strategy','Foundation','Escolhas de mercado, categoria, posicionamento e diferenciação que precisam ser sustentadas por evidência.'],
  ['03','audience','Audience','Foundation','Públicos, contextos, necessidades e relações que determinam para quem a marca precisa criar valor.'],
  ['04','personality','Brand Personality','Foundation','Transforma traços abstratos em comportamentos reconhecíveis de marca.'],
  ['05','verbal-identity','Verbal Identity','Language & Narrative','Define como a ONCI fala e escreve sem depender de um slogan ou campanha.'],
  ['06','messaging','Messaging System','Language & Narrative','Organiza mensagens por profundidade e objetivo mantendo uma mesma essência.'],
  ['07','storytelling','Brand Storytelling','Language & Narrative','Estrutura as histórias que a marca pode contar com legitimidade e continuidade.'],
  ['08','visual-brand-identity','Visual Brand Identity','Visual Identity','Documenta os ativos e regras visuais de marca antes dos componentes de produto.'],
  ['09','typography','Typography','Visual Identity','Define papéis, hierarquia e combinações das famílias tipográficas de marca.'],
  ['10','photography','Photography Direction','Visual Identity','Cria critérios para produzir e selecionar imagens que pertençam à ONCI.'],
  ['11','illustration','Illustration','Visual Identity','Define como ilustração pode participar da marca quando houver necessidade real.'],
  ['12','iconography','Iconography','Visual Identity','Estabelece a linguagem de ícones da marca antes da biblioteca de interface.'],
  ['13','graphic-language','Graphic Language','Visual Identity','Organiza dispositivos gráficos capazes de gerar reconhecimento sem depender sempre do logo.'],
  ['14','layout','Layout Principles','Visual Identity','Explica como a marca ocupa o espaço em composições editoriais e institucionais.'],
  ['15','motion','Motion Identity','Visual Identity','Traduz personalidade em ritmo, entrada, saída, transição e movimento de marca.'],
  ['16','sonic','Sonic Identity','Experience','Área opcional para som, voz e música quando a ONCI passar a usar identidade sonora de forma recorrente.'],
  ['17','brand-experience','Brand Experience','Experience','Mantém a mesma essência nos diferentes pontos de contato da marca.'],
  ['18','brand-in-action','Brand in Action','Experience','Explica aplicações reais como exemplos ensináveis, não apenas como mockups.'],
  ['19','ai-guidelines','AI Brand Guidelines','AI & Governance','Converte decisões de marca em instruções reutilizáveis para IA sem permitir que a ferramenta invente identidade.'],
  ['20','governance','Brand Governance','AI & Governance','Define status, owners, aprovação, versões, evidência, licenças e histórico de decisão.'],
];

const defaultField = (moduleId: string, moduleTitle: string, name: string): BrandField => {
  const known = decisions[`${moduleId}:${name}`];
  return {
    name,
    definition: `${name} registra uma decisão específica dentro de ${moduleTitle}. A definição precisa ser clara o bastante para orientar criação, revisão e aprovação.`,
    objective: `Transformar ${name} em critério operacional da ONCI, evitando interpretações diferentes entre marca, produto, conteúdo e parceiros.`,
    questions: [
      `O que ${name} precisa tornar inequívoco para a ONCI?`,
      `Que decisão prática muda quando ${name} está bem definido?`,
      `Que exemplo, evidência ou contraexemplo comprova essa escolha?`,
    ],
    decision: known?.decision ?? 'Pendente. A estrutura exige esta decisão, mas ainda não existe informação ONCI suficiente para tratá-la como regra de marca.',
    status: known?.status ?? 'pendente',
    evidence: known?.evidence,
    presentation: `Apresentar ${name} como decisão principal + evidência + exemplo em ação + limite de uso. A linguagem visual da prancha deve permanecer ONCI.`,
  };
};

export const brandModules: BrandModule[] = moduleMeta.map(([number,id,title,group,summary]) => ({
  number,
  id,
  title,
  group,
  summary,
  why: `Este módulo existe para transformar ${title} em um conjunto de decisões documentadas e reutilizáveis, sem misturar identidade de marca com tokens ou componentes de interface.`,
  fields: [...fieldNames[id as keyof typeof fieldNames]].map((name) => defaultField(id, title, name)),
}));

export const brandModuleById = (id: string) => brandModules.find((module) => module.id === id);
