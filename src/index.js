import _ from 'lodash';
import j from 'jquery'

function component() {
    let element = j('<div></div>');

    element.html(_.join(['Hello','webpack'], ' '))
   
    return element.get(0);
}

document.body.appendChild(component());