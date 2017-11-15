# frequencies [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A javscript port of clojure.core/frequencies

## Installation

```sh
$ npm install --save @nicktomlin/frequencies
```

## Usage

```js
const assert = require('assert')
const frequencies = require('@nicktomlin/frequencies');

// works with strings (splitting on '')
assert.deepEqual(frequencies('EEeek!'), { '!': 1, e: 4, k: 1 })
assert.deepEqual(frequencies('EE ee k!'), { '!': 1, e: 4, k: 1 })

// works with arrays
assert.deepEqual(
  frequencies(['three', 'three', 'two', 'two', 'one', 'three']),
  { three: 3, two: 2, one: 1 }
)
```
## License

MIT © [Nick Tomlin](https://nick-tomlin.com)


[npm-image]: https://badge.fury.io/js/frequencies.svg
[npm-url]: https://npmjs.org/package/@nicktomlin/frequencies
[travis-image]: https://travis-ci.org/NickTomlin/frequencies.svg?branch=master
[travis-url]: https://travis-ci.org/NickTomlin/frequencies
[daviddm-image]: https://david-dm.org/NickTomlin/frequencies.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/NickTomlin/frequencies
