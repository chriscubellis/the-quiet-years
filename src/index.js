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
