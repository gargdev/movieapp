// routes/movie.js
const express = require('express');
const { searchMovies, addMovie } = require('../controllers/movieController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/search', authMiddleware, searchMovies);
router.post('/', authMiddleware, addMovie);
router.get('/user/movies', authenticateToken, movieController.getMoviesForUser);


module.exports = router;
