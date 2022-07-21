class Ball{
    constructor(x,y,r){
        var options = {
        }
        this.body = Bodies.rectangle(x,y,r,options);
        // this.y = y;
        // this.x = x;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        //fill("red")
        ellipse(0,0,this.r,this.r);
        pop();
    }
}