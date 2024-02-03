#!/usr/bin/env node
import { playEven } from '../src/games/even.js';
import { playGame } from '../src/index.js';
const question = 'Answer "yes" if the number is even, otherwise answer "no".';
playGame(playEven, question);
