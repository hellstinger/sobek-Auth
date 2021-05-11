import logger from '../libs/logger'

const log = logger('SequelizeErrorController')
const flows = {
  'SequelizeAssociationError' (request, response, error) {
    response.sendStatus(500);
    log.error(error);
  },
  'SequelizeDatabaseError' (request, response, error) {
    log.debug(error.parent);
    if (error.parent.code === 'ER_BAD_FIELD_ERROR') {
      response.status(400).send(error.parent.sqlMessage);
    } else {
      response.sendStatus(500);
    }
  },
  'SequelizeValidationError' (request, response, error) {
    log.error(error);
    response.sendStatus(500);
  },
  'SequelizeEmptyResultError' (request, response, error) {
    response.status(204).end();
    log.error(error);
  }
};

module.exports = function (req, res, err) {
  log.debug(err.name);
  if (flows.hasOwnProperty(err.name)) {
    flows[`${err.name}`](req, res, err);
  } else {
    res.sendStatus(500);
  }
};
