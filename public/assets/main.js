// Header scroll state
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal, .point, .step');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));
}

// Mobile overlay
const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('mobileOverlay');
if (menuBtn && overlay) {
  menuBtn.addEventListener('click', () => overlay.classList.toggle('open'));
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => overlay.classList.remove('open')));
}

// In-page scroll-spy (home page sections only)
const spySections = document.querySelectorAll('[data-spy]');
if (spySections.length) {
  const navAnchors = document.querySelectorAll('.nav-links a, .mobile-overlay a');
  const spyIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  spySections.forEach(el => spyIO.observe(el));
}

// Accordion
document.querySelectorAll('.acc-item').forEach(item => {
  const head = item.querySelector('.acc-head');
  const body = item.querySelector('.acc-body');
  head.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item.open').forEach(other => {
      if (other !== item) { other.classList.remove('open'); other.querySelector('.acc-body').style.maxHeight = null; }
    });
    item.classList.toggle('open', !isOpen);
    body.style.maxHeight = !isOpen ? body.scrollHeight + 'px' : null;
  });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const msgEl = document.getElementById('formMsg');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    msgEl.classList.remove('show', 'ok', 'err');
    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';

    const payload = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      company: contactForm.company.value.trim(),
      phone: contactForm.phone.value.trim(),
      message: contactForm.message.value.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        msgEl.textContent = "Thanks — your message is on its way. We'll get back to you shortly.";
        msgEl.classList.add('show', 'ok');
        contactForm.reset();
      } else {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      msgEl.textContent = err.message || "We couldn't send that. Please try again or email us directly.";
      msgEl.classList.add('show', 'err');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}
