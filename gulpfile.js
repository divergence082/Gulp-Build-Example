

var gulp = require('gulp');
var del = require('del');
var include = require('gulp-file-include');
var externs = require('gulp-externs');
var gjslint = require('gulp-gjslint');
var compiler = require('gulp-closure-compiler');


/**
 * List os sources or mask for them (lib/*). Simply globs.
 */
var src = [
  'lib/gb/gb.js',
  'lib/gb/enum.js',
  'lib/gb/i-class.js',
  'lib/gb/class.js',
  'lib/gb/inherit-class.js',
  'lib/gb/ex/ex.js'
];


/**
 * Checks codestyle with Closule Linter
 */
gulp.task('lint', function() {
  gulp.src(src)
      .pipe(gjslint({
        flags: ['--strict', '--custom_jsdoc_tags namespace, event']
      }))
      .pipe(gjslint.reporter('console'))
      .pipe(gjslint.reporter('fail'));
});


/**
 * Checks code with Closure Compiler
 */
gulp.task('check', function() {
  gulp.src(src)
      .pipe(compiler({
        compilerPath: '/usr/lib/node_modules/compiler.jar',
        fileName: 'index.js',
        compilerFlags: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT',
          externs: [
            'node_modules/gulp-externs/externs/node/v0.10.25/module.js',
            'node_modules/gulp-externs/externs/node/v0.10.25/util.js'
          ],
          jscomp_error: ['checkTypes', 'suspiciousCode',
            'ambiguousFunctionDecl', 'checkDebuggerStatement', 'checkRegExp',
            'checkVars', 'deprecated', 'externsValidation',
            'nonStandardJsDocs', 'uselessCode'],
          jscomp_warning: ['duplicate'],
          warning_level: 'VERBOSE'
        }
      }));
});


/**
 * Removes all built data.
 */
gulp.task('clean', function() {
  del('bin');
  del('externs');
});


/**
 * Concatenates sources to bin/index.js,
 * adds header and footer and
 * grants read + write + execute permissions
 */
gulp.task('build', ['clean'], function() {
  gulp.src('lib/index.js')
      .pipe(include({
        prefix: '//',
        basepath: 'lib'
      }))
      .pipe(gulp.dest('bin'));
});


/**
 * Extracts externs for bin/index.js.
 * Can be used in --externs flag for Closure Compiler
 * in modules using this one.
 * Executes only after `build`.
 */
gulp.task('externs', ['build'], function() {
  gulp.src('bin/index.js')
      .pipe(externs.extract())
      .pipe(gulp.dest('externs'));
});


/**
 * Executes default tasks: lint, check, clean->build->externs.
 *    > gulp
 */
gulp.task('default', function() {
  gulp.start('lint', 'check', 'externs');
});
