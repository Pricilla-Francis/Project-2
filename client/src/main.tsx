import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import './Styles/Navbar.css';
import './Styles/Footer.css';
import "@fortawesome/fontawesome-free/css/all.css";

import App from './App';


import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import YourRecipes from './pages/YourRecipes.tsx';
import Team from './pages/Team.tsx';
import Privacy from './pages/Privacy.tsx';
import AboutUs from './pages/Aboutus.tsx';
import ContactUs from './pages/Contactus.tsx';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import YourRecipes from './pages/YourRecipes';
import NewRecipe from './pages/NewRecipe';
import EditRecipe from './pages/EditRecipe';
import SearchRecipes from './pages/SearchRecipes';
import Team from './pages/Team';
import Privacy from './pages/Privacy';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/Contactus';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/recipes',
        element: <YourRecipes />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contactus",
        element: <ContactUs />

      },
      {
        path: "/new-recipe",
        element: <NewRecipe />
      },
      {
        path: "/edit-recipe/:id",
        element: <EditRecipe />
      },
      {
        path: "/search",
        element: <SearchRecipes />

      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
