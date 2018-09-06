var uglify = require('gulp-uglify');

module.exports = function(gulp, plugins) {
        return function() {
            return gulp.src('./.tmp/js/main.js')
            .pipe(uglify({
                    mangle: false,
                    compress: false
                }))
                .pipe(gulp.dest('dist/files'))
            };
        };
