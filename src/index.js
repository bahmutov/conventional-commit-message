const packageName = require('../package').name
const suffix = '-commit-message'
const name = packageName.split(suffix)[0]

module.exports = {
  name: name,
  // TODO use functions from validate-commit-message
  // and from https://github.com/commitizen/cz-conventional-changelog
  parse: require('./valid-message').parse,
  validate: require('./valid-message').validate,
  prompter: require('./message-wizard').prompter
}
