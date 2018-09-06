var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.runSequence = require('run-sequence');
plugins.browserSync = require('browser-sync').create();
plugins.gulpIf = require('gulp-if');

var taskname;

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins);
}

gulp.task('css', getTask('css'));
gulp.task('browserSync', getTask('browserSync'));
gulp.task('clean', getTask('clean'));
gulp.task('nunjucks', getTask('nunjucks'));
gulp.task('indexcleanup', getTask('indexcleanup'));
gulp.task('browserify', getTask('browserify'));
gulp.task('uglify', getTask('uglify'));
gulp.task('cssnano', getTask('cssnano'));
gulp.task('inline', getTask('inline'));


// gulp.task('browserifyBuild', function() {
//   if(taskname == "default") {
//       return getTask('browserify', taskname)
//   }
// });


gulp.task('watch', ['browserSync', 'nunjucks'], function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/**/**/*.html', ['nunjucks']);
    gulp.watch('src/js/*.+(js|html)', ['browserify']);
});


gulp.task('default', function(callback) {
        plugins.runSequence( ['css', 'browserify', 'nunjucks', 'browserSync', 'watch'], callback )
})

gulp.task('build', function(callback){
    plugins.runSequence( 'clean', ['css', 'browserify', 'nunjucks'],'cssnano','uglify','inline','indexcleanup', callback )

})
