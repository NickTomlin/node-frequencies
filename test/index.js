const {test} = require('ava')
const frequencies = require('../')

test('it works on strings', t => {
  t.deepEqual(frequencies('goodbye yellowbrick road'), {
    a: 1,
    b: 2,
    c: 1,
    d: 2,
    e: 2,
    g: 1,
    i: 1,
    k: 1,
    l: 2,
    o: 4,
    r: 2,
    w: 1,
    y: 2
  })
})

test('is case sensitive', t => {
  t.deepEqual(frequencies('EEeek!'), { '!': 1, e: 4, k: 1 })
})

test('does not care about whitespace', t => {
  t.deepEqual(frequencies('EE ee k!'), { '!': 1, e: 4, k: 1 })
})

test('it works on arrays of strings', t => {
  t.deepEqual(frequencies(['three', 'three', 'two', 'two', 'one', 'three']), { three: 3, two: 2, one: 1 })
})
