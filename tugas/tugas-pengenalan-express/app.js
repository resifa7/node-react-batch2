const express = require("express");

const app = express();
const port = 3000;

/**
 * 1. buatlah route GET dengan path "/lingkaran-tabung"lalu pada handlernya buatlah function luas lingkaran dan
 * keliling lingkaran dan volume tabung. jari-jari yang di gunakan adalah 7 (jari jari ini masukan dalam
 * parameter url). lalu tinggi tabungnya adalah 10 (tinggi ini masukan dalam parameter url)
 */
const lingkarangTabung = (req, res) => {
  const { jariJari, tinggi } = req.query;
  const pi = 22 / 7;

  const luasAlasTabung = () => pi * jariJari * jariJari;
  const kelilingAlasLingkaran = () => 2 * pi * jariJari;
  const volumeTabung = () => pi * jariJari * jariJari * tinggi;

  return res.send({
    jariJari,
    tinggi,
    "Volume Tabung": volumeTabung(),
    "Luas Alas Tabung": luasAlasTabung(),
    "Keliling Alas Tabung": kelilingAlasLingkaran(),
  });
};

app.get("/lingkaran-tabung", lingkarangTabung);

/**
 * 2. buatlah route GET dengan path "/data-orang", handler ini dapat menerima parameter url berupa umur
 * dan gender jika url parameter umur diisi maka tampilkan data dengan umur diatas atau sama dengan
 * url parameter umur tersebut jika gender diisi maka tampilkan gender yang dipilih
 */

let dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  {
    id: 4,
    name: "Benzema",
    umur: 34,
    pekerjaan: "Pemain Bola",
    jenisKelamin: "L",
  },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  {
    id: 9,
    name: "Shohei Ohtani",
    umur: 28,
    pekerjaan: "Pemain Baseball",
    jenisKelamin: "L",
  },
  {
    id: 11,
    name: "Maria Sharapova",
    umur: 35,
    pekerjaan: "Petenis",
    jenisKelamin: "P",
  },
];

const filterData = (req, res) => {
  const { age, gender } = req.query;
  let resultData = [...dataOrang];
  let result = "";

  if (age) {
    resultData = resultData.filter((data) => data.umur >= age);
  }

  if (gender) {
    resultData = resultData.filter((data) =>
      data.jenisKelamin.toUpperCase().includes(gender)
    );
  }

  resultData.forEach((data, index) => {
    result += `${index + 1}. ${data.name} - Pekerjaan: ${
      data.pekerjaan
    } - Umur: ${data.umur} Tahun </br>`;
  });
  res.send(result);
};

app.get("/data-orang", filterData);

/**
 * 3. buatlah route GET dengan path "/data-orang/:id" jika setelah menggunakan parameter id data tidak ditemukan maka munculkan text:

Maaf data tidak ditemukan
jika data ditemukan makan munculk text :

Pak John adalah seorang Penulis yang berusia 30 tahun
 */

const getUserById = (req, res) => {
  const { id } = req.params;

  const user = dataOrang.find((data) => data.id === Number(id));

  if (!user) {
    return res.send("Maaf data tidak ditemukan");
  }

  const sapaan = user.jenisKelamin === "L" ? "Pak" : "Buk";

  return res.send(
    `${sapaan} ${user.name} adalah seorang ${user.pekerjaan} yang berusia ${user.umur} tahun`
  );
};

app.get("/data-orang/:id", getUserById);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
