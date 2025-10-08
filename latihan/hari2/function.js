//Function sederhana tanpa return
function tampilkan() {
    console.log("halo!");
}

tampilkan();

//Function sederhana dengan return
function munculkanAngkaDua() {
  return 2;
}

var tampung = munculkanAngkaDua();
console.log(tampung);

//Function dengan parameter
function kalikanDua(angka) {
  return angka * 2;
}

var tampung = kalikanDua(2);
console.log(tampung);

//Pengiriman parameter lebih dari satu dan nilai default
function tampilkanAngka(angkaPertama, angkaKedua = 2) {
  return angkaPertama + angkaKedua;
}

console.log(tampilkanAngka(5, 3));
console.log(tampilkanAngka(6));

//Anonymous Function
var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua;
}

console.log(fungsiPerkalian(2, 5));