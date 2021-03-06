// Karma configuration
// Generated on 2017-09-06

module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,

    basePath: '../',

    frameworks: [
      'jasmine'
    ],

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/**/*.js'
    ],

    exclude: [
    ],

    port: 8080,

    browsers: [
      'PhantomJS'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    singleRun: false,

    colors: true,

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
