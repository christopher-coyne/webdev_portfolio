function generateReport() {
  window.location.href = "#about";
}

console.log("here");

/* gsap stuff */
/*
const test_path = document.querySelector("#ab");
let tl = gsap.timeline();
console.log("tl ", tl);
tl.delay(1);
tl.to("#starter", { strokeDashoffset: 0, duration: 0.5 }); // 2
tl.to("#ac", { strokeDashoffset: 0, duration: 0.5 }); // 2
tl.to("#circlec", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#ad", { strokeDashoffset: 0, duration: 0.3 }); // 4
tl.to("#circled", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#cg", { strokeDashoffset: 0, duration: 0.3 }); // 4
tl.to("#circleg", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#ch", { strokeDashoffset: 0, duration: 0.3 }); // 5
tl.to("#circleh", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#gl", { strokeDashoffset: 0, duration: 0.3 }); // 7
tl.to("#circlel", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#di", { strokeDashoffset: 0, duration: 0.3 }); // 7
tl.to("#circlei", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#ab", { strokeDashoffset: 0, duration: 0.3 }); // 8
tl.to("#circleb", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#lo", { strokeDashoffset: 0, duration: 0.3 }); // 9
tl.to("#circleo", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#bf", { strokeDashoffset: 0, duration: 0.3 }); // 9
tl.to("#circlef", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#im", { strokeDashoffset: 0, duration: 0.3 }); // 9
tl.to("#circlem", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#kl", { strokeDashoffset: 0, duration: 0.3 }); // 10
tl.to("#circlek", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#no", { strokeDashoffset: 0, duration: 0.3 }); // 12
tl.to("#circlen", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#jk", { strokeDashoffset: 0, duration: 0.3 }); // 14
tl.to("#circlej", { fill: "#E0FBFC", duration: 0.1 });
tl.to("#be", { strokeDashoffset: 0, duration: 0.3 }); // 17
tl.to("#circlee", { fill: "#E0FBFC", duration: 0.1 });
*/

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

/*
let tlHero = gsap.timeline();
tlHero.delay(0.25);
tlHero.from("#hero-link-github", { y: -30, opacity: 0, duration: 0.3 });
tlHero.from("#hero-link-linkedin", { y: -30, opacity: 0, duration: 0.3 });
tlHero.from("#hero-link-resume", { y: -30, opacity: 0, duration: 0.3 });
*/

/*
gsap.from("#graph", {
  opacity: 0,
  duration: 1,
});
*/
