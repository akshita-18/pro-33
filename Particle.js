class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.3,
            friction: 3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(0, 345), random(0, 259), random(0, 155));
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        colorMode(0);
        noStroke();
        translate(pos.x,pos.y);
       
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}