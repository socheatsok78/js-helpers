"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTimeout;

/**
 * Use Timeout Hook
 * @param {Number} ms Milliseconds
 * @param {Function} callback
 */
function useTimeout(callback, ms) {
  const instance = setTimeout(callback, ms);
  return () => clearTimeout(instance);
}