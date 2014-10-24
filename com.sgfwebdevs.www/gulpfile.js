var gulp = require('gulp');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');

gulp.task('css', function() {
    gulp.src('./sass/*.scss')
    .pipe(compass({
        config_file: './config.rb'
    }))
    .on('error', function(){
        console.log('turn down for what!');
    })
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});



// Deault
gulp.task('default', function(){
    gulp.watch('sass/**/*.scss', ['css']);
});
