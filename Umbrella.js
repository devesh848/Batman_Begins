class Umbrella{
    constructor(x,y){ 
        var options = {
            isStatic: true,
        } 
        this.r=50; 
        this.body = Bodies.circle(x,y,50,options); 
        this.image = loadImage("umbrella.png"); 
        World.add(world, this.body);
    } 


    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS); 
        fill(255);
        image(this.image,pos.x,pos.y,300,300); 
    }
} 
