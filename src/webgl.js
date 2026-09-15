import * as THREE from 'three';

let scene, camera, renderer, animationFrameId = null;
let particleSystem, clock;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let isInitialized = false;

const PARTICLE_COUNT = 1200;
let positions, initialY;

export function initWebGL() {
  const canvas = document.querySelector("#bg-canvas");
  if (!canvas || isInitialized) return;

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 240;
  camera.position.y = 80;
  camera.rotation.x = -0.3;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: false,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setClearColor(0x000000, 1);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  clock = new THREE.Clock();

  // Create an undulating grid of particles (Aurora Wave)
  const geometry = new THREE.BufferGeometry();
  positions = new Float32Array(PARTICLE_COUNT * 3);
  initialY = new Float32Array(PARTICLE_COUNT);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  const cols = 40;
  const rows = 30;
  const spacingX = 14;
  const spacingZ = 12;

  let idx = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = (i - cols / 2) * spacingX;
      const z = (j - rows / 2) * spacingZ;
      const y = Math.sin(i * 0.3) * 12 + Math.cos(j * 0.3) * 12;

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;

      initialY[idx] = y;

      // Constellation Stardust Palette:
      // Deep Indigo (#4f46e5) -> Violet (#7c3aed) -> Azure (#22d3ee) -> Warm Amber (#f59e0b)
      const ratio = (i + j) / (cols + rows);
      // Blend: indigo (0.31, 0.27, 0.90) -> violet (0.49, 0.23, 0.93) -> azure (0.13, 0.83, 0.93) -> amber (0.96, 0.62, 0.04)
      let r, g, b;
      if (ratio < 0.33) {
        const t = ratio / 0.33;
        r = 0.31 + (0.49 - 0.31) * t;
        g = 0.27 + (0.23 - 0.27) * t;
        b = 0.90 + (0.93 - 0.90) * t;
      } else if (ratio < 0.66) {
        const t = (ratio - 0.33) / 0.33;
        r = 0.49 + (0.13 - 0.49) * t;
        g = 0.23 + (0.83 - 0.23) * t;
        b = 0.93 + (0.93 - 0.93) * t;
      } else {
        const t = (ratio - 0.66) / 0.34;
        r = 0.13 + (0.96 - 0.13) * t;
        g = 0.83 + (0.62 - 0.83) * t;
        b = 0.93 + (0.04 - 0.93) * t;
      }

      colors[idx * 3] = r;
      colors[idx * 3 + 1] = g;
      colors[idx * 3 + 2] = b;

      idx++;
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Circular glow texture for soft particles
  const canvasTexture = createCircleTexture();
  const material = new THREE.PointsMaterial({
    size: 3.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.78,
    map: canvasTexture,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Subtle floating background star dust — soft indigo-violet shimmer
  const starGeo = new THREE.BufferGeometry();
  const starCount = 300;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 600;
    starPositions[i + 1] = Math.random() * 300 - 50;
    starPositions[i + 2] = (Math.random() - 0.5) * 500;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({
    size: 1.8,
    color: 0x818cf8,
    transparent: true,
    opacity: 0.50,
    map: canvasTexture,
    blending: THREE.AdditiveBlending
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  isInitialized = true;
  tick();
}

function createCircleTexture() {
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 32;
  const ctx = c.getContext('2d');
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  const texture = new THREE.Texture(c);
  texture.needsUpdate = true;
  return texture;
}

function onMouseMove(event) {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 80;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 50;
}

function onResize() {
  if (!isInitialized) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function tick() {
  const elapsed = clock ? clock.getElapsedTime() : 0;

  // Smooth camera tracking
  targetX += (mouseX - targetX) * 0.03;
  targetY += (mouseY - targetY) * 0.03;

  camera.position.x = targetX;
  camera.position.y = 80 - targetY * 0.5;
  camera.lookAt(0, 0, 0);

  // Undulate the aurora particle wave
  if (particleSystem) {
    const posAttr = particleSystem.geometry.attributes.position;
    const array = posAttr.array;
    const cols = 40;
    const rows = 30;

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Multi-frequency wave calculation
        const wave1 = Math.sin(i * 0.25 + elapsed * 1.2) * 14;
        const wave2 = Math.cos(j * 0.3 + elapsed * 0.9) * 10;
        const wave3 = Math.sin((i + j) * 0.15 + elapsed * 0.8) * 8;

        array[idx * 3 + 1] = initialY[idx] + wave1 + wave2 + wave3;
        idx++;
      }
    }
    posAttr.needsUpdate = true;
    particleSystem.rotation.y = elapsed * 0.02;
  }

  renderer.render(scene, camera);
  animationFrameId = window.requestAnimationFrame(tick);
}

export function toggleWebGL(play) {
  if (!isInitialized) return;
  if (play) {
    if (!animationFrameId) {
      clock.getDelta();
      tick();
    }
  } else {
    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }
}

