// Inisialisasi array awal
let buah = ['apel', 'jeruk', 'mangga'];

console.log('1. Length');
console.log(buah.length); // Output: 3

console.log('\n2. Push');
buah.push('pisang');
console.log(buah); // ['apel', 'jeruk', 'mangga', 'pisang']

console.log('\n3. Pop');
buah.pop();
console.log(buah); // ['apel', 'jeruk', 'mangga']

console.log('\n4. Unshift');
buah.unshift('semangka');
console.log(buah); // ['semangka', 'apel', 'jeruk', 'mangga']

console.log('\n5. Shift');
buah.shift();
console.log(buah); // ['apel', 'jeruk', 'mangga']

console.log('\n6. Join');
let kalimat = buah.join(', ');
console.log(kalimat); // "apel, jeruk, mangga"

console.log('\n7. Split');
let kata = "saya-suka-koding";
let arrayKata = kata.split('-');
console.log(arrayKata); // ['saya', 'suka', 'koding']

console.log('\n8. Sort');
let angka = [4, 1, 10, 2];
angka.sort(); // Secara alfabet
console.log(angka); // [1, 10, 2, 4]

angka.sort((a, b) => a - b); // Secara numerik
console.log(angka); // [1, 2, 4, 10]

console.log('\n9. Slice');
let sayur = ['tomat', 'bayam', 'kangkung', 'wortel'];
let sayurHijau = sayur.slice(1, 3); // index 1 sampai sebelum 3
console.log(sayurHijau); // ['bayam', 'kangkung']

console.log('\n10. Splice');
let pemain = ['messi', 'ronaldo', 'mbappe'];
pemain.splice(1, 1, 'yamal'); // Ganti 'ronaldo' dengan 'yamal'
console.log(pemain);

pemain.splice(2, 0, 'dembele'); // Tambah 'dembele' di index 2
console.log(pemain); 