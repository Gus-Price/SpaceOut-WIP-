import { scale, pcanvas, width, height } from './canvas';
import { target, drawTarget } from './target';

type Projectile = {
  x: number,
  y: number,
  vx: number,
  vy: number,
}

let gravity = scale * 50;
export let projectiles: Projectile[] = [
  {x:10,y:100,vx:100,vy:-100}
];

function updateProjectile(p: Projectile, ms: number) {
  if (p.x > width + 20) {
    // Don't bother calculating -- off screen
    return;
  }
  p.x += p.vx * ms / 1000;
  p.y += p.vy * ms / 1000;
  // gravity!
  p.vy += gravity * ms / 1000;
  if (p.y > height) {
    p.vy *= -0.8;
    p.y = height;
  }
  if (Math.abs(p.x - target.x) < scale * target.size) {
    if (Math.abs(p.y - target.y) < scale * target.size) {
      target.score += 1;
      drawTarget();
    }
  }
}

let ctx = pcanvas.getContext('2d');
let ts = 0;
function animate(t) {
  var elapsed = 0; // default to 0 (first run)
  // Calculate time elapsed
  if (ts) {    
    elapsed = t - ts; // time since last run
  }
  ts = t; // remember previous time...
  // update projectiles...
  projectiles.forEach(
    function(p) {
      updateProjectile(
        p,
        elapsed
      )
    }
  )
  // erase.
  ctx.clearRect(0, 0, width, height);
  // draw
  projectiles.forEach(
    function(p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, scale * 15, 0, Math.PI * 2);
      ctx.stroke();
    }
  )
  // Remove projectiles that are off the screen
  while (projectiles.length && projectiles[projectiles.length - 1].x > width + scale * 10) {
    projectiles.pop()
  }
  // call animate again...
  requestAnimationFrame(animate);
}

animate();