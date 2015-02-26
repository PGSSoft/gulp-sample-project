'use strict';

module.exports = function ($, config, sources) {
    return {
        pipes: {
            processCssAutoprefixer: [120, $.lazypipe().pipe($.autoprefixer, 'last 2 version', 'ie 9')]
        }
    };
};