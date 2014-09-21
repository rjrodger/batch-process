batch-process - a Node.js module for controlling batch processes
================================================================

This module executes external processes, capturing output and reporting on status.

Used by the [seneca-run](http://github.com/rjrodger/seneca-run) plugin
to execute external processes.

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


```js
var batch_process = require('batch-process')

// define a batch process
// with common options
var batch = batch_process({
  command:'ls',
  args:['-lisa']
})

// create a new process with
// its own overridden options
var proc = batch.make_process({
  cwd:__dirname
})

// listen for the 'report' event
// errors are also reported this way
proc.on('report',function(rep){
  console.log(rep)

  if( rep.final ) {
    console.log('FINISHED')
  }
})

// actually execute the external process
proc.run()
```

## Process Execution

Processes are run with child_process.spawn. The working directory is
the current process directory, unless set explicitly via options (see
below). Each process is given a unique indentifier in the format:
name-timestamp-random.

The processes are not executed in a shell, so you must supply explicit
arguments and full paths. You can provide environment variables with the env option.

The standard output and error are recorded and saved, both in-memory
and to disk. The in-memory size is limited to a maximum (see options
below). The disk recording is to /tmp by default. A new sub-folder is
created each time, with files stdout and stderr containing their
respective output.



## Options

The options can be set at two levels. When defining a batch process with

```js
var batch = batch_process({
  command:'ls',
  args:['-lisa']
})
```

And when running a process instance, with

```js
var proc = batch.make_process({
  cwd:__dirname
})
```

The same options can be used at each level. Use the process options to
override the common batch options to specialize the process execution.

The options are:
  

   * command:         Process to execute. Use an absolute path if in doubt.
   * name:            Name of batch process. For your own use. Default: command
   * args:            Arguments for process. Default: []
   * cwd:             Current working directory for process. Default: current.
   * env:             Environment variables for process. Default: null
   * report_interval: Time between periodic emits of record event. If 0, then disabled.
   * timeout:         Max time allowed for process to exit. For no limit, use 0. Default: 333333.
   * capture_size:    Max in-memory size of output capture. Must be > 0. Default: 22222.
   * record_folder:   Folder for output capture files. Default: '/tmp/batch_process'.
   * record:          Record output flag. Default: true.
   * kill_signal:     Signal sent to timedout process. Default: 'SIGTERM'.
   * uid:             User id for process.
   * gid:             Group id for process. 


## Testing

Unit tests use mocha, and can be run with:

```sh
npm test
```



## Releases

   * 0.1.0: initial release




