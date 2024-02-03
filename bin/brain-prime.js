#!/usr/bin/env node
import { playPrime } from '../src/games/prime.js';
import {playGame} from '../src/index.js';
const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(playPrime, question);
