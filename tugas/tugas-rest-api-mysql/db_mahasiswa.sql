CREATE DATABASE IF NOT EXISTS db_mahasiswa;
USE db_mahasiswa;

CREATE TABLE nilai_mahasiswa (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(192) NOT NULL,
  mata_kuliah VARCHAR(192) NOT NULL,
  nilai INT NOT NULL,
  indeks_nilai VARCHAR(4) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW() ON UPDATE NOW()
);
