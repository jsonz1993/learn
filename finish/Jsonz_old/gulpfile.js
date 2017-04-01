//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),//调用编译less模块
    cssmin = require('gulp-minify-css'),//调用压缩css模块
    notify = require('gulp-notify'),//报错和不取消watch事件
    plumber = require('gulp-plumber');
 
////定义一个 lessm 任务（自定义任务名称）
//gulp.task('bootstrap', function () {
//    gulp.src(['style/less/*.less','!style/less/**/{myjsonz.less}']) //该任务针对的文件 !不包含
//        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')})) //报错
//        .pipe(less()) //该任务调用的模块
//        .pipe(cssmin())//css压缩
//        .pipe(gulp.dest('style/css')); //将会在../style/css 下生成less.css
//});
//
//gulp.task('default',['lessm']); //定义默认任务
//
//gulp.task('lessMWatch',function(){
//    gulp.watch(['style/less/*.less'],['lessm']);
//});//定义监听事件


gulp.task('bootstrapLess',function(){
    gulp.src(['framework/bootstrap/less/bootstrap.less'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('framework/bootstrap/dist/css/'));
});
gulp.task('indexLess',function(){
    gulp.src(['style/less/index.less'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('style/css/'));
});
gulp.task('baseLess', function () {
    gulp.src(['style/less/base.less','style/less/media.less'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('style/css/'));
});
gulp.task('privateLess',function(){
    gulp.src(['style/less/private/*.less'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('style/css/private'));
});
gulp.task('frontendLess', function () {
    gulp.src(['style/less/frontend/*.less'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('style/css/frontend/'));
});
gulp.task('watchAll',function(){
    gulp.watch(['framework/bootstrap/less/*.less'],['bootstrapLess']);
    gulp.watch(['style/less/index.less'],['indexLess']);
    gulp.watch(['style/less/base.less','style/less/media.less'],['baseLess']);
    gulp.watch(['style/less/frontend/*.less'],['frontendLess']);
    gulp.watch(['style/less/private/*.less'],['privateLess']);
});






//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径