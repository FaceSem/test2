// grab our gulp packages
var gulp       = require('gulp'),
browserSync = require('browser-sync').create(),
sass        = require('gulp-sass');






// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});


gulp.task('default', ['watch', 'reload']);




gulp.task("reload", function(){
  browserSync.reload();
  // done();
})

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  gulp.watch('*.html',['reload']);
});