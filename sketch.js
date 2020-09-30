const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops = 100; 
var drops = [];  
var thunder,thunderIMG, thunderIMG2, thunderIMG3, thunderIMG4; 

function preload(){
    thunderIMG = loadImage("1.png"); 
    thunderIMG2 = loadImage("2.png");  
    thunderIMG3 = loadImage("3.png"); 
    thunderIMG4 = loadImage("4.png");

}

function setup(){
   createCanvas(700,900);  
   
   engine = Engine.create();
   world = engine.world;  
   umbrella = new Umbrella(150,500);   
   
   //drop = new Drop(200,100,50);  
   if(frameCount %60===0){ 
     for (var i = 0; i < maxDrops; i++){ 
        drops.push(new Drop(random(0,700),random(0,400)));
     }     
        
      
    
    }  
  
}
  


function draw(){  
    background(0);  
    Engine.update(engine);
    umbrella.display();  
    for (var i = 0; i<maxDrops; i++ ){
        drops[i].display(); 
        drops[i].update();
    }
    
    if(frameCount%60===0){   
        thunderframe = frameCount;
        thunder = createSprite(random(100,600),random(0,400),10,10);
        var rand = Math.round(random(1,4));
        switch(rand){  
            case 1:thunder.addImage(thunderIMG); 
            break; 
            case 2: thunder.addImage(thunderIMG2); 
            break; 
            case 3: thunder.addImage(thunderIMG3); 
            break; 
            case 4: thunder.addImage(thunderIMG4);
            break; 
            default: break; 
         } 
         thunder.scale = random(0.3,0.6); 

        
    } 
    if(thunder && thunderframe+10 === frameCount){
        thunder.destroy();
    }

    drawSprites(); 
   
}
