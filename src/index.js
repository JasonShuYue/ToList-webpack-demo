import _ from 'lodash';
import j from 'jquery';
import foo from './foo.js';

function component() {
    let element = j('<div></div>');

    element.html(_.join(['Hello','webpack'], ' '))

    return element.get(0);
}

document.body.appendChild(component());

console.log(foo);
console.log(foo())