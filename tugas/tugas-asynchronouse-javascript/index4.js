var filterCarsPromise = require('./promise3.js');

// 1Menggunakan Promise biasa
filterCarsPromise("black", 2019)
  .then((result) => {
    console.log("Mobil berwarna hitam tahun 2019:", result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Menggunakan Promise biasa
filterCarsPromise("silver", 2017)
  .then((result) => {
    console.log("Mobil berwarna silver tahun 2017:", result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Menggunakan async/await (abu-abu tahun 2019)
async function getCars1() {
  try {
    const result = await filterCarsPromise("grey", 2019);
    console.log("Mobil berwarna abu-abu tahun 2019:", result);
  } catch (error) {
    console.log(error.message);
  }
}
getCars1();

// Menggunakan async/await (abu-abu tahun 2018)
async function getCars2() {
  try {
    const result = await filterCarsPromise("grey", 2018);
    console.log("Mobil berwarna abu-abu tahun 2018:", result);
  } catch (error) {
    console.log(error.message);
  }
}
getCars2();

// Menggunakan async/await (hitam tahun 2020)
async function getCars3() {
  try {
    const result = await filterCarsPromise("black", 2020);
    console.log("Mobil berwarna hitam tahun 2020:", result);
  } catch (error) {
    console.log(error.message);
  }
}
getCars3();
