export let canvas = document.createElement('canvas');
export let ctx = canvas.getContext('2d');
// dark blue background
canvas.style.backgroundColor = 'turquoise';


document.querySelector('#app')
  .appendChild(canvas);


canvas.width = 400
canvas.height = 600
