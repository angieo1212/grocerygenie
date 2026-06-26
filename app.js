// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Waitlist form
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const btn = this.querySelector('button');
  btn.textContent = '✓ You\'re on the list!';
  btn.style.background = '#059669';
  btn.disabled = true;
  document.getElementById('emailInput').disabled = true;
  // In production this would POST to your backend / email service
  console.log('Waitlist signup:', email);
});

// Smooth nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#7C3AED' : '';
  });
});

// Pricing buttons — wire to Stripe Checkout (placeholder links for now)
const STRIPE_LINKS = {
  pro: 'https://buy.stripe.com/placeholder_pro',
  family: 'https://buy.stripe.com/placeholder_family'
};
document.getElementById('pro-btn').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('family-btn').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
});
