/* Copyright (c) 2014 Richard Rodger */
"use strict";


// mocha batch_process.test.js


var assert  = require('assert')


var batch_process = require('../batch-process.js')


describe('batch_process', function() {

  it('basic-ls', function(fin){
    var batch = batch_process({
      command:'ls',
      args:['-lisa']
    })

    var proc = batch.make_process({
      cwd:__dirname
    })

    proc.on('report',function(rep){
      //console.log(rep)

      assert.ok( -1 < rep.stdout.indexOf('batch-process.test.js') )

      if( rep.final ) fin()
    })

    proc.run()
  })


  it('node-proc', function(fin){
    var batch = batch_process({
      command:'node',
      args:[__dirname+'/node-proc.js']
    })

    var proc = batch.make_process()

    proc.on('report',function(rep){
      assert.ok( -1 < rep.stdout.indexOf('std') )
      assert.ok( -1 < rep.stderr.indexOf('err') )

      if( rep.final ) {
        assert.equal(1,rep.code)
        fin()
      }
    })

    proc.run()
  })


  it('timeout', function(fin){
    var batch = batch_process({
      command:'node',
      args:[__dirname+'/node-proc.js']
    })

    var proc = batch.make_process({
      timeout:500
    })

    proc.on('report',function(rep){
      if( rep.final ) {
        assert.ok(0 < rep.code)
        assert.equal('SIGTERM',rep.signal)
        fin()
      }
    })

    proc.run()
  })

})
