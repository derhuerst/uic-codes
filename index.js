'use strict'

const raw = require('./raw.json')

const data = {toISO: [], toUIC: {}}

for (let iso in raw) {
	const [alphabetical, numerical] = raw[iso]
	data.toUIC[iso] = numerical
	data.toISO[numerical] = iso
	data.toISO[alphabetical] = iso
}

module.exports = data
