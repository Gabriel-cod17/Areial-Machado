export function startVideo() {
  const videoDivNav = document.getElementById("videoDivNav");
  const videoGrid = document.getElementById("videoGrid");

  document.body.addEventListener(
    "touchstart",
    () => {
      videoDivNav.muted = true;
      videoGrid.muted = true;
      videoDivNav.play();
      videoGrid.play();
    },
    { once: true },
  );
}
