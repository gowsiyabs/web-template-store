'use strict';

var getTemplateDetails = function ($scope, $http, $routeParams, $filter) {
  try{
    var templateId = $routeParams.templateId;
    $http.get('json\\template.json').then(angular.bind(this, function (response) {
      $scope.template = $filter('filter')(response.data, function (d) {
        return d.id == templateId;
      })[0];
      this.mainImage = $scope.template.images[0].name;
    }));
  }
  catch(err){
    console.log("err: ",err.message);
  }

};

angular.module('webTemplateStoreApp')
  .controller('TemplateDetailsCtrl', getTemplateDetails);
