'use strict';

module.exports = function ($, config, sources) {
    var _ = $.lodash;

    $.gulp.task('serve', ['preServe'], function () {
        var middleware = [];

        if(config.useHistoryApi) {
            middleware.push(function () { return $.connectHistoryApiFallback; }());
        }

        $.browserSync({
            server: {
                port: config.ports.dev,
                baseDir: [config.paths.tmp, config.paths.app],
                middleware: middleware
            },
            files: sources.devAssets.globs
        })
    });

    $.gulp.task('clean:temp', function (cb) {
        $.rimraf(config.paths.tmp, cb);
    });

    $.gulp.task('preServe', ['watch'], function (cb) {
        var preServeHooks = _.chain($.recipes)
            .pluck('preServe')
            .filter()
            .flatten()
            .value();

        $.utils.runSubtasks(preServeHooks, cb);
    });

    $.gulp.task('watch', ['clean:temp'], function (cb) {
        var watches = _.chain($.recipes)
            .pluck('watch')
            .filter()
            .flatten()
            .value();

        $.utils.runSubtasks(watches, cb);
    });

    return {
    };
};