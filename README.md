# hollys [![Build Status](https://travis-ci.org/puttpotsawee/hollys.svg?branch=master)](https://travis-ci.org/puttpotsawee/hollys)

> Hollys is a highlevel functional Javascript library project created and maintain by Nodeframe Solution.
The purpose of this lib was to store and maintain all functional Javascript code.
Unlike functional lib like [lodash](https://lodash.com/) or [ramda](http://ramdajs.com/),
this lib aim to provide higher level functional Javascript code.
Most of the function is this lib will base on either lodash or ramda, but the exported function will rather complete a specific task.
Task like lowercase all the JSON object key, and many more.


## Install

```
$ npm install --save hollys
```


## Usage

```js
const hollys = require('hollys');

hollys('unicorns');
//=> 'unicorns & rainbows'
```


## API

### hollys(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global hollys
```

```
$ hollys --help

  Usage
    hollys [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ hollys
    unicorns & rainbows
    $ hollys ponies
    ponies & rainbows
```


## License

MIT © [Putt](http://nf-solution.com)
