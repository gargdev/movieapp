const express = require('express');
const { getLists, getListById, createList, addMovieToList } = require('../controllers/listController');
const router = express.Router();

router.get('/', getLists);
router.get('/:listId', getListById);
router.post('/', createList);
router.post('/addMovie', addMovieToList);

module.exports = router;
