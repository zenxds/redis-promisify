const expect = require('chai').expect
const redis = require('..')
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  db: 0
})

describe('test/index.js', () => {

  it('should set ok', done => {

    client.setAsync('string key', 'string val').then((reply) => {
      expect(reply).to.equal('OK')
      done()
    }).catch((err) => {
      done(err)
    })
  })

  it('should get ok', done => {
    client.getAsync('string key').then((reply) => {
      expect(reply).to.equal('string val')
      done()
    }).catch((err) => {
      done(err)
    })
  })

  it('should execAsync with multi', done => {
    client.multi().get('string key').execAsync().then((replies) => {
      expect(replies).to.eql(['string val'])
      done()
    })
  })

})
