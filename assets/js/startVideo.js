export function startVideo() {
  const videoDivNav = document.getElementById("videoDivNav");
  const videoGridONe = document.getElementById("videoGridONe");
  const videoGridTwo = document.getElementById("videoGridTwo");
  const videoGridThree = document.getElementById("videoGridThree");

  document.body.addEventListener(
    "touchstart",
    () => {
      videoDivNav.muted = true;
      videoGridONe.muted = true;
      videoGridTwo.muted = true;
      videoGridThree.muted = true;
      videoDivNav.play();
      videoGridONe.play();
      videoGridTwo.play();
      videoGridThree.play();
    },
    { once: true },
  );
}
