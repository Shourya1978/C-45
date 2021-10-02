var bg,bgImg,shooter,shooterImg,shooter_shooting;
function preload(){
  bgImg=loadImage("assets/bg.jpeg");
  shooterImg=loadImage("assets/shooter_2.png");
  shooter_shooting=loadImage("assets/shooter_3.png");
}
function setup(){
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(displayWidth/2,displayHeight/2,20,20);
 bg.addImage(bgImg);
 shooter = createSprite(displayWidth-1000,displayHeight-300,50,50);
 shooter.addImage(shooterImg);
 shooter.scale=0.5;
 shooter.debug = true;
 shooter.setCollider("rectangle",0,0,300,500);

}

function draw(){
background(0);
if(keyDown("W")||touches.length>0){
shooter.y = shooter.y-30;
}
if(keyDown("S")||touches.length>0){
  shooter.y = shooter.y +30;
  }
  if(keyWentDown("space")||touches.length>0){
   shooter.addImage(shooter_shooting);
    }
    else if(keyWentUp("space")||touches.length>0){
      shooter.addImage(shooterImg);
    }


drawSprites();

}