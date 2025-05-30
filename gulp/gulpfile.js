const gulp = require('gulp');
const { SourceMap } = require('module');
const sass = require('gulp-sass')(require('sass'));
const SourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compilarSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(SourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //compressed, minifica o conteudo tirando os espeços em branco
        }))
        .pipe(SourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// function compilarSass() {
//     return gulp.src('./source/styles/main.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./build/styles'));
// }

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} ,gulp.series(compilarSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false} ,gulp.series(comprimeJavaScript));
    gulp.watch('./source/images', {ignoreInitial: false} ,gulp.series(comprimeImagens));
}
