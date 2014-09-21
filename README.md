batch-process - a Node.js module for controlling batch processes
================================================================

This module executes external processes, capturing output and reporting on status.


[![Build Status](https://travis-ci.org/rjrodger/batch-process.png?branch=master)](https://travis-ci.org/rjrodger/batch-process)

[![NPM](https://nodei.co/npm/batch-process.png)](https://nodei.co/npm/batch-process/)
[![NPM](https://nodei.co/npm-dl/batch-process.png)](https://nodei.co/npm-dl/batch-process/)

If you're using this module, feel free to contact me on twitter if you
have any questions! :) [@rjrodger](http://twitter.com/rjrodger)

Current Version: 0.1.0

Tested on: Node 0.10.31


### Install

To install:

```sh
npm install batch-process
```


## Quick Example



## Options

The options are:
  
   * _foo_: foo

These can be set within the top-level _run_ property of the main
Seneca options tree:

```js
var seneca = require('seneca')({
  run:{
    foo:'foo'
  }
})
```


## Testing

Unit tests use mocha, and can be run with:

```sh
npm test
```



## Releases

   * 0.1.0: initial release




