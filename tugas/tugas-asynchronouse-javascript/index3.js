var filterBooksPromise = require('./promise2.js');

filterBooksPromise(true, 50)
  .then((result) => {
    console.log("Buku berwarna dan 50 halaman:", result);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function getBooks1() {
  try {
    const result = await filterBooksPromise(false, 250);
    console.log("Buku tidak berwarna dan 250 halaman:", result);
  } catch (error) {
    console.log(error.message);
  }
}
getBooks1();

async function getBooks2() {
  try {
    const result = await filterBooksPromise(true, 30);
    console.log("Buku berwarna dan 30 halaman:", result);
  } catch (error) {
    console.log(error.message);
  }
}
getBooks2();
