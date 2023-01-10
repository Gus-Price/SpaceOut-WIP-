import {ctx} from '../canvas';

/**
* This is a basic sprite object which will make it possible for most
* of my other sprite code to work. I export an object with a draw
* method which lets me draw a given frame of the sprite at a given position
* on the canvas at will.
**/


export const img = document.createElement('img'); // Create <img> element
img.src = 'dude.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">

// Create an object for managing our image...
export const dude = { 
  img, // The image element itself
  ready : img.complete, // true/false (is image loaded already?)
  frameWidth : 64,
  frameHeight: 64,
  totalFrames : 8,
  draw (x,y,frame,w=null,h=null) { 
    // If the image isn't loaded, wait...
    if (!this.ready) {
      setTimeout(
        ()=>this.draw(x,y,frame,w,h),
        100
      )
      console.log('Warning: Image not yet ready...',this.img);
      return
    }
    
    if (!w) {w = this.frameWidth} // Default to image size
    if (!h) {h = this.frameHeight} // Default to imag esize
    // Make frame number less than # of frames (i.e. if we ask
    // for frame 12 but have only 8 frames, we'll get frame 4)
    frame = frame % this.totalFrames;     
    ctx.drawImage(
        this.img, // image Element
        this.frameWidth * frame, // Source X
        0, // Source Y
        this.frameWidth, // Source width
        this.frameHeight, // Source Height
        x, // Target X
        y, // Target Y
        w, // Target width
        h // Target Height
      );        
  }
}

// Update sprite when the image is loaded!
img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  dude.ready=true
});

