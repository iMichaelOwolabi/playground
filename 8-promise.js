const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Successfully resolved');
  }, 2000);
});

doWorkPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
})



const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// Promise  Chaining
add(1, 2).then((sum) => {
  return add(sum, 4);
}).then((sum2) => {
  console.log(sum2);
}).catch((error) => {
  console.log(error)
})