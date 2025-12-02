document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header scroll effect
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.background = 'rgba(255,255,255,0.98)';
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    } else {
      header.style.background = 'rgba(255,255,255,0.95)';
      header.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });

  // Rotating headline
  const texts = [
    "email marketing sucks.",
    "ads marketing sucks.",
    "social media sucks."
  ];
  const rotating = document.getElementById('rotating');
  const sr = document.getElementById('rotatingSr');
  let idx = 0;
  const switchInterval = 3000;
  const transitionMs = 450; // must match CSS transition

  // Initialize
  if (rotating) {
    rotating.textContent = texts[0];
    if (sr) sr.textContent = texts[0];

    setInterval(() => {
      // fade out
      rotating.classList.add('is-hidden');
      // after fade-out, swap text then fade in
      setTimeout(() => {
        idx = (idx + 1) % texts.length;
        rotating.textContent = texts[idx];
        if (sr) sr.textContent = texts[idx];
        rotating.classList.remove('is-hidden');
      }, transitionMs);
    }, switchInterval);
  }

  // Marquee: compute duration based on one logo-set width
  const logoTrack = document.getElementById('logoTrack');
  const logoTrackWrap = document.getElementById('logoTrackWrap');

  if (logoTrack && logoTrackWrap) {
    const firstSet = logoTrack.querySelector('.logo-set');
    const speedPxPerSec = 80; // tweak: higher => faster
    let resizeTimer = null;

    function updateMarqueeDuration() {
      if (!firstSet) return;
      // distance to travel = width of first set (one copy)
      const width = firstSet.getBoundingClientRect().width;
      const duration = Math.max(8, Math.round(width / speedPxPerSec)); // seconds, min 8s
      logoTrack.style.setProperty('--marquee-duration', duration + 's');
    }

    // Initial
    updateMarqueeDuration();

    // Recompute on resize (debounced)
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateMarqueeDuration, 120);
    });

    // Pause / resume on pointer events (works for mouse & touch)
    function pauseMarquee() {
      logoTrack.classList.add('pause');
    }
    function resumeMarquee() {
      logoTrack.classList.remove('pause');
    }

    logoTrackWrap.addEventListener('pointerenter', pauseMarquee);
    logoTrackWrap.addEventListener('pointerleave', resumeMarquee);
    logoTrackWrap.addEventListener('pointerdown', pauseMarquee);
    logoTrackWrap.addEventListener('pointerup', resumeMarquee);
    logoTrackWrap.addEventListener('focusin', pauseMarquee);
    logoTrackWrap.addEventListener('focusout', resumeMarquee);
  }
});
