'use strict';

/**
 * @ngdoc service
 * @name JFS_Admin.Email
 * @description
 * # Email
 * Service in the JFS_Admin.
 */
angular.module('JFS_Admin')
  .factory('Email', function($rootScope, $http, $q, Functions, User, ENV) {
    var Email = {
      data: {}
    };
    Email.getTemplates = function() {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: ENV.API_v2+'Messages/Email/Templates/',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: ENV.APP_ID,
          client_secret: ENV.APP_Secret,
        },
      }).then(function(result) {
        deferred.resolve(result.data.data);
        Email.data.Templates = result.data.data;
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.getMailingListPeople = function(ListID,Update) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: ENV.API + 'Email/Lists/People',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',
          ListID: ListID

        },
      }).then(function(data) {
        deferred.resolve(data.data);
        if(Update===true){
          Email.data.currentListPeople = data.data;
        }
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.getMailingLists = function(ListID,Update) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: ENV.API + 'Email/Lists/',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',
          ListID: ListID

        },
      }).then(function(data) {
        deferred.resolve(data.data);
        Email.data.MailingLists = data.data;
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.addPerson = function(person) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: ENV.API + 'Email/Lists/People',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:person
      }).then(function(data) {
        deferred.resolve(data.data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.deletePerson = function(person) {
      var deferred = $q.defer();
      $http({
        method: 'DELETE',
        url: ENV.API + 'Email/Lists/People/'+person.EmailPeople_ID,
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        }
      }).then(function(data) {
        deferred.resolve(data.data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.editPerson = function(person){
      var deferred = $q.defer();
      $http({
        method: 'PATCH',
        url: ENV.API + 'Email/Lists/People/'+person.EmailPeople_ID,
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:person
      }).then(function(data) {
        deferred.resolve(data.data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.getPerson =function(id){
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: ENV.API + 'Email/Lists/People/'+id,
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass'
        },
      }).then(function(data) {
        deferred.resolve(data.data);
        Email.data.currentPerson = data.data;
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.personAddList = function(list) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: ENV.API + 'Email/Lists/People/List',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:list
      }).then(function(data) {
        deferred.resolve(data.data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.personDeleteList = function(list) {
      var deferred = $q.defer();
      $http({
        method: 'patch',
        url: ENV.API + 'Email/Lists/People/List/Delete',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:list
      }).then(function(data) {
        //deferred.resolve(data.data);
      }, function(error) {
        //deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.SendContactCard = function(email){
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: ENV.API + 'Email/Send/ContactCard',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:email
      }).then(function(data) {
        deferred.resolve(data.data);
        Functions.Toast('success','Contact Info Sent','  To: '+email.Email.FNAME ,{iconClass: 'jfsToast_success',extendedTimeOut: 9000000});

      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.PreviewTemplate = function(template,data) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: ENV.API_v2 + 'Messages/Email/PreviewTemplate/',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:{
          Template:template,
          EmailData:data
        }
      }).then(function(result) {
        deferred.resolve(result.data.data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };
    Email.Send = function(email,subject,template,email_data,recruit_id) {
      Functions.toggleLoading();
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: ENV.API_v2 + 'Messages/Email/Send/CustomTemplate/',
        params: {
          'access_token': $rootScope.currentUser.Token.access_token,
          client_id: 'testclient',
          client_secret: 'testpass',

        },
        data:{
          Email:email,
          Subject:subject,
          Template:template,
          EmailData:email_data,
          RecruitID:recruit_id
        }
      }).then(function(result) {
        Functions.toggleLoading();
        Functions.Toast('success','Email Sent');
        deferred.resolve(result.data.data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };

    //Email.getMailingList();
    return Email;
  });
