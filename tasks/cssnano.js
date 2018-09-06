var cssnano = require('gulp-cssnano');

module.exports = function(gulp, plugins) {
    return function() {
        return gulp.src('./.tmp/css/styles.css')
            .pipe(cssnano())
            .pipe(gulp.dest('dist/files'))
    };
};
