class Tree{
    constructor(x, y){
        var options= {
            isStatic: true
        }
        this.body= Bodies.rectangle(x, y, 10, 10, options);
        this.image = loadImage("tree.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}