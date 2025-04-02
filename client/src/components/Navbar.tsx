import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

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
