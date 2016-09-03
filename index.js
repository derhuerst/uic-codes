'use strict'

const uic = require('./uic')

const data = []
for (let country in uic) {
	const code = uic[country]
	data[country] = code
	data[code] = country
}

module.exports = data
