'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var logger = exports.logger = function logger(_ref) {
  var _console;

  for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    options[_key - 1] = arguments[_key];
  }

  var _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === undefined ? '???:' : _ref$prefix,
      callback = _ref.callback;

  console.log(prefix);
  callback();
  (_console = console).log.apply(_console, options);
};