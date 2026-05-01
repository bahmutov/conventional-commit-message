const la = require('lazy-ass')
const check = require('check-more-types')

/* global describe, it */
describe('api', () => {
  const api = require('./valid-message')
  const schema = {
    validate: check.fn,
    parse: check.fn
  }
  it('satisfies api', () => {
    la(check.schema(schema, api), api)
  })
})

describe('parse message', () => {
  const parse = require('./valid-message').parse

  it('is a function', () => {
    la(check.fn(parse))
  })

  it('parses valid message', () => {
    const message = 'feat(foo): new feature'
    const parsed = parse(message)
    la(parsed.firstLine === message, 'first line', parsed)
    la(parsed.type === 'feat', 'type', parsed)
    la(parsed.scope === 'foo', 'scope', parsed)
    la(parsed.subject === 'new feature', 'subject', parsed)
  })

  it('parses another valid message', () => {
    const message = 'revert(something): new feature was bad'
    const parsed = parse(message)
    la(parsed.firstLine === message, 'first line', parsed)
    la(parsed.type === 'revert', 'type', parsed)
    la(parsed.scope === 'something', 'scope', parsed)
    la(parsed.subject === 'new feature was bad', 'subject', parsed)
  })

  it('rejects invalid message', () => {
    const message = 'free form text'
    const parsed = parse(message)
    la(!parsed)
  })
})

describe('validate message', () => {
  const validate = require('./valid-message').validate

  it('is a function', () => {
    la(check.fn(validate))
  })

  it('valid message', () => {
    const message = 'feat(foo): new feature'
    var called
    function log () {
      called = true
    }
    la(validate(message, log), 'message is valid')
    la(!called, 'error log not called')
  })
})

describe('validate supported message types', () => {
  const validate = require('./valid-message').validate
  const supportedCommitTypes = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']

  supportedCommitTypes.forEach(type => {
    it(`should be able to successfully parse type: ${type}`, () => {
      const message = `${type}(foo): cool code`

      var called
      function log () {
        called = true
      }
      la(validate(message, log), 'message is valid')
      la(!called, 'error log not called')
    })
  })
})
