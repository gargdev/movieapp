// src/components/Movie/MovieCard.js
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../utils/api";

const MovieCard = ({ movie }) => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('token'); // Ensure the token is fetched correctly

  const handleAddToList = async () => {
    const listId = user?.defaultList?._id; // Get the default list ID
    if (!listId) {
      console.error('Default list ID is undefined');
      return;
    }

    try {
      const response = await api.post(
        "/lists/add-movie",
        {
          listId,
          movieId: movie.imdbID // Use the IMDb ID here
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Movie added to list:', response.data); // Add logging
    } catch (error) {
      console.error("Error adding movie to list:", error);
    }
  };

  return (
    <div className="border p-4 rounded">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
      <h1>Anoop</h1>
      <p className="text-gray-600">{movie.Year}</p>
      <div className="mt-4">
        {user ? (
          <button
            onClick={handleAddToList}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Add to List
          </button>
        ) : (
          <p>Please sign in to add this movie to your list.</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
