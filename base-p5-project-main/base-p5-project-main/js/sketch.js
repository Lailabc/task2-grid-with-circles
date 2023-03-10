function setup() {
createCanvas(600,600);
const CELL_SIZE = 15;
let r = 80 * random(-20,20)
let g = 80 - random(-20,20)
let b = 120 * random(-20,20)
noStroke();
for(let y =0; y< height; y+= 20){
    for (let x = 0; x<width; x+=20){
        fill(r,g,b)
        rect(x,y,CELL_SIZE);
        fill('blue')
        if(random(1)>0.5){
             circle(x + CELL_SIZE/3, y + CELL_SIZE/3, CELL_SIZE/4);
    }

        }
       
}

}
function draw() {
}
