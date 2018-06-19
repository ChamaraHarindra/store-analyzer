'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var nunjucksRender = require('gulp-nunjucks-render');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');


// Development Tasks 
// -----------------

// Autoprefixer browser list
var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

// Start browserSync server
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './app'
        }
    })
})


gulp.task('nunjucks', function () {
    // Gets .html and .nunjucks files in pages
    return gulp.src('./app/pages/**/*.+(html|njk)')
        // Renders template with nunjucks
        .pipe(data(function () {
            // return require('./data.json')
        }))
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['./app/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
});



// Watchers
gulp.task('watch', function () {
    gulp.watch('./app/css/**/*.css', browserSync.reload);
    gulp.watch('./app/js/**/*.js', browserSync.reload);
    gulp.watch('./app/**/*.html', browserSync.reload);
    gulp.watch('./app/pages/**/*.+(html|njk)', ['nunjucks']);
    gulp.watch('./app/templates/**/*.+(html|njk)', ['nunjucks']);
})



// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function () {

    return gulp.src('./app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function () {
    return gulp.src('./app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true,
        })))
        .pipe(gulp.dest('./dist/images'))
});


// Copying fonts 
gulp.task('fonts', function () {
    return gulp.src('./app/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'))
})

// Cleaning 
gulp.task('clean', function () {
    return del.sync('dist').then(function (cb) {
        return cache.clearAll(cb);
    });
})

gulp.task('clean:dist', function () {
    return del.sync(['./dist/**/*', '!./dist/images', '!./dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function (callback) {
    runSequence(['browserSync'], 'watch',
        callback
    )
})

gulp.task('build', function (callback) {
    runSequence(
        'clean:dist',
        ['useref', 'images', 'fonts'],
        callback
    )
})