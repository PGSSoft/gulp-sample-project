'use strict';

module.exports = {
    recipe: function ($, config, sources) {
        return {
            pipes: {
                preDevBuild: [10, $.lazypipe().pipe($.preprocess, {context: {target: 'dev'}})],
                preBuild: [10, $.lazypipe().pipe($.preprocess, {context: {target: 'prod'}})]
            }
        }
    }
};