import {addAnimation, startAnimation } from './animate';

import {shootingTurret} from './turret';

import {invaders} from './invader';
import {titlescreen} from './titlescreen';
import {gameoverSprite} from './gameoverSprite'
import {ufo} from './ufo';

addAnimation(shootingTurret);
addAnimation(ufo);
addAnimation(invaders);

startAnimation();
