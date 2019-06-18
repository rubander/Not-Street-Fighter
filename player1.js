class Player1 {
    constructor(ctx) {
      this.ctx = ctx;
      this.img = new Image();
      this.img.src = "./img/ken_idle.png";
      this.kenIdleX = 188;
      this.kenIdleY = 92;
      this.img.frames = 4;
      this.img.frameIndex = 0;
  
      // this.imgred = new Image();
      // this.imgred.src = "./img/bg/kenbg1200.png"
  
      // this.x = 0;
      // this.y = 0;
    }
  
    draw(framesCounter) {
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex *
          Math.floor(this.kenIdleX / this.img.frames),
        0,
        Math.floor(this.kenIdleX/ this.img.frames),
        this.kenIdleY,        
        200,
        150,
        this.kenIdleX / 1.5,
        this.kenIdleY * 2.5
      );
  
      this.animateImg(framesCounter);
    }
  
    animateImg(framesCounter) {
      // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
      if (framesCounter % 25 === 0) {
        this.img.frameIndex += 1;
  
        // Si el frame es el último, se vuelve al primero
        if (this.img.frameIndex > 2) this.img.frameIndex = 0;
      }
    }
  }
  // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);