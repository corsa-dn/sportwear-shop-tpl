var gulp = require('gulp'),
  sass = require('gulp-sass'),
  // babel = require('gulp-babel'),
  browserSync = require('browser-sync');

var assets = {
  js: 'src/js',
  scss: 'src/scss',
}

gulp.task('sass', function() {
  return gulp.src(assets.scss + '/*.scss').pipe(sass()).pipe(gulp.dest('dist/css'));
});

gulp.task('dev', function() {
  browserSync.init(['dist/css/*.css', 'dist/*.html'], {
    server: {
      baseDir: './dist/'
    }
  });
  gulp.watch([assets.scss + '/*.scss'], ['sass']);
  gulp.watch(['dist/*.js']);
});
