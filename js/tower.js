class Tower {
    constructor(x,y,w,h) {
        var box_features = {
            isStatic: true,
          };
          this.box = Bodies.rectangle(x, y, w, h, box_features);
          this.towerImg = loadImage("assets/tower.png")
          World.add(world, this.box);
          this.w = w
          this.h = h
    }
    display() {
        push ()
        translate (this.box.position.x, this.box.position.y)
        rotate (this.box.angle)
        imageMode(CENTER);
        image(this.towerImg,0, 0, this.w, this.h);
        pop ()
    }
  }