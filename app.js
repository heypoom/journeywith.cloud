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

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;
renderer.setClearColor(0xffffff, 0.0);

document.getElementById("canvas").appendChild(renderer.domElement);

const starGeometry = new THREE.Geometry();

for (let i = 0; i < 112000; i++) {
  const star = new THREE.Vector3();
  star.x = THREE.Math.randFloatSpread(1200);
  star.y = THREE.Math.randFloatSpread(1200);
  star.z = THREE.Math.randFloatSpread(1200);
  starGeometry.vertices.push(star);
}

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starField = new THREE.Points(starGeometry, starsMaterial);

scene.add(starField);

renderer.render(scene, camera);
