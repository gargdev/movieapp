// // src/components/List/ListCard.js
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../utils/api";

const ListCard = ({ movie }) => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  const handleDeleteFromList = async () => {
    const listId = user?.defaultList?._id;
    if (!listId) {
      console.error("Default list ID is undefined");
      return;
    }

    try {
      const response = await api.post(
        "/lists/delete-movie",
        {
          listId,
          movieId: movie.imdbID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Movie deleted from list:", response.data);
    } catch (error) {
      console.error("Error deleting movie from list:", error);
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
      <p className="text-gray-600">{movie.Year}</p>
      <div className="mt-4">
        <button
          onClick={handleDeleteFromList}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete from List
        </button>
      </div>
    </div>
  );
};

export default ListCard;
