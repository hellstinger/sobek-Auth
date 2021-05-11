"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyId = exports.getUsers = void 0;

var _databasa = require("../configs/databasa.config");

var _logger = _interopRequireDefault(require("../libs/logger"));

var helpers = _interopRequireWildcard(require("../libs/helpers"));

var _ApiError = _interopRequireDefault(require("../middlewares/errors/ApiError"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var log = (0, _logger["default"])('user.controller');
log.info('Init user Controller');

var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _databasa.User.findAll();

          case 3:
            users = _context.sent;

            if (!users) {
              next(_ApiError["default"].badRequest('Dont find users')); //res.status(401).json({message: 'Dont find users '})
            }

            res.status(200).json(users);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            log.error({
              message: 'TryCatch Error - find all user - Controller',
              e: _context.t0
            });
            next({});

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getUsers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserbyId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log('id: ', req.params.id_user); //Find user by Id

            _context2.next = 4;
            return _databasa.User.findOne({
              where: {
                id_user: req.params.id_user
              }
            });

          case 4:
            user = _context2.sent;

            if (!user) {
              res.status(401).json({
                message: 'Problems to finding user'
              });
            }

            res.status(200).json(user.dataValues);
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            log.error({
              message: 'TryCatch Error - find user by Id - Controller',
              error: _context2.t0
            });
            res.status(401).json({
              message: 'TryCatch Error - find user by Id - Controller',
              error: _context2.t0
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getUserbyId(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserbyId = getUserbyId;

var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(req.body.password != null)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return helpers.encryptpwd(req.body.password);

          case 4:
            _context3.t0 = _context3.sent;
            _context3.next = 8;
            break;

          case 7:
            _context3.t0 = res.status(401).json({
              message: ''
            });

          case 8:
            req.body.password = _context3.t0;
            _context3.next = 11;
            return _databasa.User.create(req.body);

          case 11:
            response = _context3.sent;

            if (response) {
              res.status(200).json(response);
            }

            res.status(401).json({
              message: 'Respuesta null',
              response: response
            });
            _context3.next = 20;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t1 = _context3["catch"](0);
            log.error({
              message: 'TryCatch Error - create user - Controller',
              e: _context3.t1
            });
            res.status(401).json({
              message: 'TryCatch Error - create user - Controller',
              e: _context3.t1
            });

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function createUser(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var user, update;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            log.info('Init update user - Controller');
            log.info('params: ', req.params.id_user);
            _context4.prev = 2;
            _context4.next = 5;
            return _databasa.User.findOne({
              where: {
                id_user: req.params.id_user
              }
            });

          case 5:
            user = _context4.sent;
            log.info('user: ', user);

            if (!user) {
              res.status(401).json({
                message: 'Usuario no encontrado'
              });
            }

            _context4.next = 10;
            return _databasa.User.update({
              where: {
                id_user: req.params.id_user
              }
            });

          case 10:
            update = _context4.sent;

            if (!update) {
              res.status(304).json({
                message: 'Not modifed'
              });
            }

            res.status(204).json({});
            _context4.next = 20;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](2);
            log.error('Error Trycatch Update User: ', _context4.t0);
            res.status(500);
            return _context4.abrupt("return", res.send(_context4.t0));

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 15]]);
  }));

  return function updateUser(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            log.info('Init delete user - Controller');
            log.info('params: ', req.params.id_user);
            _context5.prev = 2;
            _context5.next = 5;
            return _databasa.User.destroy({
              where: {
                id_user: req.params.id_user
              }
            });

          case 5:
            user = _context5.sent;

            if (!user) {
              res.status(404).json({
                messege: 'Not deleted'
              });
            }

            log.info('User: ', user);
            res.status(204).json({});
            _context5.next = 16;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](2);
            log.error('Error Trycatch Delete User: ', _context5.t0);
            res.status(_context5.t0.response.status);
            return _context5.abrupt("return", res.send(_context5.t0.message));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 11]]);
  }));

  return function deleteUser(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;