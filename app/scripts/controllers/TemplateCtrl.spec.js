describe('TemplateCtrl testing', function () {

  var scope, $controller;

  beforeEach(function () {
    module('webTemplateStoreApp');
  });
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('controller tests', function () {
    it('check if controller is defines', function () {
      var scope;
      var templateCtrl = $controller('TemplateCtrl', {scope: $scope});
      expect(templateCtrl).toBeDefined();
    });
  });
})
