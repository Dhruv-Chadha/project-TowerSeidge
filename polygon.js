class Polygon{
    constructor(x,y,s){
        var options = {
            restitution:1,
            denstity:1,
            friction:0.5,
            isStatic : false
        } 
        this.x = x
        this.y = y
        this.s = s
        this.body = Bodies.rectangle(this.x,this.y,this.s,this.s,options)
        this.image = loadImage("polygon.png")
        Matter.World.add(world,this.body)
    }
    display(){
      var pos = this.body.position 
      translate(pos.x,pos.y)
     image(this.image,0,0,this.s,this.s)
    }
}