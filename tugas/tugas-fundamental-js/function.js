console.log('1');
function introduce(nama, jenisKelamin, pekerjaan, umur) {
  var panggilan;

  if (jenisKelamin === "laki-laki") {
    panggilan = "Pak";
  } else if (jenisKelamin === "perempuan") {
    panggilan = "Bu";
  } else {
    panggilan = "";
  }

  var kalimat = panggilan + " " + nama + " adalah seorang " + pekerjaan + " yang berusia " + umur + " tahun";
  return kalimat;
}

var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john); 

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah); 

console.log('\n2');
function karakterUnik(text) {
  text = text.toLowerCase().replace(/\s+/g, '');

  var hasil = '';

  for (var i = 0; i < text.length; i++) {
    var char = text[i];

    if (text.indexOf(char) === text.lastIndexOf(char)) {
      hasil += char;
    }
  }

  return hasil;
}

var text = "Super Bootcamp Fullstack Dev 2022";
console.log(karakterUnik(text));

console.log('\n3');
function cariTerbesarTerkecil(angka) {
  var terbesar = Math.max(...angka);
  var terkecil = Math.min(...angka);

  return "Angka terbesar adalah " + terbesar + " dan angka terkecil adalah " + terkecil;
}

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
console.log(cariTerbesarTerkecil(angka));

console.log('\n4');
function arrangeString(str) {
  if (str === "") return "";

  var hasil = str.split('').sort().join('');
  return hasil;
}

console.log(arrangeString("bahasa"));      
console.log(arrangeString("similikiti"));  
console.log(arrangeString("sanbercode"));  
console.log(arrangeString(""));            

console.log('\n5');
function palindrome(kata) {
  var kataBersih = kata.toLowerCase().replace(/\s+/g, '');
  
  var dibalik = kataBersih.split('').reverse().join('');

  return kataBersih === dibalik;
}

console.log(palindrome('katak'));      
console.log(palindrome('blanket'));    
console.log(palindrome('nababan'));    
console.log(palindrome('haji ijah'));  
console.log(palindrome('mister'));     

console.log('\n6');
function angkaPalindrome(num) {
  num++;

  while (true) {
    var strNum = num.toString();
    var reversed = strNum.split('').reverse().join('');

    if (strNum === reversed) {
      return num;
    }

    num++;
  }
}

console.log(angkaPalindrome(8));    
console.log(angkaPalindrome(10));   
console.log(angkaPalindrome(117));  
console.log(angkaPalindrome(175));  
console.log(angkaPalindrome(1000));  


console.log('\n7');
function cekPermutasi(str1, str2) {
  var s1 = str1.toLowerCase().replace(/\s+/g, '');
  var s2 = str2.toLowerCase().replace(/\s+/g, '');

  if (s1.length !== s2.length) {
    return false;
  }

  var sort1 = s1.split('').sort().join('');
  var sort2 = s2.split('').sort().join('');

  return sort1 === sort2;
}

console.log(cekPermutasi("abah", "baha"));         
console.log(cekPermutasi("ondel", "delon"));       
console.log(cekPermutasi("paul sernine", "arsene lupin")); 
console.log(cekPermutasi("taco", "taca"));        