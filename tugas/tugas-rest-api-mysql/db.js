const mysql = require('mysql2');

const connectionPool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Ganti dengan user MySQL kamu
  password: 'root', // Ganti dengan password MySQL kamu
  database: 'db_mahasiswa'
});

module.exports = connectionPool;
