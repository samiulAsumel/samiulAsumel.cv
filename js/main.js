/* ============================================================
   Samiul Alam Sumel — Portfolio JS v3.1
   ============================================================ */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------
     CANVAS PARTICLE SYSTEM
  ---------------------------------------------------------- */
  const canvas = document.getElementById('hcv');
  const ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;
  let W = 0;
  let H = 0;
  let particles = [];

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const parent = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = parent ? parent.offsetHeight : window.innerHeight;
    canvas.width = Math.max(1, Math.floor(W * dpr));
    canvas.height = Math.max(1, Math.floor(H * dpr));
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.25;
      this.vx = (Math.random() - 0.5) * 0.22;
      this.vy = (Math.random() - 0.5) * 0.22;
      this.a = Math.random() * 0.40 + 0.06;
    }
    tick() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,168,67,${this.a})`;
      ctx.fill();
    }
  }

  function initParticles() {
    const count = W < 640 ? 55 : 110;
    particles = Array.from({ length: count }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212,168,67,${0.055 * (1 - d / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.tick(); p.draw(); });
    drawConnections();
    window.requestAnimationFrame(animateParticles);
  }

  if (canvas && ctx && !prefersReducedMotion) {
    resizeCanvas();
    initParticles();
    animateParticles();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); }, { passive: true });
  }

  /* ----------------------------------------------------------
     SCROLL PROGRESS BAR + NAV STATE
  ---------------------------------------------------------- */
  const progressBar = document.getElementById('spb');
  const navbar = document.getElementById('nb');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function updateProgress() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && total > 0) {
      progressBar.style.width = ((window.scrollY / total) * 100).toFixed(2) + '%';
    }
  }

  function getActiveSection() {
    const y = window.scrollY + 130;
    let active = null;
    for (const section of sections) {
      if (section.offsetTop <= y) active = section.id;
    }
    return active;
  }

  function updateNav() {
    if (navbar) navbar.classList.toggle('sc', window.scrollY > 50);
    updateProgress();
    const active = getActiveSection();
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').slice(1) === active);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ----------------------------------------------------------
     MOBILE MENU
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hbg');
  const mobileMenu = document.getElementById('mob');
  const mobileClose = document.getElementById('mobx');

  function setMobileMenu(open) {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.toggle('op', open);
    mobileMenu.classList.toggle('op', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => setMobileMenu(!hamburger.classList.contains('op')));
    if (mobileClose) mobileClose.addEventListener('click', () => setMobileMenu(false));
    document.querySelectorAll('.mob a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('op')) setMobileMenu(false);
    });
  }

  /* ----------------------------------------------------------
     SCROLL ANIMATIONS + PROGRESS BARS
  ---------------------------------------------------------- */
  const animated = document.querySelectorAll('.fi, .fl, .fr');
  const progressBlocks = document.querySelectorAll('.dc');

  function revealElement(el) {
    el.classList.add('v');
    el.querySelectorAll('.dc-pf').forEach(bar => {
      bar.style.width = (bar.dataset.w || '0') + '%';
    });
  }

  if ('IntersectionObserver' in window) {
    const animObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) revealElement(entry.target);
      });
    }, { threshold: 0.1 });

    animated.forEach(el => animObs.observe(el));
    progressBlocks.forEach(el => animObs.observe(el));
  } else {
    animated.forEach(revealElement);
    progressBlocks.forEach(revealElement);
  }

  window.setTimeout(() => {
    document.querySelectorAll('#hero .fi, #hero .fl, #hero .fr').forEach(el => el.classList.add('v'));
  }, 80);

  /* ----------------------------------------------------------
     COUNTER ANIMATION
  ---------------------------------------------------------- */
  function animateCounter(el, end, suffix = '', duration = 1900) {
    if (!el) return;
    let t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      const e = p < 1 ? 1 - Math.pow(1 - p, 3) : 1;
      el.textContent = Math.floor(e * end) + (p >= 1 ? suffix : '');
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  const statsEl = document.querySelector('.h-stats');
  if (statsEl && 'IntersectionObserver' in window) {
    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(document.getElementById('c1'), 12, '+');
          animateCounter(document.getElementById('c2'), 3);
          animateCounter(document.getElementById('c3'), 4);
          animateCounter(document.getElementById('c4'), 81);
          statsObs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    statsObs.observe(statsEl);
  }

  /* ----------------------------------------------------------
     3D CARD TILT + MOUSE SPOTLIGHT
  ---------------------------------------------------------- */
  if (!prefersReducedMotion) {
    const TILT_SEL = '.sk-card, .pc, .dc, .ec, .tl-card';
    const TILT_MAX = 8;
    const LIFT = -6;

    document.querySelectorAll(TILT_SEL).forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transform = `translateY(${LIFT}px)`;
        el.style.willChange = 'transform';
      });

      el.addEventListener('mousemove', event => {
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const xPct = (event.clientX - rect.left) / rect.width;
        const yPct = (event.clientY - rect.top) / rect.height;
        const rx = (yPct - 0.5) * -TILT_MAX * 2;
        const ry = (xPct - 0.5) * TILT_MAX * 2;

        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(${LIFT}px)`;
        el.style.setProperty('--mx', `${(xPct * 100).toFixed(1)}%`);
        el.style.setProperty('--my', `${(yPct * 100).toFixed(1)}%`);
      });

      el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1), box-shadow var(--ease), border-color var(--ease)';
        el.style.transform = '';
        el.style.setProperty('--mx', '50%');
        el.style.setProperty('--my', '50%');
        window.setTimeout(() => { el.style.transition = ''; el.style.willChange = ''; }, 580);
      });
    });
  }

  /* ----------------------------------------------------------
     SERVICE WORKER
  ---------------------------------------------------------- */
  if ('serviceWorker' in navigator && /^(https?:)$/.test(window.location.protocol)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
})();
