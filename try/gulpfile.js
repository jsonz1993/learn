var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    livereload = require('gulp-livereload'),
    less = require('gulp-less');

gulp.task('less', function() {
    gulp.src(['*.less'])
        .pipe(plugins.plumber())
        .pipe(less().on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(plugins.autoprefixer('safari 5', 'ios 6', 'android 4')) // 加前缀
        .pipe(gulp.dest('./')) // 输出目录
        .pipe(livereload());
});

gulp.task('default', ['less'], function(){
    var server = livereload();
    livereload.listen('4040');
    gulp.watch(['*.less', '*.js', '*.html'], ['less'], function(){
        server.changed(file.path);
    });
})
