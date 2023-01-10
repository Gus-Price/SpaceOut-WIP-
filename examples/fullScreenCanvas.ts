export const canvas = document.createElement('canvas');
document.querySelector('#app').appendChild(canvas);
export const ctx = canvas.getContext('2d')
// default canvas size
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.backgroundColor = '#eef7'
setCanvasSize(window.innerWidth,window.innerHeight);

export function setCanvasSize (width : number, height : number) {
  console.log('Set size',width,height)
  canvas.width = width;
  canvas.height = height;  
}

/* Resize when the window resizes */
window.addEventListener(
  'resize',
  onResize
)

function onResize () {
    setCanvasSize(canvas.offsetWidth,canvas.offsetHeight);
    ctx.strokeText(`Full Size Canvas, wow!     ${canvas.width}x${canvas.height}`,
                   canvas.width/2,canvas.height/2);
  }

onResize();

// Make drawing work on canvas...
canvas.addEventListener(
  'mousemove',
  (event) => {
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
  }
)