# Benchmark — Adidas → decisões para ONCI

> Documento de referência, não especificação de cópia visual.

## O que foi estudado

Foram usados como referência o Adidas Design Language público, o YARN Design System público, sua organização de código e padrões visíveis do e-commerce atual da adidas.

## Estrutura que vale absorver

### Foundations separados dos componentes

A documentação pública da adidas separa explicitamente temas como Theming, Iconography e Grid de Core Components. O YARN também separa `basics`, `components`, `mixins` e `variables`.

**Decisão ONCI:** usar a mesma clareza de camadas, com `packages/tokens` como fonte de verdade.

### Theming em vez de forks visuais

A mesma linguagem pode assumir tons diferentes sem duplicar componentes.

**Decisão ONCI:** Desempenho, Equipes e Raízes são temas semânticos do mesmo sistema — não três bibliotecas distintas.

### Monocromia como estrutura

A UI de varejo esportivo se beneficia de neutros fortes para que produto, fotografia e campanha façam o trabalho emocional.

**Decisão ONCI:** preto/branco formam o chassi; vermelho, azul, amarelo, laranja e terra têm função semântica e editorial.

### Grid responsivo e conteúdo amplo

O YARN documenta comportamento responsivo e um ponto importante de mudança no entorno de 960px.

**Decisão ONCI:** manter `lg = 960px` como breakpoint estrutural inicial, com escala adicional em 480/768/1200/1440.

### Componentes product-led

Cards, filtros, navegação, tiles, forms, botões, estados e superfícies são discretos para favorecer o conteúdo.

**Decisão ONCI:** pouco arredondamento, divisores claros, hierarquia tipográfica forte, CTA inequívoco e fotografia/produto como protagonista.

### Documentação como produto

Design system precisa ser navegável, pesquisável e demonstrar estados reais.

**Decisão ONCI:** o próprio site de documentação tem playground de tema, previews, anatomia e tokens copiáveis.

## O que a ONCI preserva como identidade própria

- nome e arquitetura ONCI;
- tipografia de marca 1797;
- Nunito Sans para interface;
- vermelho `#D71920` como energia principal;
- azul `#1255A6` para Equipes;
- amarelo `#F2B705`, laranja `#E86A17` e terra `#8C3B20` para Raízes;
- estratégia Desempenho / Equipes / Raízes;
- códigos brasileiros e referências próprias da marca;
- iconografia Remix Icon + SVGs ONCI quando apropriado.

## O que não é copiado

- Três Listras e marcas da adidas;
- logos, wordmarks e assets proprietários;
- tipografias proprietárias da adidas;
- fotografia de campanha;
- copy, slogans e nomes de produto;
- componentes copiados linha por linha;
- paleta ou tokens proprietários como identidade ONCI.

## Checklist de extração contínua

Ao analisar uma nova página de referência, registrar:

1. hierarquia de informação;
2. grid e containers;
3. espaçamento recorrente;
4. tipografia e escala;
5. estados dos controles;
6. comportamento desktop/mobile;
7. componentes repetidos;
8. feedback, loading e erro;
9. acessibilidade aparente;
10. o que é estrutura genérica versus expressão proprietária da marca.
