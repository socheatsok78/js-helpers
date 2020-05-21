# js-helpers
My helper collections

## Usage

### Hooks

#### useEvent
Register an event listener, by default event will attatched to `window` object.

```js
useEvent({
    event: 'load',
    handler() {
        // do some thing
    }
})
```

Register an event listener for `document` or `DOMElement`.

```js
useEvent({
    event: 'load',
    handler() {
        // do something
    }
}, document)

// or
const button = document.getElementById('btn')
useEvent({
    event: 'onclick',
    handler() {
        // do something
    }
}, button)
```

`useEvent` returns a function that stops firing the callback:

```js
// Register an event listener
const event = useEvent({
    event: 'load',
    handler() {
        // do something
    }
}, document)

// stop firing the callback
event()
```

### useInterval
Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

```js
// execute callback every 3s
useInterval(function() {
    // do something
}, 3000)
```

`useInterval` returns a function that stops firing the callback:

```js
// execute callback every 3s
const poll = useInterval(function() {
    // do something
}, 3000)

// stop firing the callback
poll()
```
