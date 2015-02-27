'use strict';

module.exports = function ($, config, sources) {
    var pipeDef = [120, $.lazypipe().pipe($.autoprefixer, 'last 2 version', 'ie 9')];
    return {
        pipes: {
            processCss: pipeDef,
            devProcessCss: pipeDef
        }
    };
};