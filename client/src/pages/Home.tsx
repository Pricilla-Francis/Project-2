import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from '../utils/auth';
import '../styles/Home.css';  
import { useAuth } from '../context/AuthContext';







const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/recipes');
    }
  }, [user, navigate]);

  return (
    <div className="container">

      <h1 className="title2">Welcome to Recipe Manager</h1>
      <p className='title3'>Please log in to manage your recipes.</p>
      <p>Once logged in, you can view and manage your recipes.</p>
      <p>Click the button to log in.</p>
    </div>
  );
};

export default Home;
