(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cat = exports.Dog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Hello3 = require('./Hello');

var _Hello4 = _interopRequireDefault(_Hello3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dog = exports.Dog = function (_Hello) {
  _inherits(Dog, _Hello);

  function Dog() {
    _classCallCheck(this, Dog);

    return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).apply(this, arguments));
  }

  _createClass(Dog, [{
    key: 'say',
    value: function say() {
      _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), 'say', this).call(this);
      console.log('bow!');
    }
  }]);

  return Dog;
}(_Hello4.default);

var Cat = exports.Cat = function (_Hello2) {
  _inherits(Cat, _Hello2);

  function Cat() {
    _classCallCheck(this, Cat);

    return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).apply(this, arguments));
  }

  _createClass(Cat, [{
    key: 'say',
    value: function say() {
      console.log('meow.');
    }
  }]);

  return Cat;
}(_Hello4.default);

},{"./Hello":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hello = function () {
  function Hello() {
    _classCallCheck(this, Hello);

    this.whoami = '...?';
  }

  _createClass(Hello, [{
    key: 'say',
    value: function say() {
      console.log('I\'m ' + this.whoami);
    }
  }]);

  return Hello;
}();

exports.default = Hello;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Hello2 = require('./Hello');

var _Hello3 = _interopRequireDefault(_Hello2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _name = Symbol('name');

var Human = function (_Hello) {
  _inherits(Human, _Hello);

  function Human(name) {
    _classCallCheck(this, Human);

    var _this = _possibleConstructorReturn(this, (Human.__proto__ || Object.getPrototypeOf(Human)).call(this));

    _this[_name] = name;
    return _this;
  }

  _createClass(Human, [{
    key: 'say',
    value: function say() {
      console.log('Hello, ' + this[_name] + '!');
    }
  }]);

  return Human;
}(_Hello3.default);

exports.default = Human;

},{"./Hello":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hello2 = require('./Hello');

var _Hello3 = _interopRequireDefault(_Hello2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PerfectHuman = function (_Hello) {
  _inherits(PerfectHuman, _Hello);

  function PerfectHuman() {
    _classCallCheck(this, PerfectHuman);

    var _this = _possibleConstructorReturn(this, (PerfectHuman.__proto__ || Object.getPrototypeOf(PerfectHuman)).call(this));

    _this.whoami = 'a perfect human.';
    return _this;
  }

  return PerfectHuman;
}(_Hello3.default);

exports.default = PerfectHuman;

},{"./Hello":2}],5:[function(require,module,exports){
'use strict';

var _Human = require('./Human');

var _Human2 = _interopRequireDefault(_Human);

var _PerfectHuman = require('./PerfectHuman');

var _PerfectHuman2 = _interopRequireDefault(_PerfectHuman);

var _Animal = require('./Animal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OWNER_NAME = 'kashira2339';

// OWNER_NAME = 'new name';
// SyntaxError: src/index.js: "OWNER_NAME" is read-only while parsing file: src/index.js

if (_Human2.default) {

  logger({
    prefix: 'Human:',
    callback: function callback() {
      new _Human2.default(OWNER_NAME).say();
    }
  });

  logger({
    callback: function callback() {
      new _Human2.default('...').say();
    }
  });

  logger({
    prefix: 'Dog:',
    callback: function callback() {
      new _Animal.Dog().say();
    }
  });

  logger({
    prefix: 'Cat:',
    callback: function callback() {
      new _Animal.Cat().say();
    }
  });

  logger({
    prefix: 'PerfectHuman:',
    callback: function callback() {
      new _PerfectHuman2.default().say();
    }
  }, 'Nakata!', 'Nakata!', 'Nakata!', 'Nakata!');
}

// human.say();
//ReferenceError: hello is not defined

function logger(_ref) {
  var _console;

  var _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === undefined ? '???:' : _ref$prefix,
      callback = _ref.callback;

  console.log(prefix);
  callback();

  for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    options[_key - 1] = arguments[_key];
  }

  (_console = console).log.apply(_console, options.concat(['\n']));
}

},{"./Animal":1,"./Human":3,"./PerfectHuman":4}]},{},[5]);
