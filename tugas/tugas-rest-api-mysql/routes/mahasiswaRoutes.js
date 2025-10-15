const express = require('express');
const router = express.Router();
const connectionPool = require('../db');

// Fungsi menentukan indeks nilai
function getIndeksNilai(nilai) {
  if (nilai >= 80) return 'A';
  else if (nilai >= 70) return 'B';
  else if (nilai >= 60) return 'C';
  else if (nilai >= 50) return 'D';
  else return 'E';
}

// CREATE
router.post('/', (req, res) => {
  const { nama, mata_kuliah, nilai } = req.body;

  if (nilai < 0 || nilai > 100) {
    return res.status(400).json({ message: 'Data nilai salah! Nilai harus antara 0-100.' });
  }

  const indeks_nilai = getIndeksNilai(nilai);

  const sql = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai)
               VALUES (?, ?, ?, ?)`;

  connectionPool.query(sql, [nama, mata_kuliah, nilai, indeks_nilai], (err, result) => {
    if (err) {
      console.error('Error saat insert:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.json({ message: 'Data berhasil ditambahkan!', id: result.insertId });
  });
});

// READ
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM nilai_mahasiswa ORDER BY id DESC';
  connectionPool.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, mata_kuliah, nilai } = req.body;

  if (nilai < 0 || nilai > 100) {
    return res.status(400).json({ message: 'Data nilai salah! Nilai harus antara 0-100.' });
  }

  const indeks_nilai = getIndeksNilai(nilai);

  const sql = `UPDATE nilai_mahasiswa 
               SET nama=?, mata_kuliah=?, nilai=?, indeks_nilai=?, updated_at=NOW() 
               WHERE id=?`;

  connectionPool.query(sql, [nama, mata_kuliah, nilai, indeks_nilai, id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.json({ message: 'Data berhasil diperbarui!' });
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM nilai_mahasiswa WHERE id=?';
  connectionPool.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.json({ message: 'Data berhasil dihapus!' });
  });
});

module.exports = router;
