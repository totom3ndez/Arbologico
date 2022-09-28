const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const cleanCss = require('gulp-clean-css');
const minify = require('gulp-minify');
const webp = require('gulp-webp');
const sourcemaps = require('gulp-sourcemaps');

// Compile SASS to CSS
function css(done) {
	src('styles/**/*.scss') // Get SASS file
		.pipe(sourcemaps.init())
		.pipe(plumber()) // Checks errors buy doesnt stop Gulp
		.pipe(sass()) // Compile
		.pipe(cleanCss()) // Compress CSS
		.pipe(sourcemaps.write())
		.pipe(dest('public/css')); // Save file as CSS
	done();
}
// Minify JS Files
function js(done) {
	src('app/**/*.js', { allowEmpty: true })
		.pipe(sourcemaps.init())
		.pipe(minify({ noSource: true }))
		.pipe(sourcemaps.write())
		.pipe(dest('public/js'));
	done();
}

// Convert to webp
function toWebp(done) {
	src('resources/**/*.{png,jpg,jpeg,gif}', { allowEmpty: true })
		.pipe(webp())
		.pipe(dest('public/webp'));
	done();
}

// Watch for changes
function listen(done) {
	watch('styles/**/*.scss', css);
	watch('app/**/*.js', js);
	done();
}

exports.toWebp = toWebp;
exports.js = js;
exports.css = css;
exports.dev = parallel(toWebp, listen);
