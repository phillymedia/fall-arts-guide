var postcss = require('gulp-postcss');
var precss = require('precss');
var autoprefixer = require('autoprefixer');


// gulp.task('css', function () {
//
//     return gulp.src('./src/css/*.css')
//         .pipe(postcss([ precss(), autoprefixer() ]))
//         .pipe(gulp.dest('.tmp/css'))
//         .pipe(plugins.browserSync.reload({
//             stream:true
//         }))
// });


module.exports = function(gulp, plugins) {
    return function() {
        return gulp.src('./src/css/styles.css')
            .pipe(postcss([ precss(), autoprefixer() ]))
            .pipe(gulp.dest('.tmp/css'))
            .pipe(plugins.browserSync.reload({
                stream:true
            }))
    };
};
