import { ctx } from './canvas';

/**
* This is a basic sprite object which will make it possible for most
* of my other sprite code to work. I export an object with a draw
* method which lets me draw a given frame of the sprite at a given position
* on the canvas at will.
**/


export const img = document.createElement('img'); // Create <img> element
img.src = 'gameoverSprite.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">

// Create an object for managing our image...
export const gameoverDrawer = {
  img, // The image element itself
  ready: img.complete, // true/false (is image loaded already?)
  frameWidth: 100,
  frameHeight: 100,
  totalFrames: 13,
  totalRows: 5,
  totalColumns: 4,
  draw(x, y, frame, w = null, h = null) {
    // If the image isn't loaded, wait...
    if (!this.ready) {
      setTimeout(
        () => this.draw(x, y, frame, w, h),
        100
      )
      console.log('Warning: Image not yet ready...', this.img);
      return
    }

    if (!w) { w = this.frameWidth }
    frame = frame % this.totalFrames;
    let cn = frame % this.totalColumns;
    let rn = Math.floor(frame / this.totalColumns)
    debugger;
    ctx.drawImage(
      this.img,
      this.frameWidth * cn,
      this.frameWidth * rn,
      this.frameWidth,
      this.frameHeight,
      x,
      y,
      w,
      h
    );
  }
}


img.addEventListener('load', () => {
  console.log('Uh oh! looks like you died! try again xD');
  console.log('*insert sad trombone here*');
  gameoverDrawer.ready = true
});