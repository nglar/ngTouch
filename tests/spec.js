'use strict';


describe('ngTouch', function () {

	var element;

	beforeEach(function () {
		module('ngTouch');
	});

	it('should get called on touchstart', inject(function($rootScope, $compile) {
		element = $compile('<div ng-touchstart="started = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.started).toBeUndefined();
		element.triggerHandler('touchstart');
		expect($rootScope.started).toEqual(true);
	}));


	it('should get called on touchmove', inject(function($rootScope, $compile) {
		element = $compile('<div ng-touchmove= "moved = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.moved).toBeUndefined();
		element.triggerHandler('touchstart');
		element.triggerHandler('touchmove');
		element.triggerHandler('touchend');
		expect($rootScope.moved).toEqual(true);
	}));

	it('should get called on touchend', inject(function($rootScope, $compile) {
		element =  $compile('<div ng-touchend= "ended  = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.ended).toBeUndefined();
		element.triggerHandler('touchstart');
		element.triggerHandler('touchend');
		expect($rootScope.ended).toEqual(true);
	}));
});






// var myApp = angular.module('myApp',[]);

// myApp.controller('HelloWorldController', ['$scope', function($scope) {
// 	$scope.greeting = 'Hello World!';
// }]);


// describe('Hello World example', function() {

// 	beforeEach(module('myApp'));

// 	var HelloWorldController,
// 	scope;

// 	beforeEach(inject(function ($rootScope, $controller) {
// 		scope = $rootScope.$new();
// 		HelloWorldController = $controller('HelloWorldController', {
// 			$scope: scope
// 		});
// 	}));
// 	it('says hello world!', function () {
// 		expect(scope.greeting).toEqual("Hello World!");
// 	});

// });
