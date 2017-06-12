# redis-promisify

promisify redis commands with util.promisify

redis-promisify will add promisified method(client[command + 'Async'], such as client.setAsync) for client and multi

## install

```
npm i redis-promisify --save
```

## Usage

```
const redis = require('redis-promisify')
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  db: 0
})

client.setAsync("string key", "string val").then((reply) => {
  console.log(reply)
})
client.multi().get('string key').execAsync().then((replies) => {
  console.log(replies)
})
```

## commands

client commands: [redis-commands](https://www.npmjs.com/package/redis-commands)

multi commands: ['execAtomicAsync', 'execAsync']