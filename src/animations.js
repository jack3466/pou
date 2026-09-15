import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let cardListeners = [];
let magneticListeners = [];
let scrollTriggers = [];

export function initAnimations() {
  // 1. Interactive Card Spotlight and 3D Tilt
  const cards = document.querySelectorAll('.bento-card, .luxury-card, .service-card, .project-card');
  cards.forEach((card) => {
    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS custom properties for radial gradient spotlight
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D Tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const onMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const onMouseEnter = () => {
      card.style.transition = 'none';
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
    card.addEventListener('mouseenter', onMouseEnter);

    cardListeners.push({ card, onMouseMove, onMouseLeave, onMouseEnter });
  });

  // 2. Magnetic Buttons Effect
  const magneticButtons = document.querySelectorAll('.btn-aurora, .btn-whatsapp, .btn-ghost-outline, .btn-magnetic');
  magneticButtons.forEach((btn) => {
    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.25,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    magneticListeners.push({ btn, onMouseMove, onMouseLeave });
  });

  // 3. Scroll Reveal for Sections and Badges
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach((el) => {
    const tween = gsap.fromTo(el, 
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
    scrollTriggers.push(tween);
  });
}

export function destroyAnimations() {
  // Clean up card event listeners
  cardListeners.forEach(({ card, onMouseMove, onMouseLeave, onMouseEnter }) => {
    card.removeEventListener('mousemove', onMouseMove);
    card.removeEventListener('mouseleave', onMouseLeave);
    card.removeEventListener('mouseenter', onMouseEnter);
    card.style.transform = '';
  });
  cardListeners = [];

  // Clean up magnetic button listeners
  magneticListeners.forEach(({ btn, onMouseMove, onMouseLeave }) => {
    btn.removeEventListener('mousemove', onMouseMove);
    btn.removeEventListener('mouseleave', onMouseLeave);
    gsap.set(btn, { clearProps: 'all' });
  });
  magneticListeners = [];

  // Clean up scroll triggers
  scrollTriggers.forEach((tween) => {
    if (tween.scrollTrigger) tween.scrollTrigger.kill();
    tween.kill();
  });
  scrollTriggers = [];
}

