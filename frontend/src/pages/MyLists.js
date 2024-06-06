// src/pages/MyLists.js
import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import ListCard from '../components/List/ListCard';
import { AuthContext } from '../context/AuthContext';

const MyLists = () => {
  const [lists, setLists] = useState([]);
  const { user } = useContext(AuthContext);
  const defaultMovies = user?.defaultList?.movies || [];

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await api.get('/lists');
        setLists(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLists();
  }, []);

  

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mt-4">My Lists</h2>

      {defaultMovies.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mt-8">Default List</h3>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {defaultMovies.map((movie) => (
              <ListCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}

      {/* <div className="mt-8 grid grid-cols-4 gap-4">
        {lists.map((list) => (
          <ListCard key={list._id} list={list} onDelete={handleListDeletion} />
        ))}
      </div> */}
    </div>
  );
};

export default MyLists;
