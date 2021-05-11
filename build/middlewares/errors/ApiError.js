"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiError = /*#__PURE__*/function () {
  function ApiError(code, message) {
    _classCallCheck(this, ApiError);

    this.code = code;
    this.message = message;
  }

  _createClass(ApiError, null, [{
    key: "badRequest",
    value: function badRequest(msg) {
      return new ApiError(400, msg);
    }
  }, {
    key: "internalRequest",
    value: function internalRequest(msg) {
      return new ApiError(500, msg);
    }
  }]);

  return ApiError;
}();