const express = require('express')
const { createMovie, readMovie, readMovieById, updateMovie, deleteMovie} = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const { validationBodyMovies } = require('../middleware/validation')
const { createCategory, readCategory, readCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { authJWT } = require('../middleware/auth')
const { register, login } = require('../controllers/userController')

const router = express.Router()

// MOVIE
router.post('/movie', authJWT, validationBodyMovies, createMovie)
router.get('/movie', readMovie)
router.get('/movie/:id', readMovieById)
router.put('/movie/:id', basicAuth, updateMovie)
router.delete('/movie/:id', basicAuth, deleteMovie)

// CATEGORY
router.post('/category', authJWT, createCategory)
router.get('/category', authJWT, readCategory)
router.get('/category/:id', readCategoryById)
router.put('/category/:id', basicAuth, updateCategory)
router.delete('/category/:id', basicAuth, deleteCategory)

// LOGIN
router.post('/register', register)
router.post('/login', login)



module.exports = router