# uic-codes

**Map [UIC country codes](https://en.wikipedia.org/wiki/List_of_UIC_country_codes) to [ISO 3166 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Current_codes) and vica versa.**

[![npm version](https://img.shields.io/npm/v/uic-codes.svg)](https://www.npmjs.com/package/uic-codes)
[![build status](https://img.shields.io/travis/derhuerst/uic-codes.svg)](https://travis-ci.org/derhuerst/uic-codes)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/uic-codes.svg)](https://david-dm.org/derhuerst/uic-codes#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/uic-codes.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install uic-codes
```


## Usage

```js
const {toISO, toUIC} = require('uic-codes')

// Germany
toUIC.DEU // 80
toISO[80] // 'DEU'
toISO.D // 'DEU'
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/uic-codes/issues).
