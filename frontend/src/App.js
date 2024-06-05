import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './pages/Home';
import Search from './pages/Search';
import MyLists from './pages/MyLists';
import ListPage from './components/List/ListPage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<ProtectedRoute element={Search} />} />
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/lists/:listId" element={<ProtectedRoute element={ListPage} />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
