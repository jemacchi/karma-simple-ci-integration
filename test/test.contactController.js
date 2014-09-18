QUnit.config.autostart = false;

var injector = angular.injector(['ng', 'app']);
var contactService = injector.get('ContactService');

var init = {
    setup: function() {
      this.$scope = injector.get('$rootScope').$new();
      var $controller = injector.get('$controller');
      $controller('ContactController', {
          $scope: this.$scope,
          // Trying to inject the real service here...
          ContactService: contactService
      });
    }
};

QUnit.module('ContactService Test', init);

test('contactservice - service injected correctly, checking list function', function(){
  ok(angular.isFunction(contactService.list));
});

test('contactservice - default service list of element size', function() {
  equal(contactService.list().length, 1);
});