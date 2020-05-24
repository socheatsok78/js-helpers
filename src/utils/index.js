/**
 * Perform no operation.
 */
export function noop(...args) {}

/**
 * Invokes interceptor with the object, and then returns object.
 * @param {any} value values
 * @param {Function} fn callback
 */
export function tap(value, fn) {
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
export function when(value, callback, defaultCallback) {
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
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve(ms), ms));
}
