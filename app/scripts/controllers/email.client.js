'use strict';

/**
 * @ngdoc function
 * @name JFS_Admin.controller:EmailClientCtrl
 * @description
 * # EmailClientCtrl
 * Controller of the JFS_Admin
 */
angular.module('JFS_Admin')
  .controller('EmailClientCtrl', function ($scope, Email, $sce, $interpolate, $parse) {
    Email.getTemplates();
    $scope.Email = Email.data;
    $scope.templateFilter = {Type:'Default'};
    $scope.Recipient = {FNAME:'Cody'};
    $scope.variables = {FNAME:'John'};
    $scope.CurrentEmail = {Template:''};
    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml($interpolate(html_code.replace('\\',''))($scope.variables));

    };
    $scope.setCurrent = function(email){
      $scope.Email.Templates= _.map($scope.Email.Templates, function(x) {
        x.selected = false;
        return x;
      });
      email.selected = true;
      _.forEach(email.Variables, function(variable){
                    if(!angular.isDefined($scope.variables[variable.name])){
                        $scope.variables[variable.name]='';
                    }
                    if(angular.isDefined(variable.default)){
                        $scope.variables[variable.name] = $scope.$eval(variable.default);
                    }
                  });
      $scope.CurrentEmail = email;
    };
    $scope.setFavorite = function(email){
      var index = _.findIndex(Email.data.Templates, {
        'Template_ID': email.Template_ID
      });
      email.favorite = !email.favorite;
      Email.data.Templates[index].favorite = email.favorite;
    };
  });