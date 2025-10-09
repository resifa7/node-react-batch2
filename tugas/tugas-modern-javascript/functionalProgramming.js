console.log("1");
function hitungBangunDatar(luasFn, kelilingFn) {
  console.log("Luas:", luasFn());
  console.log("Keliling:", kelilingFn());
  console.log("--------------------------");
}

function hitungPersegi(sisi) {
  hitungBangunDatar(
    function() { return sisi * sisi; },        
    function() { return 4 * sisi; }           
  );
}

function HitungPersegiPanjang(panjang, lebar) {
  hitungBangunDatar(
    function() { return panjang * lebar; },     
    function() { return 2 * (panjang + lebar); } 
  );
}

hitungPersegi(8);
HitungPersegiPanjang(12, 7);

console.log("\n2");
function hitungBangunRuang(volumeFn, luasFn) {
  console.log("Volume:", volumeFn());
  console.log("Luas Permukaan:", luasFn());
  console.log("--------------------------");
}

function hitungKubus(sisi) {
  hitungBangunRuang(
    function() { return sisi * sisi * sisi; },         
    function() { return 6 * (sisi * sisi); }           
  );
}

function HitungBalok(panjang, lebar, tinggi) {
  hitungBangunRuang(
    function() { return panjang * lebar * tinggi; },    
    function() { return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi); } 
  );
}

hitungKubus(8);
HitungBalok(12, 7, 5);

console.log("\n3");
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

people.sort(function(a, b) {
  return a.age - b.age;
});

function tampilkanPeopleRecursive(arr, index = 0) {
  if (!Array.isArray(arr)) {
    console.error("tampilkanPeopleRecursive: parameter bukan array:", arr);
    return;
  }
  if (index >= arr.length) return; 

  const item = arr[index];
  console.log((index + 1) + ". " + (item && item.name ? item.name : "(no name)"));

  tampilkanPeopleRecursive(arr, index + 1);
}

tampilkanPeopleRecursive(people);

console.log("\n4");
var phones = [
  { name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"] },
  { name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"] },
  { name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"] },
  { name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"] },
  { name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"] },
];

var phonesWithBlack = phones.filter(function (phone) {
  return phone.colors.includes("black");
});

phonesWithBlack.sort(function (a, b) {
  return a.year - b.year;
});

function tampilkanData(arr, index = 0) {
  if (index < arr. length) {
    console.log(
      (index + 1) + ". " + arr[index].name + ", colors available : " + arr[index].colors.join(", ")
    );
    tampilkanData(arr, index + 1); 
  }
}

tampilkanData(phonesWithBlack);