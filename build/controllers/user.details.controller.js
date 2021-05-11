"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyId = exports.getAllUserDetails = void 0;

var _databasa = require("../configs/databasa.config");

var _logger = _interopRequireDefault(require("../libs/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var log = (0, _logger["default"])('user.details.controller');
log.info('Init User Details Controller');

var getAllUserDetails = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var userdetails;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log.info('Get all user details');
            _context.prev = 1;
            _context.next = 4;
            return _databasa.UserDetails.findAll();

          case 4:
            userdetails = _context.sent;

            if (!userdetails || userdetails === null) {
              log.info('Dont Find any user details - Controller');
              res.status(501).json({
                message: 'No se encontraron user details'
              });
            }

            res.status(200).json(userdetails);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            next(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getAllUserDetails(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllUserDetails = getAllUserDetails;

var getUserbyId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log.info('Get user details by id - Controller');
            _context2.prev = 1;
            console.log('id: ', req.params.id_userdetails); //Find user by Id

            _context2.next = 5;
            return _databasa.UserDetails.findOne({
              where: {
                id_user_details: req.params.id_userdetails
              }
            });

          case 5:
            user = _context2.sent;

            if (!user) {
              res.status(401).json({
                message: 'Problems to finding user'
              });
            }

            res.status(200).json(user.dataValues);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            log.error({
              message: 'TryCatch Error - get User Details by id Controller',
              error: _context2.t0
            });
            res.status(401).json({
              message: 'TryCatch Error - get User Details by id Controller',
              error: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function getUserbyId(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserbyId = getUserbyId;

var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            log.info('Create user details - Controller');
            _context3.prev = 1;
            _context3.next = 4;
            return _databasa.UserDetails.create(req.body);

          case 4:
            response = _context3.sent;

            if (response) {
              res.status(201).json(response);
            }

            res.status(401).json({
              message: 'problemas al crear user details',
              response: response
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            next(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function createUser(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var user, usrUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            log.info('Update user details - Controller');
            _context4.prev = 1;
            log.info('id_userdetails: ', req.params.id_userdetails);
            _context4.next = 5;
            return _databasa.UserDetails.findOne({
              where: {
                id_user_details: req.params.id_userdetails
              }
            });

          case 5:
            user = _context4.sent;

            if (!user) {
              log.alert('user details null', user);
              res.status(401).json({
                message: 'user details null'
              });
            }

            _context4.next = 9;
            return _databasa.UserDetails.update(req.body, {
              where: {
                id_user_details: req.params.id_userdetails
              }
            });

          case 9:
            usrUpdate = _context4.sent;

            if (!usrUpdate) {
              log.alert('user details not update', usrUpdate);
              res.status(401).json({
                message: 'user details not update - Controller'
              });
            }

            res.status(204).json({});
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            log.error('Trycatch update user details', _context4.t0);
            res.status(500).json({
              message: 'Trycatch update user details',
              e: _context4.t0
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 14]]);
  }));

  return function updateUser(_x9, _x10) {
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
            log.info('Init Delete user details by Id - sequelize models');
            log.info('id: ', req.params.id_userdetails);
            _context5.prev = 2;
            _context5.next = 5;
            return _databasa.UserDetails.destroy({
              where: {
                id_user_details: req.params.id_userdetails
              }
            });

          case 5:
            user = _context5.sent;
            log.info('UserDetails: ', user);
            res.status(204).json({});
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            log.error('TryCatch Error - Delete role by id: ', _context5.t0);
            res.status(500).json({
              message: 'Error al eliminar role por id',
              e: _context5.t0
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));

  return function deleteUser(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;