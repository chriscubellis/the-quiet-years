import "./css/fromjs.sass";
import Plyr from "plyr";

const players = Array.from(document.querySelectorAll(".plyr__video-embed")).map(
  p =>
    new Plyr(p, {
      controls: ["play-large"],
      muted: true,
      autoplay: true,
      loop: { active: true },
      storage: { enabled: false, key: "plyr" },
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
    })
);

const sliders = document.querySelectorAll(".slider");

for (var i = 0; i < sliders.length; i++) {
  const slider = sliders[i];
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}
