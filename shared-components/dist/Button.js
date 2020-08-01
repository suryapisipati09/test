"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HelloButton = function HelloButton() {
  return /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "outlined"
  }, "Hello World");
};

var _default = HelloButton;
exports["default"] = _default;