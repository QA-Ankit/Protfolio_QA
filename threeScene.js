/*==================================================
 PREMIUM THREE.JS HERO SCENE
 Author : Ankit Kumar Bhartiya
==================================================*/

const container = document.getElementById("three-container");

if (container) {

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(

45,

container.clientWidth / container.clientHeight,

0.1,

1000

);

camera.position.z = 8;

/*=========================================
RENDERER
=========================================*/

const renderer = new THREE.WebGLRenderer({

alpha: true,

antialias: true,

powerPreference: "high-performance"

});

renderer.setPixelRatio(

Math.min(window.devicePixelRatio,2)

);

renderer.setSize(

container.clientWidth,

container.clientHeight

);

renderer.outputColorSpace =

THREE.SRGBColorSpace;

container.appendChild(renderer.domElement);

/*=========================================
LIGHTS
=========================================*/

const ambient = new THREE.AmbientLight(

0xffffff,

1.6

);

scene.add(ambient);

const pointLight = new THREE.PointLight(

0x3B82F6,

5,

50

);

pointLight.position.set(

6,

6,

8

);

scene.add(pointLight);

const purpleLight = new THREE.PointLight(

0x7C3AED,

3,

50

);

purpleLight.position.set(

-6,

-5,

4

);

scene.add(purpleLight);

/*=========================================
MAIN SPHERE
=========================================*/

const geometry =

new THREE.IcosahedronGeometry(

2,

40

);

const material =

new THREE.MeshPhysicalMaterial({

color:0xffffff,

metalness:.15,

roughness:.15,

transmission:.92,

transparent:true,

opacity:.55,

clearcoat:1,

wireframe:true

});

const sphere =

new THREE.Mesh(

geometry,

material

);

scene.add(sphere);

/*=========================================
PARTICLES
=========================================*/

const particleGeometry =

new THREE.BufferGeometry();

const particleCount = 2500;

const positions = [];

for(let i=0;i<particleCount;i++){

const radius =

2.2 + Math.random()*0.35;

const theta =

Math.random()*Math.PI*2;

const phi =

Math.acos(

2*Math.random()-1

);

positions.push(

radius*Math.sin(phi)*Math.cos(theta),

radius*Math.sin(phi)*Math.sin(theta),

radius*Math.cos(phi)

);

}

particleGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(

positions,

3

)

);

const particleMaterial =

new THREE.PointsMaterial({

color:0x38BDF8,

size:.03,

transparent:true,

opacity:.9,

depthWrite:false

});

const particles =

new THREE.Points(

particleGeometry,

particleMaterial

);

scene.add(particles);

/*=========================================
OUTER GLOW
=========================================*/

const glowGeometry =

new THREE.SphereGeometry(

2.35,

64,

64

);

const glowMaterial =

new THREE.MeshBasicMaterial({

color:0x3B82F6,

transparent:true,

opacity:.05,

side:THREE.BackSide

});

const glow =

new THREE.Mesh(

glowGeometry,

glowMaterial

);

glow.scale.set(

1.2,

1.2,

1.2

);

scene.add(glow);

/*=========================================
MOUSE INTERACTION
=========================================*/

let mouseX = 0;

let mouseY = 0;

window.addEventListener(

"mousemove",

e=>{

mouseX =

(e.clientX/window.innerWidth-.5)*2;

mouseY =

(e.clientY/window.innerHeight-.5)*2;

});

/*==================================================
 PREMIUM ANIMATION LOOP
==================================================*/

const clock = new THREE.Clock();

function animate() {

requestAnimationFrame(animate);

const elapsed = clock.getElapsedTime();

/*------------------------------------
AUTO ROTATION
------------------------------------*/

sphere.rotation.x += 0.0015;

sphere.rotation.y += 0.0025;

particles.rotation.y += 0.0009;

particles.rotation.x += 0.0004;

/*------------------------------------
FLOATING EFFECT
------------------------------------*/

sphere.position.y =

Math.sin(elapsed * 0.8) * 0.12;

particles.position.y =

Math.sin(elapsed * 0.8) * 0.12;

glow.position.y =

Math.sin(elapsed * 0.8) * 0.12;

/*------------------------------------
BREATHING GLOW
------------------------------------*/

const scale =

1.18 + Math.sin(elapsed * 1.5) * 0.03;

glow.scale.set(scale, scale, scale);

glow.material.opacity =

0.04 + Math.sin(elapsed * 2) * 0.015;

/*------------------------------------
MOUSE ROTATION
------------------------------------*/

sphere.rotation.y +=

(mouseX * 0.03 - sphere.rotation.y) * 0.04;

sphere.rotation.x +=

(-mouseY * 0.03 - sphere.rotation.x) * 0.04;

particles.rotation.y +=

(mouseX * 0.01);

particles.rotation.x +=

(-mouseY * 0.01);

/*------------------------------------
CAMERA PARALLAX
------------------------------------*/

camera.position.x +=

(mouseX * 0.4 - camera.position.x) * 0.03;

camera.position.y +=

(-mouseY * 0.4 - camera.position.y) * 0.03;

camera.lookAt(scene.position);

/*------------------------------------
PARTICLE PULSE
------------------------------------*/

particleMaterial.size =

0.028 + Math.sin(elapsed * 3) * 0.004;

/*------------------------------------
RENDER
------------------------------------*/

renderer.render(scene, camera);

}

animate();

/*==================================================
WINDOW RESIZE
==================================================*/

window.addEventListener("resize", () => {

camera.aspect =

container.clientWidth / container.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(

container.clientWidth,

container.clientHeight

);

renderer.setPixelRatio(

Math.min(window.devicePixelRatio, 2)

);

});

/*==================================================
PAGE VISIBILITY
==================================================*/

document.addEventListener("visibilitychange", () => {

if (document.hidden) {

renderer.setAnimationLoop(null);

} else {

renderer.setAnimationLoop(animate);

}

});

/*==================================================
CLEANUP (OPTIONAL)
==================================================*/

window.addEventListener("beforeunload", () => {

geometry.dispose();

material.dispose();

particleGeometry.dispose();

particleMaterial.dispose();

glowGeometry.dispose();

glowMaterial.dispose();

renderer.dispose();

});

}
