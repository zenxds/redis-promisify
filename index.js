const util = require('util')
const redis = require("redis")
const redisCommands = require('redis-commands')

promisify(redis.RedisClient.prototype, redisCommands.list)
promisify(redis.Multi.prototype, ['exec', 'execAtomic'])

function promisify(obj, methods) {
  methods.forEach((method) => {
    if (obj[method])
      obj[method + 'Async'] = util.promisify(obj[method])
  })
}

module.exports = redis
