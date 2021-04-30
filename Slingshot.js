class Slingshot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
      }

      fly(){
        this.slingshot.bodyA = null
      }

      display(){

        
        
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;

        push();

        strokeWeight(4);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x,pointB.y);

        pop();
        
      }
}

