/*
Place all requires below
*/
const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');


//Function that compiles sass --> css + mapfiles
const bundleSass = () => {
  return src('sass/**/*.scss')
  .pipe(sourceMaps.init())
  .pipe(compileSass().on('error', compileSass.logError))
  .pipe(sourceMaps.write(''))
  .pipe(dest('css'));
};


//Default testing task
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

//function that runs on watch and so is constant
const devWatch = () => {
    watch('sass/**/*.scss', bundleSass);
};


exports.default = defaultTask;
exports.bundleSass = bundleSass;
exports.devWatch = devWatch;