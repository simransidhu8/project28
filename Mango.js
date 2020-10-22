class Mango{
    constructor(x, y){
      var options= {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.body = Bodies.circle(x, y, 10, 15, options);
      this.image= loadImage("mango.png");
    }
    display(){
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
    }
}