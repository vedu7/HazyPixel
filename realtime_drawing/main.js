noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(500,500);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("Posenet Is Intialized");
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(noseX,noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX);
    console.log("rightWristX = " + rightWristX);
    console.log("difference = " + difference);
}
}

function draw()
{
background('#e0e0e0');
document.getElementById("square_side").innerHTML = " Width An Height of Square will be " + difference +"px";
fill('#f90093');
stroke('#f90093');
square(noseX,noseY,difference);
}

