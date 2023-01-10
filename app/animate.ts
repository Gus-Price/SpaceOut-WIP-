import { canvas, ctx } from './canvas';

let animators: animator[] = [];

let ts = null;

/**
* Run all animations in animators list
**/
function doAnimationStep(n) {
  let elapsed = 0;
  if (ts) {
    elapsed = n - ts;
  }
  ts = n;
  animators.forEach(
    (o) => { if (o.update) { o.update(elapsed) } }
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  animators.forEach(
    (o) => o.draw()
  );
  window.requestAnimationFrame(doAnimationStep);
}

export function startAnimation() {
  window.requestAnimationFrame(doAnimationStep);
}

/* This adds a simple animation method whereby you 
add an object with an update and a draw method and
it gets added to your animation */
interface animator {
  update?(elapsed: number): void,
  draw(): void,
}

export function addAnimation(
  object: animator
) {
  animators.push(object);
}
