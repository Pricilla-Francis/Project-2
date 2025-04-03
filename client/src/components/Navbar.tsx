import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (

    <div className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <h1>
        MunchMap
      </h1>
      <div>
        {
          // Conditional rendering based on loginCheck state
          !loginCheck ? (
            // Render login button if user is not logged in
            <button className="btn" type='button'>
              <Link to='/login'>Login</Link>

    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <h1>MunchMap</h1>
        </Link>
      </div>
      
      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/recipes" className='nav-buttons'>Your Recipes</Link>
            <Link to="/new-recipe" className='nav-buttons'>New Recipe</Link>
            <Link to="/search" className='nav-buttons'>Search Recipes</Link>
            <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
