#!/usr/bin/env node
import { playGcd } from '../src/games/gcd.js';

import { playGame } from '../src/index.js';

const question = 'Find the greatest common divisor of given numbers.';
playGame(playGcd, question);
