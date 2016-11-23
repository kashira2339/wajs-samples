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