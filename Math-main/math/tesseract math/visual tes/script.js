// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a tesseract geometry
const tesseractGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const tesseractMesh = new THREE.Mesh(tesseractGeometry, material);

// Add the tesseract to the scene
scene.add(tesseractMesh);

// Position the camera
camera.position.z = 5;

// Define a function to animate the tesseract
function animate() {
    requestAnimationFrame(animate);

    // Rotate the tesseract
    tesseractMesh.rotation.x += 0.01;
    tesseractMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Call the animate function
animate();
