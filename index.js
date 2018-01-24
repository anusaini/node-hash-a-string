const lowerAlpha = require('sorry-constants').ascii.lowerAlpha
const getAscii = require('node-get-ascii')

const hashAString = (input, salt, size) => {
  let hashInput = getAscii(input).padEnd(size || lowerAlpha.length, salt || lowerAlpha)
  return hashInput.split('').reduce((hash, curr, i) => hash + curr.charCodeAt(0) * (i + 1), 0)
}

module.exports = hashAString
