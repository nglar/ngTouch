
var myApp = angular.module('myApp',[]);

myApp.controller('HelloWorldController', ['$scope', function($scope) {
	$scope.greeting = 'Hello World!';
}]);


describe('Hello World example', function() {

	beforeEach(module('myApp'));

	var HelloWorldController,
	scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		HelloWorldController = $controller('HelloWorldController', {
			$scope: scope
		});
	}));
	it('says hello world!', function () {
		expect(scope.greeting).toEqual("Hello world!");
	});

});