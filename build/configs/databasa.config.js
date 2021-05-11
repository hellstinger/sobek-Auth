"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _user = _interopRequireDefault(require("../models/schemas/user.model"));

var _role = _interopRequireDefault(require("../models/schemas/role.model"));

var _userDetails = _interopRequireDefault(require("../models/schemas/user.details.model"));

var _conf = _interopRequireDefault(require("../configs/conf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"](_conf["default"].database.aws.dev.name, _conf["default"].database.aws.dev.user, _conf["default"].database.aws.dev.password, {
  host: _conf["default"].database.aws.dev.host,
  dialect: _conf["default"].database.aws.dev.dialect
});
var User = (0, _user["default"])(sequelize, _sequelize["default"]);
var UserDetails = (0, _userDetails["default"])(sequelize, _sequelize["default"]);
var Role = (0, _role["default"])(sequelize, _sequelize["default"]);
sequelize.sync({
  force: false
}).then(function () {
  console.log('Tablas Sincronizadas.');
});
module.exports = {
  User: User,
  UserDetails: UserDetails,
  Role: Role
};