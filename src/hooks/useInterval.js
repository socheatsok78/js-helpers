/**
 * Use Interval Hook
 * @param {Number} ms Milliseconds
 * @param {Function} callback
 */
export default  function useInterval(callback, ms) {
    const instance = setInterval(callback, ms);

    return () => clearInterval(instance);
}
