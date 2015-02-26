var paths = require('./paths');
var sources = {};

sources.defaultBase = paths.app;

sources.rawAssets = [
    paths.app + 'bower_components/*/*.js',
    paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}', // most of the generic bower modules
    paths.app + '{,components/**/}*.{js,css}'
];

sources.sass = paths.app + '{,components/**/}*.{sass,scss}';

sources.fonts = 'app/fonts/*';
sources.images = 'app/images/*.jpg';
sources.translations = 'app/translations/*.json';
sources.html = 'app/components/.html';
sources.index = 'app/index.html';

module.exports = sources;