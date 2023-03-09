function setup() {
createCanvas(800,1005);
const CELL_SIZE = 80;
let r = 80 + random(-20,20)
let g = 80+ random(-20,20)
let b = 120 + random(-20,20)
// noStroke();
for(let y =0; y< height; y+= CELL_SIZE){
    for (let x = 0; x<width; x+=CELL_SIZE){
        fill(r,g,b)
        rect(x,y,CELL_SIZE);
        fill('blue')
        if(random(1)>0.5){
             circle(x + CELL_SIZE/2, y + CELL_SIZE/2, CELL_SIZE/2);
    }

        }
       
}

}
function draw() {
}
