var expect = require('expect.js')

var base = require('../dist/index.js')

describe('单元测试', function() {
    this.timeout(1000)

    describe('触发订阅', function() {
        base.sub('hello', function(...args) {
            it('相等', function() {
                expect(args[0]).to.equal('test')
            })
        })
        base.pub('hello', 'test')
    })

    describe('取消订阅', function() {
        // ...
    })
})
