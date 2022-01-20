/**
 * PLUNKER VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
 (function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      'main':       'app/main',

      // angular bundles
      '@angular/core': 'npm:@angular/core@2.2.4/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@2.2.4/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@2.2.4/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@2.2.4/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.2.4/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular@2.2.4/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router@2.2.4/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms@2.2.4/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs@5',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      // typescript for compilation in the browser
      'ts':             'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript':     'npm:typescript@2.2.1/lib/typescript.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './app/main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
          defaultExtension: 'js'
      }
    }
  });
})(this);