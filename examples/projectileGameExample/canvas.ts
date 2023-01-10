export let pcanvas : HTMLCanvasElement= document.createElement("canvas");
export let lcanvas : HTMLCanvasElement = document.createElement('canvas');
let wrapper = document.createElement('div');
export let tcanvas : HTMLCanvasElement = document.createElement('canvas');

export let width = 600;
export let height = 300;
export let scale = width/600;

[tcanvas, pcanvas, lcanvas].forEach(
  function (c) {
    c.width = width;
    c.height = height;
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    wrapper.appendChild(c);
  }
);
wrapper.style.position = 'relative';
wrapper.style.margin = 'auto';
wrapper.style.border = '3px solid black';

[wrapper, lcanvas, pcanvas, tcanvas].forEach(
  function (el) {
     el.style.width = `${width}px`;
      el.style.height = `${height}px`;
  }
);

document.querySelector('#app').appendChild(wrapper);


 