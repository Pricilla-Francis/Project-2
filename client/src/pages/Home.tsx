import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from '../utils/auth';



const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.loggedIn()) {
      navigate('/recipes');
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1>Welcome to Recipe Manager</h1>
      <p>Please log in to manage your recipes.</p>
      <p>Once logged in, you can view and manage your recipes.</p>
      <p>Click the button to log in.</p>
    </div>
  );
};

export default Home;
