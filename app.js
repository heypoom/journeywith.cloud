var rellax = new Rellax(".rellax");

const lyric = document.getElementById("lyric");

window.addEventListener("scroll", function() {
  if (lyric.inViewport(0.5, 0.5)) {
    lyric.classList.replace("hidden", "fade");
  }
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);

document.getElementById("canvas").appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 100);

// const starGeometry = new THREE.Geometry();

// for (let i = 0; i < 112≠000; i++) {
//   const star = new THREE.Vector3();
//   star.x = THREE.Math.randFloatSpread(1200);
//   star.y = THREE.Math.randFloatSpread(1200);
//   star.z = THREE.Math.randFloatSpread(1200);
//   starGeometry.vertices.push(star);
// }

// const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
// const starField = new THREE.Points(starGeometry, starsMaterial);

scene.add(light);

renderer.render(scene, camera);
