var readBooksPromise = require('./promise.js');

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 }
];

// waktu awal: 10 detik (10000 ms)
let waktu = 10000;

// Jalankan promise secara berantai (chaining)
readBooksPromise(waktu, books[0])
  .then((sisaWaktu) => readBooksPromise(sisaWaktu, books[1]))
  .then((sisaWaktu) => readBooksPromise(sisaWaktu, books[2]))
  .then((sisaWaktu) => {
    console.log("Semua buku sudah dibaca, sisa waktu:", sisaWaktu);
  })
  .catch((sisaWaktu) => {
    console.log("Waktu habis. Sisa waktu:", sisaWaktu);
  });
