import { invaderDrawer } from './invaderSprite';
import {canvas} from './canvas';
import {turret} from './turretSprite'

export const invaders = {
  coordinates : [ 
    // list of all the coordinates of our invaders
    {x:30,y:50},
    {x:90,y:50},
    {x:150,y:50},
    {x:210,y:50},
    {x:10,y:100},
    {x:60,y:100},
    {x:110,y:100},
    {x:170,y:100},
    {x:250,y:100},
    {x:320,y:100},
    {x:380,y:300},
    {x:420,y:300},
    {x:470,y:300},
  ],
  msSinceLastFrame: 0,
  msPerFrame: 1000 / 8,
  speed: 1100, // How fast we are moving!
  direction: -1, // 1 or -1 (moving right or left)
  frame: 1,
  update(ts) {
    this.msSinceLastFrame += ts;
    if (this.msSinceLastFrame > this.msPerFrame) {
      this.frame += 1;
      this.msSinceLastFrame = 0;
    }
    // Move each coordinate by xspeed
    this.coordinates.forEach(
      (coord) => {
        // Add to x coordinate based on SPEED and DIRECTION
        coord.x += 10 * this.speed * this.direction /1000;
        if (coord.x > canvas.width - 100) {
          this.direction = -1;
        } else if (coord.x < 0) {
          this.direction = 1;
        }
      }
    );
  },
  draw() {
    this.coordinates.forEach(
      (coord) => {
        invaderDrawer.draw(
          coord.x, coord.y, this.frame
        )    
      }
    )
    
  }
}