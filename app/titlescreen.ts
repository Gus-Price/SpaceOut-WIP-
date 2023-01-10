import {ctx} from './canvas';

/**
* This is a basic sprite object which will make it possible for most
* of my other sprite code to work. I export an object with a draw
* method which lets me draw a given frame of the sprite at a given position
* on the canvas at will.
**/


export const img = document.createElement('img'); // Create <img> element
img.src = 'titlescreenSprite.png'; // Set src to filename (in /public/)
document
  .querySelector('#assets')
  .appendChild(img); // Add image to <div id="assets">

// Create an object for managing our image...
export const titlescreen2Drawer = { 
  img, // The image element itself
  ready : img.complete, // true/false (is image loaded already?)
  frameWidth : 1000,
  frameHeight: 1000,
  totalFrames : 1,
  totalRows : 1,
  totalColumns : 1,
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
    
    if (!w) {w = this.frameWidth} 
    if (!h) {h = this.frameHeight} 
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
img.addEventListener('load',()=>{
  console.log('loading...');
  console.log('welcome to my game! hope you enjoy. this game is currently in an alpha/unfinished state, please be patient ;)');
  titlescreen2Drawer.ready=true
});