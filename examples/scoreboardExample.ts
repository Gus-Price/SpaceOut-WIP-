import {addAnimation} from './animation';
import {ctx, canvas} from './canvas';

export const scoreBoard = {
  score : 0,
  showInstructions : true,
  update (elapsed:number) {},
  draw () {
    ctx.font = '18pt Futura';
    ctx.fillStyle = 'green';
    ctx.textAlign = 'left';
    ctx.fillText(
      `Score: ${this.score}`,
      10,40
    );
    if (this.showInstructions) {
      ctx.textAlign = 'center';
      ctx.fillText(
        `Click to score!`,
        canvas.width/2,canvas.height/2
      );
    }
  }
}

canvas.addEventListener (
  'click',
  function (e) {
    scoreBoard.score += 1;
    scoreBoard.showInstructions = false;
  }
)

addAnimation(scoreBoard);