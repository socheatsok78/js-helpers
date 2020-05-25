"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useInterval;

/**
 * Use Interval Hook
 * @param {Number} ms Milliseconds
 * @param {Function} callback
 */
function useInterval(callback, ms) {
  const instance = setInterval(callback, ms);
  return () => clearInterval(instance);
}