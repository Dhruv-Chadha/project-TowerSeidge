const World =  Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world , engine
var polygon , platform , platform1 , string
var block
function preload(){

}
function setup(){
createCanvas(900,400)
 engine = Engine.create();
world = engine.world
Engine.run(engine)
polygon = new Polygon(100,250,50)
platform1 = new Platform(390,200,350,10)
platform = new Platform(650,150,350,10)

}
function draw(){
background(255)
polygon.display();
platform1.display()
platform.display()

}
//56, 44, 44