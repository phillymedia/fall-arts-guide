var nunjucksRender = require('gulp-nunjucks-render');
var data = require("gulp-data");

module.exports = function (gulp, plugins) {
    return function () {
       gulp.src('src/index.html')
       .pipe(data(function() {
                return {
                    data: require('../data.json')
                }
            }))
      .pipe(nunjucksRender({
           path: ['src/components']
        }))
        .pipe(plugins.removeCode({
           tmp: true
        }))
      .pipe(gulp.dest('.tmp'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }))
    };
};
