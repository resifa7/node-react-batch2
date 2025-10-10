// Deklarasi function yang memiliki callback sebagai parameter
function periksaDokter(nomerAntri, callback) {
  if (nomerAntri > 50) {
    callback(false)
  } else if (nomerAntri < 10) {
    callback(true)
  }
}

// Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi
periksaDokter(65, function(check) {
  if (check) {
    console.log("sebentar lagi giliran saya")
  } else {
    console.log("saya jalan-jalan dulu")
  }
})

//promise
var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
  function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: 'Samsung',
      color: 'black'
    };
    resolve(phone); // fulfilled (janji dipenuhi)
  } else {
    var reason = new Error('Mom is not happy');
    reject(reason); // reject (janji diingkari)
  }
}
);

function askMom() {
  willIGetNewPhone
    .then(function (fulfilled) {
      console.log(fulfilled);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

askMom();

//contoh lain promise
function periksaDataPasien(nomorIdPasien) {
  var dataPasien = [
    { id: 1, nama: "John", jenisKelamin: "Laki-laki" },
    { id: 2, nama: "Michael", jenisKelamin: "Laki-laki" },
    { id: 3, nama: "Sarah", jenisKelamin: "Perempuan" },
    { id: 4, nama: "Frank", jenisKelamin: "Laki-laki" }
  ];

  return new Promise(function (resolve, reject) {
    var pasien = dataPasien.find(x => x.id === nomorIdPasien);

    if (pasien === undefined) {
      reject("data pasien tidak ada");
    } else {
      resolve(pasien);
    }
  });
}

// Menjalankan promise
periksaDataPasien(1)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  // Membuat fungsi dengan Promise
function doAsync() {
  return new Promise(function (resolve, reject) {
    var check = true; // ubah ke false untuk mencoba reject
    if (check) {
      resolve("berhasil");
    } else {
      reject("gagal");
    }
  });
}

// Menggunakan async/await
async function hello() {
  try {
    var result = await doAsync();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

hello();
