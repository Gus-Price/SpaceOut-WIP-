import {tcanvas, width, height, scale} from './canvas';


export let target = {x:100,y:100,score:0,
                    size : scale * 30};
let ctx = tcanvas.getContext('2d');
ctx.fillStyle = 'red';

export function drawTarget () {
  ctx.clearRect(0,0,width,height);
  target.x = width - 100 * Math.random();
  target.y = height * Math.random();
  target.size *= 0.9
  ctx.beginPath();
  ctx.arc(target.x,target.y,target.size,0,Math.PI*2);
  ctx.fill();
  if (target.score) {
    ctx.strokeStyle = 'white'
    ctx.textAlign = 'center';
    ctx.fillText(
      `${target.score}`,
      target.x,target.y
    )
    ctx.strokeText(
      `${target.score}`,
      target.x,target.y
    )
  }
}

drawTarget();