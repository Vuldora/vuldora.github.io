const btn = document.getElementById("fsBtn");
  const iframe = document.getElementById("gameFrame");

  btn.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      // enter fullscreen
      if (iframe.requestFullscreen) {
        await iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) { // Safari
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { // old IE/Edge
        iframe.msRequestFullscreen();
      }
    } else {
      // exit fullscreen
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  });
