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