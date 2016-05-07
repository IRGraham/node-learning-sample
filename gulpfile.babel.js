import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import livereactload from 'livereactload';
import watchify from 'watchify';
import System from 'systemjs';
System.transpiler = 'babel';

const tasks = ['html', 'js'];

gulp.task('default', tasks);

gulp.task('html', () => {
    gulp.src('./html/*')
        .pipe(gulp.dest(`${__dirname}/static/html/`));
});

const isProd = process.env.NODE_ENV === 'production';

const bundler = browserify({
    entries: './index.js',
    transform: [
        [babelify, {}]
    ],
    debug: !isProd,
    cache: {},
    packageCache: {},
    fullPaths: !isProd,
    ignoreMissing: true // for some reason config breaks browserify if this is false
});

const bundle = (bundler) => bundler
    .bundle()
    .on('error', (err) => {
        console.log(err.message);
        process.exit(1);
    })
    .pipe(source(`${__dirname}/static/index.js`))
    .pipe(buffer())
    .pipe(gulpif(isProd, uglify()))
    .pipe(gulp.dest('.'));

gulp.task('js', () => bundle(bundler));

gulp.task('watchjs', () => {
    const watcher = watchify(bundler.plugin(livereactload));
    const rebundle = bundle.bind(watcher, watcher);

    rebundle();
    rebundle(); // without this livereactload doesn't work for some reason

    return watcher
        .on('update', rebundle)
        .on('log', gulpUtil.log);
});

gulp.task('watchhtml', ['html'], () => gulp.watch('html/*', ['html']));

gulp.task('watch', ['watchhtml', 'watchjs']);

gulp.task('lint', () => Promise.all(['gulp-eslint'].map((mod) => System._nodeRequire(mod)))
    .then(([eslint]) => gulp.src(['js/**/*js', 'stores/**/*.js', 'actions/**/*', 'helpers/**/*.js', './gulpfile.babel.js', 'components/**/*.js', './index.js', './dispatcher.js', 'api/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError()))
    .catch((reason) => console.error(`Error running test: ${reason.stack}. Are dev dependencies installed?`))
);

gulp.task('test', () => {
    Promise.all(['gulp-istanbul', 'babel-istanbul', 'gulp-jasmine', 'jasmine-spec-reporter'].map((mod) => System._nodeRequire(mod)))
        .then(([istanbul, babelIstanbul, jasmine, SpecReporter]) => gulp.src(['component/**/*.js', 'js/**/*.js', 'lib/**/*.js'])
            .pipe(istanbul({
                includeUntested: true,
                instrumenter: babelIstanbul.Instrumenter
            }))
            .pipe(istanbul.hookRequire())
            .on('finish', () =>
                gulp.src('test/**/*spec.js')
                    .pipe(jasmine({
                        reporter: new SpecReporter({
                            displayStacktrace: 'all',
                            displayPendingSpec: true,
                            displaySpecDuration: true
                        })
                    }))
                    .on('error', (err) => {
                        console.log(err.message);
                        process.exit(1);
                    })
                    .pipe(istanbul.writeReports({
                        dir: './metrics/coverage',
                        reporters: ['lcov']
                    }))
            )
        )
        .catch((reason) => console.error(`Error running test: ${reason.stack}. Are dev dependencies installed?`));
});
