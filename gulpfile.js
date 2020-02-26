const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const browserSync = require("browser-sync").create();

gulp.task("gulp_nodemon", function(done) {
  nodemon({
    script: "index.js",
    ext: "js html css",
    env: { NODE_ENV: "development" }
  });
  done();
});

gulp.task("sync", function(done) {
  browserSync.init({
    port: 3002,
    proxy: "http://localhost:3001/",
    ui: { port: 3003 },
    reloadDelay: 1000
  });
  gulp
    .watch(["./**/*.js", "./**/*.html", "./**/*.css"])
    .on("change", browserSync.reload);
  done();
});

gulp.task("default", gulp.series("gulp_nodemon", "sync"));
