const colors = gsap.to("p", {
  paused: true,
  duration: 20,
  repeat: -1,
  "--hue": 360,
});

const doRandom = () => {
  gsap
    .timeline()
    .to("p", {
      duration: 0.1,
      opacity: function () {
        return gsap.utils.random(0.9, 0.95);
      },
      delay: function () {
        return gsap.utils.random(0.1, 2);
      },
    })
    .to("p", {
      duration: 0.1,
      opacity: 1,
      onComplete: function () {
        doRandom();
      },
    });
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// this
if (!mediaQuery || !mediaQuery.matches) {
  colors.play();
  doRandom();
}
