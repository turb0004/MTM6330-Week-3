const gulp = require('gulp')
const sass = require('gulp-sass')
const sassPath = 'scss/**/*.scss'

gulp.task('sass', function () {
  return gulp
  .src(sassPath)
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('default', function() {
  gulp.watch(sassPath, ['sass'])
})
