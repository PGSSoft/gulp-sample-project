'use strict';

module.exports = function ($, config, sources) {
    $.gulp.task('css', function () {
        var processCssPipe =  $.lazypipe()
            .pipe($.sourcemaps.init)
            .pipe($.utils.sequentialLazypipe($.utils.getPipes('devProcessCss')))
            .pipe($.sourcemaps.write);

        return sources.css
            .pipe(processCssPipe)
            .pipe($.gulp.dest, config.paths.tmp)();
    });

    $.gulp.task('watch:css', ['css'], function () {
        var processCssPipe = $.utils.sequentialLazypipe($.utils.getPipes('devProcessCss'));
        $.utils.watchSource(sources.css)
            .pipe($.debug)
            .pipe(processCssPipe)
            .pipe($.gulp.dest, config.paths.tmp)();
    });

    return {
        watch: 'watch:css'
    }
};