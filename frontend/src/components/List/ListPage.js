// src/components/List/ListPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Movie/MovieCard';
import api from '../../utils/api';

const ListPage = () => {
  const { listId } = useParams(); // Get the listId from URL parameters
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies for the list
    const fetchMovies = async () => {
      try {
        const response = await api.get(`/lists/${listId}`);
        setMovies(response.data.movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (listId) {
      fetchMovies();
    }
  }, [listId]);

  console.log(`Rendering ListPage with listId=${listId}`); // Logging

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} listId={listId} />
      ))}
    </div>
  );
};

export default ListPage;
