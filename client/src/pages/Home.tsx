import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from '../utils/auth';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.loggedIn()) {
      navigate('/recipes');
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1 className='title-2'>Welcome to Recipe Manager</h1>
      <p className='p1' >Please log in to manage your recipes.</p>
    </div>
  );
};

export default Home;
