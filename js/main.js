/* ═══════════════════════════════════════════════════════════════
   MD Samiul Alam Sumel — Advanced Portfolio JS
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── SCROLL PROGRESS BAR ────────────────────────────────────── */
const pgbar = document.getElementById('pgbar');

function updateProgress() {
  const scrolled  = window.scrollY;
  const total     = document.documentElement.scrollHeight - window.innerHeight;
  const pct       = total > 0 ? (scrolled / total) * 100 : 0;
  pgbar.style.width = pct + '%';
}

/* ── NAV SCROLL EFFECT ───────────────────────────────────────── */
const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}

/* ── BACK TO TOP ─────────────────────────────────────────────── */
const totop = document.getElementById('totop');

function updateTotop() {
  totop.classList.toggle('show', window.scrollY > 420);
}

totop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── SCROLL LISTENER (debounced with RAF) ────────────────────── */
let rafPending = false;
window.addEventListener('scroll', () => {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    updateProgress();
    updateNav();
    updateTotop();
    rafPending = false;
  });
}, { passive: true });

// Run once on load
updateProgress();
updateNav();

/* ── TYPEWRITER ──────────────────────────────────────────────── */
const lines = [
  'Port Digital Operations Specialist',
  '12+ Years at Mongla Port Authority',
  'Wharfrent Billing · Cargo Dwell Time · CF Coordination',
  '3 Live Port Systems in Daily Active Use',
  'Targeting Saudi Arabia — Q2 2027',
];

let lineIdx = 0, charIdx = 0, deleting = false;
const twEl = document.getElementById('tw');

function typeWrite() {
  const current = lines[lineIdx];
  if (!deleting) {
    twEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWrite, 2200);
      return;
    }
    setTimeout(typeWrite, 58);
  } else {
    twEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      lineIdx = (lineIdx + 1) % lines.length;
    }
    setTimeout(typeWrite, 36);
  }
}
if (twEl) setTimeout(typeWrite, 900);

/* ── COUNTER ANIMATION (RAF-based) ──────────────────────────── */
function animateCounter(el) {
  const target    = parseInt(el.dataset.to, 10);
  const duration  = 1600;
  const startTime = performance.now();

  function step(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

/* ── SCROLL REVEAL & STAGGER ─────────────────────────────────── */
let countersStarted = false;

const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -55px 0px' }
);

/* observe hero for counters */
const heroObs = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      document.querySelectorAll('.cnt').forEach(el => {
        setTimeout(() => animateCounter(el), 400);
      });
    }
  },
  { threshold: 0.3 }
);
const heroEl = document.getElementById('hero');
if (heroEl) heroObs.observe(heroEl);

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── LANGUAGE BAR ANIMATION ──────────────────────────────────── */
const langObs = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.lang-fill').forEach((bar, i) => {
          setTimeout(() => bar.classList.add('animated'), i * 180);
        });
        langObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
const langRow = document.querySelector('.lang-row');
if (langRow) langObs.observe(langRow);

/* ── ACTIVE NAV LINK ─────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObs = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('act', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { threshold: 0.35 }
);
sections.forEach(s => navObs.observe(s));

/* ── MOBILE NAV ──────────────────────────────────────────────── */
const hbg = document.getElementById('hbg');
const mob = document.getElementById('mob');

hbg.addEventListener('click', () => {
  const isOpen = mob.classList.toggle('on');
  hbg.classList.toggle('open', isOpen);
  hbg.setAttribute('aria-expanded', isOpen);
  mob.setAttribute('aria-hidden', !isOpen);
});

mob.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mob.classList.remove('on');
    hbg.classList.remove('open');
    hbg.setAttribute('aria-expanded', 'false');
    mob.setAttribute('aria-hidden', 'true');
  });
});

// close on outside click
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !mob.contains(e.target)) {
    mob.classList.remove('on');
    hbg.classList.remove('open');
    hbg.setAttribute('aria-expanded', 'false');
  }
});
