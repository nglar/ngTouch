"use strict";

angular.module("ngTouch", [])
.directive("ngTouchmove", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        event.preventDefault();
        $element.bind('touchmove', onTouchMove);
        $element.bind('touchend', onTouchEnd);
      };
      
      function onTouchMove(event) {
          var method = '$scope.' + $element.context.getAttribute('ng-touchmove');
          $scope.$apply(function () {
              eval(method);
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
.directive("ngTouchstart", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        var method = '$scope.' + $element.context.getAttribute('ng-touchstart');
        $scope.$apply(function () {
          eval(method);
        });
      };
    }
  };
})
.directive("ngTouchend", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchend', onTouchEnd);
      
      function onTouchEnd(event) {
        var method = '$scope.' + $element.context.getAttribute('ng-touchend');
        $scope.$apply(function () {
          eval(method);
        });
      };
    }
  };
});
