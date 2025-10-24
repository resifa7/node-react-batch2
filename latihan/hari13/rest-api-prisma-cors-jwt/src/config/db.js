require("dotenv").config();
const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


connectionPool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
  if (connection) connection.release();
});

module.exports = { connectionPool };