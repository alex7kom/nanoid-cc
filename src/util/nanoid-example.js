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
    requireExample = `var nanoid = require('nanoid');<br />
<br />
model.id = nanoid(${lengthExample}); // => "${exampleId}"`;
  } else {
    requireExample = `var generate = require('nanoid/generate');<br />
var alphabet = '${state.alphabet}';<br />
<br />
model.id = generate(alphabet, ${state.size}); // => "${exampleId}`;
  }

  requireExample = requireExample
    .replace(/ = /g, ' <span class="hl-op">=</span> ')
    .replace(/\b(\S+?)\(/g, '<span class="hl-func">$1</span>(')
    .replace(/(\/\/.+?)$/gm, '<span class="hl-comment">$1</span>')
    .replace(/\b(var)\b/g, '<span class="hl-keyword">$1</span>')
    .replace(/('.+?')/g, '<span class="hl-str">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="hl-num">$1</span>');

  return requireExample;
}
