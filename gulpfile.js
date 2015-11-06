var gulp = require('gulp');
var s3 = require("gulp-s3");

gulp.task('default', function() {
});

gulp.task('deploy', function() {
  aws = JSON.parse(fs.readFileSync('./aws.json'));
  gulp.src('./dist/**')
      .pipe(s3(aws));
});
