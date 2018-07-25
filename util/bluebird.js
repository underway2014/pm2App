'use strict';
const Promise = require('bluebird');

// Fails when `n === 10`.
function process(n) {
  if (n === 5) {
    return Promise.reject(new Error(n + " is bad"));
  } else {
    return Promise.resolve(n);
  }
}

// Log and passthru resolution.
function wrappedFn(n) {
  return process(n).then((result) => {
    console.log(n, 'ok', result);
    return result;
  }).catch((err) => {
    console.log(n, 'failed', err.message);
    throw err;
  });
}

const nums = [];
for (let i = 1; i <= 10; i++) nums.push(i)

Promise.map(nums, (n) => {
  return wrappedFn(n);
})
// I expect this _not_ to get hit b/c of the failure with n==5.
.then(() => {
  console.log('success');
})
// I expect this to be called after ALL the `map` iterations.
.catch((err) => {
  console.log('failure:', err.message);
})
.finally(() => {
  console.log('done');
});