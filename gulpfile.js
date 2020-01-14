const gulp = require("gulp");
const ejs = require("gulp-ejs");
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
function html(done) {
	gulp.src("src/html/*.ejs")
		.pipe(ejs().on("error", err => console.log(err)))
		.pipe(rename(function(path) {
			if (path.basename != "index") {
				path.dirname = path.basename;
				path.basename = "index";
			}
			path.extname = ".html";
		}))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload());
	done();
}


function sassTask() {
	var plugins = [
		autoprefixer({grid: true}),
		cssnano()
    ];
	return	gulp.src("src/scss/*.scss")
				.pipe(sourcemaps.init())
				.pipe(sass().on("error", err => console.log(err)))
				.pipe(postcss(plugins))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest("dist/assets/css"))
				.pipe(connect.reload());
}

function javascriptTask(){
	return gulp.src('src/js/*.js')
			.pipe(sourcemaps.init())
			.pipe(babel().on("error", err => console.log(err)))
			.pipe(babel({
				"presets": ["@babel/env"] 
			}))
			/*.pipe(uglify()) */
			.pipe(sourcemaps.write())
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest("dist/assets/js"))
			.pipe(connect.reload());
}

function imageTask() {
	return gulp.src("src/images/*")
		.pipe(imagemin([
			imagemin.jpegtran({ progressive: true }),
			recompress({
				min: 70,
				max: 90,
				target: 0.8
			})
		]))
		.pipe(gulp.dest("dist/assets/images"))
		.pipe(connect.reload());
}

function watchHtml() {
	gulp.watch("src/html/*.ejs", { ignoreInitial: false }, html);
}

function watchScss() {
	gulp.watch("src/scss/*.scss", { ignoreInitial: false }, sassTask);
}

function watchJavascript(){
	gulp.watch('src/js/*.js', { ignoreInitial: false }, javascriptTask)
}

function watchImages (){
	gulp.watch('src/images/*', { ignoreInitial: false }, imageTask)
}

gulp.task("dev", function(done) {
	watchHtml();
	watchScss();
	watchJavascript();
	watchImages();
	connect.server({
		livereload: true,
		root: "dist"
	});
	done();
});

gulp.task("build", function(done) {
	html();
	watchScss();
	watchJavascript();
	watchImages();
	done();
});