class Crain {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1,
        length: 250,
      };
  
      this.pointB = pointB;
      this.crain = Constraint.create(options);
      World.add(world, this.crain);
    }
    attach(body) {
      this.crain.bodyA = body;
    }
  
    fly() {
      this.crain.bodyA = null;
    }
  
    display() {
      if (this.crain.bodyA) {
        var pointA = this.crain.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }