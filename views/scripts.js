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
