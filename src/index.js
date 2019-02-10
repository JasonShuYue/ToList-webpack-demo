import _ from 'lodash';
import j from 'jquery';
import foo from './foo.js';
import printMe from './print';

function component() {
    let element = j('<div></div>');

    element.html(_.join(['Hello','webpack', '12312355555'], ' '))

    return element.get(0);
}

document.body.appendChild(component());

console.log(foo);
console.log(foo())


printMe();