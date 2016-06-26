var gulp        = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
  gulp.watch("app/css/*.css", ['css-stream']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('css-stream', function() {
  return gulp.src("app/css/*.css")
  .pipe(browserSync.stream());
});
