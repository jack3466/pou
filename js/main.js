import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/line-awesome.min.css';
import '../css/style.css';
import { initWebGL, toggleWebGL } from '../src/webgl.js';
import { initAnimations } from '../src/animations.js';

// Initialize WebGL and Motion Interactions on DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  initWebGL();
  toggleWebGL(true);
  initAnimations();
  initChipSelectors();
  initLiveClock();
});

// ==========================================
// Interactive Project Inquiry Chip Selectors
// ==========================================
let selectedServices = new Set(["Custom Web Application"]);
let selectedTimeline = "Immediate (< 2 Weeks)";

function initChipSelectors() {
  const serviceChips = document.querySelectorAll('.chip-btn[data-group="service"]');
  const timelineChips = document.querySelectorAll('.chip-btn[data-group="timeline"]');

  serviceChips.forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const val = chip.getAttribute('data-value');
      if (selectedServices.has(val)) {
        if (selectedServices.size > 1) {
          selectedServices.delete(val);
          chip.classList.remove('active');
        }
      } else {
        selectedServices.add(val);
        chip.classList.add('active');
      }
    });
  });

  timelineChips.forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      timelineChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      selectedTimeline = chip.getAttribute('data-value');
    });
  });
}

// ==========================================
// Live Client Local Time (IST)
// ==========================================
function initLiveClock() {
  const clockEl = document.getElementById("client-local-time");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    clockEl.textContent = new Intl.DateTimeFormat("en-US", options).format(now) + " IST";
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// Contact & Project Inquiry Form Handler
// ==========================================
async function handleContactSubmit(event) {
  event.preventDefault();

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Send Project Inquiry';

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();
  const feedbackElement = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    showFeedback("Please complete all required fields.", "alert-danger");
    return;
  }

  const servicesText = Array.from(selectedServices).join(", ");

  // Show loading indicator
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending Inquiry...';
  }

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        services: servicesText,
        timeline: selectedTimeline,
        message
      })
    });

    const data = await res.json();

    if (res.ok && data.success) {
      showFeedback("✨ Inquiry sent successfully! Ummar will review your project and get back to you within 24 hours.", "alert-success");
      document.getElementById("contactForm").reset();
    } else {
      throw new Error(data.error || 'Failed to send message.');
    }
  } catch (error) {
    console.warn('Direct API submission error, falling back to mail client:', error);
    showFeedback("Direct inquiry received! Opening your email client to confirm dispatch...", "alert-info");
    const fullBody = `Hi Ummar,\n\nMy name is ${name} (${email}).\n\nI am looking for: ${servicesText}\nTimeline: ${selectedTimeline}\n\nProject Overview:\n${message}`;
    const mailtoUrl = `mailto:ummar1852@gmail.com?subject=${encodeURIComponent("New Project Inquiry from " + name)}&body=${encodeURIComponent(fullBody)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }
}

function sendWhatsAppDirect() {
  const name = document.getElementById("contactName") ? document.getElementById("contactName").value.trim() : "";
  const servicesText = Array.from(selectedServices).join(", ");
  const intro = name ? `Hi Ummar, this is ${name}.` : "Hi Ummar,";
  const text = `${intro} I saw your portfolio and would like to discuss a project regarding: ${servicesText} (Timeline: ${selectedTimeline}).`;

  const waUrl = `https://wa.me/918125763466?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");
}

function showFeedback(message, alertClass) {
  const feedbackElement = document.getElementById("formFeedback");
  if (!feedbackElement) return;

  feedbackElement.textContent = message;
  feedbackElement.className = `mt-3 alert ${alertClass} d-block`;

  setTimeout(() => {
    feedbackElement.className = "mt-3 alert d-none";
  }, 6000);
}

window.handleContactSubmit = handleContactSubmit;
window.sendWhatsAppDirect = sendWhatsAppDirect;