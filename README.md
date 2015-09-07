# ngTouch
A angular module to add directives for touch devices.

# How to use it
You must include the ngTouch dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouch"]);
````
Then in your HTML you can use:
````
<div ng-touchmove="someFunction($event)" ng-touchstart="someFunction($event)" ng-touchend="someFunction($event)"></div>
````

# Standalones
You can get the standalones dependencies used in this module:
- [ngTouchmove](https://github.com/nglar/ngTouchmove)
- [ngTouchstart](https://github.com/nglar/ngTouchstart)
- [ngTouchend](https://github.com/nglar/ngTouchend)


# Testing

```
gulp test
```
