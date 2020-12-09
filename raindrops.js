class rain
{
constructor(x,y){
var options={
isStatic:false,
restitution:1,
friction:0,
density:0.8
}
this.x=x;
this.y=y;
this.r=5;
        
this.body=Bodies.circle(this.x, this.y, 5, options)
World.add(world, this.body);

}
update(){
if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
}    
}
display()
{		

var pos=this.body.position;
push()
//translate(pos.x, pos.y);
ellipseMode(CENTER);
fill("blue");
ellipse(pos.x,pos.y,this.r,this.r);
pop();
			
}
}