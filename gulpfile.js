const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');

let javascripts = [
  'src/app/router.js',
  'src/app/cover.directive.js',
  'src/app/header.directive.js'
]

let css = [
  'src/css/style.css',
  'src/css/animate.css'
]

gulp.task("javascript", function () {
  return gulp.src(javascripts)
    .pipe(babel())
    .pipe(concat("app.js"))
    .pipe(gulp.dest("public"));
});

gulp.task('css', function () {
	return gulp.src(css)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(concat("style.css"))
		.pipe(gulp.dest('public'));
});
