"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _logger = _interopRequireDefault(require("../libs/logger"));

var _celebrate = require("celebrate");

var _package = _interopRequireDefault(require("../../package.json"));

var _user = _interopRequireDefault(require("../routes/user.routes"));

var _role = _interopRequireDefault(require("../routes/role.routes"));

var _auth = _interopRequireDefault(require("../routes/auth.routes"));

var _userDetails = _interopRequireDefault(require("../routes/user.details.routes"));

var _error = _interopRequireDefault(require("../middlewares/errors/error.handle"));

var _SequelizeErrorController = _interopRequireDefault(require("../models/SequelizeErrorController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var log = (0, _logger["default"])('app');
log.info('Init App'); //Set global

app.set('pkg', _package["default"]); //ADD Middlewares to Server

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded()); //ADD Routes

app.get('/', function (req, res) {
  res.json({
    autor: app.get('pkg').author,
    descripcion: app.get('pkg').description,
    version: app.get('pkg').version
  });
  console.log(app.get('pkg'));
});
app.use(_user["default"]);
app.use('/v1/api/backend/userdetails', _userDetails["default"]);
app.use('/v1/api/backend/role', _role["default"]);
app.use('/v1/api/backend/auth', _auth["default"]); //app.use(errorHandle)

app.use(function (req, res, next) {});
var _default = app;
exports["default"] = _default;