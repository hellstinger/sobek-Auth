"use strict";

var _winston = require("winston");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (namespace) {
  var logger = (0, _winston.createLogger)({
    name: namespace,
    level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL.toLowerCase() : 'debug',
    levels: {
      crit: 0,
      error: 1,
      warning: 2,
      info: 3,
      debug: 4
    },
    format: _winston.format.combine(_winston.format.splat(), _winston.format.printf(function (log) {
      switch (log.level) {
        case 'debug':
          log.level = "\x1B[1m[DEBUG]\x1B[0m";
          break;

        case 'info':
          log.level = "\x1B[36;1m[INFO]\x1B[0m";
          break;

        case 'warning':
          log.level = "\x1B[33;1m[WARN]\x1B[0m";
          break;

        case 'error':
          log.level = "\x1B[31:1m[ERROR]\x1B[0m";
          break;

        case 'crit':
          log.level = "\x1B[31;5m[CRIT]\x1B[0m";
          break;

        default:
          log.level = "\x1B[31;5m[CRIT]\x1B[0m";
          break;
      }

      if (log.uid) {
        log.message = "".concat(log.uid, " ").concat(log.message);
      }

      if (_typeof(log.message) === 'object') {
        log.message = JSON.stringify(log.message);
      }

      return "\x1B[1m[".concat(namespace, "]\x1B[0m \x1B[1m").concat(new Date().toISOString(), "\x1B[0m [").concat(process.pid, "] ").concat(log.level, ": ").concat(log.message);
    })),
    transports: [new _winston.transports.Console({
      json: true
    })]
  });

  logger.express = function (response) {
    logger.info(response);
  };

  return logger;
};