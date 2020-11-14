const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

   // log6= new Log(230,180,80,PI /2);
    sling = new SlingShot(bird.body,{x:200,y:50});
    getTime();

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display()
   // log6.display();
    sling.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
       sling.attach(bird.body);
    }
}

 async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    //whatever fetch gets the responce gets..
    var responseJson = await response.json();
    console.log(responseJson);
}



var name = " Veena ";
// String data type

var num = 14;
//num data type

var data = [name, num, "angry", 30]
   //        0,1,2,3
//array data type;

console.log(data[2]);

var array2= [[1,2], [2,3], [3,4]]
//             0      1      2

console.log(array2[2][1]);

array2.push([4,5]);