console.log('1');
var dataPeserta = ["john", "laki-laki", "programmer", "30"];

var output = "Halo, nama saya " + dataPeserta[0] +
             ". saya " + dataPeserta[1] +
             " berumur " + dataPeserta[3] +
             " bekerja sebagai seorang " + dataPeserta[2];

console.log(output);

console.log('\n2');
var sayuran = [];

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);

console.log('\n3');
var sayuran = [];

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

sayuran.sort();

for (var i = 0; i < sayuran.length; i++) {
  console.log((i + 1) + ". " + sayuran[i]);
}

console.log('\n4');
var word = "car";
var subsets = [];

for (var i = 0; i < word.length; i++) {
  var temp = "";
  for (var j = i; j < word.length; j++) {
    temp += word[j];
    subsets.push(temp);
  }
}

console.log(subsets);

console.log('\n5');
var numbers = [4, 5, 1, 4, 6, 8, 9, 21];

var total = 0;

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log("Jumlah total:", total);

console.log('\n6');
var kumpulanAngka = [
  [1, 3, 5, 7, 8, 9],
  [4, 5, 6, 2, 3, 1],
  [6, 7, 8, 1, 3, 5],
];

var hasil = [];

for (var i = 0; i < kumpulanAngka.length; i++) {
  var jumlah = 0;
  for (var j = 0; j < kumpulanAngka[i].length; j++) {
    jumlah += kumpulanAngka[i][j];
  }
  hasil.push(jumlah);
}

console.log(hasil);