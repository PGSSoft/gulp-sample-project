'use strict';

window.onload = function () {
    var greeter = document.createElement('div');
    greeter.className = 'greeter';
    greeter.innerText = 'Hello!';
    document.body.appendChild(greeter);
};