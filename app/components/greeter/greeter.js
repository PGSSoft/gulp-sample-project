'use strict';

window.onload = function () {
    var greeter = document.createElement('div');
    greeter.className = 'greeter';
    greeter.innerHTML = 'Hello, <span>world</span>!';
    document.body.appendChild(greeter);
};