var gulp = require('gulp');
var clean = require('gulp-clean');

var destLibsPath = './assets/libs/';

// Delete the dist directory
gulp.task('cleanLibs', function () {
    return gulp.src(destLibsPath)
        .pipe(clean());
});

gulp.task("angularScripts", () => {
    gulp.src([
            '@angular/core/bundles/core.umd.js',
            '@angular/common/bundles/common.umd.js',
            '@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http/bundles/http.umd.js',
            '@angular/router/bundles/router.umd.js',
            '@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/upgrade/bundles/upgrade-static.umd.js',
            'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'core-js/client/shim.min.js',
            'zone.js/dist/zone.js',
            'reflect-metadata/Reflect.js',
            'systemjs/dist/system.src.js',
            'rxjs/**/*.js',
            'lodash/lodash.js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest(destLibsPath));
});

gulp.task('default', ['angularScripts']);
