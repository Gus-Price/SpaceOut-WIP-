import {ctx,canvas} from './canvas';
import {addAnimation, startAnimation} from './animation';

let clickableThing = {
  x : 100,
  y : 100,
  isDragging : false,
  isTouching (x,y) {
    /* Simple hitbox */
    if (Math.abs(this.x - x) < 50) {
      if (Math.abs(this.y - y) < 50) {
        return true;
      }
    } 
    return false;
  },
  draw () {
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 5;
    ctx.strokeRect(this.x-50,this.y-50,100,100);
    ctx.font = '10pt Verdana';
    ctx.textAlign = 'center';
    ctx.fillText('Click to move',this.x,this.y);
    /* Fill in the square if we're being dragged */
    if (this.isDragging) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x-50,this.y-50,100,100);
    }
  },    
}
canvas.addEventListener(
  'mouseup',
  (event) => {
    clickableThing.dragging = false;
  }
)

canvas.addEventListener(
  'mousemove',
  (event) => {    
    if (clickableThing.isTouching(event.offsetX,event.offsetY)) {
      if (event.buttons) {
        // if mouse is down...
        clickableThing.isDragging = true;
      } 
    }
    if (!event.buttons) {clickableThing.isDragging = false}
    if (clickableThing.isDragging) {
      clickableThing.x = event.offsetX;
      clickableThing.y = event.offsetY;
    }
  }
)

addAnimation(clickableThing);
// Note: in an actual game you wouldn't want
// to start the animation in this module but
// most likely in your index.ts file after you
// import all your different modules
startAnimation();