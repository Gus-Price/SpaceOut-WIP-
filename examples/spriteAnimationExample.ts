import {addAnimation, startAnimation} from './animation';
import {dude} from './sprite/simpleSprite';
import {canvas} from './canvas';

let animatedDude = {
    x : 0,
    y: 0,
    frame : 0,
    counter : 0,
    frameRate : 1000/8,
    update (elapsed : number) {
      this.x += 80 * elapsed/1000;
      this.y += 30 * elapsed/1000;
      this.counter += elapsed;
      this.frame = Math.floor(this.counter / this.frameRate);
      if (this.x > canvas.width) {
        this.x = 0;
      }
      if (this.y > canvas.height) {
        this.y = 0;
      }
    },
    draw () {
      dude.draw(this.x,this.y,this.frame);
    }
    
  }



addAnimation(animatedDude);

startAnimation();