'use strict';

var getTemplateJson = function ($http) {
  $http.get('json/template.json').then(angular.bind(this, function (response) {
    this.jsonData = response.data;
  }));
};

angular.module('webTemplateStoreApp')
  .controller('TemplateCtrl', getTemplateJson);
