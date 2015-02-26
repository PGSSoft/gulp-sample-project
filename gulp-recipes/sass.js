'use strict';

module.exports = function ($, config, sources) {

    var sassSource = $.lazypipe()
        .pipe(sources.sass)
        .pipe($.sass, {
            style: 'expanded',
            errLogToConsole: true,
            includePaths: [config.paths.app]
        });

    return {
        pipes: {
            assetSass: sassSource
        }
    };
};