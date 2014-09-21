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

      assert.ok( 0 < rep.stdout.indexOf('batch-process.test.js') )

      if( rep.final ) fin()
    })

    proc.run()
  })

})
