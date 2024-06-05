const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    movies: [{ type: String, ref: 'Movie' }], // Reference movies by imdbID as a string
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isPublic: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('List', ListSchema);
