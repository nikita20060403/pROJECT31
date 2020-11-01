const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,
    p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43;
var d1,d2,d3,d4,d5;


function setup() {
  createCanvas(400,800);

  engine = Engine.create();
  world = engine.world;
  
  p1 = new Plinko(50,100,5,5);
  p2 = new Plinko(80,100,5,5)
  p3 = new Plinko(110,100,5,5)
  p4 = new Plinko(140,100,5,5)
  p5 = new Plinko(170,100,5,5)
  p6 = new Plinko(200,100,5,5)
  p7 = new Plinko(230,100,5,5)
  p8 = new Plinko(260,100,5,5)
  p10 = new Plinko(290,100,5,5)
  p11= new Plinko(320,100,5,5)
  p12= new Plinko(350,100,5,5)

  p13= new Plinko(60,150,5,5)
  p14= new Plinko(90,150,5,5)
  p15= new Plinko(120,150,5,5)
  p16= new Plinko(150,150,5,5)
  p17= new Plinko(180,150,5,5)
  p18= new Plinko(210,150,5,5)
  p19= new Plinko(240,150,5,5)
  p20= new Plinko(270,150,5,5)
  p21= new Plinko(300,150,5,5)
  p22= new Plinko(330,150,5,5)

  p23= new Plinko(50,200,5,5)
  p24= new Plinko(80,200,5,5)
  p25= new Plinko(110,200,5,5)
  p26= new Plinko(140,200,5,5)
  p27= new Plinko(170,200,5,5)
  p28= new Plinko(200,200,5,5)
  p29= new Plinko(230,200,5,5)
  p30= new Plinko(260,200,5,5)
  p31= new Plinko(290,200,5,5)
  p32= new Plinko(320,200,5,5)
  p33= new Plinko(350,200,5,5)

  p34= new Plinko(330,250,5,5)
  p35= new Plinko(60,250,5,5)
  p36= new Plinko(90,250,5,5)
  p37= new Plinko(120,250,5,5)
  p38= new Plinko(150,250,5,5)
  p39= new Plinko(180,250,5,5)
  p40= new Plinko(210,250,5,5)
  p41= new Plinko(240,250,5,5)
  p42= new Plinko(270,250,5,5)
  p43= new Plinko(300,250,5,5)

  d1 = new Division(50,600,2,400);
  d2 = new Division(150,600,2,400);
  d3 = new Division(250,600,2,400);
  d4 = new Division(350,600,2,400);
  d5 = new Division(0,800,800,2);
 

  


  Engine.run(engine);

 
}

function draw() {
  background("grey");  
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();
  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p37.display();
  p38.display();
  p39.display();
  p40.display();
  p41.display();
  p42.display();
  p43.display();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();




  
 





  drawSprites();
}