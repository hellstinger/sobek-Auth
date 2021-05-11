"use strict";

var _celebrate6 = require("celebrate");

var _celebrate4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pattern = {
  name: new RegExp(/^[a-zA-Z]+[\w]*[a-zA-Z]$/),
  state: new RegExp(/(deleted|active|inactive)$/),
  scopes: new RegExp(/^[a-z]+(,[a-z])*$/),
  attr: new RegExp(/^[\w]+(,[\w]+)*$/)
};
var defaultGets = {
  limit: _celebrate6.Joi.number().positive().integer().max(50).min(10)["default"](20),
  page: _celebrate6.Joi.number().integer().min(0)["default"](0),
  scopes: _celebrate6.Joi.string().regex(pattern.scopes),
  attr: _celebrate6.Joi.string().regex(pattern.attr)
};
var valReqToken = (0, _celebrate6.celebrate)(_defineProperty({}, _celebrate6.Segments.HEADERS, {
  'x-access-token': _celebrate6.Joi.number().required().min(1)
}));
var valReqGetUserId = (0, _celebrate6.celebrate)(_defineProperty({}, _celebrate6.Segments.PARAMS, {
  id_user: _celebrate6.Joi.number().required().min(1)
}));
var valReqPostUser = (0, _celebrate6.celebrate)(_defineProperty({}, _celebrate6.Segments.BODY, {
  id_user: _celebrate6.Joi.number().required().min(1)
}));
var valReqPutUserId = (0, _celebrate6.celebrate)((_celebrate4 = {}, _defineProperty(_celebrate4, _celebrate6.Segments.PARAMS, {
  id_user: _celebrate6.Joi.number().required().min(1)
}), _defineProperty(_celebrate4, _celebrate6.Segments.BODY, {
  id_user: _celebrate6.Joi.number().required().min(1)
}), _celebrate4));
var valReqDeleteUserId = (0, _celebrate6.celebrate)(_defineProperty({}, _celebrate6.Segments.PARAMS, {
  id_user: _celebrate6.Joi.number().required().min(1)
}));
module.exports = {
  valReqGetUserId: valReqGetUserId,
  valReqPostUser: valReqPostUser,
  valReqPutUserId: valReqPutUserId,
  valReqDeleteUserId: valReqDeleteUserId
};