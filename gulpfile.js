const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

let javascripts = [
  'src/app/router.js',
  'src/app/cover.directive.js',
  'src/app/header.directive.js'
]

gulp.task('watch', function(){
  gulp.watch('src/app/*.js', ['javascript']);
  gulp.watch('src/css/*.css', ['css']);
})

gulp.task("javascript", function () {
  return gulp.src(javascripts)
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("public"));
});

gulp.task('css', function () {
	return gulp.src('./src/**/*.css')
		.pipe(autoprefixer({
			browsers: ['last 20 versions'],
			cascade: false
		}))
    .pipe(concat("style.min.css"))
		.pipe(gulp.dest('public'));
});
