'use strict';

module.exports = function ($, config, sources) {

    // get list of loaded recipes
    var recipes = Object.getOwnPropertyNames($.recipes).join('\r\n');

    $.gulp.task('hello', function () {
        console.log('hello world');
    });

    return {
        pipes: {
            // generate file and pass it to build hook
            buildLoadedPlugins: $.lazypipe()
                .pipe($.file, 'used-recipes.txt', recipes, {src: true})
        }
    };
};