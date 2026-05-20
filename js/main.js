'use strict';

/* ── SCROLL PROGRESS BAR ────────────────────────────────────── */
const pgbar = document.getElementById('pgbar');

function updateProgress() {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  pgbar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
}

/* ── NAV SCROLL EFFECT ───────────────────────────────────────── */
const nav = document.getElementById('nav');
function updateNav() { nav.classList.toggle('scrolled', window.scrollY > 40); }

/* ── BACK TO TOP ─────────────────────────────────────────────── */
const totop = document.getElementById('totop');
function updateTotop() { totop.classList.toggle('show', window.scrollY > 420); }
totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

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

updateProgress();
updateNav();

/* ── TYPEWRITER ──────────────────────────────────────────────── */
const lines = [
  'Port Digital Operations Specialist',
  '12+ Years at Mongla Port Authority',
  'Wharfrent Billing · Cargo Dwell Time · CF Coordination',
  '3 Live Port Apps · 2 Linux Infra Projects',
  'Targeting Saudi Arabia — Q2 2027',
];

let lineIdx = 0, charIdx = 0, deleting = false;
const twEl = document.getElementById('tw');

function typeWrite() {
  const current = lines[lineIdx];
  if (!deleting) {
    twEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { deleting = true; setTimeout(typeWrite, 2200); return; }
    setTimeout(typeWrite, 58);
  } else {
    twEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; lineIdx = (lineIdx + 1) % lines.length; }
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
  entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    revealObs.unobserve(entry.target);
  }),
  { threshold: 0.1, rootMargin: '0px 0px -55px 0px' }
);

const heroObs = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      document.querySelectorAll('.cnt').forEach(el => setTimeout(() => animateCounter(el), 400));
    }
  },
  { threshold: 0.3 }
);

const heroEl = document.getElementById('hero');
if (heroEl) heroObs.observe(heroEl);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── LANGUAGE BAR ANIMATION ──────────────────────────────────── */
const langObs = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.lang-fill').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('animated'), i * 180);
      });
      langObs.unobserve(entry.target);
    }
  }),
  { threshold: 0.3 }
);
const langRow = document.querySelector('.lang-row');
if (langRow) langObs.observe(langRow);

/* ── ACTIVE NAV LINK ─────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObs = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + entry.target.id));
    }
  }),
  { threshold: 0.35 }
);
sections.forEach(s => navObs.observe(s));

/* ── MOBILE NAV ──────────────────────────────────────────────── */
const hbg = document.getElementById('hbg');
const mob = document.getElementById('mob');

function closeMob() {
  mob.classList.remove('on');
  hbg.classList.remove('open');
  hbg.setAttribute('aria-expanded', 'false');
  mob.setAttribute('aria-hidden', 'true');
}

hbg.addEventListener('click', () => {
  const isOpen = mob.classList.toggle('on');
  hbg.classList.toggle('open', isOpen);
  hbg.setAttribute('aria-expanded', String(isOpen));
  mob.setAttribute('aria-hidden', String(!isOpen));
});

mob.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMob));

document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !mob.contains(e.target)) closeMob();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMob();
});

/* ── FOOTER YEAR ─────────────────────────────────────────────── */
const ftYr = document.getElementById('ft-yr');
if (ftYr) ftYr.textContent = new Date().getFullYear();

/* ── PARTICLE CANVAS ─────────────────────────────────────────── */
(function () {
  const canvas = document.getElementById('bg');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let W, H;
  const MOUSE  = { x: -9999, y: -9999 };
  const COUNT  = 68;
  const LINK_D = 130;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener('mousemove', e => {
    MOUSE.x = e.clientX;
    MOUSE.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    MOUSE.x = -9999;
    MOUSE.y = -9999;
  });

  function mkP() {
    return {
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - .5) * .30,
      vy:    (Math.random() - .5) * .30,
      r:     Math.random() * 1.25 + .4,
      alpha: Math.random() * .35 + .10,
      col:   Math.random() > .62 ? '240,160,48' : '61,142,240',
    };
  }

  const pts = Array.from({ length: COUNT }, mkP);

  function tick() {
    ctx.clearRect(0, 0, W, H);

    /* connections */
    const LD2 = LINK_D * LINK_D;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LD2) {
          const alpha = (1 - Math.sqrt(d2) / LINK_D) * .09;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(240,160,48,${alpha.toFixed(3)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }

    /* update & draw particles */
    for (const p of pts) {
      const dx = p.x - MOUSE.x;
      const dy = p.y - MOUSE.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 8100 && d2 > 0) {
        const d = Math.sqrt(d2);
        const f = (90 - d) / 90 * .026;
        p.vx += (dx / d) * f;
        p.vy += (dy / d) * f;
      }

      p.vx *= .984;
      p.vy *= .984;
      p.x  += p.vx;
      p.y  += p.vy;

      if (p.x < -6)    p.x = W + 6;
      if (p.x > W + 6) p.x = -6;
      if (p.y < -6)    p.y = H + 6;
      if (p.y > H + 6) p.y = -6;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.col},${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
