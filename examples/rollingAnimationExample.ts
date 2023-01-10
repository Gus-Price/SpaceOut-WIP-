import {addAnimation, startAnimation} from './animation';
import {rollingDude} from './sprite/rollingSprite';
import {canvas} from './canvas';

let animatedDude = {
    x : canvas.width - 120,
    y: 100,
    vx : 40,
    frame : 0,
    counter : 0,
    frameRate : 1000/8,
    update (elapsed : number) {
      this.x += this.vx * elapsed/1000;      
      this.counter += elapsed;
      this.frame = Math.floor(this.counter / this.frameRate);
      if (this.x > canvas.width - 32) {
        this.vx = -40;
      }
      if (this.x < 0) {
        this.vx = 40;
      }      
    },
    draw () {
      let direction : 'left'|'right' = 'left';
      if (this.vx > 0) {
        direction = 'right'
      }
      rollingDude.draw(this.x,this.y,this.frame,
                       direction
                      );
    }    
  }


addAnimation(animatedDude);

startAnimation();