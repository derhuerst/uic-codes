'use strict'

const assert = require('assert')
const uic = require('./index')

assert.strictEqual(uic.D, 80)
assert.strictEqual(uic[80], 'D')
