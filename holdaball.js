function setup() {
createCanvas(1366, 678);
}

function draw() { 
    background(100, 140, 5); 
    fill (255, 75, 0); 
    ellipse(mouseX+20, mouseY, 70,70);
    fill (167, 100, 25);
    ellipse(mouseY, mouseX, 50,50);
};
