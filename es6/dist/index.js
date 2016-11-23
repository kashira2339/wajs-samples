'use strict';

var _Human = require('./Human');

var _Human2 = _interopRequireDefault(_Human);

var _PerfectHuman = require('./PerfectHuman');

var _PerfectHuman2 = _interopRequireDefault(_PerfectHuman);

var _Animal = require('./Animal');

var _logger = require('./logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OWNER_NAME = 'kashira2339';

// OWNER_NAME = 'new name';
// SyntaxError: src/index.js: "OWNER_NAME" is read-only while parsing file: src/index.js

if (!!_Human2.default) {

  (0, _logger.logger)({
    prefix: 'Human:',
    callback: function callback() {
      new _Human2.default(OWNER_NAME).say();
    }
  });

  (0, _logger.logger)({
    callback: function callback() {
      new _Human2.default('...').say();
    }
  });

  (0, _logger.logger)({
    prefix: 'Dog:',
    callback: function callback() {
      new _Animal.Dog().say();
    }
  });

  (0, _logger.logger)({
    prefix: 'Cat:',
    callback: function callback() {
      new _Animal.Cat().say();
    }
  });

  var phop = ['Nakata!', 'Nakata!', 'Nakata!', 'Nakata!'];

  _logger.logger.apply(undefined, [{
    prefix: 'PerfectHuman:',
    callback: function callback() {
      new _PerfectHuman2.default().say();
    }
  }].concat(phop));
}

// human.say();
//ReferenceError: hello is not defined