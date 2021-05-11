"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signIn = void 0;

var _databasa = require("../configs/databasa.config");

var helpers = _interopRequireWildcard(require("../libs/helpers"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _conf = _interopRequireDefault(require("../configs/conf"));

var _logger = _interopRequireDefault(require("../libs/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var log = (0, _logger["default"])('auth.controller');
log.info('Init auth controller');

var signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, password, usr, validPassword, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log.info('Init signIn');
            _context.prev = 1;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 5;
            return _databasa.User.findOne({
              where: [{
                username: username
              }]
            });

          case 5:
            usr = _context.sent;
            log.info('body: ', req.body);

            if (!usr) {
              log.info('User not Found');
              res.status(404).json({
                message: 'User not Found'
              });
            }

            _context.next = 10;
            return helpers.machpwd(password, usr.password);

          case 10:
            validPassword = _context.sent;
            log.info('valid: ' + validPassword);

            if (validPassword) {
              token = _jsonwebtoken["default"].sign({
                id: usr.id_user
              }, _conf["default"].secret, {
                expiresIn: 86400
              }); //24HRS

              log.info('token: ' + token);
              res.status(200).json({
                auth: true,
                token: token
              });
            }

            res.status(404).json({
              message: 'Invalid Password'
            });
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            log.error('Trycatch signIn - auth Controller ' + _context.t0);
            res.status(401).json({
              message: 'Trycatch signIn - auth Controller',
              error: _context.t0
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));

  return function signIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var signUp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, username, password, active, usr, pwd, userNew, user, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log.info('Init signUp');
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, active = _req$body2.active;
            _context2.next = 4;
            return Users.findOne({
              where: [{
                username: username
              }]
            });

          case 4:
            usr = _context2.sent;

            if (usr) {
              res.status(404).json({
                message: 'Existing User'
              });
            }

            _context2.next = 8;
            return helpers.encryptpwd(password);

          case 8:
            pwd = _context2.sent;
            userNew = {
              username: username,
              password: pwd,
              active: active
            };
            console.log('userNew: ', userNew);
            _context2.next = 13;
            return Users.create(userNew);

          case 13:
            user = _context2.sent;
            token = _jsonwebtoken["default"].sign({
              id: user.id_user
            }, _conf["default"].SECRET, {
              expiredIn: 86400 //24HRS

            });
            res.status(200).json(token); //res.send('signup')

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signUp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signUp = signUp;