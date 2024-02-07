#!/usr/bin/env node
import playCalculate from '../src/games/calc.js';

import playGame from '../src/index.js';

const question = 'What is the result of the expression?';
playGame(playCalculate, question);
