const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,600,1200,20)

box1= new Box(500,100,70,70);
box2= new Box(500,100,70,70);
box3= new Box(500,100,70,70);
box4= new Box(500,100,70,70)
box5= new Box(500,100,70,70);
box6= new Box(500,100,70,70);
box7= new Box(500,200,70,70);
box8= new Box(500,200,70,70)

ball=new Ball(200,200,50,50)
crain=new Crain(ball.body,{x: 600, y:50});

    }

function draw(){
    background("blue");
    Engine.update(engine)
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    crain.display();
    ball.display();
}