var paths = require('./paths');
var _ = require('lodash');

var sources = {};

sources.defaultBase = paths.app;

// build
sources.rawAssets = [
    paths.app + 'bower_components/*/*.js',
    paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}', // most of the generic bower modules
    paths.app + 'components/**/*.{js,css}',
    paths.app + '*.{js,css}'
];

sources.sass = [
    paths.app + 'components/**/*.{sass,scss}',
    paths.app + '*.{sass,scss}'
];

sources.fonts = 'app/fonts/*';
sources.images = 'app/images/*.jpg';
sources.translations = 'app/translations/*.json';
sources.html = 'app/components/.html';
sources.index = 'app/index.html';

// dev serving
sources.css = [
    paths.app + 'components/**/*.css',
    paths.app + '*.css'
];

sources.devAssets = [
    paths.app + 'bower_components/*/*.js',
    paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}', // most of the generic bower modules
    paths.app + 'components/**/*.js',
    paths.app + '*.js',
    { files: paths.tmp + '**/*', base: paths.tmp }
];


module.exports = sources;