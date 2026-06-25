import * as THREE from 'three';

// State Variables
let scene, camera, renderer, clock, animationFrameId = null;
let glassIcosahedrons, glassSpheres, glassTetrahedrons, starField;
let cyanLight, purpleLight;

const items = [];
const dummy = new THREE.Object3D();
let isInitialized = false;

// Viewport sizes
let aspect = window.innerWidth / window.innerHeight;
let vHeight = 0;
let vWidth = 0;

// Mouse coordinates
let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

// Total shapes count: 400
const icosahedronsCount = 130;
const spheresCount = 140;
const tetrahedronsCount = 130;
const starsCount = 1000;

export function initWebGL() {
  const canvas = document.querySelector("#bg-canvas");
  if (!canvas || isInitialized) return;

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  camera.position.z = 8;
  clock = new THREE.Clock();

  // Cinematic Lighting
  const ambientLight = new THREE.AmbientLight(0x05070a, 1.2);
  scene.add(ambientLight);

  // Orbiting Neon Cyan Light
  cyanLight = new THREE.PointLight(0x00f2fe, 10, 45);
  scene.add(cyanLight);

  // Orbiting Electric Purple Light
  purpleLight = new THREE.PointLight(0xB026FF, 10, 45);
  scene.add(purpleLight);

  // Glass-like Material (MeshPhysicalMaterial)
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x111625,
    metalness: 0.8,      // High reflectivity
    roughness: 0.1,      // Glossy finish
    transparent: true,
    opacity: 0.5,
    transmission: 0.9,   // Transparent glass-like transmission
    ior: 1.52,           // Index of refraction
    thickness: 0.7,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    side: THREE.DoubleSide
  });

  // Geometries
  const icosahedronGeometry = new THREE.IcosahedronGeometry(0.25, 0);
  const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16);
  const tetrahedronGeometry = new THREE.TetrahedronGeometry(0.22, 0);
  
  // Instanced Meshes for high performance (400 items total)
  glassIcosahedrons = new THREE.InstancedMesh(icosahedronGeometry, glassMaterial, icosahedronsCount);
  glassSpheres = new THREE.InstancedMesh(sphereGeometry, glassMaterial, spheresCount);
  glassTetrahedrons = new THREE.InstancedMesh(tetrahedronGeometry, glassMaterial, tetrahedronsCount);
  
  scene.add(glassIcosahedrons);
  scene.add(glassSpheres);
  scene.add(glassTetrahedrons);

  // Background Stars
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starsCount * 3);
  for (let i = 0; i < starsCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 35;
    starPositions[i + 1] = (Math.random() - 0.5) * 35;
    starPositions[i + 2] = -5 - Math.random() * 8;
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starMaterial = new THREE.PointsMaterial({
    size: 0.03,
    color: 0x4facfe,
    transparent: true,
    opacity: 0.5
  });
  starField = new THREE.Points(starGeometry, starMaterial);
  scene.add(starField);

  // Setup boundaries
  updateBoundaries();
  initPositions();

  // Listeners
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);

  isInitialized = true;
}

function updateBoundaries() {
  aspect = window.innerWidth / window.innerHeight;
  vHeight = 8 * Math.tan((camera.fov * Math.PI) / 360);
  vWidth = vHeight * aspect;
}

