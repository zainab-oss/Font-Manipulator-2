leftWristX = 0;
rightWrist = 0;
difference = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,400);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet has been initialized");
}



function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + "rightWrist = " + rightWristX + "difference" + difference);
    }
}

function draw() {
    background('#E37383');
    
      document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFDAB9');
    text('Zainab', 50, 400);
    }
    





