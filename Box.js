class Box{
  constructor(x,y,width,height,color){
    var options_box = {
      isStatic : false
    }

    this.body = Bodies.rectangle(x,y,width,height,options_box);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255;

    World.add(world, this.body);
  }

  display(){
    if(this.body.speed < 9){
      rectMode(CENTER);
    var BoxPos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(BoxPos.x, BoxPos.y);
    rotate(angle);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility -= 5;
      //tint(255, this.visibility);
      //rect(0,0,this.width,this.height);
      pop();
    }
  }
}