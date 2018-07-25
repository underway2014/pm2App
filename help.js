
let queue = [];

module.exports = {
  addWork: (item) => {
    queue.push(item);
    console.log('addWork queue >> ', queue.length, queue);
    return queue;
  },
  getWorks: () => {
    console.log('getWorks queue >> ', queue.length, queue);
    return queue;
  }
}