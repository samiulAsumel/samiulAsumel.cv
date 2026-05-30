/* ============================================================
   Samiul Alam Sumel — Portfolio JS
   ============================================================ */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------
     CANVAS PARTICLE SYSTEM
  ---------------------------------------------------------- */
  const canvas = document.getElementById('hcv');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = canvas.parentElement.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.4 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.28;
      this.vy = (Math.random() - 0.5) * 0.28;
      this.a  = Math.random() * 0.45 + 0.08;
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
    particles = Array.from({ length: 110 }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 95) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212,168,67,${0.07 * (1 - d / 95)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.tick(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animateParticles);
  }

  if (!prefersReducedMotion) {
    resizeCanvas();
    initParticles();
    animateParticles();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); }, { passive: true });
  }

  /* ----------------------------------------------------------
     NAVBAR SCROLL EFFECT
  ---------------------------------------------------------- */
  const navbar = document.getElementById('nb');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('sc', window.scrollY > 50);
  }, { passive: true });

  /* ----------------------------------------------------------
     MOBILE MENU
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hbg');
  const mobileMenu = document.getElementById('mob');

  function openMobileMenu() {
    hamburger.classList.add('op');
    mobileMenu.classList.add('op');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('op');
    mobileMenu.classList.remove('op');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('op') ? closeMobileMenu() : openMobileMenu();
  });

  document.getElementById('mobx').addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mob a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ----------------------------------------------------------
     SCROLL ANIMATIONS & PROGRESS BARS
  ---------------------------------------------------------- */
  const animObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        entry.target.querySelectorAll('.dc-pf').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fi, .fl, .fr').forEach(el => animObserver.observe(el));
  document.querySelectorAll('.dc').forEach(el => animObserver.observe(el));

  setTimeout(() => {
    document.querySelectorAll('#hero .fi').forEach(el => el.classList.add('v'));
  }, 100);

  /* ----------------------------------------------------------
     COUNTER ANIMATION
  ---------------------------------------------------------- */
  function animateCounter(el, end, suffix = '', duration = 1800) {
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(progress * end) + (progress < 1 ? '' : suffix);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(document.getElementById('c1'), 12, '+');
        animateCounter(document.getElementById('c2'), 3, '');
        animateCounter(document.getElementById('c3'), 10, '+');
        animateCounter(document.getElementById('c4'), 2027, '');
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsEl = document.querySelector('.h-stats');
  if (statsEl) statsObserver.observe(statsEl);

  /* ----------------------------------------------------------
     PROJECT FILTER TABS
  ---------------------------------------------------------- */
  document.querySelectorAll('.ptab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ptab').forEach(t => t.classList.remove('a'));
      tab.classList.add('a');
      const filter = tab.dataset.f;
      document.querySelectorAll('.pc').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? 'flex' : 'none';
      });
    });
  });

  /* ----------------------------------------------------------
     SERVICE WORKER
  ---------------------------------------------------------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

})();
