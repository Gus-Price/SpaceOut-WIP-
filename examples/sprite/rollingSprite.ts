import {ctx} from '../canvas';

/**
* This sprite is drawn top-to-bottom
* and has four frames going in one direction
* and four frames going in the other direction
**/


export const img = document.createElement('img'); // Create <img> element
img.src = 'rollingDude.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">

// Create an object for managing our image...
export const rollingDude = { 
  img, // The image element itself
  ready : img.complete, // true/false (is image loaded already?)
  frameWidth : 32,
  frameHeight: 32,  
  framesPerDirection : 4,
  draw (x,y,frame,direction : 'left'|'right'='right',w=null,h=null) { 
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
    frame = frame % this.framesPerDirection; 
    if (direction=='left') {
      frame += 4;
    }
    ctx.drawImage(
        this.img, // image Element
        0, // Source X
        this.frameHeight * frame, // Source Y
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
  rollingDude.ready=true
});

