import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user, logout, message, setMessage } = useContext(AuthContext);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Movie App</h1>
        <div className='flex gap-10'>
          {user ? (
            <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          ) : (
            <>
              <Link to="/sign-up" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </Link>
              <Link to="/sign-in" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </Link>
            </>
          )}
          <Link to="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search Movies
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Your Movie Lists</h2>
        <div>
          {user ? (
            <Link to="/my-lists" className="text-blue-500 underline">View Your Lists</Link>
          ) : (
            <p>Please sign in to see your movie lists.</p>
          )}
        </div>
      </div>
      {message && <div className="alert alert-info">{message}</div>}
    </div>
  );
};

export default Home;
