// di index.js
var readBooks = require('./callback.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'Komik', timeSpent: 1000 }
];

// function rekursif untuk membaca buku satu per satu
function bacaBuku(waktu, index) {
    if (index < books.length && waktu > 0) {
        readBooks(waktu, books[index], function(sisaWaktu) {
            bacaBuku(sisaWaktu, index + 1); // lanjut ke buku berikutnya
        });
    } else {
        console.log("Semua buku sudah dibaca atau waktu habis.");
    }
}

// mulai membaca dengan waktu 10 detik (10000 ms)
bacaBuku(10000, 0);
