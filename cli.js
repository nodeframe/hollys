#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hollys = require('./');

const cli = meow(`
	Usage
	  $ hollys [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ hollys
	  unicorns & rainbows
	  $ hollys ponies
	  ponies & rainbows
`);

console.log(hollys(cli.input[0] || 'unicorns'));
