'use strict';

module.exports = function ($, config, sources) {

    // lazy functions
    function rev() {
        return $.rev();
    }

    function revReplace() {
        return $.revReplace({replaceInExtensions: ['.js', '.css', '.html', '.json']});
    }

    return {
        pipes: {
            processJsRev: [1000, $.lazypipe().pipe(rev)],
            processCssRev: [1000, $.lazypipe().pipe(rev)],
            postBuildRev: [1000, $.lazypipe().pipe(rev)],
            postMergeRevReplace: [1000, $.lazypipe().pipe(revReplace)]
        }
    };
};