console.log('1')
const luasLingkaran = (r) => {
  return Math.PI * r * r;
};

const kelilingLingkaran = (r) => {
  return 2 * Math.PI * r;
};

let jariJari = 7;
console.log(`Luas lingkaran dengan jari-jari ${jariJari} adalah: ${luasLingkaran(jariJari)}`);
console.log(`Keliling lingkaran dengan jari-jari ${jariJari} adalah: ${kelilingLingkaran(jariJari)}`);

console.log('\n2')
const introduce = (...params) => {
  const [name, age, gender, job] = params; 
  const prefix = gender.toLowerCase() === "laki-laki" ? "Pak" : "Bu"; 
  return `${prefix} ${name} adalah seorang ${job} yang berusia ${age} tahun`;
};

const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn); 

const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah); 

console.log('\n3')
const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName() {
    console.log(`${firstName} ${lastName}`);
  }
});

console.log(newFunction("John", "Doe").firstName);   
console.log(newFunction("Richard", "Roe").lastName); 
newFunction("William", "Imoh").fullName();         

console.log('\n4')
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
const { brand: phoneBrand, name: phoneName, year, colors } = phone;
const [colorBronze, , colorBlack] = colors;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

console.log('\n5')
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul, ...warna]
};

console.log(buku);

console.log('\n6')
function addProducts(brandObj, newProducts) {
  brandObj.products = [...brandObj.products, ...newProducts];
  return brandObj;
}

let samsung = {
  name: "Samsung",
  products: [
    { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
    { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
    { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] },
  ],
};

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] },
];

samsung = addProducts(samsung, newProducts);

console.dir(samsung, { depth: null });

console.log('\n7')
const konversiObject = ([nama, domisili, umur]) => ({
  nama,
  domisili,
  umur
});

let data = ["Bondra", "Medan", 25];
console.log(konversiObject(data));

console.log('\n8')
// Function graduate menggunakan rest parameter dan arrow function
const graduate = (...dataSiswa) => {
  // Gabungkan semua data siswa (bisa banyak array)
  const allStudents = [].concat(...dataSiswa); // atau pakai spread: const allStudents = [...dataSiswa.flat()];

  // Buat object hasil pengelompokan
  const result = {};

  // Loop data siswa
  for (const { name, class: kelas } of allStudents) {
    if (!result[kelas]) result[kelas] = [];
    result[kelas].push(name);
  }

  return result;
};

// TEST CASES
const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" }
];

// Output
console.log(graduate(data1));
console.log(graduate(data2));
