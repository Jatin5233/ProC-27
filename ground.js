class Ground{
    constructor(){
        var option={
            'isStatic':true
        }
    this.body=Bodies.rectangle(400,200,400,50,option);
    this.width=900;
    this.height=20;
    World.add(world,this.body);
    }
    display(){
      var  pos=this.body.position;
        fill(255);
rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}