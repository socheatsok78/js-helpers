# js-helpers
My helper collections

## Usage

### Hooks

#### useEvent
Register an event listener, by default event will attatched to `window` object.

```js
// Register an event listener
const event = useEvent({
    event: 'load',
    handler() {
        // do some thing
    }
})

// Remove event listener
event()
```

Register an event listener for `document` or `DOMElement`.

```js
const event = useEvent({
    event: 'load',
    handler() {
        // do some thing
    }
}, document)

// or
const button = document.getElementById('btn')
const event = useEvent({
    event: 'onclick',
    handler() {
        // do some thing
    }
}, button)
```
