import {lcanvas, width, height, scale} from './canvas';
import {projectiles,Projectile} from './projectiles';

let ctx = lcanvas.getContext('2d');
let slingshotCenter = {x:width/4,y:height-(height/3)}
let slingshotLeft = {x:slingshotCenter.x+scale*20,y:slingshotCenter.y - scale*20};
let slingshotRight = {
  x:slingshotCenter.x-scale*20,y:slingshotCenter.y - scale*20
}

function drawSlingshot () {
  ctx.clearRect(0,0,width,height)
  ctx.lineWidth = 10*scale;
  ctx.beginPath();
  ctx.moveTo(slingshotCenter.x, height);
  ctx.lineTo(slingshotCenter.x, slingshotCenter.y);
  ctx.lineTo(slingshotLeft.x,slingshotLeft.y);
  ctx.moveTo(slingshotCenter.x, slingshotCenter.y);
  ctx.lineTo(slingshotRight.x,slingshotRight.y);
  ctx.stroke();
}

function drawSlingshotBall (x,y) {
  ctx.beginPath();
  ctx.lineWidth = 3*scale;
  ctx.moveTo(slingshotLeft.x,slingshotLeft.y);
  ctx.lineTo(x,y);
  ctx.arc(x,y,10*scale,0,Math.PI*2);
  ctx.lineTo(slingshotRight.x,slingshotRight.y)
  ctx.stroke();
}

lcanvas.addEventListener(
  'mousemove',
  function (evt) {
    if (evt.buttons==1) {
      drawSlingshot();
      let x = evt.offsetX;
      if (x > width/2) {
        x = width/2;
      }
      drawSlingshotBall(x,evt.offsetY)
    }
  }
)

lcanvas.addEventListener(
  "mouseup",
  function (evt) {   
    // To calculate our projectile speed, we just
    // take the distance from the ball to the 
    // slingshot center and draw a line...
    let vx = 1.8* (slingshotLeft.x - evt.offsetX);
    let vy = 1.8* (slingshotLeft.y - evt.offsetY);
    projectiles.push(
      {
        x : evt.offsetX,
        y : evt.offsetY,
        vx, vy
      }
    );
    drawSlingshot();
  }
)

drawSlingshot();