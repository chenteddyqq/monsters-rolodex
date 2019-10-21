const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have run success");
    }, 1000);
  } else {
    reject("it is failed");
  }
});

myPromise
  .then(value => {
    return value + " continue!!!";
  })
  .then(newR => {
    console.log(newR);
  })
  .catch(error => {
    console.log(error);
  });

console.log("later console");
