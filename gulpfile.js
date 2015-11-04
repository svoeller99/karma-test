var gulp = require('gulp');
var Server = require('karma').Server;

['test','tdd'].forEach(function(taskName){
  gulp.task(taskName, function(done){
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: taskName === 'test'
    }, done).start();
  });
});

gulp.task('default', ['tdd']);