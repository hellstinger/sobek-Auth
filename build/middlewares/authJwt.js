"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdministrator = exports.isModerator = exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _databasa = require("../configs/databasa.config");

var _conf = _interopRequireDefault(require("../configs/conf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('header: ', req.headers);
            token = req.headers["x-access-token"];
            console.log('token: ', token);

            if (token) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "No Token provided"
            }));

          case 6:
            //Decoded Token
            decoded = _jsonwebtoken["default"].verify(token, _conf["default"].secret);
            console.log('decoded: ', decoded);
            req.userId = decoded.id;
            _context.next = 11;
            return _databasa.User.findOne({
              where: {
                id_user: req.userId
              }
            });

          case 11:
            user = _context.sent;

            if (user) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "No User found"
            }));

          case 14:
            next();
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(401).json({
              message: "Unauthorized"
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isModerator = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isModerator(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isModerator = isModerator;

var isAdministrator = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isAdministrator(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdministrator = isAdministrator;