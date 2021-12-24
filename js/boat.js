class Boat {
    constructor(x,y,w,h,boatP) {
        var box_features = {
            isStatic: false,
          };
          this.body = Bodies.rectangle(x, y, w, h, box_features);
          this.boatImg = loadImage("assets/boat.png")
          World.add(world, this.body);
          this.w = w
          this.h = h
          this.boatP = boatP
    }
    display() {
        push ()
        translate (this.body.position.x, this.body.position.y)
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.boatImg,0, this.boatP, this.w, this.h);
        pop ()
    }
  }