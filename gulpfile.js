const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/'));
}

exports.default = function(){
    gulp.watch('.source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}

//npm run sass --watch