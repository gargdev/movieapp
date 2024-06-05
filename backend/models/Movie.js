// models/Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    imdbID: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    genre: { type: String, required: true },
    poster: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
