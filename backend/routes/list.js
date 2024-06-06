const express = require('express');
const { createList, getLists, addMovieToList, getDefaultList } = require('../controllers/listController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createList);
router.get('/', authMiddleware, getLists);
router.get('/default', authMiddleware, getDefaultList); 
router.post('/add-movie', authMiddleware, addMovieToList);

module.exports = router;
