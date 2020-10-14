class Bob{
    constructor(x,y,r){
        var options={
          ' restitution' :1,
            'density':0.8
        }
        
   this.body=Bodies.circle(x,y,r/2,options);
   this.x=x;
   this.y=y;
   this.r=r;
   
   World.add(world,this.body);
   
    }
    display(){
       var pos=this.body.position;
        fill("red");
        strokeWeight(4);
      
        ellipse(pos.x,pos.y,this.r);
    }
   }