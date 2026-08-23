import './brand-runtime.css';

const BASE = import.meta.env.BASE_URL;

const brandSections = [
  ['A marca', 'a-marca'],
  ['Propósito e missão', 'por-que-a-onci-existe'],
  ['Frentes ONCI', 'tres-forcas-uma-marca'],
  ['Posicionamento', 'posicionamento'],
  ['Público', 'publico'],
  ['Personalidade', 'personalidade'],
  ['Voz e tom', 'voz-e-tom'],
  ['Sistema visual', 'sistema-visual'],
  ['Logo e assinatura', 'logo-e-assinatura'],
  ['Fotografia', 'fotografia-e-direcao-de-arte'],
  ['Cultura e referências', 'cultura-e-referencias'],
  ['Produto e experiência', 'produto-e-experiencia'],
  ['Esporte de base', 'esporte-de-base-e-comunidade'],
  ['Regras de expressão', 'regras-de-expressao'],
  ['Governança', 'governanca'],
] as const;

function slugifyHeading(value: string) {
  return value
    .replace(/^\d+\.\s*/, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function brandBookVisible() {
  return Array.from(document.querySelectorAll<HTMLElement>('.doc-section .section-heading h2'))
    .some((heading) => /^0?1\.\s*A marca$/i.test(heading.textContent?.trim() ?? ''));
}

function assignSectionIds() {
  document.querySelectorAll<HTMLElement>('.doc-section').forEach((section) => {
    const heading = section.querySelector<HTMLElement>('.section-heading h2');
    if (!heading) return;
    const id = slugifyHeading(heading.textContent?.trim() ?? '');
    if (id) section.id = id;
  });
}

function identityMarkup() {
  return `
    <div class="brand-runtime-identity" aria-label="Identidade visual oficial ONCI">
      <article class="brand-runtime-identity__primary">
        <span>ASSINATURA PRINCIPAL</span>
        <div class="brand-runtime-canvas brand-runtime-canvas--logo">
          <img src="${BASE}brand/logo.svg" alt="Logo principal oficial ONCI" />
        </div>
        <p>Assinatura principal da ONCI. É a primeira escolha sempre que houver largura suficiente.</p>
      </article>
      <div class="brand-runtime-identity__secondary">
        <article>
          <span>SÍMBOLO</span>
          <div class="brand-runtime-canvas brand-runtime-canvas--symbol">
            <img src="${BASE}brand/symbol.svg" alt="Símbolo oficial ONCI" />
          </div>
          <p>Versão compacta para contextos em que a marca já está reconhecida.</p>
        </article>
        <article>
          <span>PERFIL</span>
          <div class="brand-runtime-canvas brand-runtime-canvas--profile">
            <img src="${BASE}brand/perfil.svg" alt="Aplicação oficial de perfil ONCI" />
          </div>
          <p>Avatar, favicon, redes sociais e outras superfícies quadradas.</p>
        </article>
      </div>
    </div>`;
}

function logoGuideFallbackMarkup() {
  return `
    <div class="brand-runtime-logo-guide" aria-label="Versões oficiais do logo ONCI">
      <article>
        <div class="brand-runtime-logo-card brand-runtime-logo-card--wide"><img src="${BASE}brand/logo.svg" alt="Logo oficial ONCI" /></div>
        <h3>Logo principal</h3><code>brand/logo.svg</code>
        <p>Uso prioritário em comunicação institucional, site, embalagem e materiais com largura suficiente.</p>
      </article>
      <article>
        <div class="brand-runtime-logo-card"><img src="${BASE}brand/symbol.svg" alt="Símbolo oficial ONCI" /></div>
        <h3>Símbolo</h3><code>brand/symbol.svg</code>
        <p>Uso compacto. Não reconstruir o símbolo a partir do logo principal.</p>
      </article>
      <article>
        <div class="brand-runtime-logo-card brand-runtime-logo-card--dark"><img src="${BASE}brand/perfil.svg" alt="Perfil oficial ONCI" /></div>
        <h3>Perfil</h3><code>brand/perfil.svg</code>
        <p>Aplicação quadrada oficial para avatar, perfil social e favicon.</p>
      </article>
    </div>
    <div class="brand-runtime-logo-rules">
      <div><strong>Área de proteção</strong><p>Regra operacional atual: X = 25% da altura total do ativo em todos os lados.</p></div>
      <div><strong>Cores</strong><p>Logo e símbolo permanecem pretos; perfil permanece preto + branco. Não recolorir com vermelho, azul, amarelo, laranja ou terra.</p></div>
      <div><strong>Não alterar</strong><p>Não esticar, comprimir, rotacionar, aplicar sombra, contorno, glow, transparência ou efeitos.</p></div>
      <div><strong>Fundos</strong><p>Priorizar alto contraste. Não improvisar versão branca via filtro ou CSS; usar um asset negativo oficial quando ele existir.</p></div>
    </div>`;
}

function ensureIdentity() {
  const section = document.getElementById('a-marca');
  if (!section || section.querySelector('.brand-runtime-identity') || section.querySelector('.brand-identity-showcase')) return;
  const heading = section.querySelector('.section-heading');
  heading?.insertAdjacentHTML('afterend', identityMarkup());
}

function ensureLogoGuide() {
  const section = document.getElementById('logo-e-assinatura');
  if (!section) return;
  const alreadyHasOfficialImages = Array.from(section.querySelectorAll<HTMLImageElement>('img'))
    .some((img) => /brand\/(logo|symbol|perfil)\.svg/.test(img.getAttribute('src') ?? ''));
  if (alreadyHasOfficialImages || section.querySelector('.brand-runtime-logo-guide')) return;
  const heading = section.querySelector('.section-heading');
  heading?.insertAdjacentHTML('afterend', logoGuideFallbackMarkup());
}

function ensureBrandMenu() {
  const groups = Array.from(document.querySelectorAll<HTMLElement>('.sidebar .nav-group'));
  const brandGroup = groups.find((group) => group.querySelector('.nav-group-title')?.textContent?.trim() === 'Marca');
  if (!brandGroup || brandGroup.querySelector('[data-brand-runtime="true"]')) return;

  const brandBookButton = Array.from(brandGroup.querySelectorAll<HTMLButtonElement>('button'))
    .find((button) => button.textContent?.trim() === 'Brand Book');
  if (!brandBookButton) return;

  brandSections.forEach(([label, anchor]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.brandRuntime = 'true';
    button.dataset.brandAnchor = anchor;
    button.className = 'brand-runtime-nav';
    button.addEventListener('click', () => {
      const go = () => {
        assignSectionIds();
        ensureIdentity();
        ensureLogoGuide();
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        brandGroup.querySelectorAll('button').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
      };

      if (!brandBookVisible()) {
        brandBookButton.click();
        window.setTimeout(go, 80);
      } else {
        go();
      }
    });
    brandGroup.appendChild(button);
  });
}

function syncBrandExperience() {
  ensureBrandMenu();
  if (!brandBookVisible()) return;
  assignSectionIds();
  ensureIdentity();
  ensureLogoGuide();
}

let scheduled = false;
function scheduleSync() {
  if (scheduled) return;
  scheduled = true;
  window.requestAnimationFrame(() => {
    scheduled = false;
    syncBrandExperience();
  });
}

const observer = new MutationObserver(scheduleSync);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener('load', scheduleSync);
scheduleSync();
