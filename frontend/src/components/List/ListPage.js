// src/components/List/ListPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../Movie/MovieCard';
import api from '../../utils/api';

const ListPage = () => {
  const { listId } = useParams(); 
  const [list, setList] = useState(null);

  useEffect(() => {
    
    const fetchList = async () => {
      try {
        const response = await api.get(`/lists/${listId}`);
        setList(response.data);
      } catch (error) {
        console.error('Error fetching list:', error);
      }
    };

    if (listId) {
      fetchList();
    }
  }, [listId]);

  console.log(`Rendering ListPage with listId=${listId}`); // Logging

  return (
    <div>
      {list ? (
        list.movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} listId={listId} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListPage;
