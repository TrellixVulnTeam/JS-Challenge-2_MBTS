'use strict';
/*
Place all requires below
*/
const {
  src,
  dest,
  watch,
  gulp
} = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');


//Function that compiles sass --> css + mapfiles
const bundleSass = () => {
  return src('./src/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(sourceMaps.write(''))
    .pipe(dest('./css'));
};

//function to transpile the modules to statics, then to es5 with polyfil
//webpack is the module bundler, babel is the transpiler
const compileWithWebpack = () => {
  return src(['src/app.js'])
  .pipe(webpackStream(webpackConfig), webpack)
  .pipe(babel())  
  .pipe(dest('transpiledJs'));
}


//Default testing task
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

//function that runs on watch and so is constant
const devWatch = () => {
  watch('./src/scss/**/*.scss', bundleSass);
  watch('./src/**/*.js', compileWithWebpack);
};


exports.default = defaultTask;
exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
exports.compileWithWebpack = compileWithWebpack;