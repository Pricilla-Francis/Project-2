import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import '../styles/Login.css'; 


const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData.username, formData.password);
      navigate('/recipes');
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid username or password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-dark-background px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="welcome">Welcome Back</h2>
          <p className="sign-in">
            Please sign in to your account
          </p>
        </div>


            {error && (
              <div className="p-4 mb-8 bg-red-900/50 border-l-4 border-red-600 text-dark-text rounded-lg">
                {error}
              </div>
            )}

            <Card className="bg-dark-surface border-dark-border">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-dark-text">Username</Label>
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="bg-dark-surface border-dark-border text-dark-text"
                        placeholder="Enter your username"
                      />
                    </div>


            <div className='password'>
              <label htmlFor="password" className="block text-dark-text font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded bg-dark-surface border border-dark-border text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-primary"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="signin-btn"
            >
              Sign In
            </button>
          </div>

          <div className="text-center">
            <p className="sign-up">
              Don't have an account?{' '}
              <Link to="/signup" className="text-light-primary hover:underline">
                Sign up
              </Link>
            </p>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-dark-text">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-dark-surface border-dark-border text-dark-text"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-dark-primary text-dark-text hover:bg-dark-primary/80"
                  >
                    Sign In
                  </Button>

                  <div className="text-center">
                    <p className="text-dark-text-muted">
                      Don't have an account?{' '}
                      <Link to="/signup" className="text-dark-primary hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
