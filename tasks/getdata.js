var GoogleSpreadsheet = require('google-spreadsheet');
var data = require("gulp-data");

module.exports = function(gulp, plugins) {
    return function() {
        var sheet = [];
        var doc = new GoogleSpreadsheet('1sF7hDPM43WUWTFDFgd_HrwnyIbM9MAkOUwJfT8a43qQ');

        doc.getRows(1, function(err, rows) {
            rows.forEach(function(row) {
                delete row._xml, delete row.id, delete row._links
                sheet.push(row)
            })

            var fs = require('fs');
            var content = JSON.stringify(sheet);

            fs.writeFile('data.json', content,'utf8', (err) => {
                if (err) throw err;
            })
        });

    };
};
