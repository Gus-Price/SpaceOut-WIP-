import {ctx} from './canvas';



export const img = document.createElement('img'); 
img.src = 'turretSprite.png'; 
document
  .querySelector('#assets')
  .appendChild(img); 


export const turretDrawer = { 
  img, 
  ready : img.complete, // true/false (is image loaded already?)
  frameWidth : 100,
  frameHeight: 100,
  totalFrames : 25,
  totalRows : 5,
  totalColumns : 5,
  draw (x,y,frame,w=null,h=null) { 
    
    if (!this.ready) {
      setTimeout(
        ()=>this.draw(x,y,frame,w,h),
        600
      )
      console.log('Warning: Incoming Invaders! get ready for battle!...',this.img);
      return
    }
    
    if (!w) {w = this.frameWidth} // Default to image size
    if (!h) {h = this.frameHeight} // Default to imag esize
    // Make frame number less than # of frames (i.e. if we ask
    // for frame 12 but have only 8 frames, we'll get frame 4)
    frame = frame % this.totalFrames;  
    let cn = frame % this.totalColumns;
    let rn = Math.floor(frame / this.totalColumns)
    debugger;
    ctx.drawImage(
        this.img, // image Element
        this.frameWidth * cn, // Source X
        this.frameWidth * rn, // Source Y
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
  console.log('loading...');
  console.log('loaded!');
  turretDrawer.ready=true
});

