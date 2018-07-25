require('should')
let co = require('co')
let {rpush, lpop, len} = require('../util/help.js')

describe('mocha should test ', function(){
  it('shout return succes', co(function(){
    let name = 'libin';
    name.should.eql('libin')

    let count = 10;
    for(let i = 0; i < count; i++){
      yield rpush(i)
    }

    let wlen = yield len()
    wlen.should.eql(count)
  }))
})