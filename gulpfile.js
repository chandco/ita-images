var gulp = require('gulp');
var gm = require('gulp-gm');


gulp.task('default', function () {
 
});


gulp.task('newsletter', function () {
  gulp.src('./source-images/**/*.jpg')

    .pipe(gm(function (gmfile) {

      return gmfile.resize(100, 100);

    }))

    .pipe(gulp.dest('/output/'));
});