// class Platform{
//     constructor(x,y,w,h){
//         var options = {
//             isStatic:true
//         }
//         this.body = Bodies.rectangle(x,y,w,h,options)  
//        this.w = w
//        this.h = h
//         World.add(world,this.body) 
//     }
//     display(){
//         console.log("hello Display")
//         var pos = this.body.position
//         push()
//         translate(pos.x,pos.y)
//         rotate(this.body.angle)
//         rectMode(CENTER)
//         rect(0,0,this.w,this.h)
//         pop()
//     }
// }
class Platform{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}