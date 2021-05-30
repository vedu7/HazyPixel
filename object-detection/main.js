function preload()
{
    img = loadImage("dog_cat.jpg");
}
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw()
{
    image(img,0,0,640,420);
    fill('#47ff66');
    text("Dog",45,75);
    noFill();
    stroke("#47ff66");
    rect(30,60,450,350);
    fill("#4287f5");
    text("Cat",300,100)
    noFill();
    stroke("#4287f5");
    rect(290,80,300,300);
}
