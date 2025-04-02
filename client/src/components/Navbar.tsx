import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = () => {
    logout();
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
      <div className="container navbar-container">
        <div className="navbar-links">
          <Link to="/" className="navbar-brand">
            Recipe App
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/recipes" className="navbar-link">
                My Recipes
              </Link>
              <Link to="/search" className="navbar-link">
                Search Recipes
              </Link>
              <Link to="/recipes/new" className="navbar-link">
                New Recipe
              </Link>
            </>
          )}
        </div>
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn btn-danger"
            >
              Logout

            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
