import format from 'nanoid/format';

import {
  defaultAlphabet,
  defaultSize
} from '../defaults.js';

const crypto = window.crypto || window.msCrypto;

const random = crypto ? cryptoRandom : insecureRandom;

function cryptoRandom (length) {
  return crypto.getRandomValues(new Uint8Array(length));
}

function insecureRandom (length) {
  /*
  NEVER EVER USE THIS FOR REAL ID GENERATION
  Math.random() is not secure and this particular usage is naive
  This is done purely for example demo to work in IE10 and lower
  */

  return new Array(length).fill(0).map(() => {
    return Math.floor(Math.random() * 256);
  });
}

export default function (state) {
  let requireExample;
  let lengthExample = state.size === defaultSize
    ? ''
    : state.size;
  const exampleId = format(random, state.alphabet, state.size);

  if (state.alphabet === defaultAlphabet) {
    requireExample = `var nanoid = require('nanoid');

model.id = nanoid(${lengthExample}); // => "${exampleId}"`;
  } else {
    requireExample = `var generate = require('nanoid/generate');
var alphabet = '${state.alphabet}';

model.id = generate(alphabet, ${state.size}); // => "${exampleId}`;
  }

  return requireExample;
}
