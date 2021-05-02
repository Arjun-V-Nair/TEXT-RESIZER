difference = 0;
rightWristX = 0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
  
    canvas = createCanvas(950, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function draw() {
    background('#969A97');
    stroke("#bb860b");
    fill("#bb860b");
    text('Arjun', 10, 275);
    textSize(difference);
    console.log(difference)

    }
    function modelLoaded() {
        console.log('PoseNet Is Initialized!');
      }
      function gotPoses(results)
      {

        if(results.length > 0)
        {
        console.log(results);
          
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
        console.log(leftWristX, rightWristX , difference);
        }
    }      