#!/usr/bin/env node
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
greetUser();#!/usr/bin/env node
import { playPrime } from '../src/games/prime.js';

import { playGame } from '../src/index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(playPrime, question);