function initPositions() {
  items.length = 0;
  
  // Icosahedrons
  for (let i = 0; i < icosahedronsCount; i++) {
    items.push({
      type: 'icosahedron',
      index: i,
      x: (Math.random() - 0.5) * vWidth * 2.2,
      y: (Math.random() - 0.5) * vHeight * 2.2,
      z: (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 0.004,
      vy: 0.006 + Math.random() * 0.010, // upward drift
      vz: (Math.random() - 0.5) * 0.004,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rz: Math.random() * Math.PI,
      rvx: (Math.random() - 0.5) * 0.015, // rotational speeds
      rvy: (Math.random() - 0.5) * 0.015,
      rvz: (Math.random() - 0.5) * 0.015,
      scale: 0.7 + Math.random() * 0.6,
      ox: 0,
      oy: 0,
      oz: 0
    });
  }

  // Spheres
  for (let i = 0; i < spheresCount; i++) {
    items.push({
      type: 'sphere',
      index: i,
      x: (Math.random() - 0.5) * vWidth * 2.2,
      y: (Math.random() - 0.5) * vHeight * 2.2,
      z: (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 0.004,
      vy: 0.004 + Math.random() * 0.008,
      vz: (Math.random() - 0.5) * 0.004,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rz: Math.random() * Math.PI,
      rvx: (Math.random() - 0.5) * 0.01,
      rvy: (Math.random() - 0.5) * 0.01,
      rvz: (Math.random() - 0.5) * 0.01,
      scale: 0.6 + Math.random() * 0.7,
      ox: 0,
      oy: 0,
      oz: 0
    });
  }

  // Tetrahedrons
  for (let i = 0; i < tetrahedronsCount; i++) {
    items.push({
      type: 'tetrahedron',
      index: i,
      x: (Math.random() - 0.5) * vWidth * 2.2,
      y: (Math.random() - 0.5) * vHeight * 2.2,
      z: (Math.random() - 0.5) * 5,
      vx: (Math.random() - 0.5) * 0.004,
      vy: 0.005 + Math.random() * 0.009,
      vz: (Math.random() - 0.5) * 0.004,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rz: Math.random() * Math.PI,
      rvx: (Math.random() - 0.5) * 0.018,
      rvy: (Math.random() - 0.5) * 0.018,
      rvz: (Math.random() - 0.5) * 0.018,
      scale: 0.6 + Math.random() * 0.6,
      ox: 0,
      oy: 0,
      oz: 0
    });
  }
}

function handleMouseMove(event) {
  // Calculate NDC (Normalized Device Coordinates)
  const nx = (event.clientX / window.innerWidth - 0.5) * 2;
  const ny = -(event.clientY / window.innerHeight - 0.5) * 2;
  
  mouseX += (nx - mouseX) * 0.1;
  mouseY += (ny - mouseY) * 0.1;
  
  targetMouseX = mouseX * vWidth;
  targetMouseY = mouseY * vHeight;
}

function handleResize() {
  if (!isInitialized) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  updateBoundaries();
  initPositions();
}

function tick() {
  const elapsedTime = clock.getElapsedTime();

  // Orbit PointLights
  cyanLight.position.x = Math.sin(elapsedTime * 0.6) * 6;
  cyanLight.position.y = Math.cos(elapsedTime * 0.4) * 4;
  cyanLight.position.z = Math.cos(elapsedTime * 0.6) * 6;

  purpleLight.position.x = -Math.sin(elapsedTime * 0.5) * 6;
  purpleLight.position.y = -Math.cos(elapsedTime * 0.3) * 4;
  purpleLight.position.z = -Math.cos(elapsedTime * 0.5) * 6;

  // Camera Tilt Parallax
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
  camera.lookAt(0, 0, 0);

  let icosahedronIdx = 0;
  let sphereIdx = 0;
  let tetrahedronIdx = 0;

  const yBound = vHeight + 1.2;
  const xBound = vWidth + 1.2;
  const repulsionRadius = 3.2;

  items.forEach(item => {
    // Drift physics
    item.y += item.vy;
    item.x += item.vx;
    item.z += item.vz;

    item.rx += item.rvx;
    item.ry += item.rvy;
    item.rz += item.rvz;

    // Loop checks
    if (item.y > yBound) {
      item.y = -yBound;
      item.x = (Math.random() - 0.5) * vWidth * 2.2;
    }
    if (item.x > xBound) item.x = -xBound;
    if (item.x < -xBound) item.x = xBound;

    // Mouse repulsion on X and Z axis
    const dx = (item.x + item.ox) - targetMouseX;
    const dy = (item.y + item.oy) - targetMouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < repulsionRadius) {
      const force = (repulsionRadius - dist) / repulsionRadius;
      const angle = Math.atan2(dy, dx);
      
      const targetOx = Math.cos(angle) * force * 2.0;
      const targetOz = Math.sin(angle) * force * 1.5;
      
      item.ox += (targetOx - item.ox) * 0.08;
      item.oz += (targetOz - item.oz) * 0.08;
    } else {
      // Smooth return
      item.ox += (0 - item.ox) * 0.04;
      item.oz += (0 - item.oz) * 0.04;
    }

    dummy.position.set(item.x + item.ox, item.y + item.oy, item.z + item.oz);
    dummy.rotation.set(item.rx, item.ry, item.rz);
    dummy.scale.setScalar(item.scale);
    dummy.updateMatrix();

    if (item.type === 'icosahedron') {
      glassIcosahedrons.setMatrixAt(icosahedronIdx++, dummy.matrix);
    } else if (item.type === 'sphere') {
      glassSpheres.setMatrixAt(sphereIdx++, dummy.matrix);
    } else if (item.type === 'tetrahedron') {
      glassTetrahedrons.setMatrixAt(tetrahedronIdx++, dummy.matrix);
    }
  });

  glassIcosahedrons.instanceMatrix.needsUpdate = true;
  glassSpheres.instanceMatrix.needsUpdate = true;
  glassTetrahedrons.instanceMatrix.needsUpdate = true;

  starField.rotation.y = elapsedTime * 0.005;

  renderer.render(scene, camera);
  animationFrameId = window.requestAnimationFrame(tick);
}

export function toggleWebGL(play) {
  if (!isInitialized) return;
  
  if (play) {
    if (!animationFrameId) {
      clock.getDelta(); // Reset clock
      tick();
    }
  } else {
    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }
}
