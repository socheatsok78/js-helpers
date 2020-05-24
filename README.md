# js-helpers
My helper collections

## Usage

### Hooks

#### `useEvent`
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

### `useInterval`
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

### `useTimeout`
Sets a timer which executes a function or specified piece of code once the timer expires.

```js
useTimeout(function() {
    // do something
}, 3000)
```

`useTimeout` returns a function that stops firing the callback:

```js
// execute callback every 3s
const timer = useTimeout(function() {
    // do something
}, 3000)

// stop firing the callback
timer()
```

### Utils

#### `noop`

Perform no operation.

Why whould you need to use this? Here an example:

```js
import { noop } from './shared'

export let warn = noop

if (process.env.NODE_ENV !== 'production') {
    warn = (msg) => {
        console.error(`[QuickProp warn]: ${msg}`)
    }
}
```

Now when you call `warn` function, it only show log output during `development`. This mean that in `production`, the `warn` function will not be overwritten.

#### `tap`

Invokes interceptor with the object, and then returns object.

```js
const value = {}

const newValue = tap(value, function(payload) {
    // do something with the payload
})
```

#### `when`

Apply the callback if the given "value" is true.

```js
const value = {}

when(value, function(payload) {
    // do something with the payload
    return payload
})

// you can provide a third callback to be execute if value if falsy
when(value, function(payload) {
    // do something with the payload
    return payload
}, function(payload) {
    // Execute when value is falsy
    // do something with the payload
    return payload
})
```

#### `sleep`

Async Sleep Function

> Note: please use `sleep` is asynchronous

```js
async function doSomething() {
    // Sleep for 3s
    await sleep(3000)
    // Then do something
}

doSomething()
```
