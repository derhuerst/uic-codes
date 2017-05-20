'use strict'

const assert = require('assert')

const raw = require('./raw.json')
const uic = require('.')

assert.strictEqual(Object.keys(raw).length, 68)

assert.strictEqual(uic.toISO.D, 'DEU')
assert.strictEqual(uic.toISO[80], 'DEU')

assert.strictEqual(uic.toUIC.DEU, 80)
