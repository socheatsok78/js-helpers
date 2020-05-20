/**
 * Use Timeout Hook
 * @param {Number} ms Milliseconds
 * @param {Function} callback
 */
export default function useTimeout(callback, ms) {
    const instance = setTimeout(callback, ms);

    return () => clearTimeout(instance);
}
