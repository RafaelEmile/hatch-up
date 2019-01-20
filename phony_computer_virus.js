function setup() {
	createCanvas(400, 400);
}

function draw() {
	function drawScene() {
	background( 0, 100, 255);
	fill (255, 255, 255);
	noStroke();
	rect( 171, 190, 75, 25);
	fill(0, 0, 0);
	textSize(12);
	text( "Download" , 180, 205);
	}
	drawScene();
	text("Click the button above to retrieve your passwords." , 71, 300);


	function drawFinish() {
	background( 0, 100, 255);
	fill (255, 255, 255);
	noStroke();
	rect( 150, 150, 95, 25);
	fill(0, 0, 0);
	textSize(12);
	text( "Finish" , 180, 165);
	textSize(10);
	text("Your passwords have been retrieved. Click the button above to finish downloading." , 10, 300);
	}

	function drawComplete() {
			background( 0, 100, 255);
			fill (0, 0, 0);
			textSize(50);
			text("!Dis A Virus!", 70, 200);
			textSize(12);
			text("Your computer has been hacked by a virus hahahahaha!! :D", 50, 300);
	}

	
}


function drawMid() {
			background(155, 155, 155);
			textSize(14);
			text("Your passwords are downloading, click to continue", 50, 50);
			fill(200, 200, 200);
			rect(250, 250, 100, 50);
			fill(255, 255, 255);
			textSize(20);
			text("Continue", 260, 280);
	}

function mousePressed() {
			if (mouseX>171 && mouseX<246 && mouseY>190 && mouseY<215){
					drawMid();
			}

			if (mouseX>250 && mouseX<350 && mouseY>250 && mouseY<300){
					drawFinish();
			}

			if (mouseX>150 && mouseX<245 && mouseY>150 && mouseY<175){
					drawComplete();
			}
	}
