/**
 * Created by Jsonz on 16/7/26.
 */

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')(),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    riot = require('gulp-riot'),
    once = require('gulp-once');

// less dev
gulp.task('lessDev', function(){
    gulp.src('./src/admin/assets/less/main.less')
        .pipe(once('lessAdmin'))
        .pipe(plugins.plumber())
        .pipe(less())
        .pipe(plugins.autoprefixer('safari 5','ios 6','android 4')) // 加前缀
        .pipe(gulp.dest('./src/admin/assets/css'))
        .pipe(livereload());

    gulp.src('./src/merchant/assets/less/main.less')
        .pipe(once('lessMerchant'))
        .pipe(plugins.plumber())
        .pipe(less())
        .pipe(plugins.autoprefixer('safari 5','ios 6','android 4')) // 加前缀
        .pipe(gulp.dest('./src/merchant/assets/css'))
        .pipe(livereload());

    gulp.src('./src/wechat/assets/less/main.less')
        .pipe(once('lessWechat'))
        .pipe(plugins.plumber())
        .pipe(less())
        .pipe(plugins.autoprefixer('safari 5','ios 6','android 4')) // 加前缀
        .pipe(gulp.dest('./src/wechat/assets/css'))
        .pipe(livereload());
});

// less dist
gulp.task('lessDist', function(){
    runSequence(['lessDev'], function(){
        gulp.src('./src/**/assets/css/main.css')
            .pipe(plugins.cssnano())
            .pipe(gulp.dest('./dist'));
    });

});

// copy other
gulp.task('copy', function(){
    gulp.src(['./src/**/*.*', '!./src/**/*.css', '!./src/**/*.less', '!./src/**/*.js','!./src/**/*.html'])
        .pipe(gulp.dest('./dist'));
});

// 复制压缩html
gulp.task('minHtml', function(){
   gulp.src(['./src/**/*.html', '!./src/**/modernizr/test/**/*.html', '!./src/**/*.tpl.html'])
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('./dist'));
});

// watch
gulp.task('watch', function(){
    runSequence(['lessDev']);
    gulp.watch('./src/**/*.less', ['lessDev']);
});


gulp.task('dist', function(){
    runSequence(['lessDist', 'minHtml', 'copy'])
});