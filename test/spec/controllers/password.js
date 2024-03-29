'use strict';

describe('Controller: PasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('JFS_Admin'));

  var PasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasswordCtrl = $controller('PasswordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PasswordCtrl.awesomeThings.length).toBe(3);
  });
});
