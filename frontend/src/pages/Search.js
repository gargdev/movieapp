import React, { useState, useContext } from 'react';
import api from '../utils/api';
import MovieCard from '../components/Movie/MovieCard';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { user } = useContext(AuthContext); // Retain this if you plan to use user information later

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) {
      alert('Please enter a search query');
      return;
    }
    try {
      const { data } = await api.get(`/movies/search?query=${query}`);
      setResults(data.Search || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
      alert('An error occurred while searching. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto">
      <div className="py-4">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Search
          </button>
        </form>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
