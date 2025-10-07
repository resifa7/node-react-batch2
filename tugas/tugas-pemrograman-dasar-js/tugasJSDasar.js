//soal1
var perkenalan = 'Nama saya adalah';
var nama = "Resifa"; // isi dengan nama kalian
var kata1 = "saya";
var kata2 = "berharap";
var kata3 = "untuk";
var kata4 = "menjadi";
var kata5 = "seorang";
var kata6 = "software";
var kata7 = "engineer";

var kalimat = perkenalan + " " + nama + ". " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7 + ".";

console.log(kalimat);

//soal2
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

// 1. password1 = "TEST123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
console.log("password ke satu : " + password1);

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua : " + password2);

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4];
console.log("password ke tiga : " + password3);

var sentence2 = 'wow JavaScript is so cool';

//soal3
var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

//soal4
var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21);

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);

//soal5
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 1. password pertama: HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O");
console.log("kode 1: " + kode1);

// 2. password kedua: WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D");
console.log("kode 2: " + kode2);

// 3. password ketiga: IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y");
console.log("kode 3: " + kode3);

//soal6
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var output = 
  pertama.charAt(0).toUpperCase() + pertama.slice(1) + " " +
  kedua.slice(0, 5) + kedua.charAt(5).toUpperCase() + " " +
  ketiga.slice(0, 6) + ketiga.charAt(6).toUpperCase() + " " +
  keempat.toUpperCase();

console.log(output);

//soal7
var panjang = "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

// konversi ke integer
var p = parseInt(panjang);
var l = parseInt(lebar);
var a = parseInt(alas);
var t = parseInt(tinggi);

// hitung luas
var luasPersegiPanjang = p * l;
var luasSegitiga = 0.5 * a * t;

console.log("Luas Persegi Panjang: " + luasPersegiPanjang);
console.log("Luas Segitiga: " + luasSegitiga);

//soal8
var sisi = " 1 2 ";
var jariJari = "7.5";

// Hapus spasi dan ubah ke integer
var sisiInt = Number(sisi.replace(/\s/g, '')); // jadi 12
var luasPersegi = sisiInt * sisiInt;

// Ubah ke float
var jari = parseFloat(jariJari);
var luasLingkaran = 3.14 * jari * jari;

console.log("Luas Persegi: " + luasPersegi);
console.log("Luas Lingkaran: " + luasLingkaran);