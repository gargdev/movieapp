// src/pages/MyLists.js
import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import ListCard from '../components/List/ListCard';

const MyLists = () => {
  const [lists, setLists] = useState([]);

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
      <div className="mt-8 grid grid-cols-4 gap-4">
        {lists.map((list) => (
          <ListCard key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default MyLists;
