var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    console.log("Компиляция SASS");
    return gulp.src('./public/css/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/css/*.sass', gulp.series('sass'));
});