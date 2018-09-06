var inline = require('gulp-inline');
var fs = require('fs');

module.exports = function(gulp, plugins) {

    return function(done) {
        fs.writeFileSync('dist/css-js.html', '<link rel="stylesheet" href="files/styles.css"> <script src="files/main.js"></script>');
        return gulp.src('dist/css-js.html').pipe(inline({
            base: 'dist/'
        })).pipe(gulp.dest('dist/'));

        done()
    }




    // plugins.del.sync('dist/main.min.js');
    // plugins.del.sync('dist/styles.min.css');
};
