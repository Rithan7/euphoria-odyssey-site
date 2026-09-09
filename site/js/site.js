/* ==========================================================================
   Shared chrome: header + footer, injected once so every page stays in sync.
   Each page just needs <div id="site-header"></div> / <div id="site-footer"></div>
   and to load this script.
   ========================================================================== */

function renderSiteHeader(activePage) {
  const el = document.getElementById("site-header");
  if (!el) return;

  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "events.html", label: "Events", key: "events" },
    { href: "contact.html", label: "Contact", key: "contact" }
  ];

  const navLinks = links.map(l =>
    `<li><a href="${l.href}"${l.key === activePage ? ' aria-current="page"' : ''}>${l.label}</a></li>`
  ).join("");

  el.innerHTML = `
    <div class="container header-container">
      <div class="header-branding">
        <a class="header-logo-left" href="index.html" title="PSG College of Arts &amp; Science">
          <img src="assets/psgcas-crest.png" alt="PSG CAS Crest">
        </a>
        
        <a class="brand-center" href="index.html">
          <span class="college-title">PSG COLLEGE OF ARTS &amp; SCIENCE</span>
          <span class="mandram-subtitle">Manavar Mandram - SF</span>
          <span class="presents-script">Presents</span>
          <span class="fest-title">EUPHORIA 2026</span>
        </a>

        <div class="header-logos-right">
          <a class="header-logo-right" href="index.html" title="Manavar Mandram - SF">
            <img src="assets/manavar-mandram-crest.png" alt="Manavar Mandram Crest">
          </a>
          <a class="header-logo-right centenary" href="index.html" title="PSG Celebrating Centenary - 100 Years">
            <img src="assets/psg-centenary-logo.png" alt="PSG Centenary Logo">
          </a>
        </div>
      </div>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="siteNav" aria-label="Toggle menu">&#9776;</button>
      <nav class="site-nav" id="siteNav">
        <ul>${navLinks}</ul>
      </nav>
    </div>
  `;

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderSiteFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>Euphoria 2026</h4>
          <p>The annual inter-collegiate fest of PSG College of Arts &amp; Science. Presented by Manavar Mandram - SF. Fifteen events, one grand arena.</p>
        </div>
        <div>
          <h4>Find us</h4>
          <p>PSG College of Arts &amp; Science<br>Civil Aerodrome Post, Coimbatore &ndash; 641014</p>
        </div>
        <div>
          <h4>Reach us</h4>
          <p><a href="mailto:euphoriammsfpsgcas@gmail.com">euphoriammsfpsgcas@gmail.com</a></p>
          <p><a href="https://www.instagram.com/euphoria26_psgcas" target="_blank" rel="noopener">Instagram &#8599;</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 PSG College of Arts &amp; Science &mdash; Euphoria</span>
        <span>Manavar Mandram &ndash; SF</span>
      </div>
    </div>
  `;
}

/* One shared wave-divider SVG, reused wherever a section break wants the motif */
function waveDividerSVG() {
  return `
  <div class="wave-divider" aria-hidden="true">
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z" fill="rgba(201,162,39,0.10)"/>
      <path d="M0,40 C150,15 350,55 600,35 C850,15 1050,55 1200,35 L1200,60 L0,60 Z" fill="rgba(122,42,42,0.14)"/>
    </svg>
  </div>`;
}
