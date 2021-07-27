class Paper{
    constructor(x,y,r){
        var options = {
            density:1.2,
            resitution: 0.3,
            friction: 0.2
        }
        this.paperBody= Matter.Bodies.rectangle(x,y,r,r,options);
        this.image = loadImage("paper.png");
        Matter.World.add(world,this.paperBody);
        this.radius = r;
    }
    display(){
    var position = this.paperBody.position
    imageMode(CENTER);
    image(this.image,position.x, position.y, this.radius, this.radius)
    }
}