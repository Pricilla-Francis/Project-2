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
    <nav className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <div>
        <h1>MunchMap</h1>
      </div>
      <div>
        {!isLoggedIn ? (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        ) : (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
