'use strict';

module.exports = function ($, config, sources) {
    var _ = $.lodash;

    var sassProcess = $.lazypipe()
        .pipe($.sass, _.defaults(config.sass, {
            style: 'expanded',
            errLogToConsole: true,
            includePaths: [config.paths.app]
        }));

    var sassSource = $.lazypipe()
        .pipe(sources.sass)
        .pipe(sassProcess);

    /**
     * @task sass
     * Compile all sass files and store in temp directory
     */
    $.gulp.task('sass', function () {
        var processCssPipe = $.utils.sequentialLazypipe($.utils.getPipes('devProcessCss'));

        return sassSource
            .pipe(processCssPipe)
            .pipe($.gulp.dest, config.paths.tmp)();
    });

    $.gulp.task('watch:sass', ['sass'], function () {
        $.utils.watchSource(sources.sass, function () {
            $.utils.runSubtasks('sass');
        })();
    });

    return {
        pipes: {
            assetSass: sassSource
        },

        watch: 'watch:sass'
    };
};