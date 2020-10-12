class Paper{
    constructor(x,y){
        var opt={
        restitution:0.3,
        fricton:0.5,
        density:1.2,
        isStatic:false
        }
        this.image = loadImage("paper.png");  
        this.body=Bodies.circle(x,y,12,opt);
        this.diameter=70
        
        World .add(world,this.body)  
        
    }
display (){
  
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0,this.diameter/2,this.diameter/2);
   
   // fill("pink");
    //ellipse(0, 0,15);
    pop();






}



}