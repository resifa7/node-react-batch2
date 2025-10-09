//Recursive
// Program untuk menghitung mundur hingga angka 1
function countDown(number) {
  // Menampilkan angka saat ini
  console.log(number);

  // Mengurangi nilai number
  var newNumber = number - 1;

  // Kondisi jika angka masih di atas 0, panggil kembali fungsi countDown
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

// Memanggil fungsi countDown dengan nilai awal 4
countDown(4);

//First-class
function HitungLingkaran(radius) {
  var pi = 22 / 7;

  function luas(r) {
    return pi * r * r;
  }

  function keliling(r) {
    return 2 * pi * r;
  }

  console.log("Luas:", luas(radius));
  console.log("Keliling:", keliling(radius));
}

HitungLingkaran(7);

// Function biasa
function tambah(a, b) {
  return a + b;
}

console.log(tambah(2, 5)); // 7


// Currying function
function tambah(a) {
  return function(b) {
    return a + b;
  };
}

console.log(tambah(2)(5)); // 7

// Simulasi untuk komputasi berat tanpa currying
function getGreeting() {
  var x = 0;
  for (i=0; i<1000000000; i++) {
    x += i;
  }
  return "Selamat pagi";
}

function say(callback, name) {
  var greeting = callback()
  console.log(greeting, name)
}

var users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar'];

users.map(function(user) {
  return say(getGreeting, user);
});

// Simulasi untuk komputasi berat dengan currying
function getGreeting() {
  var x = 0;
  for (i=0; i<1000000000; i++) {
    x += i;
  }
  return "Selamat pagi";
}

function say(callback) {
  var greeting = callback();
  return function(name) {
    console.log(greeting, name);
  };
}

var users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar'];
var sayGreeting = say(getGreeting);

users.map(function(user) {
  return sayGreeting(user);
})
//Tanpa currying: Fungsi getGreeting() dijalankan berulang kali untuk setiap user → membuat proses lebih berat.
//Dengan currying: getGreeting() hanya dijalankan sekali, hasilnya disimpan, lalu digunakan untuk semua user → lebih efisien.

// Imperative: Menghitung jumlah bilangan genap dalam array
function hitungBilanganGenap(arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

var angka = [1, 2, 3, 4, 5, 6];
var jumlahGenap = hitungBilanganGenap(angka);
console.log(jumlahGenap); // Output: 3

// Declarative: Apa yang ingin dicapai
var angka = [1, 2, 3, 4, 5, 6];

var jumlahGenap = angka.filter(function(x) {
  return x % 2 === 0}).length;

console.log(jumlahGenap); // Output: 3
