import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/recipes');
    }
  }, [user, navigate]);

  return (
    <div className="container1">
      <h1 className='title-2'>Welcome to Recipe Manager</h1>
      <p className='p1' >Please log in to manage your recipes.</p>
    </div>
  );
};

export default Home;
