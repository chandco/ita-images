var gulp = require('gulp');
var ggm = require('gulp-gm');
var gm = require('gm'),
    rename = require("gulp-rename");


gulp.task('default', function () {
 
});
gulp.task('images', function () {
  gulp.src('./source-images/*.jpg')

  	
    .pipe(ggm(function (gmfile) {


      	gmfile
      			.setFormat("png")
      			.resize(300, 200)
      			.borderColor("RGB(255,255,255)")
      			.border(3,3)
      			.rotate("transparent",3)
      			;
      			


      	return gmfile;
      			
      			 
    }))

    .pipe(rename(function (path) {
            
            path.basename += "-right-";        
        }))

    .pipe(gulp.dest('output'));

    gulp.src('./source-images/*.jpg')

    
    .pipe(ggm(function (gmfile) {


        gmfile
            .setFormat("png")
            .resize(300, 200)
            .borderColor("RGB(255,255,255)")
            .border(3,3)
            .rotate("transparent",-3)
            ;
            


        return gmfile;
            
             
    }))

    .pipe(rename(function (path) {
            
            path.basename += "-left-";        
        }))

    .pipe(gulp.dest('output'));
});