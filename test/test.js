var expect = require('expect.js')

var base = require('../dist/index.js')

describe('单元测试', function() {
    this.timeout(1000)

    describe('触发订阅', () => {
        base.sub('hello', str => {
            it('相等', () => {
                expect(str).to.equal('test')
            })
        })
        base.pub('hello', 'test')
    })

    describe('取消/订阅', () => {
        let flag = { num: 0 }
        let cb = flag => {
            flag.num++
        }

        base.sub('test', cb)
        base.pub('test', flag)
        it('正确订阅', () => {
            expect(flag.num).to.equal(1)
        })

        base.unsub('test', cb)
        base.pub('test', flag)
        it('取消订阅', () => {
            expect(flag.num).to.equal(1)
        })
    })

    describe('构造函数测试', () => {
        const foo = new base.PubSub()
        it('实例构造检测', () => {
            expect(foo.pub).to.equal(foo.publish)
            expect(foo.unsub).to.equal(foo.unsubscribe)
            expect(foo.sub).to.equal(foo.subscribe)

            expect(foo.ec).to.be.an('object')
        })
    })
})
