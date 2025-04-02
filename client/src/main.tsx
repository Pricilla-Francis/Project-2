import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';

import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import YourRecipes from './pages/YourRecipes.tsx';
import Team from './pages/Team.tsx';
import Privacy from './pages/Privacy.tsx';
import AboutUs from './pages/Aboutus.tsx';
import ContactUs from './pages/Contactus.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
