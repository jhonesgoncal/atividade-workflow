var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlminify = require("gulp-html-minify");

var minify = {
  outputStyle: 'compressed'
}

gulp.task("move-minify-css", function(){
	return gulp.src('./source/scss/*.scss')
		   .pipe(sass(minify).on('error', sass.logError))
		   .pipe(gulp.dest("./dist/css"));
});

gulp.task("move-minify-html", function () {
	return gulp.src('./source/index.html')
		   .pipe(htmlminify())  
		   .pipe(gulp.dest("./dist"));
})

gulp.task("escuta", function () {
	gulp.watch('./source/scss/*.scss',['move-minify-css']);
	gulp.watch('./source/index.html', ['move-minify-html']);
})

gulp.task('default',['move-minify-css', 'move-minify-css','escuta']);