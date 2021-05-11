"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.machpwd = exports.encryptpwd = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var encryptpwd = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(password) {
    var salt, hash;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('encrypt pass: ', password);
            _context.next = 3;
            return _bcryptjs["default"].genSalt(10);

          case 3:
            salt = _context.sent;
            _context.next = 6;
            return _bcryptjs["default"].hash(password, salt);

          case 6:
            hash = _context.sent;
            console.log('hash: ', hash);
            return _context.abrupt("return", hash);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function encryptpwd(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.encryptpwd = encryptpwd;

var machpwd = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password, savePassword) {
    var hash;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _bcryptjs["default"].compare(password, savePassword);

          case 3:
            hash = _context2.sent;
            return _context2.abrupt("return", hash);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function machpwd(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.machpwd = machpwd;