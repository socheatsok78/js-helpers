"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
exports.tap = tap;
exports.when = when;
exports.sleep = sleep;

/**
 * Perform no operation.
 */
function noop(...args) {}
/**
 * Invokes interceptor with the object, and then returns object.
 * @param {any} value values
 * @param {Function} fn callback
 */


function tap(value, fn) {
  if (typeof fn === 'function') {
    fn(value);
  }

  return value;
}
/**
 * Apply the callback if the given "value" is true.
 *
 * @param  mixed  value
 * @param  callable  callback
 * @param  callable  default
 * @return value
 */


function when(value, callback, defaultCallback) {
  if (value) {
    return callback(value);
  }

  if (defaultCallback) {
    return defaultCallback(value);
  }

  return value;
}
/**
 * Async Sleep Function
 * @param {Number} ms Sleep in Millionsecond
 */


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve(ms), ms));
}