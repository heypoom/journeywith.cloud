particlesJS.load("particles-js", "assets/particles-config.json", function() {
  console.log("callback - particles.js config loaded");
});

var rellax = new Rellax(".rellax");
var lyric = document.getElementById("lyric");

window.addEventListener("scroll", function() {
  if (lyric.inViewport(0.5, 0.5)) {
    lyric.classList.replace("hidden", "fade");
  }
});
