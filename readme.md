[![nglar - ngTouch](http://static-content.webman.io/github.com/nglar/ngTouch.png)](https://www.webman.io/nglar/ngTouch)

A angular module to add directives for touch devices.

[![Build Status](https://travis-ci.org/nglar/ngTouch.svg?branch=master)](https://travis-ci.org/nglar/ngTouch)
[![StyleCI Status](https://styleci.io/repos/30239827/shield?style=flat)](https://styleci.io/repos/30239827)
[![Total Downloads](https://img.shields.io/github/downloads/nglar/ngTouch/latest/total.svg)](https://github.com/nglar/ngTouch)
[![Dependencies](https://img.shields.io/david/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch)
[![Dev Dependencies](https://img.shields.io/david/dev/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch)
[![License](https://img.shields.io/bower/l/ngtouch.svg)](https://github.com/nglar/ngTouch)
[![Issues](https://img.shields.io/github/issues/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch/issues)
[![Forks](https://img.shields.io/github/forks/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch/network)
[![GitHub stars](https://img.shields.io/github/stars/nglar/ngTouch.svg)](https://github.com/nglar/ngTouch/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/nglar/ngTouch.svg?style=social?style=flat)](https://twitter.com/intent/tweet?text=Check+out+this+awesome+Angular+module!+Adds+directives+for+touch+events+for+touch+devices.+%23angularjs+%23jsdev+https%3A%2F%2Fgithub.com%2Fnglar%2FngTouch)
[![Gratipay donate button](https://img.shields.io/gratipay/marktopper.svg)](https://www.gratipay.com/marktopper/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/profile/marktopper "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LGMRSYNWLWBAU "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/checkouts/c5a01e3bb552fbfa301b696371d8df48 "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/3CVLUT2YS911W "Buy an item on our wishlist for us")

* [Info](#info)
* [Installing/Loading](#installingloading)
* [Usage](#usage)
    * [ng-touchstart](#ng-touchstart)
    * [ng-touchend](#ng-touchend)
    * [ng-touchmove](#ng-touchmove)
* [Links](#links)
* [Tests](#tests)
* [Official Documentation](#official-documentation)
* [Contributing](#contributing)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#license)

## Info

Version: 1.0.1    
Author: Mark Topper [[Facebook](https://facebook.com/marktopper)] [[Github](https://github.com/marktopper)] [[Twitter](https://twitter.com/webman.io)]    
Website: [www.webman.io](https://www.webman.io)    
Email: [mark@webman.io](mailto:mark@webman.io)

## Installing/Loading

Install using bower:
```
bower install ngtouch --save
```

Load the file to you HTML header:
```
<script type="text/javascript" src="path/to/bower_components/ngtouch/build/ngTouch.min.js"></script>
```

## Usage

You must include the ngTouch dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouch"]);
````
Then in your HTML you can use:
````
<div ng-touchmove="someFunction($event)" ng-touchstart="someFunction($event)" ng-touchend="someFunction($event)"></div>
````

#### ng-touchstart

Once a touch device start touching, this event will be called.

Here is a usage example:

> yourController.js
```
$scope.onTouchstart = function($event) {
   console.log('touchstart event called');
}
```

> yourView.html
```
<div ng-touchstart="onTouchstart($event)"></div>
```

[__Get ngTouchstart standalone.__](https://github.com/nglar/ngTouchstart)

#### ng-touchend

Once a touch device end touching, this event will be called.

Here is a usage example:

> yourController.js
```
$scope.onTouchend = function($event) {
   console.log('touchend event called');
}
```

> yourView.html
```
<div ng-touchend="onTouchend($event)"></div>
```

[__Get ngTouchend standalone.__](https://github.com/nglar/ngTouchend)

#### ng-touchmove

Whenever a touch device is touched and moving.

Here is a usage example:

> yourController.js
```
$scope.onTouchmove = function($event) {
   console.log('touchmove event called');
}
```

> yourView.html
```
<div ng-touchmove="onTouchmove($event)"></div>
```

[__Get ngTouchmove standalone.__](https://github.com/nglar/ngTouchmove)

## Links

The following is a list of libraries that extend ngTouch:

 * None yet

*Contact me at [mark@webman.io](mailto:mark@webman.io) to get yours added.*

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

## Tests

From the project directory, tests can be ran using `gulp test`

## Official Documentation

Documentation for this library can be found on the [website](https://www.webman.io/nglar/ngtouch).

## Contributing

Thank you for considering contributing! The contribution guide can be found in the [contributions.md](https://github.com/nglar/ngTouch/blob/master/contributions.md).

## Security Vulnerabilities

If you discover a security vulnerability within ngTouch, please send an e-mail to Mark Topper at [mark@webman.io](mailto:mark@webman.io). All security vulnerabilities will be promptly addressed.

## License

Released under the MIT License - see [`license.txt`](https://github.com/nglar/ngTouch/blob/master/license) for details.
