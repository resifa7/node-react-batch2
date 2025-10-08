console.log('1');
console.log("LOOPING PERTAMA");
var i = 2;
while (i <= 20) {
  console.log(i + " - I love coding");
  i += 2;
}

console.log("LOOPING KEDUA");
var j = 20;
while (j >= 2) {
  console.log(j + " - I will become a MERN Stack developer");
  j -= 2;
}

console.log('\n2');
var angka = 1;

while (angka <= 20) {
  if (angka % 2 === 0) {
    console.log(angka + " - Angka Genap");
  } else {
    console.log(angka + " - Angka Ganjil");
  }
  angka++;
}

console.log('\n3');
for (var x = 1; x <= 20; x++) {
  if (x % 3 === 0 && x % 2 !== 0) {
    console.log(x + " - I Love Coding");
  } else if (x % 3 === 0 && x % 2 === 0) {
    console.log(x + " - ToT");
  } else if (x % 2 === 0) {
    console.log(x + " - Berkualitas");
  } else {
    console.log(x + " - Santai");
  }
}

console.log('\n4');
var hasil = "";

for (var baris = 1; baris <= 7; baris++) {
  hasil = "";
  for (var kolom = 1; kolom <= baris; kolom++) {
    hasil += "#";
  }
  console.log(hasil);
}

console.log('\n5');
var sentence = "Fullstack Developer";

for (var i = 0; i < sentence.length; i++) {
  var huruf = sentence[i].toLowerCase();

  if (huruf !== "a" && huruf !== "i" && huruf !== "u" && huruf !== "e" && huruf !== "o" && huruf !== " ") {
    console.log(huruf);
  }
}