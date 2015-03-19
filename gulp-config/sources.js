var paths = require('./paths');
var _ = require('lodash');
var sources = {};

sources.defaultBase = paths.app;

// dev serving
sources.index = paths.app + 'index.html';

// files handled by sass recipe
sources.sass = [
    paths.app + 'components/**/*.{sass,scss}',
    paths.app + '*.{sass,scss}'
];

// files handled by css recipe
sources.css = [
    paths.app + 'components/**/*.css',
    paths.app + '*.css'
];

// split files into variables by categories
var js = [
    paths.app + 'components/**/*.js',
    paths.app + '*.js'
];

var bowerFiles = {
    files: [
        paths.app + 'bower_components/*/*.js',
        paths.app + 'bower_components/*/{dist,min,release}/*.{js,css}' // most of the generic bower modules
    ],
    watch: false
};

// Files not handled by other tasks that need to be passed into pipemin (possibly referenced in index.html).
// If you don't handle css or js by other tasks, pass them here.
sources.assets = [bowerFiles, js];

// Files not handled by other tasks that need to be included into build, bypassing pipemin entirely.
// These files are also watched in development.
sources.build = [];

module.exports = sources;