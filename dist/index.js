'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _testfile = require('./testfile');

Object.defineProperty(exports, 'testFunction', {
  enumerable: true,
  get: function get() {
    return _testfile.testFunction;
  }
});
var get = function get(str) {
  console.log(str || 'Rainbow');
};
exports.get = get;