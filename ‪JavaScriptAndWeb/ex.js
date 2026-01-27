const dice = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 6) + 1;
    if (Math.random() < 0.1) {
      reject("dice falls");
    } else {
      resolve(num);
    }
  }, 500);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
