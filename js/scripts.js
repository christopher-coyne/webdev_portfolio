function generateReport() {
  window.location.href = "#about";
}

gsap.from("#hero-title", {
  opacity: 0,
  duration: 1,
});

gsap.from("#hero-hr", {
  opacity: 0,
  duration: 1,
});

gsap.from("#hero-blurb", {
  opacity: 0,
  duration: 1,
});

gsap.from("#profile_pic_container", {
  opacity: 0,
  duration: 1,
});
