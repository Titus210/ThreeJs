import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64); //height, segments
const material = new THREE.MeshBasicMaterial({
  color: '#00ff83'
})

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

// light
const light = new THREE.PointLight(0xffffff, 1, 100); //
light.position.set(0, 10, 10);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600,0.1, 100) // field of view, aspect ratio, clipping points
camera.position.z = 20;
scene.add(camera);

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
renderer.render(scene, camera);


