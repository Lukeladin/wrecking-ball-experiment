class String{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.stoneFree = Constraint.create(options);
        World.add(world, this.stoneFree);
    }
    display(){
        if(this.stoneFree.bodyA){
            var pointA = this.stoneFree.bodyA.position;
            var pointB = this.stoneFree.bodyB.position;
            strokeWeight(7);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
