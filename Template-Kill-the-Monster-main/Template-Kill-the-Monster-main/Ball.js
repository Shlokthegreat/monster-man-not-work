class Ball{
    constructor(x,y,r){
      var options = {
        restitution: 1.0,
        frictionAir: 1.0,
        density: 1.0
      }
      this.r = r;
      this.image = loadImage ("vadapav/images/Superhero-01.png")
      this.body = Bodies.circle(x,y,this.r/2,options)
      World.add (world,this.body)
      }
    
    
    display(){
    push();
    fill("green")
    translate (this.body.position.x,this.body.position.y-100)
    imageMode (CENTER);
    image (this.image,0,0,this.r+150,this.r)
    pop();
    }
    }