
let queue = [];

let Redis = require('ioredis');
let redis = new Redis();
const keyName = 'queue'
module.exports = {
  rpush: (item) => {
    return redis.rpush(keyName, item)
  },
  lpop: () => {
    return redis.lpop(keyName)
  },
  len: () => {
    return redis.lrange(keyName, 0, -1)
  }
}