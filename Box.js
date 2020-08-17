class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("can2.bmp");
  }
  display(){
      
    if(this.body.speed <8){

      var pos =this.body.position;
    var angle = this.body.angle;
    push();
   
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("pink");
    rect(0,0, this.width, this.height);
    pop();
    
   
    
    }
     else{
      World.remove(world, this.body);
      push();
      
          this.visiblity = this.visiblity - 0.1;
          
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         
          pop();
      }
  }

  
}
