'use strict';

const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function compScss() {
   return src('src/scss/style.scss')
      .pipe(sass())
      .pipe(dest('dist/css'));
};

function concatJs() {
   return src('src/js/*.js')
      .pipe(concat('script.js'))
      .pipe(dest('dist'));
};

function vendorJS() {
   const modules = [
      'node_modules/swiper/swiper-bundle.min.js',
      'node_modules/swiper/swiper-bundle.min.js.map',
   ];

   return src(modules)
      .pipe(dest('build/js'));
};

function vendorCSS() {
   const modules = [
      'node_modules/swiper/swiper-bundle.min.css',
   ];

   return src(modules)
      .pipe(dest('build/css'));
};

exports.default = function () {
   watch('src/scss/*.scss', compScss);
   watch('src/js/*.js', concatJs);
}
exports.vendorJS = vendorJS;
exports.vendorCSS = vendorCSS;
