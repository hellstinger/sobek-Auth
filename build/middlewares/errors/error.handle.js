"use strict";

var _logger = _interopRequireDefault(require("../../libs/logger"));

var _ApiError = _interopRequireDefault(require("./ApiError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = (0, _logger["default"])('error.handle');

function apiErrorHandle(err, req, res, next) {
  log.error(err);

  if (err instanceof _ApiError["default"]) {
    log.info('instaceof');
    res.status(err.code).json(err.message);
    return;
  }

  log.info('500');
  res.status(500).json('Error');
}

module.exports = apiErrorHandle;