//for loop
for(var angka = 1; angka < 10; angka++) {
console.log('Iterasi ke-' + angka);
}

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
jumlah += deret;
console.log('Jumlah saat ini: ' + jumlah);
}
console.log('Jumlah terakhir: ' + jumlah);

//while loop
var flag = 1;
while(flag < 10) {
console.log('Iterasi ke-' + flag);
flag++;
}

var flag = 9;
do {
console.log('Iterasi ke-' + flag);
flag--;
} while(flag > 0)