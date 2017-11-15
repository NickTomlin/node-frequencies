function notWhitespace (x) {
  return x !== ' '
}

function normalizeString (string) {
  return string
    .toLowerCase()
    .split('')
    .filter(notWhitespace)
}

function char (frequencies, member) {
  frequencies[member] = (frequencies[member] || 0) + 1
  return frequencies
}

function getFrequency (collection) {
  return collection.reduce(char, {})
}

function frequencies (item) {
  switch (Object.prototype.toString.call(item)) {
    case '[object Array]':
      return getFrequency(item)

    case '[object String]':
      return getFrequency(normalizeString(item))

    default:
      return {}
  }
}

module.exports = frequencies
