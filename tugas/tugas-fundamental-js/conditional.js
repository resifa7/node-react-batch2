console.log('1');
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

var panjang = sentence.length;
var kategori;

if (panjang < 10) {
  kategori = "Pendek";
} else if (panjang >= 10 && panjang <= 30) {
  kategori = "Sedang";
} else {
  kategori = "Panjang";
}

console.log("Panjang string:", panjang);
console.log("Kategori:", kategori);

console.log('\n2');
var nilai = 75;
var indeks;

if (nilai >= 80) {
  indeks = "A";
} else if (nilai >= 70 && nilai < 80) {
  indeks = "B";
} else if (nilai >= 60 && nilai < 70) {
  indeks = "C";
} else if (nilai >= 50 && nilai < 60) {
  indeks = "D";
} else {
  indeks = "E";
}

console.log("Nilai:", nilai);
console.log("Indeks:", indeks);

console.log('\n3');
var tanggal = 27;
var bulan = 4;
var tahun = 2004;
var namaBulan;

switch (bulan) {
  case 1:  namaBulan = "Januari"; break;
  case 2:  namaBulan = "Februari"; break;
  case 3:  namaBulan = "Maret"; break;
  case 4:  namaBulan = "April"; break;
  case 5:  namaBulan = "Mei"; break;
  case 6:  namaBulan = "Juni"; break;
  case 7:  namaBulan = "Juli"; break;
  case 8:  namaBulan = "Agustus"; break;
  case 9:  namaBulan = "September"; break;
  case 10: namaBulan = "Oktober"; break;
  case 11: namaBulan = "November"; break;
  case 12: namaBulan = "Desember"; break;
  default: namaBulan = "Bulan tidak valid";
}

console.log(tanggal + " " + namaBulan + " " + tahun);