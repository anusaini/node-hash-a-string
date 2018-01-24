const lib = require('../index')
const expect = require('chai').expect

describe('hashAString', () => {
  const inputs = [
    'git.faf',
    'anubhav',
    'node-hash-a-string'
  ]
  const expectedsWithoutHash = {
    'git.faf': 37459,
    'anubhav': 37796,
    'node-hash-a-string': 34842
  }
  const SALT = 'wutwutwut'
  const expectedsWithHash = {
    'git.faf': 40575,
    'anubhav': 40912,
    'node-hash-a-string': 37857
  }

  it('hashes a strings successfully without salt', () => {
    inputs.forEach(input => {
      const expected = expectedsWithoutHash[input]
      const actual = lib(input)
      expect(actual).to.equal(expected)
    })
  })

  it('hashes a strings successfully with salt', () => {
    inputs.forEach(input => {
      const expected = expectedsWithHash[input]
      const actual = lib(input, SALT)
      expect(actual).to.equal(expected)
    })
  })
})
