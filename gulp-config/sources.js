var paths = require('./paths');
var _ = require('lodash');

var sources = {};
sources.defaultBase = paths.app;


// dev serving
sources.index = 'app/index.html';

sources.sass = [
    paths.app + 'components/**/*.{sass,scss}',
    paths.app + '*.{sass,scss}'
];

sources.css = [
    paths.app + 'components/**/*.css',
    paths.app + '*.css'
];

sources.js = [
    paths.app + 'components/**/*.js',
    paths.app + '*.js'
];

sources.devAssets = [
    paths.app + 'bower_components/*/*.js',
    paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}', // most of the generic bower modules
    sources.js, // include only when serving non-processed js files
    { files: paths.tmp + '**/*', base: paths.tmp } // all processed files from temp directory
];

// build
sources.rawAssets = [
    paths.app + 'bower_components/*/*.js',
    paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}', // most of the generic bower modules
    sources.js,
    sources.css
];

module.exports = sources;