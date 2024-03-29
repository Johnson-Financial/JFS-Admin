'use strict';

describe('Controller: ImageCtrl', function () {

  // load the controller's module
  beforeEach(module('JFS_Admin'));

  var ImageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImageCtrl = $controller('ImageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImageCtrl.awesomeThings.length).toBe(3);
  });
});
