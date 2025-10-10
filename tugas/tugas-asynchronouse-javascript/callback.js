// di callback.js
function readBooks(time, book, callback) {
    console.log("Saya membaca " + book.name);
    setTimeout(function() {
        let sisaWaktu = 0;
        if (time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent;
            console.log("Saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu);
            callback(sisaWaktu); // menjalankan function callback
        } else {
            console.log("Waktu saya habis untuk membaca " + book.name);
            callback(0);
        }
    }, book.timeSpent);
}

module.exports = readBooks;

