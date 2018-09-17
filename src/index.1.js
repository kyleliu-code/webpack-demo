import _ from 'lodash';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'prodction') {
  console.log('we are in devEnv');
}

function component() {
  const element = document.createElement('pre');
  element.innerHTML = `<p style="display:inline-block;color: red">Hello 
  webpack! 5 cubed is equal to ${cube(5)}</p>                                                          <p style="display:inline-block;">whitespace</p>`;

  return element;
}

document.body.appendChild(component());