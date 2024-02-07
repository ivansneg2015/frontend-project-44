#!/usr/bin/env node
import playProg from '../src/games/progression.js';

import playGame from '../src/index.js';

const question = 'What number is missing in the progression?';
playGame(playProg, question);
