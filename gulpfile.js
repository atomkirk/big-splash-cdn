var gulp = require('gulp');
var fs = require('fs');
var s3 = require("gulp-s3");
var gzip = require("gulp-gzip");

gulp.task('default', function() {

});

gulp.task('deploy', function() {

  var options = { gzippedOnly: true };

  aws = JSON.parse(fs.readFileSync('./aws.json'));

  gulp.src('./dist/**')
    .pipe(gzip())
    .pipe(s3(aws, options));

});
