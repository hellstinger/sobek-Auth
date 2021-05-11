"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRolebyId = exports.getAllRoles = void 0;

var _databasa = require("../configs/databasa.config");

var _logger = _interopRequireDefault(require("../libs/logger"));

var _winston = require("winston");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var log = (0, _logger["default"])('role.controller');
log.info('Init role Controller');

var getAllRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var role;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log.info('Init get roles by - sequelize models');
            _context.prev = 1;
            _context.next = 4;
            return _databasa.Role.findAll();

          case 4:
            role = _context.sent;
            res.status(200).json(role);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            log.error('TryCatch Error - get all roles: ', _context.t0);
            res.status(500).json({
              message: 'Error al buscar todos los roles',
              e: _context.t0
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function getAllRoles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllRoles = getAllRoles;

var getRolebyId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var role;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log.info('Init get roles by ID - sequelize models');
            log.info('id role: ', req.params.id_role);
            _context2.prev = 2;
            _context2.next = 5;
            return _databasa.Role.findOne({
              where: {
                id_role: req.params.id_role
              }
            });

          case 5:
            role = _context2.sent;
            console.log('role: ', role);
            res.status(200).json(role);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            log.error('TryCatch Error - get role by id: ', _context2.t0);
            res.status(500).json({
              message: 'Error al buscar role por id',
              e: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function getRolebyId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRolebyId = getRolebyId;

var createRole = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, description, newRole, role;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            log.info('Init create role - sequelize models');
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            newRole = {
              name: name,
              description: description
            };
            log.info('newRole: ', newRole);
            _context3.prev = 4;
            _context3.next = 7;
            return _databasa.Role.create(newRole);

          case 7:
            role = _context3.sent;
            log.info('role: ', role);
            res.status(200).json(role);
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](4);
            log.error('TryCatch Error - create roles: ', _context3.t0);
            res.status(500).json({
              message: 'Error al crear un role',
              e: _context3.t0
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 12]]);
  }));

  return function createRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createRole = createRole;

var updateRole = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var role, update;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            log.info('Init Update role by Id - sequelize models');
            log.info('id: ', req.params.id_role);
            log.info('body: ', req.body);
            _context4.prev = 3;
            _context4.next = 6;
            return _databasa.Role.findOne({
              where: {
                id_role: req.params.id_role
              }
            });

          case 6:
            role = _context4.sent;

            if (!role) {
              res.status(405).json({
                message: 'Role not find - Role - Controller'
              });
            }

            _context4.next = 10;
            return _databasa.Role.update(req.body, {
              where: {
                id_role: req.params.id_role
              }
            });

          case 10:
            update = _context4.sent;

            if (!update) {
              res.status(405).json({
                message: 'Role null - Role - Controller'
              });
            }

            res.status(200).json({
              message: update
            });
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](3);
            log.error({
              error: _context4.t0
            });
            res.status(_context4.t0.statusCode).json({
              message: 'TryCatch - Role - Controller',
              error: _context4.t0
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 15]]);
  }));

  return function updateRole(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRole = updateRole;

var deleteRole = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var role;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            log.info('Init Delete role by Id - sequelize models');
            log.info('id: ', req.params.id_role);
            _context5.prev = 2;
            _context5.next = 5;
            return _databasa.Role.destroy({
              where: {
                id_role: req.params.id_role
              }
            });

          case 5:
            role = _context5.sent;

            if (!role) {
              res.status(405).json({
                message: 'Role null - Role - Controller'
              });
            }

            log.info('role: ', role);
            res.status(200).json(role);
            _context5.next = 15;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](2);
            log.error('TryCatch Error - Delete role by id: ', _context5.t0);
            res.status(500).json({
              message: 'Error al eliminar role por id',
              e: _context5.t0
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 11]]);
  }));

  return function deleteRole(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteRole = deleteRole;