let params = new URLSearchParams(document.location.search);
let game = params.get("game");

const btn = document.getElementById("fsBtn");
const gameTitle = document.getElementById("gameTitle");
const iframe = document.getElementById("gameFrame");

switch (game) {
	case "uza":
		gameTitle.innerHTML = "Unnamed Zombie Assasult";
		iframe.src = "/games/uza.html";
		break;
	case "chicken-collector":
		gameTitle.innerHTML = "Chicken Collector";
		iframe.src = "/games/chicken-collector.html";
		break;
}

btn.addEventListener("click", async () => {
	if (!document.fullscreenElement) {
		if (iframe.requestFullscreen) {
			await iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
			iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
			iframe.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  });
