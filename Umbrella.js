class Umbrella{
    constructor(x,y,r){ 
        var options = {
            isStatic: true,
        }
        this.x=x; 
        this.y=y; 
        this.r=r; 
        this.body = Bodies.circle(this.x,this.y,this.r,options); 
        this.image = loadImage("umbrella.png"); 
        World.add(world, this.body);
    } 


    display(){
        var pos = this.body.position; 
        push(); 
        translate(pos.x,pos.y);
        ellipseMode(RADIUS); 
        fill(255);
        image(this.image,0,0,this.r,this.r); 
        pop();
    }
} 
