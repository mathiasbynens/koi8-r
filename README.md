# koi8-r [![Build status](https://travis-ci.org/mathiasbynens/koi8-r.svg?branch=master)](https://travis-ci.org/mathiasbynens/koi8-r) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/koi8-r/badge.svg)](https://coveralls.io/r/mathiasbynens/koi8-r) [![Dependency status](https://gemnasium.com/mathiasbynens/koi8-r.svg)](https://gemnasium.com/mathiasbynens/koi8-r)

_koi8-r_ is a robust JavaScript implementation of [the koi8-r character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#koi8-r).

This encoding is known under the following names: cskoi8r, koi, koi8, koi8-r, and koi8_r.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install koi8-r
```

In a browser:

```html
<script src="koi8-r.js"></script>
```

In [Node.js](https://nodejs.org/), [io.js](https://iojs.org/), [Narwhal](http://narwhaljs.org/), and [RingoJS](http://ringojs.org/):

```js
var koi8r = require('koi8-r');
```

In [Rhino](https://www.mozilla.org/rhino/):

```js
load('koi8r.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'koi8-r': 'path/to/koi8-r'
    }
  },
  ['koi8-r'],
  function(koi8r) {
    console.log(koi8r);
  }
);
```

## API

### `koi8r.version`

A string representing the semantic version number.

### `koi8r.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `koi8r.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to koi8-r. The return value is a ‘byte string’, i.e. a string of which each item represents an octet as per koi8-r.

```js
const encodedData = koi8r.encode(text);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
const encodedData = koi8r.encode(text, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in koi8-r,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `koi8r.decode(input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to koi8-r.

```js
const text = koi8r.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
const text = koi8r.decode(encodedData, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the koi8-r encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

For decoding a buffer (e.g. from `fs.readFile`) use `buffer.toString('binary')` to get the byte string which `decode` takes.

## Support

_koi8-r_ is designed to work in at least Node.js v0.10.0, io.js v1.0.0, Narwhal 0.3.2, RingoJS 0.8-0.11, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, Edge, and Internet Explorer.

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_koi8-r_ is available under the [MIT](https://mths.be/mit) license.
