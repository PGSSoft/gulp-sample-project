var _ = require('lodash');

var config = _.extend(require('require-dir')('gulp-config'), {
    useHistoryApi: false
});

var $ = require('gulp-recipe-loader')(require('gulp'), config);

$.gulp.task('default', ['build']);