class Stone{
    constructor(x, y){
      var options = {
        isStatic: false, 
        restitution: 0,
        friction: 1,
        density: 1.2
      }
      this.body= Bodies.rectangle(x, y, 30, 30, options);
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
    }
}