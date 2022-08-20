    let canvas, context;
    let loc, bgImg;
    let puzzles
    let paused;

    window.onload = function() {
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      newGame();
    }

    function newGame() {
      loc = 1;
      paused = false;
      showBackground();
    }
	
    function showBackground() {
      bgImg = new Image();
      bgImg.src = "../img/bg_" + loc + ".jpg";
      bgImg.onload = function() {
	context.drawImage(bgImg, 0, 0, 800, 450);
      };
    }

    function drawImage(eventImage, x, y) {
      context.drawImage(eventImage, x, y);
    }

    function checkTriggers(click) {
      for (let i = 0; i < puzzles[loc].length; i++) {
	if (click.x >= puzzles[loc][i].x1
	 && click.x <= puzzles[loc][i].x2
	 && click.y >= puzzles[loc][i].y1
	 && click.y <= puzzles[loc][i].y2) {
	  paused = true;
	  showGameEvent(loc, i);
	}
      }
    }

    function showGameEvent(loc, i) {
      let eventNum = loc * 10 + i;
      showImage(eventNum);
    }

    function showImage(eventNum) {
      eventImage = new Image();
      eventImage.src = "../img/event_" + eventNum + ".jpg";
      let eventImageWidth;
      let eventImageHeight;
      let x = (canvas.width - eventImageWidth) / 2;
      let y = (canvas.height - eventImageHeight) / 2;
    //  let x = canvas.width / 20 * 3;
    //  let y = canvas.height / 20 * 3;
      eventImage.onload = function() {
	context.drawImage(eventImage, x, y);
      };
    }

    document.addEventListener("click", function(e) {
      if (paused) {
	paused = false;
	showBackground();
      } else {
	let click;
	checkTriggers(click);
      }
    })

    function test() {
       document.getElementById("cout").innerHTML = "loaded";
    }

