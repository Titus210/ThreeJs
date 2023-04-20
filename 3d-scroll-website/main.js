import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64); //height, segments
const material = new THREE.MeshBasicMaterial({
  color: '#00df83'
})

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)
// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}



// light
const light = new THREE.PointLight(0xffffff, 10, 100); // light.position.set(0, 10, 10); x,y,z position
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height) // field of view, aspect ratio, clipping points
camera.position.z = 20;
scene.add(camera);

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


