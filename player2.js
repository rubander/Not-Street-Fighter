class Player2 {
  constructor(ctx, keys) {
    this.ctx = ctx;
    this.keys = keys;
    this.states = {
      left: false,
      right: false,
      punch: false,
      kick: false,
      hadouken: false
    };
    this.startPointX = 660;
    this.startPointY = 150;
    this.yFrameAdjuster = 2.5
    this.life = 100;
    this.separator = this.startPointX - 50


    // Idle Image
    this.imgIdlep2 = new Image();
    this.imgIdlep2.src = "./img/chun_idle.png";
    this.chunIdleX = 188;
    this.chunIdleY = 92;
    this.imgIdlep2.frames = 4;
    this.imgIdlep2.frameIndex = 0;

    // Walk Image
    this.imgWalkp2 = new Image();
    this.imgWalkp2.src = "./img/chun_walk.png";
    this.chunWalkX = 424;
    this.chunWalkY = 92;
    this.imgWalkp2.frames = 8;
    this.imgWalkp2.frameIndex = 0;

    // Hadouken Image
    this.imgHadoup2 = new Image();
    this.imgHadoup2.src = "./img/chun_hadouken.png";
    this.chunHadouX = 288;
    this.chunHadouY = 107;
    this.imgHadoup2.frames = 4;
    this.imgHadoup2.frameIndex = 3;
  }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else if (this.states.hadouken) {
      this.drawHadouken(framesCounter);
        setTimeout(() => {
          this.states.hadouken = false
          this.imgHadoup2.frameIndex = 3
        }, 630 )
    } else {
      this.drawIdle(framesCounter);
    }
  }

  drawIdle(framesCounter) {
    this.ctx.drawImage(
      this.imgIdlep2,
      this.imgIdlep2.frameIndex *
        Math.floor(this.chunIdleX / this.imgIdlep2.frames),
      0,
      Math.floor(this.chunIdleX / this.imgIdlep2.frames),
      this.chunIdleY,
      this.startPointX,
      this.startPointY,
      this.chunIdleX / 1.5,
      this.chunIdleY * 2.5
    );

    this.animateImgIdle(framesCounter);
  }

  animateImgIdle(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 10 === 0) {
      this.imgIdlep2.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgIdlep2.frameIndex > 2) this.imgIdlep2.frameIndex = 0;
    }
  }

  drawWalk(framesCounter) {
    this.ctx.drawImage(
      this.imgWalkp2,
      this.imgWalkp2.frameIndex *
        Math.floor(this.chunWalkX / this.imgWalkp2.frames),
      0,
      Math.floor(this.chunWalkX / this.imgWalkp2.frames),
      this.chunWalkY,
      this.startPointX,
      this.startPointY,
      this.chunWalkX / 3,
      this.chunWalkY * 2.5
    );

    this.animateImgWalk(framesCounter);
  }

  animateImgWalk(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.imgWalkp2.frameIndex += 1;

      if (this.imgWalkp2.frameIndex > 7) this.imgWalkp2.frameIndex = 0;
    }
  }

  drawHadouken(framesCounter) {
    this.ctx.drawImage(
      this.imgHadoup2,
      this.imgHadoup2.frameIndex *
        Math.floor(this.chunHadouX / this.imgHadoup2.frames),
      0,
      Math.floor(this.chunHadouX / this.imgHadoup2.frames),
      this.chunHadouY,
      this.startPointX,
      this.startPointY-33,
      this.chunHadouX / 1.5,
      this.chunHadouY * this.yFrameAdjuster
    );

    this.animateImgHadou(framesCounter);
  }

  animateImgHadou(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 12 === 0) {
      this.imgHadoup2.frameIndex -=1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgHadoup2.frameIndex < 0) this.imgHadoup2.frameIndex = 3;
    }
  }

  move() {
    if (this.states.left) {
      this.startPointX -= 3;
    }
    if (this.states.right) {
      this.startPointX += 3;
    }
  }
}
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
