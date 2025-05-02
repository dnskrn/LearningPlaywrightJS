function getEvenNumber(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 === 0) {
        resolve(value);
      } else {
        reject(new Error("Not an even number"));
      }
    }, delay);
  });
}

getEvenNumber(4, 2000)
    .then((result) => {
        console.log(`Success: ${result} is an even number`);
        return getEvenNumber(-20, 1000); // Chaining another promise
    })
    .then((result) => {
        console.log(`Success: ${result} is an even number`);
        return getEvenNumber(8, 1000); // Chaining another promise
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });