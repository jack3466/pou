import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import { initWebGL, toggleWebGL } from '../src/webgl.js';
import { initAnimations, destroyAnimations } from '../src/animations.js';

// Initialize Animate On Scroll (AOS)
AOS.init({
  offset: 100,
  delay: 50,
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

// ==========================================
// Style Toggle Handlers
// ==========================================
const btnStyle1 = document.getElementById("btn-style-1");
const btnStyle2 = document.getElementById("btn-style-2");

function activateStyle1() {
  document.body.classList.remove("style-2");
  if (btnStyle1 && btnStyle2) {
    btnStyle1.classList.add("active");
    btnStyle2.classList.remove("active");
  }
  
  // Initialize and run WebGL (default active in Style 1)
  initWebGL();
  toggleWebGL(true);
  
  // Destroy GSAP animations
  destroyAnimations();
}

function activateStyle2() {
  document.body.classList.add("style-2");
  if (btnStyle1 && btnStyle2) {
    btnStyle2.classList.add("active");
    btnStyle1.classList.remove("active");
  }
  
  // Initialize and run WebGL (also active in Style 2)
  initWebGL();
  toggleWebGL(true);
  
  // Initialize GSAP animations
  initAnimations();
}

if (btnStyle1 && btnStyle2) {
  btnStyle1.addEventListener("click", activateStyle1);
  btnStyle2.addEventListener("click", activateStyle2);
}

// ==========================================
// Headline Typewriter Animation
// ==========================================
const typewriterWords = [
  "Technical Enthusiast",
  "MBA Candidate",
  "Project Leader",
  "Team Lead",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector(".typewriter-text");

function type() {
  if (!typewriterElement) return;
  
  const currentWord = typewriterWords[wordIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typingSpeed = isDeleting ? 40 : 80;
  
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typewriterWords.length;
    typingSpeed = 300;
  }
  
  setTimeout(type, typingSpeed);
}

// Start typewriter effect and default 3D layout on page load
window.addEventListener("DOMContentLoaded", () => {
  type();
  activateStyle1();
});

// ==========================================
// Contact Form Handler
// ==========================================
function handleContactSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMessage").value;
  const feedbackElement = document.getElementById("formFeedback");
  
  if (!feedbackElement) return;
  
  if (!name || !email || !subject || !message) {
    showFeedback("Please fill out all fields.", "alert-danger");
    return;
  }
  
  showFeedback("Thank you! Your message was sent successfully.", "alert-success");
  document.getElementById("contactForm").reset();
  
  setTimeout(() => {
    window.location.href = `mailto:ummar1852@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Hi Ummar, my name is " + name + ".\n\n" + message)}`;
  }, 1200);
}

function showFeedback(message, alertClass) {
  const feedbackElement = document.getElementById("formFeedback");
  if (!feedbackElement) return;
  
  feedbackElement.textContent = message;
  feedbackElement.className = `mt-3 alert ${alertClass} d-block`;
  
  setTimeout(() => {
    feedbackElement.className = "mt-3 alert d-none";
  }, 5000);
}

window.handleContactSubmit = handleContactSubmit;