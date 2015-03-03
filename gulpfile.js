var $ = require('gulp-recipe-loader')(require('gulp'), require('require-dir')('gulp-config'));

$.gulp.task('default', ['build']);