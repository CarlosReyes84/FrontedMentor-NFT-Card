const { src, dest, watch } = require('gulp')    
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

//function to compile sass
function compile() {
    return src('src/sass/app.scss')
    .pipe(sass())
    .pipe(dest('dist'))
}

//minify to production
function production() {
    let plugins = [
        cssnano(),
        autoprefixer()
    ]
    return src('src/sass/app.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(dest('dist', { sourcemaps: true }))
}


//auto compile
function watching() {
    watch('src/sass/**/*.scss', compile)
    // watch('src/sass/**/*.scss', production) 
}


exports.default = watching;