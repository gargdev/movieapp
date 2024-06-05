import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const MyLists = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/user/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching user movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mt-4">My Movies</h2>
      <div className="mt-8 grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie._id} className="border p-4 rounded">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
            <p className="text-gray-600">{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLists;
