var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    livereload  = require('gulp-livereload'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    plumber     = require('gulp-plumber'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');

var paths = {
    sassMain: './sass/main.scss',
    sassFiles: './sass/**/*.scss',
    cssDir: './css',
    proxy: 'horsestrap.dev'
};

// SASS
gulp.task('sass', function () {
    gulp.src(paths.sassMain)
        .pipe(sourcemaps.init())
            .pipe(sass({
                errLogToConsole: true
                //outputStyle: 'compressed'
            }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.cssDir))
        //.pipe(reload({stream:true})) // use Livereload by default
        .pipe(livereload());
});

// BrowserSync - still on the fence about this(vs Livereload), but it IS pretty awesome
gulp.task('browser-sync', function() {
    browserSync({
        proxy: paths.proxy,
        xip: true,
        notify: false
    });
});

// Default
gulp.task('default', ['sass'], function(){ // pass in 'browser-sync' to start right away
    livereload.listen();
    gulp.watch(paths.sassFiles, ['sass']);
});