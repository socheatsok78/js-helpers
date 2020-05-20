/**
 * Use Event Hook
 * @param {Object} options Event Optons
 * @param {String} options.event Listener
 * @param {Boolean} options.once Execute once
 * @param {Function} options.handler Callback
 * @param {window|HTMLElement} instance HTMLElement or Window
 * @returns removeEventListener callback
 */
export default function useEvent(
    options = { event: '', once: false, handler: null },
    instance = window
) {
    const { event, once, handler } = options;

    const handlerWrapper = wrapperEvent => {
        handler(wrapperEvent);
        if (once) {
            instance.removeEventListener(event, handlerWrapper);
        }
    };

    instance.addEventListener(event, handlerWrapper);
    return () => instance.removeEventListener(event, handlerWrapper);
}
