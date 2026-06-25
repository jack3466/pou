import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let marqueeTween = null;
let marqueeTrigger = null;
let imageTriggers = [];
let cursorMoveHandler = null;
let cursorEnterHandlers = [];
let cursorLeaveHandlers = [];

export function initAnimations() {
  // Only initialize animations if style-2 is active
  if (!document.body.classList.contains("style-2")) return;
  
  // Clean up any existing instances first just in case
  destroyAnimations();

  // 1. Text Reveal Animation (Hero Typography)
  gsap.fromTo([".hero-title", ".hero-subtitle", ".hero-tagline"], 
    { yPercent: 100 },
    { yPercent: 0, duration: 1.0, ease: "power4.out", stagger: 0.15 }
  );

  // 2. Infinite Marquee Loop with Scroll Direction Detection
  const marqueeInner = document.querySelector(".marquee-inner");
  if (marqueeInner) {
    marqueeTween = gsap.to(marqueeInner, {
      xPercent: -50,
      ease: "none",
      duration: 18,
      repeat: -1
    });

    marqueeTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const direction = self.direction; // 1 for down, -1 for up
        gsap.to(marqueeTween, {
          timeScale: direction,
          duration: 0.5,
          overwrite: "auto"
        });
      }
    });
  }

  // 3. Scroll-Triggered Project Image Scale-down
  const imgs = document.querySelectorAll(".project-img");
  imageTriggers = [];
  imgs.forEach((img) => {
    const card = img.closest(".card");
    if (card) {
      const tween = gsap.fromTo(img, 
        { scale: 1.25 },
        {
          scale: 1.0,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
      imageTriggers.push(tween);
    }
  });

  // 4. Custom Brutalist Square Cursor Follower
  const cursor = document.getElementById("brutalist-cursor");
  if (cursor) {
    // Follow mouse
    cursorMoveHandler = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };
    window.addEventListener("mousemove", cursorMoveHandler);

    // Hover effect on links and cards
    const hoverables = document.querySelectorAll("a, button, .btn, .card, .social-btn");
    hoverables.forEach((el) => {
      const enter = () => {
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: "#CCFF00",
          mixBlendMode: "normal",
          duration: 0.15
        });
      };
      const leave = () => {
        gsap.to(cursor, {
          scale: 1.0,
          backgroundColor: "#FFFFFF",
          mixBlendMode: "difference",
          duration: 0.15
        });
      };
      
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      
      cursorEnterHandlers.push({ el, handler: enter });
      cursorLeaveHandlers.push({ el, handler: leave });
    });
  }
}

export function destroyAnimations() {
  // 1. Reset text layout properties
  gsap.killTweensOf([".hero-title", ".hero-subtitle", ".hero-tagline"]);
  gsap.set([".hero-title", ".hero-subtitle", ".hero-tagline"], { clearProps: "all" });

  // 2. Kill marquee animations
  if (marqueeTween) {
    marqueeTween.kill();
    marqueeTween = null;
  }
  if (marqueeTrigger) {
    marqueeTrigger.kill();
    marqueeTrigger = null;
  }
  const marqueeInner = document.querySelector(".marquee-inner");
  if (marqueeInner) {
    gsap.set(marqueeInner, { clearProps: "all" });
  }

  // 3. Kill project image scroll triggers
  imageTriggers.forEach((tween) => {
    if (tween.scrollTrigger) {
      tween.scrollTrigger.kill();
    }
    tween.kill();
  });
  imageTriggers = [];
  const imgs = document.querySelectorAll(".project-img");
  imgs.forEach((img) => {
    gsap.set(img, { clearProps: "all" });
  });

  // 4. Remove cursor handlers
  if (cursorMoveHandler) {
    window.removeEventListener("mousemove", cursorMoveHandler);
    cursorMoveHandler = null;
  }
  cursorEnterHandlers.forEach(({ el, handler }) => {
    el.removeEventListener("mouseenter", handler);
  });
  cursorEnterHandlers = [];
  
  cursorLeaveHandlers.forEach(({ el, handler }) => {
    el.removeEventListener("mouseleave", handler);
  });
  cursorLeaveHandlers = [];

  // Reset cursor styles
  const cursor = document.getElementById("brutalist-cursor");
  if (cursor) {
    gsap.set(cursor, { clearProps: "all" });
  }
}
