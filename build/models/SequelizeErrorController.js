"use strict";

var _logger = _interopRequireDefault(require("../libs/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = (0, _logger["default"])('SequelizeErrorController');
var flows = {
  'SequelizeAssociationError': function SequelizeAssociationError(request, response, error) {
    response.sendStatus(500);
    log.error(error);
  },
  'SequelizeDatabaseError': function SequelizeDatabaseError(request, response, error) {
    log.debug(error.parent);

    if (error.parent.code === 'ER_BAD_FIELD_ERROR') {
      response.status(400).send(error.parent.sqlMessage);
    } else {
      response.sendStatus(500);
    }
  },
  'SequelizeValidationError': function SequelizeValidationError(request, response, error) {
    log.error(error);
    response.sendStatus(500);
  },
  'SequelizeEmptyResultError': function SequelizeEmptyResultError(request, response, error) {
    response.status(204).end();
    log.error(error);
  }
};

module.exports = function (req, res, err) {
  log.debug(err.name);

  if (flows.hasOwnProperty(err.name)) {
    flows["".concat(err.name)](req, res, err);
  } else {
    res.sendStatus(500);
  }
};