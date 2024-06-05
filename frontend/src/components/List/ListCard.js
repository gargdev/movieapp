// src/components/List/ListCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = ({ list }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-bold">{list.name}</h3>
      <Link to={`/lists/${list._id}`} className="text-blue-500 underline mt-2 block">
        View List
      </Link>
    </div>
  );
};

export default ListCard;