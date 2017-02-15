> __No longer maintained, would you be our new maintainer? Let us know at [mark@ulties.com](mailto:mark@ulties.com).__

![nglar - ngTouch](https://raw.githubusercontent.com/nglar/ngTouch/master/resources/logo.png)

A angular module to add directives for touch devices.

[![Build Status](https://travis-ci.org/nglar/ngTouch.svg?branch=master)](https://travis-ci.org/nglar/ngTouch)
[![StyleCI Status](https://styleci.io/repos/30239827/shield?style=flat)](https://styleci.io/repos/30239827)
[![Dependencies](https://img.shields.io/david/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch)
[![Dev Dependencies](https://img.shields.io/david/dev/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch)
[![License](https://img.shields.io/bower/l/ngtouch.svg)](https://github.com/nglar/ngTouch)

* [Info](#info)
* [Installing/Loading](#installingloading)
    * [Install using Bower](#install-using-bower)
    * [Install using NPM](#install-using-npm)
    * [Loading](#loading)
* [Usage](#usage)
    * [ng-touchstart](#ng-touchstart)
    * [ng-touchend](#ng-touchend)
    * [ng-touchmove](#ng-touchmove)
    * [ng-tap](#ng-tap)
* [Links](#links)
* [Tests](#tests)
* [Contributing](#contributing)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#license)

## Info

Version: 1.0.2    
Author: Mark Topper [[Facebook](https://facebook.com/marktopper)] [[Github](https://github.com/marktopper)] [[Twitter](https://twitter.com/webman.io)]    
Website: [ulties.com](https://ulties.com)    
Email: [mark@ulties.com](mailto:mark@ulties.com)

## Installing/Loading

### Install using Bower

Install using bower:
```
bower install ngtouch --save
```

### Install using NPM

Install using npm:
```
npm install ngtouch --save
```

[Go to NPM page for this package.](https://www.npmjs.com/package/ngtouch)

### Loading

Load the file to you HTML header:
```
<script type="text/javascript" src="path/to/components/ngtouch/build/ngTouch.min.js"></script>
```

## Usage

You must include the ngTouch dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouch"]);
````
Then in your HTML you can use:
````
<div ng-touchmove="someFunction()" ng-touchstart="someFunction()" ng-touchend="someFunction()"></div>
````

#### ng-touchstart

Once a touch device start touching, this event will be called.

Here is a usage example:

> yourController.js
```
$scope.onTouchstart = function() {
   console.log($scope.event); // the event object
   console.log('touchstart event called');
}
```

> yourView.html
```
<div ng-touchstart="onTouchstart()"></div>
```

[__Get ngTouchstart standalone.__](https://github.com/nglar/ngTouchstart)

#### ng-touchend

Once a touch device end touching, this event will be called.

Here is a usage example:

> yourController.js
```
$scope.onTouchend = function() {
   console.log($scope.event); // the event object
   console.log('touchend event called');
}
```

> yourView.html
```
<div ng-touchend="onTouchend()"></div>
```

[__Get ngTouchend standalone.__](https://github.com/nglar/ngTouchend)

#### ng-touchmove

Whenever a touch device is touched and moving.

Here is a usage example:

> yourController.js
```
$scope.onTouchmove = function() {
   console.log($scope.event); // the event object
   console.log('touchmove event called');
}
```

> yourView.html
```
<div ng-touchmove="onTouchmove()"></div>
```

[__Get ngTouchmove standalone.__](https://github.com/nglar/ngTouchmove)

#### ng-tap

Whenever a touch device is tapped without moved around.

Here is a usage example:

> yourController.js
```
$scope.onTap = function() {
   console.log($scope.event); // the event object
   console.log('tap event called');
}
```

> yourView.html
```
<div ng-tap="onTap()"></div>
```

[__Get ngTap standalone.__](https://github.com/nglar/ngTap)

## Links

The following is a list of libraries that extend ngTouch:

 * None yet

*Contact me at [mark@ulties.com](mailto:mark@ulties.com) to get yours added.*

The following is a list of libraries that requires by ngTouch:

 * [Angular](https://github.com/angular/angular.js):
HTML enhanced for web apps

The following is a list of alternatives for ngTouch:
* [ngTouchmove](https://github.com/nglar/ngTouchmove):
A angular module to add directive `ng-touchmove`.

* [ngTouchstart](https://github.com/nglar/ngTouchstart):
A angular module to add directive `ng-touchstart`.

* [ngTouchend](https://github.com/nglar/ngTouchend):
A angular module to add directive `ng-touchend`.

* [ngTap](https://github.com/nglar/ngTap):
A angular module to add directive `ng-tap`.

## Tests

From the project directory, tests can be ran using `gulp test`

## Contributing

Thank you for considering contributing! The contribution guide can be found in the [contributions.md](https://github.com/nglar/ngTouch/blob/master/contributions.md).

## Security Vulnerabilities

If you discover a security vulnerability within ngTouch, please send an e-mail to Mark Topper at [mark@ulties.com](mailto:mark@ulties.com). All security vulnerabilities will be promptly addressed.

## License

Released under the MIT License - see [`license.txt`](https://github.com/nglar/ngTouch/blob/master/license) for details.
