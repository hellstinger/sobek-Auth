"use strict";

var _app = _interopRequireDefault(require("./configs/app"));

var _logger = _interopRequireDefault(require("../src/libs/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = (0, _logger["default"])('index');

_app["default"].listen(9091);

log.info('Server listen on port: ', 9091);