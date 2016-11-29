/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    var packages = {
        'rxjs': {
            defaultExtension: 'js'
        },

        'page-bootstrappers/home': {
            defaultExtension: 'js',
            main: 'home.js'
        },
        'page-bootstrappers/about': {
            defaultExtension: 'js',
            main: 'about.js'
        }
    };

    System.defaultJSExtensions = true;

    System.config({
        baseURL: '/',
        paths: {
            // paths serve as alias
            'npm:': 'assets/libs/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'page-bootstrappers': 'assets/js/page-bootstrappers',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'lodash': 'npm:lodash/lodash.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: packages
    });
})(this);
