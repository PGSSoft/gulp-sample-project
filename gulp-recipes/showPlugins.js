'use strict';

module.exports = function ($, config, sources) {

    // get list of loaded libraries
    var propNames = Object.getOwnPropertyNames($.__proto__).join('\r\n');

    $.gulp.task('hello', function () {
        console.log('hello world');
    });

    return {
        pipes: {
            // generate file and pass it to build hook
            buildLoadedPlugins: $.lazypipe()
                .pipe($.file, 'loaded-plugins.txt', propNames, {src: true})
        }
    };
};