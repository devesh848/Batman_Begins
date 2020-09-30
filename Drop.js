class Drop {
    constructor(x,y){  
        var options = { 
            restitution: 0.4, 
            friction: 0.01,
        }

        this.r = 5; 
        this.body = Bodies.circle(x,y,5,options); 
        World.add(world, this.body);

    } 
    update(){ 
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,700), y:random(0,700)});
        }

    } 
    display(){
        var pos = this.body.position; 
        ellipseMode(RADIUS); 
        fill("blue");
        ellipse(pos.x,pos.y,this.r,this.r); 

    }
} 