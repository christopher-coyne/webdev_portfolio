console.log("hello world");

const clips = document.querySelectorAll(".clip");
for (let i = 0; i < clips.length; i++) {
  clips[i].addEventListener("mouseenter", function (e) {
    clips[i].play();
  });
  clips[i].addEventListener("mouseout", function (e) {
    clips[i].pause();
  });
}

const about = document.querySelector(".clip");
function generateReport() {
  window.location.href = "#about";
}

/* gsap stuff */
const test_path = document.querySelector("#ab");
let tl = gsap.timeline();
tl.to("#starter", { strokeDashoffset: 0, duration: 0.3 }); // 2
tl.to("#ac", { strokeDashoffset: 0, duration: 0.3 }); // 2
tl.to("#circlec", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#ad", { strokeDashoffset: 0, duration: 0.3 }); // 4
tl.to("#circled", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#cg", { strokeDashoffset: 0, duration: 0.3 }); // 4
tl.to("#circleg", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#ch", { strokeDashoffset: 0, duration: 0.3 }); // 5
tl.to("#circleh", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#gl", { strokeDashoffset: 0, duration: 0.3 }); // 7
tl.to("#circlel", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#di", { strokeDashoffset: 0, duration: 0.3 }); // 7
tl.to("#circlei", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#ab", { strokeDashoffset: 0, duration: 0.3 }); // 8
tl.to("#circleb", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#lo", { strokeDashoffset: 0, duration: 0.3 }); // 9
tl.to("#circleo", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#bf", { strokeDashoffset: 0, duration: 0.3 }); // 9
tl.to("#circlef", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#im", { strokeDashoffset: 0, duration: 0.3 }); // 9
tl.to("#circlem", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#kl", { strokeDashoffset: 0, duration: 0.3 }); // 10
tl.to("#circlek", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#no", { strokeDashoffset: 0, duration: 0.3 }); // 12
tl.to("#circlen", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#jk", { strokeDashoffset: 0, duration: 0.3 }); // 14
tl.to("#circlej", { fill: "#E0FBFC", duration: 0.05 });
tl.to("#be", { strokeDashoffset: 0, duration: 0.3 }); // 17
tl.to("#circlee", { fill: "#E0FBFC", duration: 0.05 });
console.log("tl : ", tl);
/*
var video = document.querySelector(".video");
var videoFiller = document.querySelector(".videoFiller");
var gif = document.createElement("img");
gif.src = "./videos/largescreentest.gif";

video.addEventListener("mouseover", (event) => {
  console.log("hovered!!!");
  video.replaceChild(gif, videoFiller);
});

gif.addEventListener("mouseout", (event) => {
  console.log("un hovered");
  video.replaceChild(videoFiller, gif);
});
*/

/*
const myfreeze = new Freezeframe(".freezeframe", {
  trigger: "hover",
  overlay: false,
});

console.log("freeze frame : ", myfreeze);
*/
