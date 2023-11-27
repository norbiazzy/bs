let preprocessor = 'sass'

const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const sass = require('gulp-sass')(require('sass'))
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer')
const cleancss = require('gulp-clean-css')
const imagecomp = require('compress-images');
const clean = require('gulp-clean');

function browsersync() {
    browserSync.init({
        server: {baseDir: './app/'},
        notify: false,
        online: true
    })
};

function scripts() {
    return src(['app/js/bootstrap.js',
        'app/js/main.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
};

function styles() {
    return src(['app/scss/bootstrap.css',
        'app/scss/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions']}))
        .pipe(cleancss(({level: {1: {specialComments: 0}}/* format:beautify */})))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

async function images() {
    src(['app/images/src/**/*.mp4'])
        .pipe(dest('app/images/dest/')) // Выгружаем в папку с финальной сборкой
    imagecomp(
        "app/images/src/**/*", // Берём все изображения из папки источника
        "app/images/dest/", // Выгружаем оптимизированные изображения в папку назначения
        {compress_force: false, statistic: true, autoupdate: true}, false, // Настраиваем основные параметры
        {jpg: {engine: "mozjpeg", command: ["-quality", "75"]}}, // Сжимаем и оптимизируем изображеня
        {png: {engine: "pngquant", command: ["--quality=75-100", "-o"]}},
        {svg: {engine: "svgo", command: "--multipass"}},
        {gif: {engine: "gifsicle", command: ["--colors", "64", "--use-col=web"]}},
        function (err, completed) { // Обновляем страницу по завершению
            console.log(err)
            if (completed === true) {
                browserSync.reload()
            }
        }
    )
}

function cleanimg() {
    return src('app/images/dest/', {allowEmpty: true}).pipe(clean()) // Удаляем всё содержимое папки "app/images/dest/"
}

function buildcopy() {
    return src([
        'app/css/**/*.min.css',
        'app/js/**/*.min.js',
        'app/images/dest/**/*',
        'app/**/*.html',
    ], {base: 'app'}) // Параметр "base" сохраняет структуру проекта при копировании
        .pipe(dest('docs')) // Выгружаем в папку с финальной сборкой
}

function cleandocs() {
    return src('docs', {allowEmpty: true}).pipe(clean())
}

function startwatch() {
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/**/' + 'scss' + '/**/*', styles);
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/images/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.buildcopy = buildcopy;
exports.cleandocs = cleandocs;

exports.build = series(cleandocs, cleanimg, styles, scripts, images, buildcopy);
// exports.default = series(cleandocs, cleanimg, styles, scripts, images, browsersync, startwatch);
exports.default = parallel(styles, scripts, startwatch, browsersync);