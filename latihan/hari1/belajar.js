// Variable
var nama = "John Doe";
var nomorUrut = 12; // Menyimpan nilai kedalam suatu variabel (Operator Assignment)

console.log(`Hello nama saya ${nama} dengan nomor urut ${nomorUrut}`)

// Tipe Data
var string = "123"
var number = 55
var boolean = true; // true atau false
var array = [1,2, "apple"]
var real = '34.7'

// Mengubah Tipe Data
console.log(Number(string)) // Mengubah tipe data ke number
console.log(String(number)) // Mengubah tipe data ke string
console.log(array.toString()) // Mengubah array ke string
console.log(parseInt(real)) // Mengembalikan angka dan mengabaikan desimalnya
console.log(parseFloat(real)) // Mengembalikan angka beserta desimalnya

// Operator Aritmatika
function equalsNumber(a,b) {
    return a + b // Operator Tambah
}

function timesNumber(a,b){
    return a * b // Operator Kali
}

function devideNumber(a,b){
    return a / b // Operator Bagi
}

console.log(equalsNumber(5,5))
console.log(timesNumber(5,5))
console.log(devideNumber(10,5))

// Opeartor Perbandingan
var umur = 16;

if (umur <= 16) {
    console.log("Anda masih anak-anak")
} else if (umur == 17) {
    console.log("Anda sudah remaja")
} else if (umur >= 18) {
    console.log("Anda sudah dewasa")
}

// Operator Kondisional
console.log( true && true) // Mengembalikan nilai true
console.log( true && false) // && Jika ada 1 nilai false maka menjadi false
console.log( false || true) // || Jika ada 1 nilai true maka membalikan nilai true

// Javascript Method
var word = "Lorem ipsum dolor siamet"
console.log(word.length) // Mengembalikan jumah karakter
console.log(word.charAt(4)) // Mengembalikan karakter pada index yang ditentukan

// Menggabungkan  beberapa string
var firstname = "Agus "
var lastname = "Suga"
console.log(firstname.concat(lastname))

// Mengembalikan index dari sring yang dicari
var text = "Lorem ipsum dolor siamet"
console.log(text.indexOf("Lorem"))
console.log(text.indexOf("i"))
console.log(text.indexOf("et"))

// Mengembalikan string mulai dari index yang ditentukan
console.log(text.substring(6))
console.log(text.substring(6, 17))
console.log(text.substring(18))

// Mengubah bentuk string
const upper = text.toUpperCase() // Huruf besar
console.log(upper)

const lower = text.toLowerCase() // Huruf kecil
console.log(lower)

const trim = text.trim() // Menghapus spasi
console.log(trim)

const replace = text.replace("m", "M") // Mengganti 1 karakter yang ditentukan
console.log(replace)

const replaceAll = text.replaceAll("m", "M") // MengGanti semua karakter yang ditentukan
console.log(replaceAll)