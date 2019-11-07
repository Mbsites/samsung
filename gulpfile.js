var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var scssFiles = './src/scss/main.scss';
var cssDest = './assets/css';

var sassDevOptions = {
    outputStyle: 'espanded'
}

var sassProdOptions = {
    outputStyle: 'compressed'
}

gulp.task('sassdev', function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error',sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('sassprod',function(){
    return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error',sass.logError))
    .pipe(rename('main.min.scss'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(scssFiles,gulp.series(['sassdev','sassprod']));
});

gulp.task('default',gulp.series(['sassdev','sassprod','watch']));
