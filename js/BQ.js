let canvas, context;
let loc;
let paused;
let puzzles = [[{ type: "img", x: 0, y: 0, width: 100, height: 100 }, { type: "img", x: 700, y: 0, width: 100, height: 100 }, { type: "img", x: 0, y: 350, width: 100, height: 100 }, { type: "img", x: 700, y: 350, width: 100, height: 100 }], [{ type: "img", x: 200, y: 175, width: 100, height: 100 }, { type: "img", x: 500, y: 175, width: 100, height: 100 }]];

window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    newGame();
}

function newGame() {
    loc = 0;
    paused = false;
    showBackground();
}

function showBackground() {
    let bgIamge = new Image();
    bgImage.src = "../img/bg_" + loc + ".jpg";
    bgImage.onload = function () {
	context.drawImage(bgIamge, 0, 0, 800, 450);
    };
}
/*
function checkTriggers(x, y) {
    for (let i = 0; i < puzzles[loc].length; i++) {
	if (x >= puzzles[loc][i].x &&
	    x <= puzzles[loc][i].x + puzzles[loc][i].width &&
	    y >= puzzles[loc][i].y &&
	    y <= puzzles[loc][i].y + puzzles[loc][i].height) {
	    paused = true;
	    showGameEvent(i);
	}
    }
}

function showGameEvent(i) {
    let eventNum = loc * 10 + i;
    alert(eventNum);
    switch (puzzles[loc][i].type) {
    case "img": showImage(eventNum);
	break;
    }
}

function showImage(eventNum) {
    let eventImage = new Image();
    eventImage.src = "../img/event_" + eventNum + ".jpg";
    eventImage.onload = function () {
	let x = (canvas.width - eventImage.naturalWidth) / 2;
	let y = (canvas.height - eventImage.naturalHeight) / 2;
	context.drawImage(eventImage, x, y);
    };
}

function changeLoc() {
    if (loc == 0)
	loc = 1;
    else
	loc = 0;
    showBackground();
}

document.addEventListener("click", function (event) {
    if (paused) {
	paused = false;
	showBackground();
    } else {
	let x = event.clientX - canvas.getBoundingClientRect().left;
	let y = event.clientY - canvas.getBoundingClientRect().top;
	checkTriggers(x, y);
    }
})
*/
