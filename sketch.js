const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops = 100; 
var drops = [];  
var thunder,thunderIMG, thunderIMG2, thunderIMG3, thunderIMG4; 

function preload(){
    thunderIMG = loadImage("Thunder.jpg"); 
    thunderIMG2 = loadImage("thunder2.jpg");  
    thunderIMG3 = loadImage("thunder3.png"); 
    thunderIMG4 = loadImage("thunder4.jpg");

}

function setup(){
   createCanvas(700,900);  
   
   engine = Engine.create();
   world = engine.world;  
   umbrella = new Umbrella(150,450,400);   
   
   //drop = new Drop(200,100,50);   
  
}
  


function draw(){  
    background(0);  
    Engine.update(engine);
    umbrella.display(); 
    
  
    
   
        for (var i = 0; i < maxDrops; i++){ 
            drops.push(new Drop(random(0,700),random(0,400)));
        }     

    if(frameCount %60===0){
        
        drops[i].display();  
        
    }
        
           
        
        
        console.log("good");  
        

    
      
    
    if(frameCount%60===0){  
        thunder = createSprite(random(100,600),random(0,400),10,10);
        
        switch(thunder){  
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
        
    }
   
}
