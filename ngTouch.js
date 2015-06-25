"use strict";

angular.module("ngTouch", [])
.directive("ngTouchmove", function ($parse) {
  return {
    controller: function ($scope, $element, $attrs) {
      var eventHandler = $parse($attrs.ngTouchmove);
      $element.bind('touchstart', onTouchStart);

      function onTouchStart(event) {
        event.preventDefault();
        $element.bind('touchmove', onTouchMove);
        $element.bind('touchend', onTouchEnd);
      };

      function onTouchMove(event) {
          $scope.$apply(function () {
              eventHandler($scope, {$event: event});
          });
      };

      function onTouchEnd(event) {
        event.preventDefault();
        $element.unbind('touchmove', onTouchMove);
        $element.unbind('touchend', onTouchEnd);
      };
    }
  };
})
.directive("ngTouchstart", function ($parse) {
  return {
    controller: function ($scope, $element, $attrs) {

      var eventHandler = $parse($attrs.ngTouchstart);
      $element.bind('touchstart', onTouchStart);

      function onTouchStart(event) {
        $scope.$apply(function () {
          eventHandler($scope, {$event: event});
        });
      };
    }
  };
})
.directive("ngTouchend", function ($parse) {
  return {
    controller: function ($scope, $element, $attrs) {

      var eventHandler = $parse($attrs.ngTouchend);
      $element.bind('touchend', onTouchEnd);

      function onTouchEnd(event) {

        $scope.$apply(function () {
          eventHandler($scope, {$event: event});
        });
      };
    }
  };
});
