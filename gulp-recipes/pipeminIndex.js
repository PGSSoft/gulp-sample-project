'use strict';

module.exports = {
    configReader: function ($, config) {
        config.sources.devAssets = {files: config.sources.devAssets, read: false, log: true};
        return config;
    },
    recipe: function ($, config, sources) {

        $.gulp.task('index', function () {
            var preBuildPipe = $.utils.sequentialLazypipe($.utils.getPipes('preDevBuild'));

            return $.lazypipe()
                .pipe(sources.index)
                .pipe(preBuildPipe)
                .pipe($.pipemin, {
                    assetsDir: '{' + sources.devAssets.bases.join(',') + '}',
                    assetsStream: sources.devAssets.pipe($.utils.sequentialLazypipe($.utils.getPipes('postDevAssets'))),
                    js: null,
                    css: null
                })
                .pipe($.gulp.dest, config.paths.tmp)();
        });

        // no dependency on index, as preServe will be called by server
        $.gulp.task('watch:index', function () {
            $.utils.watchSource(sources.devAssets, ['index']);
        });

        return {
            postDevAssetsSort: [100, $.utils.sortFiles],
            preServe: 'index',
            watch: 'watch:index'
        };
    }
};