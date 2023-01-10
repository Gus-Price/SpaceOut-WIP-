import { ufoDrawer } from './ufoSprite';

export const ufo = {
  x: 200,
  y: 200,
  msSinceLastFrame: 0,
  msPerFrame: 1000 / 50,
  frame: 0,
  update(ts) {
    this.msSinceLastFrame += ts;
    if (this.msSinceLastFrame > this.msPerFrame) {
      this.frame += 1;
      this.msSinceLastFrame = 0;
    }
  },
  draw() {
    ufoDrawer.draw(
      this.x, this.y, this.frame
    )
  }
}