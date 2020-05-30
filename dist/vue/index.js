"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _W = _interopRequireDefault(require("./helpers/W"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JsHelperPlugin = {
  installed: false,

  install(Vue) {
    if (this.installed) return;
    this.installed = true;
    Vue.component('W', new _W.default());
  }

};
var _default = JsHelperPlugin;
exports.default = _default;