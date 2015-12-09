# conventional-commit-message

> Conventional commit message wizard and validator;
> works with commitizen and pre-git

[![NPM][conventional-commit-message-icon] ][conventional-commit-message-url]

[![Build status][conventional-commit-message-ci-image] ][conventional-commit-message-ci-url]
[![dependencies][conventional-commit-message-dependencies-image] ][conventional-commit-message-dependencies-url]
[![devdependencies][conventional-commit-message-devdependencies-image] ][conventional-commit-message-devdependencies-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)
[![standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Purpose

This module can:

* parse conventional commit message of the type `type(scope): message`
* validate a given message if it fits the above simple format
* guide the user with questions in order to form well formatted message

This was copied from [validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg)
and cleaned up slightly to be both a wizard and a validator.

## Install and use

    npm install --save conventional-commit-message

See [simple-commit-message](https://github.com/bahmutov/simple-commit-message) for API details.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/conventional-commit-message/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[conventional-commit-message-icon]: https://nodei.co/npm/conventional-commit-message.png?downloads=true
[conventional-commit-message-url]: https://npmjs.org/package/conventional-commit-message
[conventional-commit-message-ci-image]: https://travis-ci.org/bahmutov/conventional-commit-message.png?branch=master
[conventional-commit-message-ci-url]: https://travis-ci.org/bahmutov/conventional-commit-message
[conventional-commit-message-dependencies-image]: https://david-dm.org/bahmutov/conventional-commit-message.png
[conventional-commit-message-dependencies-url]: https://david-dm.org/bahmutov/conventional-commit-message
[conventional-commit-message-devdependencies-image]: https://david-dm.org/bahmutov/conventional-commit-message/dev-status.png
[conventional-commit-message-devdependencies-url]: https://david-dm.org/bahmutov/conventional-commit-message#info=devDependencies
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
