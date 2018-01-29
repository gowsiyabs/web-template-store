'use strict';

angular
  .module('webTemplateStoreApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/templates.html',
        controller: 'TemplateCtrl',
        controllerAs: 'template'
      })
      .when('/templates/:templateId', {
        templateUrl: 'views/templates-details.html',
        controller: 'TemplateDetailsCtrl',
        controllerAs: 'templateDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
