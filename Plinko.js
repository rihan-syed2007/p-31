class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:1,
          friction:0
      }
      this.radius = 10;
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
     
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius);
      pop();
    }
  }